import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Pencil,
  Phone,
} from "lucide-react";

import { BusinessActions } from "@/components/business/business-actions";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  getBusinessDetail,
} from "@/lib/repositories/business.repository";

import {
  isBusinessMember,
  isPlatformAdmin,
} from "@/lib/auth/permissions";

type BusinessDetailPageProps = {
  params: Promise<{
    businessId: string;
  }>;
};

export default async function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const { businessId } = await params;

  const platformAdmin = await isPlatformAdmin();
  const businessMember =
    await isBusinessMember(businessId);

  if (!platformAdmin && !businessMember) {
    notFound();
  }

  const detail =
    await getBusinessDetail(businessId);

  if (!detail) {
    notFound();
  }

  const {
    business,
    profile,
    address,
    settings,
    branding,
  } = detail;

  const isArchived =
    business.archived_at !== null;

  const createdAt = formatDateTime(
    business.created_at,
  );

  const updatedAt = formatDateTime(
    business.updated_at,
  );

  const archivedAt = business.archived_at
    ? formatDateTime(business.archived_at)
    : "—";

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/business"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-foreground"
        >
          <ArrowLeft
            className="h-4 w-4"
            strokeWidth={1.8}
          />
          İşletmelere Dön
        </Link>
      </div>

      <section className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)] sm:p-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-surface-muted">
            {branding?.logo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={branding.logo_url}
                alt={`${business.name} logosu`}
                className="h-full w-full object-cover"
              />
            ) : (
              <Building2
                className="h-6 w-6 text-muted-foreground"
                strokeWidth={1.8}
              />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-2xl font-semibold tracking-tight text-foreground">
                {business.name}
              </h1>

              <Badge
                variant={
                  isArchived
                    ? "warning"
                    : business.is_active
                      ? "success"
                      : "muted"
                }
              >
                {isArchived
                  ? "Arşivlenmiş"
                  : business.is_active
                    ? "Aktif"
                    : "Pasif"}
              </Badge>
            </div>

            <p className="mt-1 text-sm text-muted">
              {business.slug}
            </p>

            {profile?.description ? (
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {profile.description}
              </p>
            ) : null}
          </div>
        </div>

        {!isArchived ? (
          <Link
            href={`/business/${business.id}/edit`}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Pencil
              className="h-4 w-4"
              strokeWidth={1.8}
            />
            Düzenle
          </Link>
        ) : null}
      </section>

      <BusinessActions
        businessId={business.id}
        businessName={business.name}
        isActive={business.is_active}
        isArchived={isArchived}
        canArchive={platformAdmin}
      />

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-foreground">
                Kurumsal Bilgiler
              </h2>

              <p className="mt-1 text-sm text-muted">
                İşletmenin ticari ve iletişim
                bilgileri.
              </p>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                <DetailRow
                  label="Ticari Unvan"
                  value={profile?.legal_name}
                />

                <DetailRow
                  label="Vergi Dairesi"
                  value={profile?.tax_office}
                />

                <DetailRow
                  label="Vergi Numarası"
                  value={profile?.tax_number}
                />

                <DetailRow
                  label="E-posta"
                  value={profile?.email}
                  icon={<Mail />}
                />

                <DetailRow
                  label="Telefon"
                  value={profile?.phone}
                  icon={<Phone />}
                />

                <DetailRow
                  label="Web Sitesi"
                  value={profile?.website}
                  icon={<ExternalLink />}
                  href={profile?.website}
                />
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-foreground">
                Adres
              </h2>

              <p className="mt-1 text-sm text-muted">
                İşletmenin merkez adres bilgileri.
              </p>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                <DetailRow
                  label="Ülke Kodu"
                  value={address?.country_code}
                />

                <DetailRow
                  label="Şehir"
                  value={address?.city}
                />

                <DetailRow
                  label="İlçe"
                  value={address?.district}
                />

                <DetailRow
                  label="Posta Kodu"
                  value={address?.postal_code}
                />

                <div className="md:col-span-2">
                  <DetailRow
                    label="Açık Adres"
                    value={address?.address_line}
                    icon={<MapPin />}
                  />
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-foreground">
                Marka
              </h2>

              <p className="mt-1 text-sm text-muted">
                İşletmenin görünür marka bilgileri.
              </p>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                <DetailRow
                  label="Logo URL"
                  value={branding?.logo_url}
                  href={branding?.logo_url}
                />

                <DetailRow
                  label="Açıklama"
                  value={profile?.description}
                />
              </dl>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-foreground">
                Sistem Ayarları
              </h2>

              <p className="mt-1 text-sm text-muted">
                İşletmenin varsayılan bölgesel
                ayarları.
              </p>
            </CardHeader>

            <CardContent>
              <dl className="space-y-6">
                <DetailRow
                  label="Saat Dilimi"
                  value={settings?.timezone}
                  icon={<Clock3 />}
                />

                <DetailRow
                  label="Para Birimi"
                  value={settings?.currency}
                />

                <DetailRow
                  label="Dil"
                  value={settings?.language_code}
                />
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-base font-semibold text-foreground">
                Kayıt Bilgileri
              </h2>

              <p className="mt-1 text-sm text-muted">
                Sistemdeki kayıt ve yaşam döngüsü
                bilgileri.
              </p>
            </CardHeader>

            <CardContent>
              <dl className="space-y-6">
                <DetailRow
                  label="Oluşturulma"
                  value={createdAt}
                />

                <DetailRow
                  label="Son Güncelleme"
                  value={updatedAt}
                />

                <DetailRow
                  label="Arşivlenme"
                  value={archivedAt}
                />

                <DetailRow
                  label="Business ID"
                  value={business.id}
                  mono
                />
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

type DetailRowProps = {
  label: string;
  value?: string | null;
  href?: string | null;
  icon?: React.ReactNode;
  mono?: boolean;
};

function DetailRow({
  label,
  value,
  href,
  icon,
  mono = false,
}: DetailRowProps) {
  const displayValue =
    value && value.trim().length > 0
      ? value
      : "—";

  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.06em] text-muted">
        {label}
      </dt>

      <dd
        className={[
          "mt-2 flex min-w-0 items-start gap-2 text-sm text-foreground",
          mono
            ? "break-all font-mono text-xs"
            : "",
        ].join(" ")}
      >
        {icon ? (
          <span className="mt-0.5 shrink-0 text-muted [&>svg]:h-4 [&>svg]:w-4">
            {icon}
          </span>
        ) : null}

        {href && value ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="min-w-0 break-all font-medium underline-offset-4 transition hover:underline"
          >
            {displayValue}
          </a>
        ) : (
          <span className="min-w-0 break-words">
            {displayValue}
          </span>
        )}
      </dd>
    </div>
  );
}

function formatDateTime(
  value: string,
): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat(
    "tr-TR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  ).format(date);
} 