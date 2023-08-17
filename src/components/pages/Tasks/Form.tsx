import { useForm } from "react-hook-form";

import { Button, TextArea, TextField } from "@/components/shared";
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

    });

    return (
        <form onSubmit={submitForm}>
            <TextField
                {...register("title", {
                    required: true,
                })}
                type="text"
                name="title"
                label="Title"
                className="block mt-6 w-full"
                invalid={
                    clientFormError.title?.type === "required"
                }
                errorMessage="Task Title is Required"
            />

            <TextArea
                {...register("description")}
                name="description"
                placeholder="Type Your Desc..."
            >
            </TextArea>

            <div className="flex items-center mt-12">
                <Button
                    disabled={!isValid}
                    className={`mt-6`}
                >
                    Create
                </Button>
            </div>
        </form>
    );
};
