import { TagVariants, type TagProps } from "./interface";
import { Text } from "../Typography/Text";

export function Tag({ children, variant = "neutral", className = "" }: TagProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-medium ${TagVariants[variant]} ${className}`}>
      <Text as="span" className="text-inherit font-bold">
        {children}
      </Text>
    </span>
  );
}