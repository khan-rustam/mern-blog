import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (
      !email ||
      !username ||
      !password ||
      !email === "" ||
      !username === "" ||
      !password === ""
    )
      return res.status(400).json({ message: "Please fill complete details!" });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({ username, email, password: hashPassword });

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
