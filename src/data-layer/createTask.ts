import { useMutation } from 'react-query';

import { api } from '@/lib/axios';

interface RequestBody {
  title: string;
  description: string;
}

const createTask = ({ title, description }: RequestBody) =>
  api.post(`/api/tasks`, { title, description });

export const useCreateTask = () =>
  useMutation(['create-task'], ({ title, description }: RequestBody) =>
    createTask({ title, description }),
  );
