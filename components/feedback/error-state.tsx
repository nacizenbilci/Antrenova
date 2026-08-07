type ErrorStateProps = {
  title?: string;
  message?: string;
};

export function ErrorState({
  title = "Bir hata oluştu",
  message = "İşlem tamamlanamadı. Lütfen tekrar deneyin.",
}: ErrorStateProps) {
  return (
    <div
      className="rounded-xl border border-red-200 bg-red-50 p-5"
      role="alert"
    >
      <h3 className="text-sm font-semibold text-red-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-red-700">
        {message}
      </p>
    </div>
  );
}