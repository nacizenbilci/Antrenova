export type ActionFieldErrors = Record<string, string[]>;

export type ActionResult<T = undefined> =
  | {
      success: true;
      data: T;
      message?: string;
    }
  | {
      success: false;
      message: string;
      fieldErrors?: ActionFieldErrors;
    };

export function actionSuccess<T>(
  data: T,
  message?: string
): ActionResult<T> {
  return {
    success: true,
    data,
    message,
  };
}

export function actionError(
  message: string,
  fieldErrors?: ActionFieldErrors
): ActionResult<never> {
  return {
    success: false,
    message,
    fieldErrors,
  };
}