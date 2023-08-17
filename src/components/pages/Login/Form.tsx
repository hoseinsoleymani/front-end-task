import { useForm } from "react-hook-form";

import { Button, TextField } from "@/components/shared";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const router = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors: clientFormError },
  } = useForm({
    mode: "onChange",
  });

  const submitForm = handleSubmit(({ username, password, remember }) => {
    // login({
    //   setErrors,
    //   setStatus,
    //   username,
    //   password,
    //   remember,
    // });
  });

  return (
    <form onSubmit={submitForm}>
      <TextField
        {...register("username", {
          required: true,
          minLength: 2,
          maxLength: 100,
        })}
        type="text"
        name="username"
        label="User Name"
        className="block mt-6 w-full"
        invalid={
          clientFormError.username?.type === "minLength" ||
          clientFormError.username?.type === "maxLength" ||
          clientFormError.username?.type === "required"
        }
        errorMessage="User Name is Required"
      />

      <TextField
        {...register("password", {
          required: true,
          minLength: 8,
          maxLength: 255,
        })}
        name="password"
        type="password"
        label="Password"
        className="block w-full mt-12"
        invalid={
          clientFormError.password?.type === "minLength" ||
          clientFormError.password?.type === "maxLength" ||
          clientFormError.password?.type === "required"
        }
        errorMessage="Password is Required"
      />

      <div className="block mt-12">
        <label htmlFor="remember_me" className="inline-flex items-center">
          <input
            {...register("remember")}
            id="remember_me"
            type="checkbox"
            name="remember"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      <div className="flex items-center">
        <Button
          disabled={!isValid}
          className={`mt-6`}
        >
          Login
        </Button>
      </div>
    </form>
  );
};
