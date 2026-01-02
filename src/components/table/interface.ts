import type { ReactNode } from "react";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  align?: "left" | "center" | "right";
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  className?: string;
}