import { HttpResponse } from 'msw';

import { users } from '../db/users';
import type { IRequest, LoginRequestBody } from '../types';

export const login = async ({ request }: IRequest) => {
  const { password, username } = (await request.json()) as LoginRequestBody;

  if (!username && !(password.length > 8))
    return new HttpResponse(null, {
      status: 400,
      statusText: 'username or password is incorrect!',
    });

  users.forEach((user) => {
    if (
      user.username.toLocaleLowerCase().trim() !==
      username.toLocaleLowerCase().trim()
    ) {
      users.push(user);
    }
  });

  return HttpResponse.json(
    { username },
    {
      status: 200,
      statusText: 'User Login Successfully!',
    },
  );
};
