import { PencilIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  refetchTaskQueries,
  refetchTasksQueries,
  useEditTask,
} from '@/data-layer';

import { Form } from './Form';

interface EditTaskProps {
  id: string;
}

export const EditTask = ({ id }: EditTaskProps) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const { mutate: editTask, isLoading, error } = useEditTask();

  if (error) return <>{toast.error(`Error occurred ${error}`)}</>;

  const submitForm = ({ title, description }: FieldValues) => {
    editTask(
      { title, description, id },
      {
        onSuccess() {
          toast.success('Successfully Edited!');
          void refetchTaskQueries();
          void refetchTasksQueries();
        },
      },
    );
  };

  return (
    <div className="w-full">
      <button
        onClick={() => {
          setShowEditForm((prev) => !prev);
        }}
      >
        <PencilIcon className="w-7 text-gray-900" />
      </button>

      {showEditForm ? (
        <Form submitForm={submitForm} loading={isLoading} />
      ) : null}
    </div>
  );
};
