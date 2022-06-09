import axios from 'axios';
import { Comment } from '../../../../shared/types';
import { OverrideQueryFnCtx } from '../../types/query';
import { DefaultComment } from '../../types/transform';

type GetCommentsParams = OverrideQueryFnCtx<number>;

export const getComments = async ({ queryKey }: GetCommentsParams) => {
  const [_key, songId] = queryKey;
  const res = await axios.get<DefaultComment[]>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/id/${songId}`
  );
  return res.data;
};

type CommentParams = {
  songId: number;
  text: string;
};

export const addComment = async (params: CommentParams) => {
  const res = await axios.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/add`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const updateComment = async (params: CommentParams) => {
  const res = await axios.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/update`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const removeComment = async (commentId: string) => {
  const res = await axios.post<Comment>(
    `${process.env.REACT_APP_SERVER_HOST}/comment/remove`,
    { commentId },
    { withCredentials: true }
  );
  return res.data;
};
