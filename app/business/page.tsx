import Link from "next/link";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CirclePause,
  Plus,
  Search,
} from "lucide-react";

import {
  DataTable,
  type DataTableColumn,
} from "@/components/data-table/data-table";
import { TableEmpty } from "@/components/data-table/table-empty";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

import { requirePlatformAdmin } from "@/lib/auth/permissions";
import {
  listBusinesses,
  type BusinessRecord,
} from "@/lib/repositories/business.repository";

type BusinessPageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
    page?: string;
  }>;
};

function getStatus(
  value?: string,
):
  | "all"
  | "active"
  | "passive"
  | "archived" {
  if (
    value === "active" ||
    value === "passive" ||
    value === "archived"
  ) {
    return value;
  }

  return "all";
}

function getPage(value?: string) {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
}

function createBusinessListUrl({
  search,
  status,
  page,
}: {
  search: string;
  status: string;
  page: number;
}) {
  const params = new URLSearchParams();

  if (search) {
    params.set("q", search);
  }

  if (status !== "all") {
    params.set("status", status);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();

  return query ? `/business?${query}` : "/business";
}

export default async function BusinessPage({
  searchParams,
}: BusinessPageProps) {
  await requirePlatformAdmin();

  const params = await searchParams;

  const search = params.q?.trim() ?? "";
  const status = getStatus(params.status);
  const page = getPage(params.page);

  const result = await listBusinesses({
    search,
    status,
    page,
    pageSize: 10,
  });

  const businesses = result.data;

  const activeBusinesses = businesses.filter(
    (business) => business.is_active,
  ).length;

  const passiveBusinesses =
    businesses.length - activeBusinesses;

  const columns: DataTableColumn<BusinessRecord>[] = [
    {
      key: "name",
      header: "İşletme",
      render: (business) => (
        <div className="flex min-w-[240px] items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-muted-foreground">
            <Building2
              className="h-[18px] w-[18px]"
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <Link
              href={`/business/${business.id}`}
              className="block truncate font-medium text-foreground transition hover:opacity-70"
            >
              {business.name}
            </Link>

            <div className="mt-0.5 truncate text-xs text-muted">
              {business.slug}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      header: "Durum",
      render: (business) => (
        <Badge
  variant={
    business.archived_at
      ? "warning"
      : business.is_active
        ? "success"
        : "muted"
  }
>
  {business.archived_at
    ? "Arşivlenmiş"
    : business.is_active
      ? "Aktif"
      : "Pasif"}
</Badge>
      ),
    },
    {
      key: "created",
      header: "Oluşturulma",
      render: (business) => (
        <span className="whitespace-nowrap text-sm text-muted">
          {new Intl.DateTimeFormat("tr-TR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(business.created_at))}
        </span>
      ),
    },
    {
      key: "actions",
      header: "",
      className: "text-right",
      render: (business) => (
        <Link
          href={`/business/${business.id}`}
          aria-label={`${business.name} işletmesini görüntüle`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-surface-muted hover:text-foreground"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      ),
    },
  ];

  const previousUrl = createBusinessListUrl({
    search,
    status,
    page: Math.max(1, result.page - 1),
  });

  const nextUrl = createBusinessListUrl({
    search,
    status,
    page: Math.min(result.totalPages, result.page + 1),
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="İşletmeler"
        description="AntreNova platformundaki işletmeleri görüntüleyin ve yönetin."
        actions={
          <Link
            href="/business/new"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
            Yeni İşletme
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">
                Sonuç
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {result.total}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-muted">
              <Building2
                className="h-5 w-5 text-muted-foreground"
                strokeWidth={1.8}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">
                Bu Sayfada Aktif
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {activeBusinesses}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-background">
              <CircleCheck
                className="h-5 w-5 text-success"
                strokeWidth={1.8}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">
                Bu Sayfada Pasif
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {passiveBusinesses}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-muted">
              <CirclePause
                className="h-5 w-5 text-muted"
                strokeWidth={1.8}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <form
          method="GET"
          action="/business"
          className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-sm)] md:flex-row md:items-center"
        >
          <div className="relative min-w-0 flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              strokeWidth={1.8}
            />

            <input
              type="search"
              name="q"
              defaultValue={search}
              placeholder="İşletme adı veya slug ara..."
              className="h-10 w-full rounded-xl border border-border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-muted"
            />
          </div>

          <select
  name="status"
  defaultValue={status}
  className="h-10 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-muted"
>
  <option value="all">
    Tüm Aktif Kayıtlar
  </option>

  <option value="active"> 
    Aktif
  </option>

  <option value="passive">
    Pasif
  </option>

  <option value="archived">
    Arşivlenmiş
  </option>
</select>

          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Filtrele
          </button>

          {(search || status !== "all") && (
            <Link
              href="/business"
              className="inline-flex h-10 items-center justify-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground"
            >
              Temizle
            </Link>
          )}
        </form>

        <div>
          <h3 className="text-base font-semibold text-foreground">
            İşletme Listesi
          </h3>

          <p className="mt-1 text-sm text-muted">
            {result.total === 0
              ? "Filtrelere uygun işletme bulunamadı."
              : `${result.total} kayıt bulundu.`}
          </p>
        </div>

        <DataTable
          data={businesses}
          columns={columns}
          getRowKey={(business) => business.id}
          emptyState={
            <TableEmpty
              title="İşletme bulunamadı"
              description={
                search || status !== "all"
                  ? "Arama veya filtre kriterlerinizi değiştirerek tekrar deneyin."
                  : "Henüz sistemde kayıtlı bir işletme bulunmuyor."
              }
            />
          }
        />

        {result.total > 0 && (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Sayfa {result.page} / {result.totalPages}
              {" · "}
              Toplam {result.total} kayıt
            </p>

            <div className="flex items-center gap-2">
              {result.page > 1 ? (
                <Link
                  href={previousUrl}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-foreground transition hover:bg-surface-subtle"
                >
                  <ChevronLeft
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                  Önceki
                </Link>
              ) : (
                <span className="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-muted opacity-50">
                  <ChevronLeft
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                  Önceki
                </span>
              )}

              {result.page < result.totalPages ? (
                <Link
                  href={nextUrl}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-foreground transition hover:bg-surface-subtle"
                >
                  Sonraki
                  <ChevronRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </Link>
              ) : (
                <span className="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-muted opacity-50">
                  Sonraki
                  <ChevronRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </span>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}