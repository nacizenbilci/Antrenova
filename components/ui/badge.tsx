import type { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "muted";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-surface-muted text-foreground",
  success:
    "bg-success-background text-success",
  warning:
    "bg-warning-background text-warning",
  danger:
    "bg-danger-background text-danger",
  muted:
    "bg-surface-muted text-muted-foreground",
};

export function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium",
        variantClasses[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}