import User from "../models/user.model.js"

export const register = async (req,res) =>{
    try {
        await User.create({
            username:"aditya"
        });
        res.send("Register Successfully");
    } catch (error) {
        console.log("500 error 500");
        res.send(error);
    }
}
export const login = async (req,res) =>{
    try {
        await User.create({
            username:"aditya"
        });
        res.redirect("/user/dashboard");
    } catch (error) {
        console.log("500 error 500");
        res.send(error);
    }
}