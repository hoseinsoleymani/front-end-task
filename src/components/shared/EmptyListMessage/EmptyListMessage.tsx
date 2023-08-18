import { PropsWithChildren } from "react"

export const EmptyMessage = ({ children }: PropsWithChildren) => {
    return (
        <h1 className="text-4xl text-center mt-10 font-bold">{children}</h1>
    )
}
