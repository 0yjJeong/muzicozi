import { QueryFunctionContext } from 'react-query';

export type OverrideQueryFnCtx<P> = QueryFunctionContext<[string, P]>;

export type ArtistSongsOption = {
  id: number;
  sort?: 'title' | 'popularity';
  page?: number;
  perPage?: number;
};
