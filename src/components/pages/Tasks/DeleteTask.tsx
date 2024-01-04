import { TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import {
  refetchTaskQueries,
  refetchTasksQueries,
  useDeleteTask,
} from '@/data-layer';

interface DeleteTaskProps {
  id: string;
}

export const DeleteTask = ({ id }: DeleteTaskProps) => {
  const { mutate: deleteTask } = useDeleteTask({ id });
  const navigate = useNavigate();

  const deleteTaskHandler = () => {
    deleteTask();
    void refetchTaskQueries();
    void refetchTasksQueries();
    navigate('/');
  };

  return (
    <button onClick={deleteTaskHandler}>
      <TrashIcon className="w-7 text-red-600" />
    </button>
  );
};
