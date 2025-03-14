import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    { 
        id: String, 
        title: { type: String }, 
        description: String, 
        techStack: [ String ]
    } 
)

const projectModel = mongoose.model('products',projectSchema);
export default  projectModel