import mongoose from "mongoose";

export const connectDb = async (DB_URL) =>{
    try {
        await mongoose.connect(DB_URL)
        console.log("Database Connected!!!");
    } catch (error) {
        console.log(error);
    }
}