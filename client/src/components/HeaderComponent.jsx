import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavbarText, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context";

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setState({ user: {}, token: "" });
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
      <div>
        <Navbar color="primary" container="lg" expand="md" light>
          <NavbarBrand href="/">Flip Flop Surf Shop</NavbarBrand>
          <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              {state && state.token ? (
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
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;
