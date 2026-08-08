"use client";

import Link from "next/link";
import {
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

type BusinessErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function BusinessError({
  error,
  reset,
}: BusinessErrorProps) {
  console.error(
    "Business module error:",
    error,
  );

  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 text-center shadow-[var(--shadow-sm)] sm:p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-danger-background">
          <AlertTriangle
            className="h-5 w-5 text-danger"
            strokeWidth={1.8}
          />
        </div>

        <h2 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
          İşletmeler yüklenemedi
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted">
          İşletme bilgileri alınırken beklenmeyen
          bir sorun oluştu. Tekrar deneyebilir veya
          işletme listesine dönebilirsiniz.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <RefreshCcw
              className="h-4 w-4"
              strokeWidth={1.8}
            />

            Tekrar Dene
          </button>

          <Link
            href="/business"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle"
          >
            İşletmelere Dön
          </Link>
        </div>
      </div>
    </div>
  );
}