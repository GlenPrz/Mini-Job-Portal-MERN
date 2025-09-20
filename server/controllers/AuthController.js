import User from "../models/User.js";
import { createSecretToken } from "../util/SecretToken.js";

export const Signup = async (req, res, next) => {
    try {
         const { email, password, username, createdAt } = req.body;
         const existingUser = await User.findOne({ email });
         if (existingUser) {
            return res.json({ message: "User already exists"});
         }
         const user = await User.create({ email, password, username, createdAt });
         const token = createSecretToken(user._id);
         res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
         });
         res
         .status(201)
         .json({ message: "User signed in successfully!", success: true, user });
         next();
    } catch (err) {
        console.log({ Error: err.message });
    }
};
