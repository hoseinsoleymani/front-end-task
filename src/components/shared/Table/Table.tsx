import { type PropsWithChildren } from "react";

interface TableProps {
  tableHeader: {
    id: number;
    name: string;
  }[];
}

export const Table = ({
  tableHeader,
  children,
}: PropsWithChildren<TableProps>) => {
  return (
    <div className="overflow-x-auto xl:overflow-visible">
      <table className="min-w-full max-w-[79rem] xl:w-full">
        <thead>
          <tr className="bg-[#F4F6F8] rounded-lg">
            {tableHeader.map((item, index) => (
              <td
                key={item.id}
                className={`p-4 bg-[#F4F6F8] text-gray-400 text-sm font-semibold ${
                  index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
                } ${
                  index === tableHeader.length - 1
                    ? "rounded-tr-lg rounded-br-lg"
                    : ""
                }`}
              >
                {item.name}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export const TableCol = ({
  children,
  classNames,
}: PropsWithChildren<{ classNames?: string }>) => (
  <td className={`px-6 py-4 ${classNames}`}>{children}</td>
);

export const TableRow = ({
  children,
  index,
  className,
}: PropsWithChildren<{ index: number; className?: string }>) => (
  <tr className={`${index % 2 === 0 ? undefined : "bg-gray-50"} ${className}`}>
    {children}
  </tr>
);
