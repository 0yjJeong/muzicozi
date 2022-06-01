import axios from 'axios';
import { Song } from '../../../../shared/types';
import config from '../config';

type Params = {
  [key: string]: string;
};

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

export const getSong = async (
  songId: string
): Promise<Fetched<{ song: Song }>> => {
  const options = {
    method: 'GET',
    url: `https://genius.p.rapidapi.com/songs/${songId}`,
    headers,
  };
  const response = await axios.request(options);
  return response.data;
};

export const getArtistSongs = async (
  params?: Params
): Promise<Fetched<{ songs: Song[] }>> => {
  const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775/songs',
    headers,
    params,
  };
  const response = await axios.request(options);
  return response.data;
};

export const search = async (
  q: string
): Promise<Fetched<{ songs: Song[] }>> => {
  const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775/songs',
    headers,
    params: { q },
  };
  const response = await axios.request(options);
  return response.data;
};
