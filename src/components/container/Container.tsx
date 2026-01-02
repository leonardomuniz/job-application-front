import { ContainerMaxWidths, type ContainerProps } from "./interface";

export default function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 w-full ${ContainerMaxWidths[size]} ${className}`}
    >
      {children}
    </div>
  );
}
