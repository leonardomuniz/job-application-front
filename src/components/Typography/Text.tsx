/* eslint-disable @typescript-eslint/no-explicit-any */
import { type BaseTypographyProps, MutedStyles, AlignStyles } from "./ITypography";

export default function Text({ children, className = "", as = "p", align = "left" }: BaseTypographyProps) {
  const Component = as as any;
  return (
    <Component className={`text-base leading-relaxed ${MutedStyles} ${AlignStyles[align]} ${className}`}>
      {children}
    </Component>
  );
}