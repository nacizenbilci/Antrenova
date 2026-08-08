"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";

import { updateBusinessAction } from "@/lib/business/actions";
import { BusinessLogoManager } from "@/components/business/business-logo-manager";
import type {
  BusinessDetailRecord,
} from "@/lib/repositories/business.repository";

import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Select } from "@/components/forms/select";
import { SubmitButton } from "@/components/forms/submit-button";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

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
     branding,
  } = detail;

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [message, setMessage] =
    useState<string | null>(null);

  const [success, setSuccess] =
    useState(false);

  async function handleSubmit(
    formData: FormData,
  ) {
    setFieldErrors({});
    setMessage(null);
    setSuccess(false);

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

    setSuccess(true);
    setMessage(
      "İşletme bilgileri başarıyla güncellendi.",
    );
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-6"
    >
      <div>
        <Link
          href={`/business/${business.id}`}
          className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-foreground"
        >
          <ArrowLeft
            className="h-4 w-4"
            strokeWidth={1.8}
          />
          İşletmeye Dön
        </Link>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          İşletme Düzenle
        </h1>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
          {business.name} işletmesinin temel
          bilgilerini, adresini ve bölgesel ayarlarını
          güncelleyin.
        </p>
      </div>

      {message ? (
        <div
          role="alert"
          className={[
            "rounded-xl border px-4 py-3 text-sm",
            success
              ? "border-success/20 bg-success-background text-success"
              : "border-danger/20 bg-danger-background text-danger",
          ].join(" ")}
        >
          {message}
        </div>
      ) : null}

      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-foreground">
            Temel Bilgiler
          </h2>

          <p className="mt-1 text-sm text-muted">
            İşletmenin platformdaki temel kimlik,
            iletişim ve ticari bilgileri.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-5 md:grid-cols-2">
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
                autoComplete="organization"
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
                autoCapitalize="none"
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
                defaultValue={
                  profile?.legal_name ?? ""
                }
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
                type="tel"
                autoComplete="tel"
                defaultValue={
                  profile?.phone ?? ""
                }
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
                autoComplete="email"
                defaultValue={
                  profile?.email ?? ""
                }
                hasError={Boolean(
                  fieldErrors.email,
                )}
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
                type="url"
                defaultValue={
                  profile?.website ?? ""
                }
                hasError={Boolean(
                  fieldErrors.website,
                )}
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
                defaultValue={
                  profile?.tax_office ?? ""
                }
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
                defaultValue={
                  profile?.tax_number ?? ""
                }
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField
                label="Açıklama"
                name="description"
                error={
                  fieldErrors.description?.[0]
                }
              >
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={
                    profile?.description ?? ""
                  }
                />
              </FormField>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-foreground">
            Adres Bilgileri
          </h2>

          <p className="mt-1 text-sm text-muted">
            İşletmenin merkez adres bilgilerini
            güncelleyin.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              label="Ülke Kodu"
              name="countryCode"
              required
              error={
                fieldErrors.countryCode?.[0]
              }
            >
              <Input
                id="countryCode"
                name="countryCode"
                maxLength={2}
                defaultValue={
                  address?.country_code ?? "TR"
                }
                hasError={Boolean(
                  fieldErrors.countryCode,
                )}
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
                autoComplete="address-level1"
                defaultValue={
                  address?.city ?? ""
                }
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
                autoComplete="address-level2"
                defaultValue={
                  address?.district ?? ""
                }
              />
            </FormField>

            <FormField
              label="Posta Kodu"
              name="postalCode"
              error={
                fieldErrors.postalCode?.[0]
              }
            >
              <Input
                id="postalCode"
                name="postalCode"
                autoComplete="postal-code"
                defaultValue={
                  address?.postal_code ?? ""
                }
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField
                label="Adres"
                name="addressLine"
                error={
                  fieldErrors.addressLine?.[0]
                }
              >
                <Textarea
                  id="addressLine"
                  name="addressLine"
                  defaultValue={
                    address?.address_line ?? ""
                  }
                />
              </FormField>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-foreground">
            Bölgesel Ayarlar
          </h2>

          <p className="mt-1 text-sm text-muted">
            Saat dilimi, para birimi ve varsayılan
            dil ayarlarını yönetin.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-5 md:grid-cols-3">
            <FormField
              label="Saat Dilimi"
              name="timezone"
              required
              error={
                fieldErrors.timezone?.[0]
              }
            >
              <Input
                id="timezone"
                name="timezone"
                defaultValue={
                  settings?.timezone ??
                  "Europe/Istanbul"
                }
                hasError={Boolean(
                  fieldErrors.timezone,
                )}
              />
            </FormField>

            <FormField
              label="Para Birimi"
              name="currency"
              required
              error={
                fieldErrors.currency?.[0]
              }
            >
              <Select
                id="currency"
                name="currency"
                defaultValue={
                  settings?.currency ?? "TRY"
                }
              >
                <option value="TRY">
                  TRY — Türk Lirası
                </option>
                <option value="USD">
                  USD — Amerikan Doları
                </option>
                <option value="EUR">
                  EUR — Euro
                </option>
              </Select>
            </FormField>

            <FormField
              label="Dil"
              name="languageCode"
              required
              error={
                fieldErrors.languageCode?.[0]
              }
            >
              <Select
                id="languageCode"
                name="languageCode"
                defaultValue={
                  settings?.language_code ?? "tr"
                }
              >
                <option value="tr">
                  Türkçe
                </option>
                <option value="en">
                  English
                </option>
              </Select>
            </FormField>
          </div>
        </CardContent>
      </Card>

      <Card>
  <CardHeader>
    <h2 className="text-base font-semibold text-foreground">
      Marka
    </h2>

    <p className="mt-1 text-sm text-muted">
      İşletmenin AntreNova içerisinde
      kullanılacak kurumsal logosunu yönetin.
    </p>
  </CardHeader>

  <CardContent>
    <BusinessLogoManager
      businessId={business.id}
      businessName={business.name}
      initialLogoUrl={
        branding?.logo_url ?? null
      }
    />
  </CardContent>
</Card>

      <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
        <Link
          href={`/business/${business.id}`}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle"
        >
          İptal
        </Link>

        <SubmitButton>
          <Save
            className="h-4 w-4"
            strokeWidth={1.8}
          />
          Değişiklikleri Kaydet
        </SubmitButton>
      </div>
    </form>
  );
}