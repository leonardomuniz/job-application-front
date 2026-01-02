export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  onClose: () => void;
}

export const ToastVariantStyles = {
  success: "border-green-200 bg-green-50 text-green-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-blue-200 bg-blue-50 text-blue-800",
  warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
};
