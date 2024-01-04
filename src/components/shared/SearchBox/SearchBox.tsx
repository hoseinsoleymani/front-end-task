import type { Dispatch, SetStateAction } from 'react';

import { TextField } from '../TextField/TextField';

interface Props {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const SearchBox = ({ filter, setFilter }: Props) => {
  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
  };

  return (
    <form className="relative flex items-center">
      <TextField
        className="w-36 p-0 md:w-96"
        label="please search your task"
        value={filter}
        placeholder="Search by title or description..."
        onChange={InputChangeHandler}
      />
    </form>
  );
};
