type TableEmptyProps = {
  title?: string;
  description?: string;
};

export function TableEmpty({
  title = "Henüz kayıt yok",
  description = "Bu bölümde görüntülenecek herhangi bir kayıt bulunmuyor.",
}: TableEmptyProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center px-6 py-10 text-center">
      <h3 className="text-sm font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-neutral-500">
        {description}
      </p>
    </div>
  );
}