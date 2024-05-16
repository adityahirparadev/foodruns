import express from "express";
import { register } from "../controllers/user.controller.js";
const Router = express.Router();

Router.route("/register").get(register);
export default Router;