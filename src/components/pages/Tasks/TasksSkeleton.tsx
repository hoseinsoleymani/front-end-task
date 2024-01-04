import { Skeleton } from '@/components/shared/Skeleton/Skeleton';

export const TasksSkeleton = () => {
  return (
    <main className="container mx-auto">
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Skeleton>
          <Skeleton.Rectangle width="100%" height="200px" borderRadius="10px" />
        </Skeleton>
        <Skeleton>
          <Skeleton.Rectangle width="100%" height="200px" borderRadius="10px" />
        </Skeleton>
        <Skeleton>
          <Skeleton.Rectangle width="100%" height="200px" borderRadius="10px" />
        </Skeleton>
        <Skeleton>
          <Skeleton.Rectangle width="100%" height="200px" borderRadius="10px" />
        </Skeleton>
      </section>
    </main>
  );
};
