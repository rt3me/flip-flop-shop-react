import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageSectionLayout from "./PageSectionLayout";
import PriceCard from "./PriceCardComponent";

function Home(props) {
  const [state] = useContext(UserContext);
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

  return (
    <PageSectionLayout sectionTitle={"Check out our plans"} sectionSubtitle={"Choose the plan that gives you just the right amount of flip flop!"}>
      <div style={{ maxWidth: "992px", margin: "0 auto" }} className="row">
        {prices &&
          prices.map((price) => (
            <div key={price.id} className="col-md col-lg-4">
              <PriceCard price={price} handleSubscription={handleClick} userSubscriptions={userSubscriptions} />
            </div>
          ))}
      </div>
    </PageSectionLayout>
  );
}

export default Home;
