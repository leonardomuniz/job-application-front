import type { ReactNode } from "react";

export type TagVariant = "success" | "warning" | "error" | "info" | "neutral";

export interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

export const TagVariants: Record<TagVariant, string> = {
  success: "bg-green-100 text-green-700 border-green-200",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
  error: "bg-red-100 text-red-700 border-red-200",
  info: "bg-blue-100 text-blue-700 border-blue-200",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
};