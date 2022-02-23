import React, { useState, useContext } from "react";
import { NavLink as RRNavLink, useLocation, useNavigate } from "react-router-dom";
import { NavLink, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { UserContext } from "../context";
import { ReactComponent as Logo } from "../logo.svg";

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // console.log("STATE =>", state);

  return (
    <header>
      <Navbar color="primary" container="sm" expand="md" className="py-3" dark>
        <NavbarBrand href="/" className="d-flex w-50 mr-auto">
          <Logo alt="Logo" height="1.9rem" className="d-block align-text-top" />
          <span>&nbsp;&nbsp;Surf Shop</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} className="w-100" navbar>
          <Nav className="w-100 justify-content-center" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} activeClassName="active" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} activeClassName="active" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} activeClassName="active" to="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ms-auto w-100 justify-content-end" navbar>
            {state && state.token ? (
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  User
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <NavItem>
                      <NavLink tag={RRNavLink} to="/account">
                        Account
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink onClick={logout}>Logout</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <React.Fragment>
                <NavItem>
                  <NavLink tag={RRNavLink} activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} activeClassName="active" to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Collapse>
      </Navbar>

      {location.pathname === "/" ? (
        <div className="container-fluid page-heading-section">
          <div className="container">
            <div className="row py-4 text-center text-light">
              <h1 className="display-4 fw-bold">Flip Flop Surf Shop</h1>
              <p className="lead">Choose a subscription level and get new flip flops delivered every month. Never get hot feet at the beach again!</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
