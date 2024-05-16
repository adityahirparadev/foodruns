import express from "express";
import { register, login } from "../controllers/user.controller.js";
import passport from "passport";
const Router = express.Router();

Router.route("/register")
    .get((req, res) => {
        res.render("register");
    })    
    .post(register);
Router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
Router.route("/login/callback")
    .get(passport.authenticate('google', {
        // scope: ['profile', 'email'],
        successRedirect: '/',
        failureRedirect: '/login'
    }), (req, res) => {
        res.send("login");
    })
    .post(login);
export default Router;