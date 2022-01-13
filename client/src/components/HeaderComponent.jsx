import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuth } from "../utils/functions";

const Header = () => {
  const [navOpen, setNavOpen] = useState("");

  const navigate = useNavigate();

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
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link" to="/login">
                      <i className="fa fa-sign-in fa-lg" /> Username / Logout
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link" to="/login">
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
