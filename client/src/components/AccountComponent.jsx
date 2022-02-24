import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context";
import moment from "moment";
import PageSectionLayout from "./PageSectionLayout";
import PriceCard from "./PriceCardComponent";

const Account = () => {
  const [state] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPrices();
  }, []);

  const effectDepArray = state && state.user;

  useEffect(() => {
    let result = [];
    if (effectDepArray && state.user.subscriptions) {
      state.user.subscriptions.map((sub) => result.push(sub.plan.id));
    }
    setUserSubscriptions(result);
  }, [effectDepArray, state]);

  const fetchPrices = async () => {
    const { data } = await axios.get("/prices");
    // console.log("Prices get request:", data);
    setPrices(
      data
        .sort((a, b) => a.unit_amount - b.unit_amount)
        .map((price) => {
          let imageURL = "";
          switch (price.nickname) {
            case "Frugal":
              imageURL = "../../images/flip-flop-frugal.svg";
              break;
            case "Fun Loving":
              imageURL = "../../images/flip-flop-fun-loving.svg";
              break;
            case "Fancy Pants":
              imageURL = "../../images/flip-flop-fancy-pants.svg";
              break;
            default:
          }
          return { ...price, image: imageURL };
        })
    );
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      // console.log("Home component navigating user to plan page");
      navigate(`/${price.nickname.replaceAll(" ", "-").toLowerCase()}`);
      return;
    }
    if (state && state.token) {
      const { data } = await axios.post("/create-subscription", {
        priceId: price.id,
      });
      window.open(data, "_self");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get("/subscriptions");
      console.log("subs => ", data);
      setSubscriptions(data.data);
      console.log("subscriptions:", subscriptions);
    };

    if (state && state.token) getSubscriptions();
  }, [state, state.token]);

  const manageSubscriptions = async () => {
    const { data } = await axios.get("/manage");
    window.open(data, "_self");
  };

  return (
    <React.Fragment>
      <div className="container-fluid page-heading-section bg-light">
        <div className="container">
          <div className="row py-5 text-center">
            <h1 className="display-4 fw-bold">Account</h1>
            <p className="lead">Manage your flip flops</p>
          </div>
        </div>
      </div>

      {subscriptions.length > 0 ? (
        <PageSectionLayout>
          <div className="container">
            <div className="row">
              {subscriptions &&
                subscriptions.map((sub) => (
                  <div key={sub.id}>
                    <section>
                      <h4 className="fw-bold">
                        {sub.plan.nickname} ({sub.status})
                      </h4>
                      <h5>
                        {(sub.plan.amount / 100).toLocaleString("en-US", {
                          style: "currency",
                          currency: sub.plan.currency,
                        })}
                        <small className="text-muted fw-light">/mo</small>
                      </h5>
                      <p>
                        Renews:{" "}
                        {moment(sub.current_period_end * 1000)
                          .format("dddd, MMMM Do YYYY")
                          .toString()}
                      </p>
                      <p>Last 4 digits: {sub.default_payment_method.card.last4}</p>
                      <button onClick={() => navigate(`/${sub.plan.nickname.replaceAll(" ", "-").toLowerCase()}`)} className="btn btn-outline-primary">
                        Plan Details
                      </button>{" "}
                      <button onClick={manageSubscriptions} className="btn btn-outline-primary">
                        Manage Subscription
                      </button>
                    </section>
                  </div>
                ))}
            </div>
          </div>
        </PageSectionLayout>
      ) : (
        <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
          {prices &&
            prices.map((price) => (
              <div key={price.id} className="col-md">
                <PriceCard price={price} handleSubscription={handleClick} userSubscriptions={userSubscriptions} />
              </div>
            ))}
        </PageSectionLayout>
      )}
    </React.Fragment>
  );
};

export default Account;
