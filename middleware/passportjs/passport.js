import passport from 'passport';
import User from '../../models/user.model.js';
import { userStrategy } from './user.passport.js';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
const {
    SESSION_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env;


export const initializePassport = async () => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://silver-train-jjrpwjrwxj593jpvj-8000.app.github.dev/user/login/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // Process user profile and save to MongoDB
        // Example: User.findOneAndUpdate({ googleId: profile.id }, { name: profile.displayName }, { upsert: true }, (err, user) => { done(err, user); });
    }));

    await passport.use('user', new LocalStrategy({ usernameField: 'identifier', passwordField: "password" }, userStrategy));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        if (!user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}