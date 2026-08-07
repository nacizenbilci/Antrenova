import Link from "next/link";

import {
  DataTable,
  type DataTableColumn,
} from "@/components/data-table/data-table";
import { TableEmpty } from "@/components/data-table/table-empty";

import { requirePlatformAdmin } from "@/lib/auth/permissions";
import {
  listBusinesses,
  type BusinessRecord,
} from "@/lib/repositories/business.repository";

export default async function BusinessPage() {
  await requirePlatformAdmin();

  const businesses = await listBusinesses();

  const columns: DataTableColumn<BusinessRecord>[] = [
    {
      key: "name",
      header: "İşletme",
      render: (business) => (
        <div>
          <div className="font-medium text-neutral-900">
            {business.name}
          </div>

          <div className="mt-1 text-xs text-neutral-500">
            {business.slug}
          </div>
        </div>
      ),
    },

    {
      key: "status",
      header: "Durum",
      render: (business) => (
        <span
          className={[
            "inline-flex rounded-full px-2.5 py-1",
            "text-xs font-medium",
            business.is_active
              ? "bg-green-50 text-green-700"
              : "bg-neutral-100 text-neutral-600",
          ].join(" ")}
        >
          {business.is_active ? "Aktif" : "Pasif"}
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
          className="text-sm font-medium text-neutral-900 hover:underline"
        >
          Görüntüle
        </Link>
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">
            İşletmeler
          </h1>

          <p className="mt-1 text-sm text-neutral-500">
            AntreNova üzerindeki işletmeleri yönetin.
          </p>
        </div>
      </div>

      <DataTable
        data={businesses}
        columns={columns}
        getRowKey={(business) => business.id}
        emptyState={
          <TableEmpty
            title="İşletme bulunamadı"
            description="Henüz sistemde kayıtlı bir işletme bulunmuyor."
          />
        }
      />
    </main>
  );
}