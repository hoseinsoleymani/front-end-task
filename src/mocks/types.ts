import type { JsonBodyType } from 'msw';

export interface ITask {
  title: string;
  description: string;
  id: string;
}

export interface LoginRequestBody {
  password: string;
  username: string;
}

export interface CreateTaskRequestBody extends Omit<ITask, 'id'> {}

export interface EditTaskRequestBody extends ITask {}

export interface DeleteTaskRequestBody
  extends Omit<ITask, 'description' | 'title'> {
  id: string;
}

export interface IRequestGetTask {
  request: {
    url: string;
  };
}

export interface IRequest {
  request: {
    json: () => JsonBodyType;
    url: string;
  };
}
