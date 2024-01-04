import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button, Loading, TextArea, TextField } from '@/components/shared';

interface FormProps {
  submitForm: (value: FieldValues) => void;
  loading: boolean;
}

export const Form = ({ submitForm, loading }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors: clientFormError },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextField
        {...register('title', {
          required: true,
        })}
        type="text"
        name="title"
        label="Title"
        className="my-6 block w-full"
        invalid={clientFormError.title?.type === 'required'}
        errorMessage="Task Title is Required"
      />

      <TextArea
        {...register('description')}
        name="description"
        placeholder="Type Your Desc..."
      />

      <div className="mt-12 flex items-center">
        <Button disabled={!isValid} className="mt-6">
          {loading ? <Loading /> : 'Create'}
        </Button>
      </div>
    </form>
  );
};
