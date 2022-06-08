import axios from 'axios';

type LoginParams = {
  email: string;
  password: string;
};

export const login = async (params: LoginParams) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
    params,
    { withCredentials: true }
  );
  return res.data;
};

type SignUpParams = LoginParams & {
  nickname: string;
};

export const signup = async (params: SignUpParams) => {
  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/signup`,
    params
  );
  return res.data;
};
