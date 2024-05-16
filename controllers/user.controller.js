import User from "../models/user.model.js"

export const register = async (req,res) =>{
    try {
        await User.create({
            username:req.body.username
        });
        res.send("Register Successfully")
    } catch (error) {
        console.log("500 error 500");
    }
}