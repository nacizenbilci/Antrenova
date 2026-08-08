"use client";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  pending?: boolean;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "Onayla",
  cancelText = "İptal",
  pending = false,
  danger = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-md)]"
      >
        <h2
          id="confirm-dialog-title"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted">
          {description}
        </p>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={pending}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={pending}
            className={[
              "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50",
              danger
                ? "bg-danger text-white hover:opacity-90"
                : "bg-primary text-primary-foreground hover:opacity-90",
            ].join(" ")}
          >
            {pending ? "İşleniyor..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}