import React from "react";
import { Link } from "react-router-dom";
import PageSectionLayout from "./PageSectionLayout";

const Login = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-heading-section bg-light">
        <div className="container">
          <div className="row py-5 text-center">
            <h1 className="display-4 fw-bold">404</h1>
            <p className="lead">Sorry, your page was not found!</p>
          </div>
        </div>
      </div>

      <PageSectionLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-2 col-lg-3 offset-lg-3 py-5">
              <h2>Sorry you're a bit lost. Here are some useful links to take a look at</h2>
            </div>
            <div className="col-md-4 col-lg-3 py-5 lost-links-list">
              <ul>
                <li>
                  <h2>
                    <Link to="/login">Login</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link to="/register">Register</Link>
                  </h2>
                </li>
                <li>
                  <h2>
                    <Link to="/contact">Contact Us</Link>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSectionLayout>
    </React.Fragment>
  );
};

export default Login;
