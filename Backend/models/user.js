import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    { 
        id: String, 
        name: {
            type: String,
            trim: true
        }, 
        email: {
            type:String,
            unique: true
        }, 
        password:{
            type: String,
            minlength: 8
        },
        role: { 
            type: String, 
            enum: ["admin", "user"],
            default: "user"
        },
        message:[String] ,
        institution: String
    } 
)

const userModel = mongoose.model('users',userSchema);
export default  userModel


