import { useMutation } from 'react-query';

import { api } from '@/lib/axios';

interface RequestBody {
  title: string;
  id: string;
  description: string;
}

const editTask = ({ title, description, id }: RequestBody) =>
  api.put(`/api/tasks`, { title, description, id });

export const useEditTask = () =>
  useMutation(['edit-task'], ({ title, description, id }: RequestBody) =>
    editTask({ title, description, id }),
  );
