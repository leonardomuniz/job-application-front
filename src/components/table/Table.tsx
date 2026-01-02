import type { ReactNode } from "react";
import { type TableProps } from "./ITable";
import Text from "../Typography/Text";

export default function Table<T>({ columns, data, onRowClick, className = "" }: TableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto rounded-xl border border-slate-200 bg-white ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/50">
            {columns.map((col, index) => (
              <th key={index} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''}`}>
                <Text className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {col.header}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((item, rowIndex) => (
            <tr 
              key={rowIndex}
              onClick={() => onRowClick?.(item)}
              className={`group transition-colors ${onRowClick ? "cursor-pointer hover:bg-slate-50" : ""}`}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  <Text className="text-sm">
                    {typeof col.accessor === "function" 
                      ? col.accessor(item) 
                      : (item[col.accessor] as ReactNode)}
                  </Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}