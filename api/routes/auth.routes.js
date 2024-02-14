import express from "express";
import { SignUp, SignIn, googleAuth } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/google", googleAuth);

export default router;
