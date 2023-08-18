import { TasksSkeleton } from "@/components/pages/Tasks"
import { EmptyMessage } from "@/components/shared"
import { Card } from "@/components/shared/Card/Card"
import { useLazyGetTasksQuery } from "@/data-layer/tasks"
import { useDebounce } from "use-debounce";
import { useEffect } from 'react';
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"

const Tasks = () => {

  const filter = useSelector((store: RootState) => store.tasks.filter)
  const [debouncedValue] = useDebounce(filter, 500);

  const [trigger, { isLoading, data: tasks }] = useLazyGetTasksQuery()

  useEffect(() => {
    trigger(filter)
  }, [debouncedValue])

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