interface FormOverviewProps {
    title: string;
    extraText: string;
}

export const FormOverview = ({ title, extraText }: FormOverviewProps) => {
    return (
        <div className="mb-10">
            <h1 className="text-primary-200 text-2xl font-bold">
                {title}
            </h1>
            <span className="text-gray-400 text-base font-normal">
                {extraText}
            </span>
        </div>

    )
}
