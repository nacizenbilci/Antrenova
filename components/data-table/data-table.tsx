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
      <div className="rounded-xl border border-neutral-200 bg-white">
        {emptyState ?? (
          <div className="p-8 text-center text-sm text-neutral-500">
            Gösterilecek kayıt bulunamadı.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-neutral-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={[
                    "whitespace-nowrap border-b border-neutral-200",
                    "px-4 py-3 text-xs font-semibold",
                    "uppercase tracking-wide text-neutral-500",
                    column.className ?? "",
                  ].join(" ")}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-100">
            {data.map((row) => (
              <tr
                key={getRowKey(row)}
                className="transition-colors hover:bg-neutral-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={[
                      "px-4 py-4 text-sm text-neutral-700",
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