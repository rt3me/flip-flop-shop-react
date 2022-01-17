import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../context";
import moment from "moment";

const Account = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get("/subscriptions");
      console.log("subs => ", data);
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription status</p>
      </div>

      <div className="row">
        {subscriptions &&
          subscriptions.map((sub) => (
            <div key={sub.id}>
              <section>
                <hr />
                <h4 className="fw-bold">{sub.plan.nickname}</h4>
                <h5>
                  {(sub.plan.amount / 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: sub.plan.currency,
                  })}
                </h5>
                <p>Subscription status: {sub.status}</p>
                <p>Last 4 digits of card: {sub.default_payment_method.card.last4}</p>
                <p>
                  Current period end:{" "}
                  {moment(sub.current_period_end * 1000)
                    .format("dddd, MMMM Do YYYY")
                    .toString()}
                </p>
                <button onClick={() => navigate(`/${sub.plan.nickname.toLowerCase()}`)} className="btn btn-outline-danger">
                  Access Subscription
                </button>{" "}
                <button className="btn btn-outline-warning">Manage Subscription</button>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Account;
