import { Heart } from '../../types/basic';
import { instance } from './instance';

export const getMyHearts = async () => {
  const res = await instance().get<Heart[]>(`/me/hearts`, {
    withCredentials: true,
  });
  return res.data;
};
