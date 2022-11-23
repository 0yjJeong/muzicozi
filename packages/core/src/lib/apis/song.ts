import { Heart, Song } from '../../types/basic';
import { ArtistSongsOption, OverrideQueryFnCtx } from '../../types/query';
import { LikedSongForDisplay, Searched } from '../../types/transform';
import { instance } from './instance';

export const getSong = async ({ queryKey }: OverrideQueryFnCtx<number>) => {
  const [_key, songId] = queryKey;
  const res = await instance().get<Song>(`/song/id/${songId}`);
  return res.data;
};

export const getLikedSongs = async () => {
  const res = await instance().get<LikedSongForDisplay[]>(`/song/liked`, {
    withCredentials: true,
  });
  return res.data;
};

export const getArtistSongs = async ({
  queryKey,
}: OverrideQueryFnCtx<ArtistSongsOption>) => {
  const [_key, { id, ...rest }] = queryKey;
  const res = await instance().get<Array<Song>>(`/song/artist-songs/${id}`, {
    ...(rest as any),
    withCredentials: true,
  });
  return res.data;
};

export const getHearts = async ({ queryKey }: OverrideQueryFnCtx<number>) => {
  const [_key, songId] = queryKey;
  const res = await instance().get<Heart[]>(`/song/hearts/${songId}`, {});
  return res.data;
};

export const search = async ({
  queryKey,
}: OverrideQueryFnCtx<string | undefined>) => {
  const [_key, q] = queryKey;
  const res = await instance().post<Searched[]>(`/song/search`, { q });
  return res.data;
};

export const likeSong = async (songId: number) => {
  const res = await instance().post(
    `/song/like`,
    { songId },
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const unlikeSong = async (songId: number) => {
  const res = await instance().post(
    `/song/unlike`,
    { songId },
    { withCredentials: true }
  );
  return res.data;
};
