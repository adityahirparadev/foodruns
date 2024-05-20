import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header_section">
        <nav className="main_header">
          <NavLink className="logo" to="/">
            Foodruns
          </NavLink>
          <ul className="header_navbar">
            <li className="">
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/user/about">
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/user/contact">
                Contact
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/user/login">
                Login
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/user/register">
                SignUp
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
};

export default Header;