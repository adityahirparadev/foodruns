import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    }
},{
    timeseries:true,
    collection:"User"
});

const User = mongoose.model('User', userSchema );
export default User;