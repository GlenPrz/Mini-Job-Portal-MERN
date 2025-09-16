import mongoose from "mongoose";

const applicantSchema = ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        match: [/^\+?[0-9\s\-()]{7,20}$/, 'Please enter a valid contact number']
    },
    postApplying: {
        type: String,
        required: true,
    }
})

const ApplicantModel = mongoose.model("Applicants", applicantSchema)
export default ApplicantModel;