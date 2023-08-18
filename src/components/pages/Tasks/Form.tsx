import { FieldValues, useForm } from "react-hook-form";

import { Button, Loading, TextArea, TextField } from "@/components/shared";

interface FormProps {
    submitForm: (value: FieldValues) => void
    loading: boolean
}

export const Form = ({ submitForm, loading }: FormProps) => {

    const {
        handleSubmit,
        register,
        formState: { isValid, errors: clientFormError },
    } = useForm({
        mode: "onChange",
    });


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <TextField
                {...register("title", {
                    required: true,
                })}
                type="text"
                name="title"
                label="Title"
                className="block my-6 w-full"
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
                    {loading ? <Loading /> : "Create"}
                </Button>
            </div>
        </form>
    );
};
