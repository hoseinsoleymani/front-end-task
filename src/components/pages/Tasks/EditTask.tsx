import { useUpdateTaskMutation } from "@/data-layer/tasks"
import { PencilIcon } from "@heroicons/react/24/outline"
import { Form } from "./Form"
import { FieldValues } from "react-hook-form"
import { useState } from "react"
import { toast } from "react-toastify"

interface EditTaskProps {
    id: string
}

export const EditTask = ({ id }: EditTaskProps) => {
    const [editTask, { isLoading, error }] = useUpdateTaskMutation()
    const [showEditForm, setShowEditForm] = useState(false)

    if (error) return <>{toast.error(`Error occurred ${error}`)}</>


    const submitForm = ({ title, description }: FieldValues) => {
        editTask({ title, description, id }).then(() => {
            toast.success("Successfully Edited!")
        })
    };

    return (
        <div className="w-full">
            <button onClick={() => { setShowEditForm(prev => !prev) }}>
                <PencilIcon className="w-7 text-gray-900" />
            </button>

            {showEditForm ? <Form submitForm={submitForm} loading={isLoading} /> : null}
        </div>
    )
}
