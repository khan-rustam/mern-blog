import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (
      !email ||
      !username ||
      !password ||
      !email === "" ||
      !username === "" ||
      !password === ""
    ) {
      next(errorHandler(400, "Please fill complete details!"));
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);

    const user = await User.create({ username, email, password: hashPassword });

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
