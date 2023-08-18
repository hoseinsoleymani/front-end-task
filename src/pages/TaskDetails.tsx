import { useGetTaskQuery } from "@/data-layer/tasks"
import { useParams } from "react-router-dom"
import { FormContainer, FormOverview } from "@/components/shared"
import { DeleteTask, EditTask, Form } from "@/components/pages/Tasks"

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()

    const { data: task, isLoading, error } = useGetTaskQuery(id!)

    if (isLoading || !task) return <h2>loading...</h2>


    return (
        <main className="container">
            <FormContainer>
                <div className="">

                    <FormOverview title={task.title} extraText={task.description} />

                    <div className="flex flex-col gap-y-4 mt-6">
                        <DeleteTask id={id!} />
                        <EditTask id={id!} />
                    </div>
                </div>
            </FormContainer>
        </main>
    )
}

export default TaskDetails
