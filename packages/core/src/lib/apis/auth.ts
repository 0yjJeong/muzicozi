import { User } from '../../types/basic';
import { instance } from './instance';

export const login = async (params: Omit<User, 'id' | 'nickname'>) => {
  const res = await instance().post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const signup = async (params: Omit<User, 'id'>) => {
  const res = await instance().post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/signup`,
    params
  );
  return res.data;
};
