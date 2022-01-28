import React, { useState, useContext } from "react";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import { NavLink, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { UserContext } from "../context";
import { ReactComponent as Logo } from "../logo.svg";

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // console.log("STATE =>", state);

  return (
    <React.Fragment>
      <Navbar color="primary" container="sm" expand="md" light>
        <NavbarBrand href="/" className="d-flex w-50 mr-auto">
          <Logo alt="Logo" width="6rem" />
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
                  {state.user.name}
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
    </React.Fragment>
  );
};

export default Header;
