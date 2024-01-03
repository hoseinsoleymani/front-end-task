import { TasksSkeleton } from "@/components/pages/Tasks"
import { EmptyMessage, LIMIT, Pagination } from "@/components/shared"
import { Card } from "@/components/shared/Card/Card"
import { useLazyGetTasksQuery } from "@/data-layer/tasks"
import { useDebounce } from "use-debounce";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"

const Tasks = () => {

  const search = useSelector((store: RootState) => store.tasks.filter)
  // const [debouncedValue] = useDebounce(search, 500);
  // const [activePage, setActivePage] = useState("1");
  const [trigger, { isLoading, data: tasks }] = useLazyGetTasksQuery()

  // useEffect(() => {
  //   trigger({ search, _page: activePage, _limit: LIMIT })
  // }, [debouncedValue])


  if (isLoading || !tasks) return <TasksSkeleton />

  const paginationHandler = (data: { selected: number }) => {
    const currentPage = String(data.selected + 1)
    // setActivePage(currentPage)
    trigger({ search, _page: currentPage, _limit: LIMIT })
  }

  useEffect(() => {
    console.log("called")
    fetch("http://127.0.0.1:5173/api/tasks", {
      method: "GET",
    }).then((res) => {
      console.log(res)
    })
  }, [])


  return (
    <main className="container mx-auto">
      {tasks.length !== 0 ?
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{tasks.map(task => <Card {...task} key={task.id} />)}</section>
        : <EmptyMessage>The List Is Empty Please</EmptyMessage>
      }

      <Pagination pageCount={4} paginationHandler={paginationHandler} />
    </main>
  )
}

export default Tasks