import { useMutation } from 'react-query';

import { api } from '@/lib/axios';

interface RequestBody {
  username: string;
  password: string;
}

const login = ({ username, password }: RequestBody) =>
  api.post(`/api/login`, { username, password });

export const useLogin = () =>
  useMutation(
    ['login'],
    ({ username: title, password: description }: RequestBody) =>
      login({ username: title, password: description }),
  );
