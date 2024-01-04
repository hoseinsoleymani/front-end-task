import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, TextField } from '@/components/shared';
import { useLogin } from '@/data-layer';
import { useAuthenticationStore } from '@/store';

export const Form = () => {
  const navigate = useNavigate();
  const { mutate: login } = useLogin();
  const { login: saveUserData } = useAuthenticationStore();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors: clientFormError },
  } = useForm({
    mode: 'onChange',
  });

  const submitForm = handleSubmit(({ username, password }) => {
    const user = {
      username,
      password,
    };

    login(user, {
      onSuccess() {
        saveUserData(user);
        toast.success('Login Successfully!');
        navigate('/');
      },
    });
  });

  return (
    <form onSubmit={submitForm}>
      <TextField
        {...register('username', {
          required: true,
          minLength: 2,
          maxLength: 100,
        })}
        type="text"
        name="username"
        label="User Name"
        className="mt-6 block w-full"
        placeholder="username"
        invalid={
          clientFormError.username?.type === 'minLength' ||
          clientFormError.username?.type === 'maxLength' ||
          clientFormError.username?.type === 'required'
        }
        errorMessage="User Name is Required"
      />

      <TextField
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 255,
        })}
        name="password"
        type="password"
        label="Password"
        placeholder="password"
        className="mt-12 block w-full"
        invalid={
          clientFormError.password?.type === 'minLength' ||
          clientFormError.password?.type === 'maxLength' ||
          clientFormError.password?.type === 'required'
        }
        errorMessage="Password is Required"
      />

      <div className="mt-12 flex items-center">
        <Button disabled={!isValid} className="mt-6">
          Login
        </Button>
      </div>
    </form>
  );
};
