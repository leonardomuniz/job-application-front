import type { SelectProps } from "./ISelect";
import Text from "../Typography/Text";

export default function Select({
  label,
  options,

  fullWidth,
  className = "",
  ...props
}: SelectProps) {
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  
  const selectStyles = `
    block px-4 py-2.5 text-base border rounded-lg transition-all duration-200
    bg-white text-slate-900 border-slate-200
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
    disabled:bg-slate-50 disabled:text-slate-500
    ${widthStyles}
    ${className}
  `;

  return (
    <div className={`flex flex-col gap-1.5 ${widthStyles}`}>
      {label && (
        <Text as="label" className="text-sm font-semibold text-slate-700 ml-1">
          {label}
        </Text>
      )}
      
      <div className="relative">
        <select className={selectStyles} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}