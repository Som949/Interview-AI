import mongoose from "mongoose";

export function connectDB() {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB database connected");
    })
    .catch((err)=>{
        console.log("error connecting DB");
    })
}
