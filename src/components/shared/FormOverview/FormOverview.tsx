interface FormOverviewProps {
  title: string;
  extraText: string;
}

export const FormOverview = ({ title, extraText }: FormOverviewProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-200">{title}</h1>
      <span className="text-base font-normal text-gray-400">{extraText}</span>
    </div>
  );
};
