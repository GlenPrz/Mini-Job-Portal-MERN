import express from 'express';
import { createJob, getJobs, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// Routes
router.post("/", createJob);
router.get("/", getJobs);
router.put("/:id", updateJob);
router.delete("/:delete", deleteJob);

export default router;