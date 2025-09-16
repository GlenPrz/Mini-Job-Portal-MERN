import express from 'express';
import { createJob, getAllJobs, getJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// Routes
router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJob);
router.put("/:id", updateJob);
router.delete("/:delete", deleteJob);

export default router;