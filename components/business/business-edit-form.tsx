"use client";

import { useState } from "react";

import { updateBusinessAction } from "@/lib/business/actions";

import type {
  BusinessDetailRecord,
} from "@/lib/repositories/business.repository";

import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Select } from "@/components/forms/select";
import { SubmitButton } from "@/components/forms/submit-button";

type BusinessEditFormProps = {
  detail: BusinessDetailRecord;
};

type FieldErrors = Record<string, string[]>;

export function BusinessEditForm({
  detail,
}: BusinessEditFormProps) {
  const {
    business,
    profile,
    address,
    settings,
  } = detail;

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [message, setMessage] =
    useState<string | null>(null);

  async function handleSubmit(
    formData: FormData
  ) {
    setFieldErrors({});
    setMessage(null);

    const result = await updateBusinessAction({
      businessId: business.id,

      name: formData.get("name"),
      slug: formData.get("slug"),

      legalName: formData.get("legalName"),
      description: formData.get("description"),

      phone: formData.get("phone"),
      email: formData.get("email"),
      website: formData.get("website"),

      taxOffice: formData.get("taxOffice"),
      taxNumber: formData.get("taxNumber"),

      countryCode: formData.get("countryCode"),
      city: formData.get("city"),
      district: formData.get("district"),
      addressLine: formData.get("addressLine"),
      postalCode: formData.get("postalCode"),

      timezone: formData.get("timezone"),
      currency: formData.get("currency"),
      languageCode: formData.get("languageCode"),
    });

    if (!result.success) {
      setMessage(result.message);

      if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
      }

      return;
    }

    setMessage(
      "İşletme bilgileri başarıyla güncellendi."
    );
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          İşletme Düzenle
        </h1>

        <p className="mt-1 text-sm text-neutral-500">
          İşletmenin temel bilgilerini ve ayarlarını güncelleyin.
        </p>
      </div>

      {message && (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          {message}
        </div>
      )}

      <section className="grid gap-5 rounded-xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
        <FormField
          label="İşletme Adı"
          name="name"
          required
          error={fieldErrors.name?.[0]}
        >
          <Input
            id="name"
            name="name"
            defaultValue={business.name}
            hasError={Boolean(fieldErrors.name)}
          />
        </FormField>

        <FormField
          label="Slug"
          name="slug"
          required
          error={fieldErrors.slug?.[0]}
        >
          <Input
            id="slug"
            name="slug"
            defaultValue={business.slug}
            hasError={Boolean(fieldErrors.slug)}
          />
        </FormField>

        <FormField
          label="Ticari Unvan"
          name="legalName"
          error={fieldErrors.legalName?.[0]}
        >
          <Input
            id="legalName"
            name="legalName"
            defaultValue={profile?.legal_name ?? ""}
          />
        </FormField>

        <FormField
          label="Telefon"
          name="phone"
          error={fieldErrors.phone?.[0]}
        >
          <Input
            id="phone"
            name="phone"
            defaultValue={profile?.phone ?? ""}
          />
        </FormField>

        <FormField
          label="E-posta"
          name="email"
          error={fieldErrors.email?.[0]}
        >
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={profile?.email ?? ""}
          />
        </FormField>

        <FormField
          label="Web Sitesi"
          name="website"
          error={fieldErrors.website?.[0]}
        >
          <Input
            id="website"
            name="website"
            defaultValue={profile?.website ?? ""}
          />
        </FormField>

        <FormField
          label="Vergi Dairesi"
          name="taxOffice"
          error={fieldErrors.taxOffice?.[0]}
        >
          <Input
            id="taxOffice"
            name="taxOffice"
            defaultValue={profile?.tax_office ?? ""}
          />
        </FormField>

        <FormField
          label="Vergi Numarası"
          name="taxNumber"
          error={fieldErrors.taxNumber?.[0]}
        >
          <Input
            id="taxNumber"
            name="taxNumber"
            defaultValue={profile?.tax_number ?? ""}
          />
        </FormField>

        <div className="md:col-span-2">
          <FormField
            label="Açıklama"
            name="description"
            error={fieldErrors.description?.[0]}
          >
            <Textarea
              id="description"
              name="description"
              defaultValue={profile?.description ?? ""}
            />
          </FormField>
        </div>
      </section>

      <section className="grid gap-5 rounded-xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
        <FormField
          label="Ülke Kodu"
          name="countryCode"
          required
          error={fieldErrors.countryCode?.[0]}
        >
          <Input
            id="countryCode"
            name="countryCode"
            maxLength={2}
            defaultValue={address?.country_code ?? "TR"}
          />
        </FormField>

        <FormField
          label="Şehir"
          name="city"
          error={fieldErrors.city?.[0]}
        >
          <Input
            id="city"
            name="city"
            defaultValue={address?.city ?? ""}
          />
        </FormField>

        <FormField
          label="İlçe"
          name="district"
          error={fieldErrors.district?.[0]}
        >
          <Input
            id="district"
            name="district"
            defaultValue={address?.district ?? ""}
          />
        </FormField>

        <FormField
          label="Posta Kodu"
          name="postalCode"
          error={fieldErrors.postalCode?.[0]}
        >
          <Input
            id="postalCode"
            name="postalCode"
            defaultValue={address?.postal_code ?? ""}
          />
        </FormField>

        <div className="md:col-span-2">
          <FormField
            label="Adres"
            name="addressLine"
            error={fieldErrors.addressLine?.[0]}
          >
            <Textarea
              id="addressLine"
              name="addressLine"
              defaultValue={address?.address_line ?? ""}
            />
          </FormField>
        </div>
      </section>

      <section className="grid gap-5 rounded-xl border border-neutral-200 bg-white p-6 md:grid-cols-3">
        <FormField
          label="Saat Dilimi"
          name="timezone"
          required
          error={fieldErrors.timezone?.[0]}
        >
          <Input
            id="timezone"
            name="timezone"
            defaultValue={
              settings?.timezone ??
              "Europe/Istanbul"
            }
          />
        </FormField>

        <FormField
          label="Para Birimi"
          name="currency"
          required
          error={fieldErrors.currency?.[0]}
        >
          <Select
            id="currency"
            name="currency"
            defaultValue={
              settings?.currency ?? "TRY"
            }
          >
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </Select>
        </FormField>

        <FormField
          label="Dil"
          name="languageCode"
          required
          error={fieldErrors.languageCode?.[0]}
        >
          <Select
            id="languageCode"
            name="languageCode"
            defaultValue={
              settings?.language_code ?? "tr"
            }
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </Select>
        </FormField>
      </section>

      <div className="flex justify-end">
        <SubmitButton>
          Değişiklikleri Kaydet
        </SubmitButton>
      </div>
    </form>
  );
}