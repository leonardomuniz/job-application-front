import { type ReactNode, type ElementType } from "react";

export interface BaseTypographyProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  align?: "left" | "center" | "right";
}

export const ColorStyles = "text-slate-900";
export const MutedStyles = "text-slate-500";
export const AlignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};