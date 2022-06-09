import mongoose from 'mongoose';
import type { Comment } from '../../../shared/types';

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  songId: { type: Number, required: true, index: true },

  text: { type: String, required: true },

  replyTo: { type: String },

  createdAt: { type: Date, default: Date.now() },
});

commentSchema.virtual('id').get(function () {
  return (this as any)._id.toHexString();
});

commentSchema.set('toJSON', {
  virtuals: true,
});

export const CommentModel = mongoose.model<Comment>('Comment', commentSchema);
