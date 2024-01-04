import { Listbox } from '@headlessui/react';

export interface ListboxItems {
  value: string;
  id: string;
  displayValue?: string;
  unavailable?: boolean;
  Icon?: any;
}

interface ListboxProps {
  items: ListboxItems[];
  disabled?: boolean;
  label: string;
  setSelected: (value: string) => void;
  selected: string | undefined;
}

export const ListBox = ({
  items,
  label,
  disabled,
  selected,
  setSelected,
  ...props
}: ListboxProps) => {
  return (
    <Listbox
      value={selected}
      onChange={setSelected}
      disabled={disabled}
      {...props}
    >
      <Listbox.Label className="mb-2 flex">{label}</Listbox.Label>
      <Listbox.Button
        placeholder="select..."
        className="flex h-12 w-full justify-between rounded-sm border bg-gray-100 px-4 py-3 text-black hover:bg-white hover:ring-4"
      >
        <span>{selected}</span>
      </Listbox.Button>
      <Listbox.Options className="w-full min-w-[7rem] rounded-sm bg-white shadow-sm">
        {items.map((item) => (
          <Listbox.Option
            key={item.id}
            value={item.value}
            disabled={item.unavailable}
            className="flex h-12 w-full items-center whitespace-nowrap p-4 text-base text-black outline-none  hover:bg-gray-100 active:bg-gray-100"
          >
            {item.Icon ? <item.Icon className="mr-3 text-base" /> : null}
            {item.displayValue ? item.displayValue : item.value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
