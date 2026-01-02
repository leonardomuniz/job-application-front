import {
  ButtonBaseStyles,
  ButtonSizes,
  ButtonVariants,
  type ButtonProps,
} from "./interface";
import Text from "../Typography/Text";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  className = "",
  fullWidth,
  ...props
}: ButtonProps) {
  const variantStyles = ButtonVariants[variant];
  const sizeStyles = ButtonSizes[size];
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${ButtonBaseStyles} ${variantStyles} ${sizeStyles} ${className} ${widthStyles}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <Text
        as="span"
        className={`font-semibold ${
          variant === "primary" ? "text-white" : ""
        } flex items-center gap-2`}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 text-current"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Text>
    </button>
  );
}
