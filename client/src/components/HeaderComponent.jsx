import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuth } from "../utils/functions";
import { UserContext } from "../context";

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const [navOpen, setNavOpen] = useState("");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  console.log("STATE =>", state);

  return (
    <React.Fragment>
      <div className="p-5 bg-primary text-white jumbotron">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>NuCamp</h1>
              <h2>a better way to camp</h2>
            </div>
          </div>
        </div>
      </div>
      <Navbar dark sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
          <Collapse isOpen={navOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <i className="fa fa-info fa-lg" /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <i className="fa fa-address-card fa-lg" /> Contact Us
                </NavLink>
              </NavItem>

              {isAuth() ? (
                <li className="nav-item">
                  <span className="nav-link" onClick={logout}>
                    <i className="fa fa-sign-in fa-lg" /> Username / Logout
                  </span>
                </li>
              ) : (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link" to="/register">
                      <i className="fa fa-sign-in fa-lg" /> Register
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/login">
                      <i className="fa fa-sign-in fa-lg" /> Login
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
