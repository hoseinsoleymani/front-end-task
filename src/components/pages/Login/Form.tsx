import { useForm } from "react-hook-form";

import { Button, TextField } from "@/components/shared";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/app/authenticationSlice";
import { AUTH_USER_KEY } from "@/lib/axios";

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    handleSubmit,
    register,
    formState: { isValid, errors: clientFormError },
  } = useForm({
    mode: "onChange",
  });

  const submitForm = handleSubmit(({ username, password }) => {
    const user = {
      username,
      password
    }

    dispatch(login(user))
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))

    navigate("/")
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

      <div className="flex items-center mt-12">
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
