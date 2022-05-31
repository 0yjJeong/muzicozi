import mongoose from 'mongoose';
import type { User } from '../../../shared/types';

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true, trim: true },

  nickname: { type: String },
});

export const UserModel = mongoose.model<User>('User', userSchema);
