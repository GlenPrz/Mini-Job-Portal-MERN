import express from "express";
import { Signup } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/users", Signup);

export default router;