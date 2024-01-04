import { HttpResponse } from 'msw';

import { tasks } from '../db/tasks';
import type {
  CreateTaskRequestBody,
  DeleteTaskRequestBody,
  EditTaskRequestBody,
  IRequest,
  IRequestGetTask,
} from '../types';
import type { SortField } from '../utils';
import { sortTasks } from '../utils';

export const getTasks = ({ request }: IRequest) => {
  const url = new URL(request.url);

  const isDescending =
    !(url.searchParams.get('isDescending') === 'false') || false;
  const sortField = (url.searchParams.get('sortField') as SortField) || 'id';
  const filter = url.searchParams.get('filter');

  const sortedTasks = sortTasks(tasks, { isDescending, sortField });

  if (filter) {
    if (filter.length >= 3) {
      const filteredTasks = sortedTasks.filter((item) =>
        item.title.includes(filter),
      );

      return HttpResponse.json(filteredTasks, {
        status: 200,
        statusText: 'Tasks',
      });
    }
  }

  return HttpResponse.json(sortedTasks, {
    status: 200,
    statusText: 'Tasks',
  });
};

export const getTask = ({ request }: IRequestGetTask) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('id')!;

  const findTask = tasks.find((task) => task.id === +id);

  if (!findTask)
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Not Founded',
    });

  return HttpResponse.json(findTask);
};

export const createTask = ({ request }: IRequest) => {
  const requestBody = request.json() as CreateTaskRequestBody;

  if (!requestBody)
    return new HttpResponse(null, {
      status: 401,
      statusText: 'Please fill out Title and Description in correct format!',
    });

  const newTask = { ...requestBody, id: Math.random() * 999999 };

  tasks.push(newTask);

  return HttpResponse.json(newTask, {
    status: 201,
    statusText: 'Task Created!',
  });
};

export const updateTask = ({ request }: IRequest) => {
  const requestBody = request.json() as EditTaskRequestBody;

  if (!requestBody.id)
    return new HttpResponse(null, {
      status: 400,
      statusText: 'Please send the id!',
    });

  tasks.forEach((task) => {
    if (task.id === +requestBody.id) {
      task.description = requestBody.description;
      task.id = +requestBody.id;
      task.title = requestBody.title;
    }
  });

  return HttpResponse.json(requestBody, {
    status: 200,
    statusText: 'Task Updated!',
  });
};

export const deleteTask = ({ request }: IRequest) => {
  const requestBody = request.json() as DeleteTaskRequestBody;

  if (!requestBody.id)
    return new HttpResponse(null, {
      status: 400,
      statusText: 'Please send the id!',
    });

  tasks.forEach((task, index) => {
    if (task.id === +requestBody.id) {
      tasks.splice(index, 1);
    }
  });

  return HttpResponse.json(requestBody, {
    status: 200,
    statusText: 'Task Deleted Successfully!',
  });
};
