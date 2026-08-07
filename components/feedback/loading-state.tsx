type LoadingStateProps = {
  label?: string;
};

export function LoadingState({
  label = "Yükleniyor...",
}: LoadingStateProps) {
  return (
    <div
      className="flex min-h-40 items-center justify-center text-sm text-neutral-500"
      aria-live="polite"
    >
      {label}
    </div>
  );
}