import mongoose from "mongoose";

const jobSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: date,
        default: Date.now,
    },
    department: {
        type: String,
        required: true,
    },
})

const JobModel = mongoose.model("Jobs", jobSchema)
module.exports = JobModel;