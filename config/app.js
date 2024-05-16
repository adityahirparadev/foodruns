import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import userRoutes from "../routers/user.routes.js";
import { initializePassport } from "../middleware/passportjs/passport.js";
const {
    SESSION_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env;
const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: 'https://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev/user/login/callback'
//   }, (accessToken, refreshToken, profile, done) => {
//     // Process user profile and save to MongoDB
//     // Example: User.findOneAndUpdate({ googleId: profile.id }, { name: profile.displayName }, { upsert: true }, (err, user) => { done(err, user); });
//   }));

  
  initializePassport(passport);
  app.use("/user", userRoutes)
// https://accounts.google.com/signin/oauth/error/v2?
// authError=ChVyZWRpcmVjdF91cmlfbWlzbWF0Y2gSsAEKWW91IGNhbid0IHNpZ24gaW4gdG8gdGhpcyBhcHAgYmVjYXVzZSBpdCBkb2Vzbid0IGNvbXBseSB3aXRoIEdvb2dsZSdzIE9BdXRoIDIuMCBwb2xpY3kuCgpJZiB5b3UncmUgdGhlIGFwcCBkZXZlbG9wZXIsIHJlZ2lzdGVyIHRoZSByZWRpcmVjdCBVUkkgaW4gdGhlIEdvb2dsZSBDbG91ZCBDb25zb2xlLgogIBptaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vaWRlbnRpdHkvcHJvdG9jb2xzL29hdXRoMi93ZWItc2VydmVyI2F1dGhvcml6YXRpb24tZXJyb3JzLXJlZGlyZWN0LXVyaS1taXNtYXRjaCCQAypeCgxyZWRpcmVjdF91cmkSTmh0dHBzOi8vc2lsdmVyLXRyYWluLWpqcnB3anJ3eGo1OTNqcHZqLTgwMDAuYXBwLmdpdGh1Yi5kZXYvdXNlci9sb2dpbi9jYWxsYmFjazKkAggBErABCllvdSBjYW4ndCBzaWduIGluIHRvIHRoaXMgYXBwIGJlY2F1c2UgaXQgZG9lc24ndCBjb21wbHkgd2l0aCBHb29nbGUncyBPQXV0aCAyLjAgcG9saWN5LgoKSWYgeW91J3JlIHRoZSBhcHAgZGV2ZWxvcGVyLCByZWdpc3RlciB0aGUgcmVkaXJlY3QgVVJJIGluIHRoZSBHb29nbGUgQ2xvdWQgQ29uc29sZS4KICAabWh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L3Byb3RvY29scy9vYXV0aDIvd2ViLXNlcnZlciNhdXRob3JpemF0aW9uLWVycm9ycy1yZWRpcmVjdC11cmktbWlzbWF0Y2g%3D
// &client_id=289396588435-t1edbma9h5389uh6nkdkp6jfa9jdaoda.apps.googleusercontent.com

export default app;