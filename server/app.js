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
// import { webSocketRun } from "./config/server.js";
const {SESSION_SECRET} = process.env;
const app = express();
dotenv.config();


// app.use(cors());
app.use(cors({
  origin: 'https://silver-train-jjrpwjrwxj593jpvj-7000.app.github.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// webSocketRun();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
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
app.use("/api",(req,res)=>{
  res.status(201).json({
      users:"data"
  })
});
export default app;