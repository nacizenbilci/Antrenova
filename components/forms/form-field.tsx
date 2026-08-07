import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  description?: string;
  children: ReactNode;
};

export function FormField({
  label,
  name,
  error,
  required = false,
  description,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-neutral-800"
      >
        {label}

        {required && (
          <span
            className="ml-1 text-red-600"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {description && (
        <p className="text-xs text-neutral-500">
          {description}
        </p>
      )}

      {children}

      {error && (
        <p
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}