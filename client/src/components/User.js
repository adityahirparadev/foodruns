import React from 'react';
import { Route, Routes } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/users/Home";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";

function User() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/register" element={<Register />} />
        <Route exact path="/user/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default User;