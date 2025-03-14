
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    { 
        id: String,
        name: String, 
        description: String 
    } 
)

const serviceModel = mongoose.model('services',serviceSchema);
export default  serviceModel


