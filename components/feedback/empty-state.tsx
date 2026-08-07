type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center">
      <h3 className="text-sm font-semibold text-neutral-900">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-md text-sm text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
}