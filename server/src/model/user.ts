import mongoose from 'mongoose';
import type { User } from '../../../shared/types';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },

  password: { type: String, required: true, trim: true },

  nickname: { type: String },
});

userSchema.virtual('id').get(function () {
  return (this as any)._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
});

export const UserModel = mongoose.model<User>('User', userSchema);
