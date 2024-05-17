import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-0 bg-light">
        <div className="container-fluid nav_bg ">
          <NavLink className="navbar-brand logo-skc" to="/">
            Shree Krishna Corporation
          </NavLink>
          <div
            className="collapse navbar-collapse anchor_tag"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/register">
                    SignUp
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;