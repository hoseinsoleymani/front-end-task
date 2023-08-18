import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TextField } from '../TextField/TextField'
import { useDebounce } from "use-debounce";
import { useEffect, useState } from 'react';


export const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  }

  // useEffect(() => {
  //   trigger(debouncedValue)
  // }, [debouncedValue])

  return (
    <form className='flex items-center relative'>
      <TextField className='w-36 md:w-96 p-0' value={inputValue} placeholder='Search by title or description...' onChange={InputChangeHandler} />

      <button className='absolute right-4 top-3 hidden md:block'>
        <MagnifyingGlassIcon className='w-7' />
      </button>
    </form>
  )
}
