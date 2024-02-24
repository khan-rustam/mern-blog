import { errorHandler } from '../utils/error.js';
import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(401, 'You are not authorized to perform this operation')
      );
    }

    const newComment = new Comment({ content, postId, userId });

    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};
