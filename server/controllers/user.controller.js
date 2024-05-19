import User from "../models/user.model.js"

export const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, } = req.body;
        const userData = new User({
            username,
            password,
        });
        res.status(201);
        res.redirect("/user/login");
    } catch (error) {
        console.log("500 error 500");
        res.send(error);
    }
}
export const login = async (req, res) => {
    try {
        await User.create({
            username: "aditya"
        });
        res.redirect("/user/dashboard");
    } catch (error) {
        console.log("500 error 500");
        res.send(error);
    }
}