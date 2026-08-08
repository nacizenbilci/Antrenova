"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Archive,
  CirclePause,
  CirclePlay,
  RotateCcw,
} from "lucide-react";

import {
  archiveBusinessAction,
  restoreBusinessAction,
  setBusinessActiveStatusAction,
} from "@/lib/business/actions";

import { ConfirmDialog } from "@/components/feedback/confirm-dialog";

type BusinessActionsProps = {
  businessId: string;
  businessName: string;
  isActive: boolean;
  isArchived: boolean;
  canArchive: boolean;
};

type PendingAction =
  | "activate"
  | "deactivate"
  | "archive"
  | "restore"
  | null;

export function BusinessActions({
  businessId,
  businessName,
  isActive,
  isArchived,
  canArchive,
}: BusinessActionsProps) {
  const router = useRouter();

  const [pendingAction, setPendingAction] =
    useState<PendingAction>(null);

  const [message, setMessage] =
    useState<string | null>(null);

  const [confirmAction, setConfirmAction] =
    useState<PendingAction>(null);

  async function changeStatus(
    nextIsActive: boolean,
  ) {
    setMessage(null);

    const actionName: PendingAction =
      nextIsActive
        ? "activate"
        : "deactivate";

    setPendingAction(actionName);

    const result =
      await setBusinessActiveStatusAction({
        businessId,
        isActive: nextIsActive,
      });

    setPendingAction(null);
    setConfirmAction(null);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    router.refresh();
  }

  async function archive() {
    setMessage(null);
    setPendingAction("archive");

    const result =
      await archiveBusinessAction({
        businessId,
      });

    setPendingAction(null);
    setConfirmAction(null);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    router.push("/business");
    router.refresh();
  }

  async function restore() {
    setMessage(null);
    setPendingAction("restore");

    const result =
      await restoreBusinessAction({
        businessId,
      });

    setPendingAction(null);
    setConfirmAction(null);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    router.refresh();
  }

  if (isArchived) {
    return (
      <>
        <div className="space-y-3">
          {message ? (
            <div
              role="alert"
              className="rounded-xl border border-danger/20 bg-danger-background px-4 py-3 text-sm text-danger"
            >
              {message}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 rounded-xl border border-warning/20 bg-warning-background px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-warning">
                Bu işletme arşivlenmiş durumda.
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Düzenleme ve durum işlemleri kapalıdır.
                Arşivden çıkarıldığında işletme pasif
                duruma alınacaktır.
              </p>
            </div>

            {canArchive ? (
              <button
                type="button"
                onClick={() =>
                  setConfirmAction("restore")
                }
                disabled={Boolean(pendingAction)}
                className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-50"
              >
                <RotateCcw
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />
                Arşivden Çıkar
              </button>
            ) : null}
          </div>
        </div>

        <ConfirmDialog
          open={confirmAction === "restore"}
          title="İşletmeyi arşivden çıkar?"
          description={`${businessName} arşivden çıkarılacak ve pasif duruma getirilecektir. İşletmeyi daha sonra ayrıca aktifleştirebilirsiniz.`}
          confirmText="Arşivden Çıkar"
          pending={
            pendingAction === "restore"
          }
          onCancel={() =>
            setConfirmAction(null)
          }
          onConfirm={restore}
        />
      </>
    );
  }

  return (
    <>
      <div className="space-y-3">
        {message ? (
          <div
            role="alert"
            className="rounded-xl border border-danger/20 bg-danger-background px-4 py-3 text-sm text-danger"
          >
            {message}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          {isActive ? (
            <button
              type="button"
              onClick={() =>
                setConfirmAction("deactivate")
              }
              disabled={Boolean(pendingAction)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-50"
            >
              <CirclePause
                className="h-4 w-4"
                strokeWidth={1.8}
              />
              Pasife Al
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                setConfirmAction("activate")
              }
              disabled={Boolean(pendingAction)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-50"
            >
              <CirclePlay
                className="h-4 w-4"
                strokeWidth={1.8}
              />
              Aktifleştir
            </button>
          )}

          {canArchive ? (
            <button
              type="button"
              onClick={() =>
                setConfirmAction("archive")
              }
              disabled={Boolean(pendingAction)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-danger/30 bg-danger-background px-4 text-sm font-medium text-danger transition hover:opacity-80 disabled:pointer-events-none disabled:opacity-50"
            >
              <Archive
                className="h-4 w-4"
                strokeWidth={1.8}
              />
              Arşivle
            </button>
          ) : null}
        </div>
      </div>

      <ConfirmDialog
        open={confirmAction === "activate"}
        title="İşletmeyi aktifleştir?"
        description={`${businessName} yeniden aktif duruma getirilecek ve kullanılabilir olacaktır.`}
        confirmText="Aktifleştir"
        pending={
          pendingAction === "activate"
        }
        onCancel={() =>
          setConfirmAction(null)
        }
        onConfirm={() =>
          changeStatus(true)
        }
      />

      <ConfirmDialog
        open={confirmAction === "deactivate"}
        title="İşletmeyi pasife al?"
        description={`${businessName} pasif duruma getirilecek. İşletme silinmeyecek ve daha sonra tekrar aktifleştirilebilecektir.`}
        confirmText="Pasife Al"
        pending={
          pendingAction === "deactivate"
        }
        onCancel={() =>
          setConfirmAction(null)
        }
        onConfirm={() =>
          changeStatus(false)
        }
      />

      <ConfirmDialog
        open={confirmAction === "archive"}
        title="İşletmeyi arşivle?"
        description={`${businessName} arşivlenecek ve aktif kullanımdan kaldırılacaktır. Bu işlem silme değildir ancak normal işletme işlemleri kapatılacaktır.`}
        confirmText="Arşivle"
        danger
        pending={
          pendingAction === "archive"
        }
        onCancel={() =>
          setConfirmAction(null)
        }
        onConfirm={archive}
      />
    </>
  );
}