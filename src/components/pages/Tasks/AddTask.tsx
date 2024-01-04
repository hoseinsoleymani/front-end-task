import type { FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';

import { refetchTasksQueries } from '@/data-layer';
import { useCreateTask } from '@/data-layer/createTask';

import { Form } from './Form';

export const AddTask = () => {
  const { mutate: createTask, isLoading, error } = useCreateTask();

  if (error) return <>{toast.error(`Error occurred ${error}`)}</>;

  const submitForm = ({ title, description }: FieldValues) => {
    createTask(
      { title, description },
      {
        onSuccess() {
          toast.success('Successfully Created!');
          void refetchTasksQueries();
        },
      },
    );
  };

  return <Form submitForm={submitForm} loading={isLoading} />;
};
