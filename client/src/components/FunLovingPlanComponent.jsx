import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context";

const FunLovingPlan = ({ match }) => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let result = [];
    // if user is authenticated and has subscriptions
    // load subscriptions into result array
    if (state && state.user && state.user.subscriptions) {
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname.replaceAll(" ", "-").toLowerCase());
      });
      console.log("Fun Loving user subs result:", result);
    }
    // extract plan name from path name
    const plan = location.pathname.split("/")[1].toLowerCase();
    console.log("Fun Loving path plan:", plan);
    // if plan name is not in subscriptions array or if user
    // is not authenticated, redirect user
    if (!result.includes(plan) || !state) {
      navigate("/");
    }
  }, [state && state.user]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Fun Loving</h1>
          <p className="lead">Flip flops for the fun loving dude</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Complement your best beach shirt</li>
              <li>Fun friend award waiting on you</li>
              <li>Your feet have never had so much fun</li>
              <li>Try walking on these patterns</li>
              <li>Anything could happen!</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FunLovingPlan;
