import mongoose from 'mongoose';
import type { Comment } from '../../../shared/types';

const commentSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  userId: { type: String, required: true },

  songId: { type: Number, required: true, index: true },

  text: { type: String, required: true },

  replyTo: { type: String },

  createdAt: { type: Date, default: Date.now() },
});

export const CommentModel = mongoose.model<Comment>('Comment', commentSchema);
