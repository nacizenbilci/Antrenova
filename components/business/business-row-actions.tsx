import Link from "next/link";
import {
  Eye,
  Pencil,
} from "lucide-react";

type BusinessRowActionsProps = {
  businessId: string;
  businessName: string;
  isArchived: boolean;
};

export function BusinessRowActions({
  businessId,
  businessName,
  isArchived,
}: BusinessRowActionsProps) {
  return (
    <div className="flex items-center justify-end gap-1">
      <Link
        href={`/business/${businessId}`}
        title="Görüntüle"
        aria-label={`${businessName} işletmesini görüntüle`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-surface-muted hover:text-foreground"
      >
        <Eye
          className="h-4 w-4"
          strokeWidth={1.8}
        />
      </Link>

      {!isArchived ? (
        <Link
          href={`/business/${businessId}/edit`}
          title="Düzenle"
          aria-label={`${businessName} işletmesini düzenle`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-surface-muted hover:text-foreground"
        >
          <Pencil
            className="h-4 w-4"
            strokeWidth={1.8}
          />
        </Link>
      ) : null}
    </div>
  );
}