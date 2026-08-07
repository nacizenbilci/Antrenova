import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "border-b border-border-subtle px-5 py-4 sm:px-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "px-5 py-5 sm:px-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}