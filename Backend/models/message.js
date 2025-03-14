import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
    { 
        id: String, 
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }, 
        receiver:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }, 
        content: String,
    },
    { timestamp: true }
)

const messageModel = mongoose.model('messages',messagesSchema);
export default  messageModel