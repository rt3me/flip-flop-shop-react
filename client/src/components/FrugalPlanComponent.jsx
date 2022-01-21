import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context";

const FrugalPlan = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let result = [];
    // if user is authenticated and has subscriptions
    // load subscriptions into result array
    if (state && state.user && state.user.subscriptions) {
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname.toLowerCase());
      });
    }
    // extract plan name from path name
    const plan = location.pathname.split("/")[1].toLowerCase();
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
          <h2 className="display-4 fw-bold">Frugal</h2>
          <p className="lead">Flip flops for the frugal guy</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="p-5">
            <h3 className="fw-bold">The Stats</h3>
            <ul className="lead">
              <li>Good looks built-in</li>
              <li>Jealous looks from the over-spenders</li>
              <li>Good times all-around</li>
              <li>Plenty more good times with the bucks you saved</li>
              <li>What's next?</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrugalPlan;
