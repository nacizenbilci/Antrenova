import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    hasError?: boolean;
  };

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
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
    <textarea
      ref={ref}
      className={[
        "min-h-24 w-full resize-y rounded-lg border",
        "bg-white px-3 py-2 text-sm text-neutral-900",
        "outline-none placeholder:text-neutral-400",
        "focus:ring-2 focus:ring-offset-1",
        "disabled:cursor-not-allowed disabled:bg-neutral-100",
        borderClass,
        className,
      ].join(" ")}
      {...props}
    />
  );
});