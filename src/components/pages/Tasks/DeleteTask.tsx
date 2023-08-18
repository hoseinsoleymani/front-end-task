import { useDeleteTaskMutation } from "@/data-layer/tasks"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

interface DeleteTaskProps {
    id: string
}

export const DeleteTask = ({ id }: DeleteTaskProps) => {
    const [deleteTask] = useDeleteTaskMutation()
    const navigate = useNavigate()

    const deleteTaskHandler = () => {
        deleteTask(id!)
        navigate("/")
    }

    return (
        <button onClick={deleteTaskHandler}>
            <TrashIcon className="w-7 text-red-600" />
        </button>
    )
}
