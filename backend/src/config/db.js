
import mongoose from "mongoose";

async function connectDB(){

    console.log(process.env.MONGO_URI);

    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("mongo connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;