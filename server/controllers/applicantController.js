import Applicant from '../models/Applicants.js'

// create new applicants
export const createApplicant = async (req, res) => {
    try{
        const  { name, email, contact, postApplying} = req.body;

        if ( !name || !email || !contact || postApplying ) {
            return res.status(400).json({ error: "All fields are required"})
        }

        const newApplicant = new Applicant({  name, email, contact, postApplying });
        await newApplicant.save();

        res.status(201).json(newApplicant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all applicants
export const getAllApplicants = async (req, res) => {
    try {
        const getAllApplicants = await Applicant.find();
        res.json(getAllApplicants);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

// Get specific applicant
export const getApplicant = async (req, res) => {
    try {
        const { id } = req.params;
        const getApplicant = await Applicant.find( id )
        res.json(getApplicant);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

// Update Applicant
export const updateApplicant = async (req, res) => {
    try {
        const { id } = req.params;
        const updateApplicant = await Applicant.findByIdAndUpdate( id. req.bpdy, { new: true })
        res.json(updateApplicant);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

// Delete Applicant
export const deleteApplicant = async (req, res) => {
    try {
        const { id } = req.params;
        await Applicant.findByIdAndDelete( id );
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}