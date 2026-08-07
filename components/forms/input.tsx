import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    hasError?: boolean;
  };

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  {
    className = "",
    hasError = false,
    ...props
  },
  ref
) {
  const borderClass = hasError
    ? "border-red-500 focus:ring-red-500"
    : "border-neutral-300 focus:ring-neutral-900";

  return (
    <input
      ref={ref}
      className={[
        "h-10 w-full rounded-lg border bg-white px-3",
        "text-sm text-neutral-900 outline-none",
        "placeholder:text-neutral-400",
        "focus:ring-2 focus:ring-offset-1",
        "disabled:cursor-not-allowed disabled:bg-neutral-100",
        borderClass,
        className,
      ].join(" ")}
      {...props}
    />
  );
});