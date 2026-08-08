import type { ReactNode } from "react";

export type DataTableColumn<T> = {
  key: string;
  header: string;
  className?: string;
  render: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: DataTableColumn<T>[];
  getRowKey: (row: T) => string;
  emptyState?: ReactNode;
};

export function DataTable<T>({
  data,
  columns,
  getRowKey,
  emptyState,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
        {emptyState ?? (
          <div className="px-6 py-16 text-center text-sm text-muted">
            Gösterilecek kayıt bulunamadı.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-surface-subtle">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={[
                    "whitespace-nowrap border-b border-border-subtle",
                    "px-5 py-3.5 text-[11px] font-semibold",
                    "uppercase tracking-[0.08em] text-muted",
                    column.className ?? "",
                  ].join(" ")}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-border-subtle">
            {data.map((row) => (
              <tr
                key={getRowKey(row)}
                className="transition-colors hover:bg-surface-subtle"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={[
                      "px-5 py-4 text-sm text-muted-foreground",
                      column.className ?? "",
                    ].join(" ")}
                  >
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}