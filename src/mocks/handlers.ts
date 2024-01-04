import { http } from 'msw';

import { login } from './controller/login.service';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from './controller/tasks.service';

export const handlers = [
  http.get('/api/tasks', getTasks),

  http.get('/api/task', getTask),
  http.post('/api/tasks', createTask),
  http.put('/api/tasks', updateTask),
  http.delete('/api/tasks', deleteTask),

  http.post('/api/login', login),
];
