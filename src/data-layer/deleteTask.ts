import { useMutation } from 'react-query';

import { api } from '@/lib/axios';

interface RequestBody {
  id: string;
}

const deleteTask = ({ id }: RequestBody) =>
  api.delete(`/api/tasks`, {
    data: {
      id,
    },
  });

export const useDeleteTask = ({ id }: RequestBody) =>
  useMutation(['delete-task', id], () => deleteTask({ id }));
