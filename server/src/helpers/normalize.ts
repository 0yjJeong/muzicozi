import {
  curry,
  pipe,
  map,
  pickAll,
  toPairs,
  type,
  replace,
  join,
  head,
  match,
  toUpper,
  fromPairs,
} from 'ramda';

const capitalizeFirstLetter = pipe(
  (str: string) => [
    head(match(/[a-z]+/g)(str)) as string,
    ...match(/\_[a-z]+/g)(str),
  ],
  map(replace(/\_[a-z]/g, (str) => toUpper(str[1]))),
  join('')
);

const parse = pipe(
  (keys: string[], object: Object) => pickAll(keys, object) as any,
  toPairs,
  map((el: any[]) => [
    capitalizeFirstLetter(el[0]),
    type(el[1]) === 'Object'
      ? fromPairs(
          pipe(
            toPairs,
            map((el: any[]) => [capitalizeFirstLetter(el[0]), el[1]])
          )(el[1]) as any[]
        )
      : el[1],
  ]) as any,
  fromPairs
);

export const normalize = curry(parse);
