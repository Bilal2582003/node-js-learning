// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoPath = process.env.MONGODB_PATH
 // Database connection
 export const connectDB = () =>{  mongoose.connect(`${mongoPath}contacts-crud`).then(()=> console.log("Database connected.")) };