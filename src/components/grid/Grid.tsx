import { ColsStyles, GapStyles, type GridProps } from "./interface";

export default function Grid({
  children,
  cols = 1,
  colsSm,
  colsMd,
  colsLg,
  gap = "md",
  className = "",
}: GridProps) {
  const classes = [
    "grid",
    ColsStyles[cols],
    colsSm ? `sm:${ColsStyles[colsSm]}` : "",
    colsMd ? `md:${ColsStyles[colsMd]}` : "",
    colsLg ? `lg:${ColsStyles[colsLg]}` : "",
    GapStyles[gap],
    className,
  ].join(" ");

  return <div className={classes}>{children}</div>;
}