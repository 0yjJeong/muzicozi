import axios from 'axios';
import { Song } from '../../../shared/types';

export const getSong = async (id: number) => {
  const res = await axios.get<Song>(
    `${process.env.REACT_APP_SERVER_HOST}/song/id/${id}`
  );
  return res.data;
};

export const getArtistSongs = async (params?: any) => {
  const res = await axios.get<Array<Song>>(
    `${process.env.REACT_APP_SERVER_HOST}/song/artist-songs`,
    { params }
  );
  return res.data;
};

export const search = async (q: string) => {
  const res = await axios.get<Pick<Song, 'id' | 'title' | 'songArtImageUrl'>>(
    `${process.env.REACT_APP_SERVER_HOST}/song/search`,
    { params: { q } }
  );
  return res.data;
};

export const login = async (params?: any) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

export const signup = async (params?: any) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/signup`,
    params
  );
  return res.data;
};
