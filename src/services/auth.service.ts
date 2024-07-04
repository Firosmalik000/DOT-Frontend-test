import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const login = (data: { username: string; password: string }, callback: (status: boolean, response: string[]) => void) => {
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      console.log(res);
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
      console.log(err);
    });
};

export const getUsername = (token: string) => {
  const decoded: any = jwtDecode(token);
  console.log(decoded);
  return decoded.user;
};
