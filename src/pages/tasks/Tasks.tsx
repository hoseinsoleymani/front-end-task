import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { EmptyMessage, SearchBox } from '@/components/shared';
import { Card } from '@/components/shared/Card/Card';
import { ListBox } from '@/components/shared/Listbox/Listbox';
import Spinner from '@/components/shared/Spinner';
import type { SortField } from '@/data-layer';
import { useGetTasks } from '@/data-layer';

const listbox = [
  {
    value: 'title',
    id: '1',
  },
  {
    value: 'id',
    id: '2',
  },
];

const Tasks = () => {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState<SortField>('title');

  const [debouncedValue] = useDebounce(filter, 500);

  const { isLoading, data: tasks } = useGetTasks({
    filter: debouncedValue.length >= 3 ? debouncedValue : '',
    isDescending: false,
    sortField,
  });

  return (
    <main className="container mx-auto">
      {isLoading || !tasks ? (
        <div className="mt-10 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <SearchBox filter={filter} setFilter={setFilter} />

            <div className="w-28">
              <ListBox
                items={listbox}
                label="Sort By:"
                selected={sortField}
                setSelected={(value) => {
                  setSortField(value as SortField);
                }}
              />
            </div>
          </div>

          {tasks.data.length !== 0 ? (
            <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tasks.data.map((task) => (
                <Card {...task} key={task.id} />
              ))}
            </section>
          ) : (
            <EmptyMessage>Can't find any task</EmptyMessage>
          )}
        </>
      )}
    </main>
  );
};

export default Tasks;
