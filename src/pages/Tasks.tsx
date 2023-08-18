import { EmptyMessage } from "@/components/shared"
import { Card } from "@/components/shared/Card/Card"
import { useGetTasksQuery } from "@/data-layer/tasks"

const Tasks = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery()

  if (isLoading || !tasks) return <h1>loading...</h1>

  return (
    <main className="container mx-auto">
      {tasks.length !== 0 ?
        <section className="grid grid-cols-4 gap-4">{tasks.map(task => <Card {...task} key={task.id} />)}</section>
        : <EmptyMessage>The List Is Empty Please Create First</EmptyMessage>
      }
    </main>
  )
}

export default Tasks