import { type ReactNode } from "react";

export interface CardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  description?: string; 
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export const CardVariants: Record<string, string> = {
  default: "bg-white border border-slate-200",
  primary: "bg-indigo-600 text-white border-transparent",
  outline: "bg-transparent border-2 border-indigo-600",
};