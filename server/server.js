import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import { PORT, mongoDBURL } from './config.js'

// Initialise express app
const app = express();

// Middleware for handling CORS POLICY
app.use(express.json());
app.use(cors());


mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App listening to port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("X MongoDB connection Error: ", err.message);
        process.exit(1);
    });








