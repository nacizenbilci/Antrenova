"use client";

import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

import {
  Building2,
  ImagePlus,
  Loader2,
  Trash2,
  Upload,
} from "lucide-react";

import {
  removeBusinessLogoAction,
  uploadBusinessLogoAction,
} from "@/lib/business/actions";

import { ConfirmDialog } from "@/components/feedback/confirm-dialog";

type BusinessLogoManagerProps = {
  businessId: string;
  businessName: string;
  initialLogoUrl?: string | null;
};

const MAX_FILE_SIZE =
  2 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export function BusinessLogoManager({
  businessId,
  businessName,
  initialLogoUrl,
}: BusinessLogoManagerProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [logoUrl, setLogoUrl] =
    useState(initialLogoUrl ?? null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState<string | null>(null);

  const [success, setSuccess] =
    useState(false);

  const [pending, setPending] =
    useState(false);

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  const displayedLogo =
    previewUrl ?? logoUrl;

  function clearSelection() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(null);
    setPreviewUrl(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setMessage(null);
    setSuccess(false);

    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    if (
      !ALLOWED_TYPES.includes(file.type)
    ) {
      setMessage(
        "Logo yalnızca JPG, PNG veya WEBP formatında olabilir.",
      );

      event.target.value = "";
      return;
    }

    if (
      file.size <= 0 ||
      file.size > MAX_FILE_SIZE
    ) {
      setMessage(
        "Logo dosyası en fazla 2 MB olabilir.",
      );

      event.target.value = "";
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    setPreviewUrl(
      URL.createObjectURL(file),
    );
  }

  async function handleUpload() {
    if (!selectedFile) {
      setSuccess(false);
      setMessage(
        "Önce bir logo dosyası seçin.",
      );
      return;
    }

    setPending(true);
    setMessage(null);
    setSuccess(false);

    try {
      const result =
        await uploadBusinessLogoAction(
          {
            businessId,
          },
          selectedFile,
        );

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      setLogoUrl(
        result.data.logoUrl,
      );

      clearSelection();

      setSuccess(true);
      setMessage(
        "İşletme logosu başarıyla güncellendi.",
      );
    } catch (error) {
      console.error(
        "Business logo upload error:",
        error,
      );

      setMessage(
        "Logo yüklenirken beklenmeyen bir hata oluştu.",
      );
    } finally {
      setPending(false);
    }
  }

  async function handleRemove() {
    setPending(true);
    setMessage(null);
    setSuccess(false);

    try {
      const result =
        await removeBusinessLogoAction({
          businessId,
        });

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      clearSelection();
      setLogoUrl(null);

      setSuccess(true);
      setMessage(
        "İşletme logosu kaldırıldı.",
      );

      setConfirmOpen(false);
    } catch (error) {
      console.error(
        "Business logo remove error:",
        error,
      );

      setMessage(
        "Logo kaldırılırken beklenmeyen bir hata oluştu.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-subtle">
          {displayedLogo ? (
            // Public Supabase Storage URL.
            // next/image remotePatterns gerektirmemesi
            // için burada standart img kullanıyoruz.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={displayedLogo}
              alt={`${businessName} logosu`}
              className="h-full w-full object-contain p-3"
            />
          ) : (
            <Building2
              className="h-10 w-10 text-muted"
              strokeWidth={1.5}
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div>
            <h3 className="text-sm font-medium text-foreground">
              İşletme Logosu
            </h3>

            <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
              JPG, PNG veya WEBP formatında,
              en fazla 2 MB boyutunda bir logo
              yükleyin.
            </p>
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={handleFileChange}
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={pending}
              onClick={() =>
                inputRef.current?.click()
              }
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ImagePlus
                className="h-4 w-4"
                strokeWidth={1.8}
              />

              {logoUrl
                ? "Logo Seç"
                : "Logo Ekle"}
            </button>

            {selectedFile ? (
              <>
                <button
                  type="button"
                  disabled={pending}
                  onClick={handleUpload}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {pending ? (
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Upload
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  )}

                  {pending
                    ? "Yükleniyor..."
                    : logoUrl
                      ? "Yeni Logoyu Yükle"
                      : "Logoyu Yükle"}
                </button>

                <button
                  type="button"
                  disabled={pending}
                  onClick={clearSelection}
                  className="inline-flex h-10 items-center justify-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground disabled:opacity-50"
                >
                  Seçimi İptal Et
                </button>
              </>
            ) : null}

            {logoUrl &&
            !selectedFile ? (
              <button
                type="button"
                disabled={pending}
                onClick={() =>
                  setConfirmOpen(true)
                }
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-sm font-medium text-danger transition hover:bg-danger-background disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Trash2
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />

                Logoyu Kaldır
              </button>
            ) : null}
          </div>

          {selectedFile ? (
            <div className="mt-3 text-xs text-muted">
              Seçilen dosya:{" "}
              <span className="font-medium text-foreground">
                {selectedFile.name}
              </span>
              {" · "}
              {(
                selectedFile.size /
                1024 /
                1024
              ).toFixed(2)}{" "}
              MB
            </div>
          ) : null}

          {message ? (
            <div
              role="status"
              className={[
                "mt-4 rounded-xl border px-4 py-3 text-sm",
                success
                  ? "border-success/20 bg-success-background text-success"
                  : "border-danger/20 bg-danger-background text-danger",
              ].join(" ")}
            >
              {message}
            </div>
          ) : null}
        </div>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="Logoyu kaldır"
        description={`${businessName} işletmesinin mevcut logosu kaldırılacak. Bu işlemi onaylıyor musunuz?`}
        confirmText="Logoyu Kaldır"
        cancelText="Vazgeç"
        pending={pending}
        onConfirm={handleRemove}
        onCancel={() => {
          if (!pending) {
            setConfirmOpen(false);
          }
        }}
      />
    </>
  );
}