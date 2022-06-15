import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import config from '../lib/config';

const auth = async (req: Request, _: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (!token) return next(new Error('Token not exsisted'));

  const valid = verify((token as string).split(' ')[1], config.SECRET_KEY);
  if (!valid) return next(new Error('Not authorized'));

  req.body.userId = (valid as any).userId;

  next();
};

export default auth;
