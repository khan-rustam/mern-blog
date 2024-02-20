import express from "express";
import { updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.put("/update/:userId", verifyToken, updateUser);

<<<<<<< HEAD
export default router;
=======
router.put("/update/:userId", verifyToken, updateUser);

export default router; 
>>>>>>> 1b16f48178489ecf03de77f44dd911945a4f7669
