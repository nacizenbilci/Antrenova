import { z } from "zod";

export const uuidSchema = z.uuid(
  "Geçerli bir kimlik bilgisi gerekli."
);

export const emailSchema = z
  .email("Geçerli bir e-posta adresi girin.")
  .max(254, "E-posta adresi çok uzun.");

export const optionalEmailSchema = z
  .union([
    z.literal(""),
    emailSchema,
  ])
  .optional();

export const requiredNameSchema = z
  .string()
  .trim()
  .min(2, "En az 2 karakter girin.")
  .max(120, "En fazla 120 karakter girilebilir.");

export const optionalTextSchema = (
  maxLength = 255
) =>
  z
    .string()
    .trim()
    .max(
      maxLength,
      `En fazla ${maxLength} karakter girilebilir.`
    )
    .optional();

export const slugSchema = z
  .string()
  .trim()
  .min(2, "Slug en az 2 karakter olmalıdır.")
  .max(100, "Slug en fazla 100 karakter olabilir.")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Slug yalnızca küçük harf, rakam ve tire içerebilir."
  );