import type { PropsWithChildren } from 'react';

export const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto mt-10 w-[85%] rounded-lg p-10 shadow-[0_8px_16px_0px_#6264F03D] md:w-[50%] lg:w-[480px]">
      {children}
    </div>
  );
};
