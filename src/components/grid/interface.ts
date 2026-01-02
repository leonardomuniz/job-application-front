import { type ReactNode } from "react";

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = "sm" | "md" | "lg" | "xl";

export interface GridProps {
  children: ReactNode;
  cols?: GridCols;
  colsSm?: GridCols;
  colsMd?: GridCols;
  colsLg?: GridCols;
  gap?: GridGap;
  className?: string;
}

export const GapStyles: Record<GridGap, string> = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-10",
};

// Mapeamento para garantir que o Tailwind encontre as classes
export const ColsStyles: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};