import mongoose from 'mongoose';
import type { Heart } from '../../../shared/types';

const heartSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  userId: { type: String, required: true },

  songId: { type: Number, required: true, index: true },

  createdAt: { type: Date, default: Date.now() },
});

export const HeartModel = mongoose.model<Heart>('Heart', heartSchema);
