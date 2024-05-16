import express from "express";
import { register, login } from "../controllers/user.controller.js";
import passport from "passport";
const Router = express.Router();

Router.route("/register")
    .get((req, res) => {
        res.render("register");
    })
    .post(register);

Router.route('/login')
    .get((req,res)=>{
        res.render("login");
    });

Router.route('/login/google')
    .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

Router.route("/login/callback")
    .get(passport.authenticate('google', {
        successRedirect: '/user/protected',
        failureRedirect: '/failure',
    }),
        function (req, res) {
            res.send('home');
        })
    .post(login);

Router.get("/failure", (req, res) => {
    res.send("opps something went wrong")
})
Router.get("/protected",  (req, res) => {
    res.send("Hello!")
})
export default Router;