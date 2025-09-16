import express from 'express';
import { createApplicant, getAllApplicants, getApplicant, updateApplicant, deleteApplicant } from '../controllers/applicantController.js';

const router = express.Router();

// Routes
router.post("/", createApplicant);
router.get("/", getAllApplicants);
router.get("/:id", getApplicant);
router.put("/:id", updateApplicant);
router.delete("/:id", deleteApplicant);

export default router;



