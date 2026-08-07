export type FormDataObject = Record<
  string,
  string | File
>;

export function formDataToObject(
  formData: FormData
): FormDataObject {
  const result: FormDataObject = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  return result;
}

export function getFormString(
  formData: FormData,
  key: string
): string {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export function getOptionalFormString(
  formData: FormData,
  key: string
): string | undefined {
  const value = getFormString(formData, key);

  return value === "" ? undefined : value;
}