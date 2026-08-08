"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Building2 } from "lucide-react";

import { createBusinessAction } from "@/lib/business/actions";

import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Textarea } from "@/components/forms/textarea";
import { SubmitButton } from "@/components/forms/submit-button";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type FieldErrors = Record<string, string[]>;

export function BusinessCreateForm() {
  const router = useRouter();

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [message, setMessage] =
    useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setFieldErrors({});
    setMessage(null);

    const result = await createBusinessAction({
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

    router.push(
      `/business/${result.data.businessId}`,
    );

    router.refresh();
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/business"
            className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4"
              strokeWidth={1.8}
            />
            İşletmelere Dön
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Yeni İşletme
          </h1>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
            AntreNova platformuna yeni bir işletme
            oluşturun. Zorunlu alanlar yıldız ile
            işaretlenmiştir.
          </p>
        </div>

        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-muted sm:flex">
          <Building2
            className="h-5 w-5 text-muted-foreground"
            strokeWidth={1.8}
          />
        </div>
      </div>

      {message ? (
        <div
          role="alert"
          className="rounded-xl border border-danger/20 bg-danger-background px-4 py-3 text-sm text-danger"
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
            İşletmenin platformdaki temel kimlik ve
            iletişim bilgileri.
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
                autoComplete="organization"
                placeholder="Örn. Nova Fitness"
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
                placeholder="nova-fitness"
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
                placeholder="Nova Fitness Spor Hizmetleri Ltd. Şti."
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
                placeholder="+90 555 000 00 00"
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
                placeholder="info@novafitness.com"
                hasError={Boolean(fieldErrors.email)}
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
                placeholder="https://novafitness.com"
                hasError={Boolean(fieldErrors.website)}
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
                  placeholder="İşletme hakkında kısa açıklama..."
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
            İşletmenin merkez adresini tanımlayın.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              label="Ülke Kodu"
              name="countryCode"
              required
              error={fieldErrors.countryCode?.[0]}
            >
              <Input
                id="countryCode"
                name="countryCode"
                defaultValue="TR"
                maxLength={2}
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
                placeholder="Nevşehir"
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
                autoComplete="postal-code"
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
                  placeholder="Mahalle, cadde, sokak ve bina bilgileri..."
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
            İşletmenin varsayılan saat dilimi, para
            birimi ve dil ayarları.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-5 md:grid-cols-3">
            <FormField
              label="Saat Dilimi"
              name="timezone"
              required
              error={fieldErrors.timezone?.[0]}
            >
              <Input
                id="timezone"
                name="timezone"
                defaultValue="Europe/Istanbul"
                hasError={Boolean(
                  fieldErrors.timezone,
                )}
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
                defaultValue="TRY"
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
              error={fieldErrors.languageCode?.[0]}
            >
              <Select
                id="languageCode"
                name="languageCode"
                defaultValue="tr"
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

      <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
        <Link
          href="/business"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle"
        >
          İptal
        </Link>

        <SubmitButton>
          İşletmeyi Oluştur
        </SubmitButton>
      </div>
    </form>
  );
}