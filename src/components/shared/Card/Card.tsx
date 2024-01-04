import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';

interface CardProps {
  title: string;
  description: string;
  id: number;
}

export const Card = ({ title, description, id }: CardProps) => {
  return (
    <div className="mt-4 rounded-2xl bg-white p-4 shadow-[0_8px_16px_0px_#6264F03D]">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="my-5 text-gray-400">{description}</p>

      <Button asChild>
        <Link to={`tasks/${id}`}>Show Task Detail</Link>
      </Button>
    </div>
  );
};
