// const express = require("express");
import express from "express";

const app = express();

// const ContactRoute = require('./routes/contact.routes');
import ContactRoute from './routes/contact.routes.js';
import { connectDB } from "./config/database.js"
connectDB();


// Middleware
app.set('view engine', 'ejs') // for use ejs engine 
app.use(express.urlencoded( {extended: false})) // for use form in express
app.use(express.static('public'))  // for use public path 

// contact Routes 
app.use("/", ContactRoute);

const port = process.env.PORT;
app.listen( port, ()=>{
    console.log("Server started successfully on port "+ port);
})