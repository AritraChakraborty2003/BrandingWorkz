import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("Database Connected Successfully")
    }
).catch((err)=>{
    console.log('Failed to connect with Database')
    process.exit(1)
})

