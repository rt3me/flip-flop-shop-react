import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Basic = ({ match }) => {
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
          <h1 className="display-4 fw-bold">BASIC</h1>
          <p className="lead">Here are your 5 exclusive stocks of this month</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Tesla</li>
              <li>Microsoft</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Alibaba</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ratione pariatur ab unde voluptatem ea, quae veniam aperiam sint porro aliquid animi eveniet, culpa id reiciendis vel nihil veritatis qui.</p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basic;
