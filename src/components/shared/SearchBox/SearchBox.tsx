import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TextField } from '../TextField/TextField'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { saveFilterValue } from '@/app/tasksSlice';


export const SearchBox = () => {
  const filter = useSelector((store: RootState) => store.tasks.filter)
  const dispatch = useDispatch()


  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(saveFilterValue(value));
  }

  return (
    <form className='flex items-center relative' onSubmit={(e) => {
      e.preventDefault()
    }}>
      <TextField className='w-36 md:w-96 p-0' value={filter} placeholder='Search by title or description...' onChange={InputChangeHandler} />

      <button className='absolute right-4 top-3 hidden md:block'>
        <MagnifyingGlassIcon className='w-7' />
      </button>
    </form>
  )
}
