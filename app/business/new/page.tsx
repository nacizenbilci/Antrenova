import { BusinessCreateForm } from "@/components/business/business-create-form";
import { requirePlatformAdmin } from "@/lib/auth/permissions";

export default async function BusinessCreatePage() {
  await requirePlatformAdmin();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <BusinessCreateForm />
    </div>
  );
}