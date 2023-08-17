import { PropsWithChildren } from 'react'

export const FormContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-[85%] md:w-[50%] lg:w-[480px] shadow-[0_8px_16px_0px_#6264F03D] p-10 mx-auto mt-10 rounded-lg">
            {children}
        </div>
    )
}
