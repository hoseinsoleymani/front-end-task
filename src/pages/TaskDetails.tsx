import { useGetTaskQuery } from "@/data-layer/tasks"
import { useParams } from "react-router-dom"
import { FormContainer, FormOverview } from "@/components/shared"
import { DeleteTask, EditTask, TaskDetailsSkeleton } from "@/components/pages/Tasks"

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()

    const { data: task, isLoading } = useGetTaskQuery(id!)

    if (isLoading || !task) return <TaskDetailsSkeleton />

    return (
        <section className="container">
            <FormContainer>
                <div>
                    <FormOverview title={task!.title} extraText={task!.description} />

                    <div className="flex flex-col items-start gap-y-4 mt-6">
                        <DeleteTask id={id!} />
                        <EditTask id={id!} />
                    </div>
                </div>
            </FormContainer>
        </section>
    )
}

export default TaskDetails
