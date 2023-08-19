import { useAddTaskMutation } from "@/data-layer/tasks";
import { Form } from './Form';
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify"
export const AddTask = () => {
    const [createTask, { isLoading, error }] = useAddTaskMutation()

    if (error) return <>{toast.error(`Error occurred ${error}`)}</>

    const submitForm = ({ title, description }: FieldValues) => {
        createTask({ title, description }).then(() => {
            toast.success("Successfully Created!")
        })
    };


    return (
        <Form submitForm={submitForm} loading={isLoading} />
    )
}