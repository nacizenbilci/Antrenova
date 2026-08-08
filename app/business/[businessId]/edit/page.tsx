import { notFound } from "next/navigation";

import { BusinessEditForm } from "@/components/business/business-edit-form";

import {
  hasPermission,
  isPlatformAdmin,
} from "@/lib/auth/permissions";

import { PERMISSIONS } from "@/lib/auth/rbac-types";

import {
  getBusinessDetail,
} from "@/lib/repositories/business.repository";

type BusinessEditPageProps = {
  params: Promise<{
    businessId: string;
  }>;
};

export default async function BusinessEditPage({
  params,
}: BusinessEditPageProps) {
  const { businessId } = await params;

  const platformAdmin = await isPlatformAdmin();

  const canUpdate =
    platformAdmin ||
    (await hasPermission(
      businessId,
      PERMISSIONS.BUSINESSES_UPDATE
    ));

  if (!canUpdate) {
    notFound();
  }

  const detail = await getBusinessDetail(businessId);

  if (!detail) {
    notFound();
  }

  return (
  <div className="mx-auto w-full max-w-5xl">
    <BusinessEditForm detail={detail} />
  </div>
);
}