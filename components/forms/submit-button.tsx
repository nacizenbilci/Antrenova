"use client";

import {
  useFormStatus,
} from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  pendingText?: string;
  disabled?: boolean;
};

export function SubmitButton({
  children,
  pendingText = "Kaydediliyor...",
  disabled = false,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const isDisabled =
    pending || disabled;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={[
        "inline-flex h-10 items-center justify-center",
        "rounded-lg bg-neutral-900 px-4",
        "text-sm font-medium text-white",
        "transition-opacity",
        "hover:opacity-90",
        "disabled:cursor-not-allowed disabled:opacity-50",
      ].join(" ")}
    >
      {pending ? pendingText : children}
    </button>
  );
}