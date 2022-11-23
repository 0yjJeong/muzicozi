import mongoose from 'mongoose';
import type { Heart } from '../types';

const heartSchema = new mongoose.Schema({
  userId: { type: String, required: true },

  songId: { type: Number, required: true, index: true },

  createdAt: { type: Date, default: Date.now() },
});

heartSchema.virtual('id').get(function () {
  return (this as any)._id.toHexString();
});

heartSchema.set('toJSON', {
  virtuals: true,
});

export const HeartModel = mongoose.model<Heart>('Heart', heartSchema);
