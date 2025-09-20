import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password should be longer than 6 characters'],
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin", "employer"],
    },
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
