import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

export const userStrategy = async (identifier, password, done) => {
    try {
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }],
        }).exec();
        if (!user) {
            return done(null, false, { message: 'Incorrect username/email.' });
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (comparePassword) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password.' });
        }
    } catch (error) {
        return done(error);
    }
};
