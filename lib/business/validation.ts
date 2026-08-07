import { z } from "zod";

import {
  emailSchema,
  requiredNameSchema,
  slugSchema,
  uuidSchema,
} from "@/lib/validation/common";

const optionalTrimmedText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(
      maxLength,
      `En fazla ${maxLength} karakter girilebilir.`
    )
    .optional()
    .or(z.literal(""));

const optionalUrlSchema = z
  .string()
  .trim()
  .max(500, "Web adresi çok uzun.")
  .optional()
  .or(z.literal(""))
  .refine(
    (value) => {
      if (!value) {
        return true;
      }

      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    {
      message: "Geçerli bir web adresi girin.",
    }
  );

export const updateBusinessSchema = z.object({
  businessId: uuidSchema,

  name: requiredNameSchema,
  slug: slugSchema,

  legalName: optionalTrimmedText(200),
  description: optionalTrimmedText(1000),

  phone: optionalTrimmedText(30),

  email: z
    .union([
      z.literal(""),
      emailSchema,
    ])
    .optional(),

  website: optionalUrlSchema,

  taxOffice: optionalTrimmedText(120),
  taxNumber: optionalTrimmedText(50),

  countryCode: z
    .string()
    .trim()
    .length(
      2,
      "Ülke kodu 2 karakter olmalıdır."
    )
    .transform((value) => value.toUpperCase()),

  city: optionalTrimmedText(120),
  district: optionalTrimmedText(120),
  addressLine: optionalTrimmedText(500),
  postalCode: optionalTrimmedText(20),

  timezone: z
    .string()
    .trim()
    .min(1, "Saat dilimi zorunludur.")
    .max(100),

  currency: z
    .string()
    .trim()
    .length(
      3,
      "Para birimi kodu 3 karakter olmalıdır."
    )
    .transform((value) => value.toUpperCase()),

  languageCode: z
    .string()
    .trim()
    .min(2)
    .max(10)
    .transform((value) => value.toLowerCase()),
});

export type UpdateBusinessSchema =
  z.infer<typeof updateBusinessSchema>;