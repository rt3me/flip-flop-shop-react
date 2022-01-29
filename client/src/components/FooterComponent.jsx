import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 offset-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="tel:+18103995911">810-399-5911</a>
              </li>
              <li>
                <a href="mailto:hello@flipflopsurf.shop">hello@flipflopsurf.shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
