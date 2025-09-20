import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/AuthRoute.js';
import userRoutes from './routes/userRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicantRoutes from './routes/applicantRoutes.js'

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


// User Route
app.use("/api/users", userRoutes);

// Jobs Route
app.use("/api/jobs", jobRoutes);

//  Applicant Route
app.use("/api/applicants", applicantRoutes);

app.use(cookieParser);

app.use("/", authRoute);







