import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//connection to mongoDB database --------------
mongoose
  .connect(
      "mongodb+srv://mern-blog:mern-blog@cluster0.gxs1bat.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((err) => console.log(err, "Failed to connect to MongoDB"));

//Server runnning on PORT - 3000 --------------
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}!!`));
