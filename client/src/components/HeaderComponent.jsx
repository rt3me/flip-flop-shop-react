import React, { useState, useContext } from "react";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import { NavLink, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavbarText, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
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
              <h1>Flip Flop</h1>
              <h2>a flippier way to flop</h2>
            </div>
          </div>
        </div>
      </div>
      <Navbar color="primary" container="sm" expand="md" light>
        <NavbarBrand href="/">Flip Flop Surf Shop</NavbarBrand>
        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className="me-auto" navbar>
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
            {state && state.token ? (
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  {state.user.email}
                </DropdownToggle>
                <DropdownMenu right>
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
    </React.Fragment>
  );
};

export default Header;
