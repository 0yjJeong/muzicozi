import { Comment } from '../../types/basic';
import { OverrideQueryFnCtx } from '../../types/query';
import { DefaultComment } from '../../types/transform';
import { instance } from './instance';

export const getComments = async ({ queryKey }: OverrideQueryFnCtx<number>) => {
  const [_key, songId] = queryKey;
  const res = await instance.get<DefaultComment[]>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/id/${songId}`
  );
  return res.data;
};

export const addComment = async (params: Pick<Comment, 'songId' | 'text'>) => {
  const res = await instance.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/add`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const updateComment = async (
  params: Pick<Comment, 'songId' | 'text'>
) => {
  const res = await instance.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/update`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const removeComment = async (commentId: string) => {
  const res = await instance.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/remove`,
    { commentId },
    { withCredentials: true }
  );
  return res.data;
};
