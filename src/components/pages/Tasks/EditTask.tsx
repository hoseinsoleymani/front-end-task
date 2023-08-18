import { useUpdateTaskMutation } from "@/data-layer/tasks"
import { PencilIcon } from "@heroicons/react/24/outline"
import { Form } from "./Form"
import { FieldValues } from "react-hook-form"
import { useState } from "react"

interface EditTaskProps {
    id: string
}

export const EditTask = ({ id }: EditTaskProps) => {
    const [editTask, { isLoading }] = useUpdateTaskMutation()
    const [showEditForm, setShowEditForm] = useState(false)

    const submitForm = ({ title, description }: FieldValues) => {
        editTask({ title, description, id })
    };

    return (
        <div>
            <button onClick={() => { setShowEditForm(prev => !prev) }}>
                <PencilIcon className="w-7 text-gray-900" />
            </button>

            {showEditForm ? <Form submitForm={submitForm} /> : null}
        </div>
    )
}
