import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getBusinessDetail,
} from "@/lib/repositories/business.repository";

import {
  isPlatformAdmin,
  isBusinessMember,
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
  const businessMember = await isBusinessMember(businessId);

  if (!platformAdmin && !businessMember) {
    notFound();
  }

  const detail = await getBusinessDetail(businessId);

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

  return (
    <main className="mx-auto max-w-5xl px-6 py-8">
     <div className="mb-8 flex items-start justify-between gap-4">
  <div>
    <Link
      href="/business"
      className="text-sm text-neutral-500 hover:text-neutral-900"
    >
      ← İşletmelere dön
    </Link>

    <h1 className="mt-3 text-2xl font-semibold text-neutral-900">
      {business.name}
    </h1>

    <p className="mt-1 text-sm text-neutral-500">
      {business.slug}
    </p>
  </div>

  <div className="flex items-center gap-3">
    <span
      className={[
        "inline-flex rounded-full px-3 py-1",
        "text-xs font-medium",
        business.is_active
          ? "bg-green-50 text-green-700"
          : "bg-neutral-100 text-neutral-600",
      ].join(" ")}
    >
      {business.is_active ? "Aktif" : "Pasif"}
    </span>

    <Link
      href={`/business/${business.id}/edit`}
      className="inline-flex h-10 items-center rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white"
    >
      Düzenle
    </Link>
  </div>
</div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-base font-semibold text-neutral-900">
            Kurumsal Bilgiler
          </h2>

          <dl className="mt-5 space-y-4 text-sm">
            <DetailRow
              label="Ticari Unvan"
              value={profile?.legal_name}
            />

            <DetailRow
              label="Telefon"
              value={profile?.phone}
            />

            <DetailRow
              label="E-posta"
              value={profile?.email}
            />

            <DetailRow
              label="Web Sitesi"
              value={profile?.website}
            />

            <DetailRow
              label="Vergi Dairesi"
              value={profile?.tax_office}
            />

            <DetailRow
              label="Vergi Numarası"
              value={profile?.tax_number}
            />
          </dl>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-base font-semibold text-neutral-900">
            Adres
          </h2>

          <dl className="mt-5 space-y-4 text-sm">
            <DetailRow
              label="Ülke"
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
              label="Adres"
              value={address?.address_line}
            />

            <DetailRow
              label="Posta Kodu"
              value={address?.postal_code}
            />
          </dl>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-base font-semibold text-neutral-900">
            Sistem Ayarları
          </h2>

          <dl className="mt-5 space-y-4 text-sm">
            <DetailRow
              label="Saat Dilimi"
              value={settings?.timezone}
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
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-base font-semibold text-neutral-900">
            Marka
          </h2>

          <dl className="mt-5 space-y-4 text-sm">
            <DetailRow
              label="Logo"
              value={branding?.logo_url}
            />

            <DetailRow
              label="Açıklama"
              value={profile?.description}
            />
          </dl>
        </section>
      </div>
    </main>
  );
}

type DetailRowProps = {
  label: string;
  value?: string | null;
};

function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        {label}
      </dt>

      <dd className="mt-1 text-neutral-900">
        {value || "—"}
      </dd>
    </div>
  );
}