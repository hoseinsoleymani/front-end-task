import { FormContainer } from '@/components/shared';
import { Skeleton } from '@/components/shared/Skeleton/Skeleton';

export const TaskDetailsSkeleton = () => {
  return (
    <section className="container">
      <FormContainer>
        <div>
          <Skeleton>
            <Skeleton.Rectangle
              width="100%"
              height="100px"
              borderRadius="10px"
            />

            <div className="mt-6 flex flex-col gap-y-4">
              <Skeleton.Rectangle
                width="30px"
                height="30px"
                borderRadius="6px"
              />
              <Skeleton.Rectangle
                width="30px"
                height="30px"
                borderRadius="6px"
              />
            </div>
          </Skeleton>
        </div>
      </FormContainer>
    </section>
  );
};
