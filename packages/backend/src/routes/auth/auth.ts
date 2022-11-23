import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../../model';
import config from '../../lib/config';

const router = express.Router();

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9]{8,24}$/))
    .required(),

  nickname: Joi.string().alphanum().min(4).max(12).required(),
});

router.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ error: "Couldn't find your account." });
    }

    const compared = await bcrypt.compare(req.body.password, user.password);
    if (!compared) {
      return res.json({ error: 'Your email and password do not match.' });
    }

    const token = await jwt.sign(
      { userId: user._id, nickname: user.nickname },
      config.SECRET_KEY,
      {
        expiresIn: '7d',
      }
    );

    res.json(token);
  } catch (error) {
    res.json({ error: (error as any).message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const validation = schema.validate(req.body);

    if (validation.error) {
      return res.json({ error: 'Invalid format.' });
    }

    let user = await UserModel.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.json({ error: 'Email already in use.' });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    user = new UserModel({
      ...req.body,
      password,
    });
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: (error as any).message });
  }
});

export default router;
