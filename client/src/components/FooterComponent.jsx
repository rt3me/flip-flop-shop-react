import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white">
      <section className="d-flex justify-content-between p-4">
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="" className="text-white me-4">
            <i className="fa fa-facebook-f"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fa fa-google"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="" className="text-white me-4">
            <i className="fa fa-github"></i>
          </Link>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="#!" className="text-white">
                  MDBootstrap
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  MDWordPress
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  BrandFlow
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white">
                  Bootstrap Angular
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
                <i className="fa fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3"></i> + 01 234 567 89
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
