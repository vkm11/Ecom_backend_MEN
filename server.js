// const express = require('express')
// const colors = require('colors')

//   "type": "module" we defined in package.json file
import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from "cors";
// configure env
// dotenv.config({path:}); // folder inside env file means need to give path like this
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Routes

app.use('/api/v1/auth', authRoutes);


// rest api
app.get('/', (req,res) =>{
    res.send(
        // message:"Welcome to ecommerce app"
        "<h1>Welcome to ecommerce app</h1>"
    );
})

// PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})