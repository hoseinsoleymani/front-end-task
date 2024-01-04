import { useQuery } from 'react-query';

import { queryClient } from '@/lib';
import { api } from '@/lib/axios';

export interface Task {
  title: string;
  description: string;
  id: number;
}

const getTask = (id: string) =>
  api.get<Task>(`/api/task`, {
    params: {
      id,
    },
  });

export const useGetTask = (id: string) =>
  useQuery(['get-task', id], () => getTask(id));

export const refetchTaskQueries = () => {
  return queryClient.refetchQueries('get-task');
};
