import { useParams } from 'react-router-dom';

import {
  DeleteTask,
  EditTask,
  TaskDetailsSkeleton,
} from '@/components/pages/Tasks';
import { FormContainer, FormOverview } from '@/components/shared';
import { useGetTask } from '@/data-layer';

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: task, isLoading } = useGetTask(id!);

  if (isLoading || !task?.data) return <TaskDetailsSkeleton />;

  const { title, description } = task.data;

  return (
    <section className="container">
      <FormContainer>
        <div>
          <FormOverview title={title} extraText={description} />

          <div className="mt-6 flex w-full flex-col items-start gap-y-4">
            <DeleteTask id={id!} />
            <EditTask id={id!} />
          </div>
        </div>
      </FormContainer>
    </section>
  );
};

export default TaskDetails;
