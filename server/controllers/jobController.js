import Job from '../models/Jobs.js'

// create new job
export const createJob = async (req, res) => {
    try{
        const { title, description, department } = req.body;

        if ( !title || !description || !department ) {
            return res.status(400).json({ error: "All fields are required"});
        }

        const existingJob = await Job.findOne({ title });
        if (existingJob) {
            return res.status(400).json({ error: "Job post already exists"});
        }

        const newJob = new Job({ title, description, department });
        await newJob.save();
        
        res.status(202).json(newJob);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


// Get all Jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


// Get job by id
export const getJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(400).json({ error: "Job does not exist" });
        }
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Job
export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updateJob = await Job.findByIdAndUpdate( id, req.body, {new: true})
        res.json(updateJob);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


// Delete Job
export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndDelete( id );
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};
