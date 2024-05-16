import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import pkg from 'bcryptjs';
const { genSalt } = pkg;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timeseries: true,
    collection: "User"
});
userSchema.pre('save', async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});
const User = mongoose.model('User', userSchema);
export default User;