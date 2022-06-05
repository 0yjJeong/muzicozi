import { QueryFunctionContext } from 'react-query';

export type OverrideQueryFnCtx<P> = QueryFunctionContext<[string, P]>;
