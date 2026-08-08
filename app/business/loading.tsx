export default function BusinessLoading() {
  return (
    <div
      className="space-y-6"
      aria-busy="true"
      aria-label="İşletmeler yükleniyor"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-40 animate-pulse rounded-lg bg-surface-muted" />

          <div className="h-4 w-80 max-w-full animate-pulse rounded bg-surface-muted" />
        </div>

        <div className="h-10 w-36 animate-pulse rounded-xl bg-surface-muted" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)]"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 animate-pulse rounded bg-surface-muted" />

                <div className="h-8 w-12 animate-pulse rounded-lg bg-surface-muted" />
              </div>

              <div className="h-11 w-11 animate-pulse rounded-xl bg-surface-muted" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="h-10 flex-1 animate-pulse rounded-xl bg-surface-muted" />

          <div className="h-10 w-full animate-pulse rounded-xl bg-surface-muted md:w-40" />

          <div className="h-10 w-full animate-pulse rounded-xl bg-surface-muted md:w-24" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-5 w-36 animate-pulse rounded bg-surface-muted" />

        <div className="h-4 w-24 animate-pulse rounded bg-surface-muted" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
        <div className="h-12 border-b border-border bg-surface-subtle" />

        <div className="divide-y divide-border-subtle">
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <div
              key={index}
              className="flex h-[73px] items-center gap-4 px-5"
            >
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-xl bg-surface-muted" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-40 animate-pulse rounded bg-surface-muted" />

                <div className="h-3 w-24 animate-pulse rounded bg-surface-muted" />
              </div>

              <div className="hidden h-6 w-16 animate-pulse rounded-full bg-surface-muted sm:block" />

              <div className="hidden h-4 w-24 animate-pulse rounded bg-surface-muted md:block" />

              <div className="h-9 w-20 animate-pulse rounded-lg bg-surface-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}