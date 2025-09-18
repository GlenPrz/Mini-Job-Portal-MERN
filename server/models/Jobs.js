import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000,
        trim: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    department: {
        type: String,
        required: true,
        enum: ["Engineering", "Marketing", "Sales", "HR", "Finance"], // example departments
        trim: true,
    },
});

const JobModel = mongoose.model("Jobs", jobSchema);
export default JobModel;