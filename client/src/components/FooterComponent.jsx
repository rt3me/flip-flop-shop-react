import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white">
      <section className="d-flex justify-content-center p-4">
        <div className="me-5">
          <span>Connect on social media:</span>
        </div>

        <div>
          <a href="https://twitter.com/rt3me" className="text-white me-4">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/rt3me" className="text-white me-4">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/rt3me" className="text-white me-4">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Flip Flop Shop</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>Try a flip flop subscription today. We think you won't regret it! If you do, just cancel at any time.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="/#" className="text-white">
                  Frugal
                </Link>
              </p>
              <p>
                <Link to="/#" className="text-white">
                  Fun Loving
                </Link>
              </p>
              <p>
                <Link to="/#" className="text-white">
                  Fancy Pants
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="#!" className="text-white">
                  Your Account
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  Become an Affiliate
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  Shipping Rates
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fa fa-home mr-3"></i> Mayville, MI 48744, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i>{" "}
                <a href="mailto:hello@codewithrob.dev" className="text-white">
                  hello@codewithrob.dev
                </a>
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i>{" "}
                <a href="tel:8103995911" className="text-white">
                  810-399-5911
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3">
        © 2022{" "}
        <Link className="text-white" to="https://codewithrob.dev">
          codewithrob.dev
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
