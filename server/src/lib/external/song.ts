import axios from 'axios';
import { Song } from '../../../../shared/types';
import config from '../config';

type Fetched<T> = {
  meta: {
    status: number;
  };
  response: T;
};

const headers = {
  'X-RapidAPI-Host': config.GENIUS_API_HOST,
  'X-RapidAPI-Key': config.GENIUS_API_KEY,
};

type GetSongParams = {
  id: string;
};

export const getSong = async ({
  id,
}: GetSongParams): Promise<Fetched<{ song: Song }>> => {
  const options = {
    method: 'GET',
    url: `https://genius.p.rapidapi.com/songs/${id}`,
    headers,
  };
  const response = await axios.request(options);
  return response.data;
};

type GetArtistSongsParams = {
  artistId: number;
  sort?: 'title' | 'popularity';
  page?: number;
  perPage?: number;
};

export const getArtistSongs = async ({
  artistId,
  ...rest
}: GetArtistSongsParams): Promise<Fetched<{ songs: Song[] }>> => {
  const options = {
    method: 'GET',
    url: `https://genius.p.rapidapi.com/artists/${artistId}/songs`,
    headers,
    params: {
      ...rest,
    },
  };
  const response = await axios.request(options);
  return response.data;
};

type SearchParams = {
  q: string;
};

export const search = async ({
  q,
}: SearchParams): Promise<Fetched<{ songs: Song[] }>> => {
  const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    headers,
    params: { q },
  };
  const response = await axios.request(options);
  return response.data;
};
