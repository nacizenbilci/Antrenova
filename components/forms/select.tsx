import {
  forwardRef,
  type SelectHTMLAttributes,
} from "react";

type SelectProps =
  SelectHTMLAttributes<HTMLSelectElement> & {
    hasError?: boolean;
  };

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select(
  {
    className = "",
    hasError = false,
    children,
    ...props
  },
  ref
) {
  const borderClass = hasError
    ? "border-red-500 focus:ring-red-500"
    : "border-neutral-300 focus:ring-neutral-900";

  return (
    <select
      ref={ref}
      className={[
        "h-10 w-full rounded-lg border bg-white px-3",
        "text-sm text-neutral-900 outline-none",
        "focus:ring-2 focus:ring-offset-1",
        "disabled:cursor-not-allowed disabled:bg-neutral-100",
        borderClass,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </select>
  );
});