
import { CardVariants, type CardProps } from "./ICard";
import Text from "../Typography/Text";
import Title from "../Typography/Title";
import Subtitle from "../Typography/Subtitle";

export default function Card({
  label,
  value,
  icon,
  description,
  variant = "default",
  className = "",
}: CardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`p-6 rounded-xl shadow-sm border ${CardVariants[variant]} ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <Text className={isPrimary ? "text-indigo-100" : "text-slate-500"}>
          {label}
        </Text>
        {icon}
      </div>
      <Title className={`text-2xl ${isPrimary ? "text-white" : ""}`}>
        {value}
      </Title>
      {description && (
        <Subtitle className="text-xs mt-2">{description}</Subtitle>
      )}
    </div>
  );
}
