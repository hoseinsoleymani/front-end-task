import type { PropsWithChildren } from 'react';

export const EmptyMessage = ({ children }: PropsWithChildren) => {
  return <h1 className="mt-10 text-center text-4xl font-bold">{children}</h1>;
};
