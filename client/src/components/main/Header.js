import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header_logo">
            <NavLink className="logo" to="/">
              Foodruns
            </NavLink>
          </div>
          <div className="header_list">
            <ul className="header_navbar">
              <li className="header_navbar_list">
                <NavLink className="header_navbar_link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="header_navbar_list">
                <NavLink className="header_navbar_link" to="/user/about">
                  About
                </NavLink>
              </li>
              <li className="header_navbar_list">
                <NavLink className="header_navbar_link" to="/user/contact">
                  Contact
                </NavLink>
              </li>
              <li className="header_navbar_list">
                <NavLink className="header_navbar_link" to="/user/login">
                  Login
                </NavLink>
              </li>
              <li className="">
                <NavLink className="header_navbar_link" to="/user/register">
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;