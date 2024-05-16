import { Schema,model,SchemaType } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    }
},{
    timeseries:true,
    collection:"User"
})

const User = model('User', userSchema );
export default User;