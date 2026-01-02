import { type InputProps } from "./IInput";
import Text from "../Typography/Text";

export default function Input({
  label,
  error,
  icon,
  fullWidth,
  className = "",
  ...props
}: InputProps) {
  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <div className={`flex flex-col gap-1.5 ${widthStyles}`}>
      {label && (
        <Text className="text-sm font-semibold text-slate-700 ml-1">
          {label}
        </Text>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-slate-400">
            {icon}
          </div>
        )}
        <input
          className={`
            block px-4 py-2.5 text-base border rounded-lg transition-all duration-200
            bg-white text-slate-900 border-slate-200
            placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500
            ${icon ? "pl-10" : ""} 
            ${error ? "border-red-500 focus:ring-red-500" : "hover:border-slate-300"}
            ${widthStyles}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <Text className="text-xs text-red-500 ml-1 font-medium">
          {error}
        </Text>
      )}
    </div>
  );
}