export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "circular" | "rectangular";
}

export const SkeletonVariantClasses = {
  text: "rounded-md",
  circular: "rounded-full",
  rectangular: "rounded-lg",
};
