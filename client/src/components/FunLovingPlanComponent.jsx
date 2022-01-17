import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const FunLovingPlan = ({ match }) => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname);
      });
    check();

    // console.log("MATCH", match);
    const plan = match.path.split("/")[1].toUpperCase(); // basic
    if (!result.includes(plan)) {
      navigate("/");
    }
  }, [state && state.user]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Frugal</h1>
          <p className="lead">Flip flops for the frugal man</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
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

export default FunLovingPlan;
