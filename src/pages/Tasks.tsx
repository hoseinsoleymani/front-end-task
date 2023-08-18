import { TasksSkeleton } from "@/components/pages/Tasks"
import { EmptyMessage } from "@/components/shared"
import { Card } from "@/components/shared/Card/Card"
import { useGetTasksQuery } from "@/data-layer/tasks"

const Tasks = () => {
  const { data: tasks, isLoading } = useGetTasksQuery("")

  if (isLoading || !tasks) return <TasksSkeleton />

  return (
    <main className="container mx-auto">
      {tasks.length !== 0 ?
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{tasks.map(task => <Card {...task} key={task.id} />)}</section>
        : <EmptyMessage>The List Is Empty Please Create First</EmptyMessage>
      }
    </main>
  )
}

export default Tasks