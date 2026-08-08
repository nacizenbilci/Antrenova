"use server";

import { revalidatePath } from "next/cache";

import {
  runAuthenticatedAction,
  runBusinessAction,
} from "@/lib/actions/action-runner";

import {
  isPlatformAdmin,
} from "@/lib/auth/permissions";

import { PERMISSIONS } from "@/lib/auth/rbac-types";

import {
  archiveBusiness,
  createBusiness,
  removeBusinessLogo,
  setBusinessActiveStatus,
  updateBusiness,
  uploadBusinessLogo,
  restoreBusiness,
} from "@/lib/repositories/business.repository";

import {
  archiveBusinessSchema,
  businessLogoSchema,
  createBusinessSchema,
  setBusinessActiveStatusSchema,
  updateBusinessSchema,
  restoreBusinessSchema,
} from "@/lib/business/validation";

export async function createBusinessAction(
  input: unknown,
) {
  return runAuthenticatedAction({
    schema: createBusinessSchema,
    input,

    execute: async (data) => {
      const platformAdmin =
        await isPlatformAdmin();

      if (!platformAdmin) {
        return Promise.reject(
          new Error("PLATFORM_ADMIN_REQUIRED"),
        );
      }

      const businessId =
        await createBusiness(data);

      revalidatePath("/");
      revalidatePath("/business");

      return {
        businessId,
      };
    },
  });
}

export async function updateBusinessAction(
  input: unknown,
) {
  return runBusinessAction({
    schema: updateBusinessSchema,
    input,

    permission:
      PERMISSIONS.BUSINESSES_UPDATE,

    getBusinessId: (data) =>
      data.businessId,

    execute: async (data) => {
      const businessId =
        await updateBusiness(data);

      revalidatePath("/");
      revalidatePath("/business");
      revalidatePath(
        `/business/${businessId}`,
      );

      return {
        businessId,
      };
    },
  });
}

export async function setBusinessActiveStatusAction(
  input: unknown,
) {
  return runBusinessAction({
    schema: setBusinessActiveStatusSchema,
    input,

    permission:
      PERMISSIONS.BUSINESSES_UPDATE,

    getBusinessId: (data) =>
      data.businessId,

    execute: async (data) => {
      const businessId =
        await setBusinessActiveStatus(data);

      revalidatePath("/");
      revalidatePath("/business");
      revalidatePath(
        `/business/${businessId}`,
      );

      return {
        businessId,
      };
    },
  });
}

export async function archiveBusinessAction(
  input: unknown,
) {
  return runAuthenticatedAction({
    schema: archiveBusinessSchema,
    input,

    execute: async (data) => {
      const platformAdmin =
        await isPlatformAdmin();

      if (!platformAdmin) {
        throw new Error(
          "PLATFORM_ADMIN_REQUIRED",
        );
      }

      const businessId =
        await archiveBusiness(data);

      revalidatePath("/");
      revalidatePath("/business");
      revalidatePath(
        `/business/${businessId}`,
      );

      return {
        businessId,
      };
    },
  });
}

export async function uploadBusinessLogoAction(
  input: unknown,
  file: File,
) {
  return runBusinessAction({
    schema: businessLogoSchema,
    input,

    permission:
      PERMISSIONS.BUSINESSES_UPDATE,

    getBusinessId: (data) =>
      data.businessId,

    execute: async (data) => {
      const logoUrl =
        await uploadBusinessLogo(
          data,
          file,
        );

      revalidatePath("/business");
      revalidatePath(
        `/business/${data.businessId}`,
      );
      revalidatePath(
        `/business/${data.businessId}/edit`,
      );

      return {
        businessId:
          data.businessId,
        logoUrl,
      };
    },
  });
}

export async function removeBusinessLogoAction(
  input: unknown,
) {
  return runBusinessAction({
    schema: businessLogoSchema,
    input,

    permission:
      PERMISSIONS.BUSINESSES_UPDATE,

    getBusinessId: (data) =>
      data.businessId,

    execute: async (data) => {
      await removeBusinessLogo(
        data,
      );

      revalidatePath("/business");
      revalidatePath(
        `/business/${data.businessId}`,
      );
      revalidatePath(
        `/business/${data.businessId}/edit`,
      );

      return {
        businessId:
          data.businessId,
      };
    },
  });
}

export async function restoreBusinessAction(
  input: unknown,
) {
  return runAuthenticatedAction({
    schema: restoreBusinessSchema,
    input,

    execute: async (data) => {
      const platformAdmin =
        await isPlatformAdmin();

      if (!platformAdmin) {
        throw new Error(
          "PLATFORM_ADMIN_REQUIRED",
        );
      }

      const businessId =
        await restoreBusiness(data);

      revalidatePath("/");
      revalidatePath("/business");
      revalidatePath(
        `/business/${businessId}`,
      );

      return {
        businessId,
      };
    },
  });
}