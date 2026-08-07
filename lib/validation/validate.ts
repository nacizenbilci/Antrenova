import { z } from "zod";

import type {
  ActionFieldErrors,
  ActionResult,
} from "@/lib/actions/action-result";

export type ValidationSuccess<T> = {
  success: true;
  data: T;
};

export type ValidationFailure = {
  success: false;
  message: string;
  fieldErrors: ActionFieldErrors;
};

export type ValidationResult<T> =
  | ValidationSuccess<T>
  | ValidationFailure;

export function validateSchema<TSchema extends z.ZodType>(
  schema: TSchema,
  input: unknown
): ValidationResult<z.infer<TSchema>> {
  const result = schema.safeParse(input);

  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  const fieldErrors: ActionFieldErrors = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0];

    if (typeof field !== "string") {
      continue;
    }

    if (!fieldErrors[field]) {
      fieldErrors[field] = [];
    }

    fieldErrors[field].push(issue.message);
  }

  return {
    success: false,
    message: "Lütfen formdaki hataları kontrol edin.",
    fieldErrors,
  };
}

export function validationToActionError(
  result: ValidationFailure
): ActionResult<never> {
  return {
    success: false,
    message: result.message,
    fieldErrors: result.fieldErrors,
  };
}