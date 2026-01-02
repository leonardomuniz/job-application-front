import { ToastVariantStyles, type ToastProps } from "./IToast";
import Text from "../Typography/Text";

export default function Toast({
  message,
  variant = "success",
  onClose,
}: ToastProps) {
  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-in slide-in-from-right-full ${ToastVariantStyles[variant]}`}
    >
      <Text className="text-sm font-medium text-inherit">{message}</Text>
      <button onClick={onClose} className="p-1 hover:bg-black/5 rounded">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
