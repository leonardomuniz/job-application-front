import {
  AlignStyles,
  MutedStyles,
  type BaseTypographyProps,
} from "./ITypography";

export default function Subtitle({
  children,
  className = "",
  align = "left",
}: BaseTypographyProps) {
  return (
    <h2
      className={`text-xl font-medium ${MutedStyles} ${AlignStyles[align]} ${className}`}
    >
      {children}
    </h2>
  );
}
