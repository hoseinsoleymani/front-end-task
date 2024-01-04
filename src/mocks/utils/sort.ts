type InputArr = { title: string; id: number }[];

export type SortField = 'id' | 'title';

interface IAggregate {
  isDescending: boolean;
  sortField: SortField;
}

const sortByAlphabet = (arr: InputArr, isDescending: boolean) =>
  isDescending
    ? arr.sort((a, b) => a.title.localeCompare(b.title))
    : arr.sort((a, b) => b.title.localeCompare(a.title));

const sortById = (arr: InputArr, isDescending: boolean) =>
  isDescending
    ? arr.sort((a, b) => a.id - b.id)
    : arr.sort((a, b) => b.id - a.id);

export const sortTasks = (
  arr: InputArr,
  { isDescending, sortField }: IAggregate,
) => {
  if (sortField === 'id') return sortById(arr, isDescending);
  return sortByAlphabet(arr, isDescending);
};
