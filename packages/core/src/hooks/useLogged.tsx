import {
  createContext,
  ReactElement,
  useContext,
  useState,
  useEffect,
} from 'react';
import decode from 'jwt-decode';
import {
  always,
  divide,
  has,
  identity,
  ifElse,
  lte,
  pick,
  pipe,
  propSatisfies,
  when,
  __,
} from 'ramda';
import { useLocation } from 'react-router-dom';

type Context =
  | {
      userId: string;
      nickname: string;
    }
  | undefined;

const context = createContext<Context>(undefined);

type Decoded = {
  exp: number;
  userId: string;
  nickname: string;
};

type Props = {
  children: ReactElement[];
};

export const LoggedProvider = ({ children }: Props) => {
  const location = useLocation();
  const [user, setUser] = useState<Context>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken = JSON.parse(token);
      const decoded = decode<Decoded>(parsedToken);
      const getUser = pipe(
        when(
          propSatisfies(lte(divide(Date.now(), 1000)), 'exp'),
          pick(['userId', 'nickname'])
        ),
        ifElse(has('exp'), always(undefined), identity)
      );

      setUser(getUser(decoded) as Context);
    }
  }, [location.pathname]);

  return <context.Provider value={user} children={children} />;
};

export const useLogged = () => {
  const logged = useContext(context);
  return logged;
};
