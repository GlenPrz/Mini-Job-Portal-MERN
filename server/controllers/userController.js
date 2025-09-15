import User from '../models/User.js'

// Create new user
export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ error: "All fields are required"})
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists"});
        }

        const newUser = new User({ name, email, password, role});
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get all users
export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


// Update User
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await User.findByIdAndUpdate( id, req.body, { new: true})
        res.json(updateUser);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
};


// Delete User
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete( id );
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};