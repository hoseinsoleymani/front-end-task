import { type PropsWithChildren } from "react";
import { Button } from "..";
import { Link } from "react-router-dom";


interface CardProps {
  title: string;
  description: string;
  id: string;
}

export const Card = ({
  title,
  description,
  id,
}: PropsWithChildren<CardProps>) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_12px_24px_-4px_#919EAB1F] w-full">
      <h2>{title}</h2>

      <p>{description}</p>

      <Button asChild>
        <Link to={`tasks/:${id}`}>
          Show Task Detail
        </Link>
      </Button>
    </div>
  );
};
