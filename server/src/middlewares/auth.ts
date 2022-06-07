import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import config from '../lib/config';

const auth = async (req: Request, _: Response, next: NextFunction) => {
  const token = req.cookies['x-access-token'];
  if (!token) return next(new Error('Token not exsisted'));

  const valid = verify(token, config.SECRET_KEY);
  if (!valid) return next(new Error('Not authorized'));

  next();
};

export default auth;
