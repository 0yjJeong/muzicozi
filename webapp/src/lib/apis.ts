import axios from 'axios';
import { Song } from '../../../shared/types';
import { OverrideQueryFnCtx } from '../types/query';
import { Searched } from '../types/transform';

type GetSongParams = OverrideQueryFnCtx<number>;

export const getSong = async ({ queryKey }: GetSongParams) => {
  const [_key, params] = queryKey;
  const res = await axios.get<Song>(
    `${process.env.REACT_APP_SERVER_HOST}/song/id/${params}`
  );
  return res.data;
};

type GetArtistSongsParams = OverrideQueryFnCtx<{
  id: number;
  sort?: 'title' | 'popularity';
  page?: number;
  perPage?: number;
}>;

export const getArtistSongs = async ({ queryKey }: GetArtistSongsParams) => {
  const [_key, { id, ...rest }] = queryKey;
  const res = await axios.get<Array<Song>>(
    `${process.env.REACT_APP_SERVER_HOST}/song/artist-songs/${id}`,
    { params: { ...rest } }
  );
  return res.data;
};

type SearchParams = OverrideQueryFnCtx<string | undefined>;

export const search = async ({ queryKey }: SearchParams) => {
  const [_key, q] = queryKey;
  const res = await axios.post<Searched[]>(
    `${process.env.REACT_APP_SERVER_HOST}/song/search`,
    { q }
  );
  return res.data;
};

type LoginParams = {
  email: string;
  password: string;
};

export const login = async (params: LoginParams) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

type SignUpParams = LoginParams & {
  nickname: string;
};

export const signup = async (params: SignUpParams) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/signup`,
    params
  );
  return res.data;
};
