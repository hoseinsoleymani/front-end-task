import { useGetTaskQuery } from "@/data-layer/tasks"
import { useParams } from "react-router-dom"
import { FormContainer, FormOverview } from "@/components/shared"
import { DeleteTask, EditTask } from "@/components/pages/Tasks"
import { Skeleton } from "@/components/shared/Skeleton/Skeleton"

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()

    const { data: task, isLoading, error } = useGetTaskQuery(id!)

    if (isLoading || !task) return <section className="container">
        <FormContainer>
            <div>
                <Skeleton>
                    <Skeleton.Rectangle width="20" height="20" />

                    <div className="flex flex-col gap-y-4 mt-6">
                        <Skeleton.Rectangle width="20" height="20" />
                        <Skeleton.Rectangle width="20" height="20" />
                    </div>
                </Skeleton>
            </div>
        </FormContainer>
    </section>



    return (
        <section className="container">
            <FormContainer>
                <div>
                    <FormOverview title={task!.title} extraText={task!.description} />

                    <div className="flex flex-col gap-y-4 mt-6">
                        <DeleteTask id={id!} />
                        <EditTask id={id!} />
                    </div>
                </div>
            </FormContainer>
        </section>
    )
}

export default TaskDetails
