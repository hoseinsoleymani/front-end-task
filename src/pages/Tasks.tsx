import { TasksSkeleton } from "@/components/pages/Tasks"
import { EmptyMessage } from "@/components/shared"
import { Card } from "@/components/shared/Card/Card"
import { useLazyGetTasksQuery } from "@/data-layer/tasks"
import { useDebouncedCallback } from "use-debounce";
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"

const Tasks = () => {

  const filter = useSelector((store: RootState) => store.tasks.filter)

  const [trigger, { isLoading, data: tasks }] = useLazyGetTasksQuery()

  useDebouncedCallback(
    () => {
      trigger(filter)
    },
    1000
  );

  if (isLoading || !tasks) return <TasksSkeleton />


  return (
    <main className="container mx-auto">
      {tasks.length !== 0 ?
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{tasks.map(task => <Card {...task} key={task.id} />)}</section>
        : <EmptyMessage>The List Is Empty Please</EmptyMessage>
      }
    </main>
  )
}

export default Tasks