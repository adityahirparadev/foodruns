import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import userRoutes from "./routers/user.routes.js";
import { initializePassport } from "./middleware/passportjs/passport.js";
const {SESSION_SECRET} = process.env;
const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
// app.use(cors({
//   origin: 'https://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev',
// }));

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
app.use("/user", userRoutes);

export default app;