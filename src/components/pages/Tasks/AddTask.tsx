import { useAddTaskMutation } from "@/data-layer/tasks";
import { Form } from './Form';
import { FieldValues } from "react-hook-form";

export const AddTask = () => {
    const [createTask, { isLoading }] = useAddTaskMutation()

    const submitForm = ({ title, description }: FieldValues) => {
        createTask({ title, description })
    };


    return (
        <Form submitForm={submitForm} loading={isLoading} />
    )
}
