import React from 'react';
import { Route, Routes } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/users/Home";
import About from "../pages/users/About";
import Contact from "../pages/users/Contact";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";

const User = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/about" element={<About />} />
        <Route exact path="/user/contact" element={<Contact />} />
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default User;