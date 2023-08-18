import { type PropsWithChildren } from "react";
import { Button } from "../Button/Button";
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
    <div className="bg-white rounded-2xl shadow-[0_8px_16px_0px_#6264F03D] p-4 mt-4">
      <h2 className="font-bold text-2xl">{title}</h2>

      <p className="my-5 text-gray-400">{description}</p>

      <Button asChild>
        <Link to={`tasks/${id}`}>
          Show Task Detail
        </Link>
      </Button>
    </div>
  );
};
