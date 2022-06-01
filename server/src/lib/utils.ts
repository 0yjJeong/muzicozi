import { map } from 'ramda';

export const ids = map(<T extends { id: string | number }>(obj: T) => obj.id);
