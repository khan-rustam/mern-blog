import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())

//connection to mongoDB database --------------
mongoose
  .connect(
    "mongodb://localhost:27017",
    { dbName: "mern-blog" }
    // "mongodb+srv://mern-blog:mern-blog@cluster0.gxs1bat.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((err) => console.log(err, "Failed to connect to MongoDB"));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, message: message });
});

//Server runnning on PORT - 3000 --------------
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}!!`));
