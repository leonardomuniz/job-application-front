import { SkeletonVariantClasses, type SkeletonProps } from "./ISkeleton";

export default function Skeleton({ 
  className = "", 
  width, 
  height, 
  variant = "rectangular" 
}: SkeletonProps) {


  return (
    <div
      className={`animate-pulse bg-slate-200 ${SkeletonVariantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}