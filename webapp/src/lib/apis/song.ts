import axios from 'axios';
import { Heart, Song } from '../../../../shared/types';
import { ArtistSongsOption, OverrideQueryFnCtx } from '../../types/query';
import { Searched } from '../../types/transform';

export const getSong = async ({ queryKey }: OverrideQueryFnCtx<number>) => {
  const [_key, songId] = queryKey;
  const res = await axios.get<Song>(
    `${process.env.REACT_APP_SERVER_HOST}/song/id/${songId}`
  );
  return res.data;
};

export const getArtistSongs = async ({
  queryKey,
}: OverrideQueryFnCtx<ArtistSongsOption>) => {
  const [_key, { id, ...rest }] = queryKey;
  const res = await axios.get<Array<Song>>(
    `${process.env.REACT_APP_SERVER_HOST}/song/artist-songs/${id}`,
    { ...(rest as any), withCredentials: true }
  );
  return res.data;
};

export const getHearts = async ({ queryKey }: OverrideQueryFnCtx<number>) => {
  const [_key, songId] = queryKey;
  const res = await axios.get<Heart[]>(
    `${process.env.REACT_APP_SERVER_HOST}/song/hearts/${songId}`
  );
  return res.data;
};

export const search = async ({
  queryKey,
}: OverrideQueryFnCtx<string | undefined>) => {
  const [_key, q] = queryKey;
  const res = await axios.post<Searched[]>(
    `${process.env.REACT_APP_SERVER_HOST}/song/search`,
    { q }
  );
  return res.data;
};

export const likeSong = async (songId: number) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/song/like`,
    { songId },
    { withCredentials: true }
  );
  return res.data;
};

export const unlikeSong = async (songId: number) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/song/unlike`,
    { songId },
    { withCredentials: true }
  );
  return res.data;
};
