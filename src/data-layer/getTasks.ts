import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { queryClient } from '@/lib';
import { api } from '@/lib/axios';

export interface TaskContentResponse {
  title: string;
  description: string;
  id: number;
}

export interface ErrorTaskContentResponse {
  statusText: string;
}

export type SortField = 'id' | 'title' | undefined;

interface TasksParams {
  sortField: SortField;
  isDescending: boolean;
  filter: string;
}

const getTasks = ({ filter, isDescending, sortField }: TasksParams) =>
  api.get<TaskContentResponse[]>('/api/tasks', {
    params: {
      sortField,
      isDescending,
      filter,
    },
  });

export const useGetTasks = ({
  filter,
  isDescending,
  sortField,
}: TasksParams) => {
  return useQuery<
    AxiosResponse<TaskContentResponse[]>,
    ErrorTaskContentResponse
  >(
    ['get-tasks', filter, isDescending, sortField],
    () => getTasks({ filter, isDescending, sortField }),
    {
      // enabled: filter.length > 3
    },
  );
};

export const refetchTasksQueries = () => {
  return queryClient.refetchQueries('get-tasks');
};

export const fetchTasksQuery = ({
  filter,
  isDescending,
  sortField,
}: TasksParams) => {
  return queryClient.fetchQuery({
    queryKey: 'get-tasks',
    queryFn: () => getTasks({ filter, isDescending, sortField }),
  });
};
