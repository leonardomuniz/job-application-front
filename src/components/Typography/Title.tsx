import { AlignStyles, ColorStyles, type BaseTypographyProps } from "./ITypography";

export default function Title({ children, className = "", align = "left" }: BaseTypographyProps) {
  return (
    <header>
      <h1 className={`text-4xl font-bold tracking-tight ${ColorStyles} ${AlignStyles[align]} ${className}`}>
        {children}
      </h1>
    </header>
  );
}