import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import postRouter from './routes/post.routes.js';
import commentRouter from './routes/comment.routes.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const URI = process.env.MONGO_DB_URI;
//connection to mongoDB database --------------
mongoose
  .connect(URI, { dbName: 'mern-blog' })
  .then(() => console.log('Connected successfully to MongoDB'))
  .catch((err) => console.log(err, 'Failed to connect to MongoDB'));

const __dirname = path.resolve();

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message: message });
});

//Server running on PORT - 3000 --------------
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}!!`));
