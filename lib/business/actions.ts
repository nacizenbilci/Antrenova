"use server";

import { revalidatePath } from "next/cache";

import { runBusinessAction } from "@/lib/actions/action-runner";
import { PERMISSIONS } from "@/lib/auth/rbac-types";
import { updateBusiness } from "@/lib/repositories/business.repository";
import { updateBusinessSchema } from "@/lib/business/validation";

export async function updateBusinessAction(
  input: unknown
) {
  return runBusinessAction({
    schema: updateBusinessSchema,
    input,

    permission: PERMISSIONS.BUSINESSES_UPDATE,

    getBusinessId: (data) => data.businessId,

    execute: async (data) => {
      const businessId = await updateBusiness(data);

      revalidatePath("/");
      revalidatePath("/business");
      revalidatePath(`/business/${businessId}`);

      return {
        businessId,
      };
    },
  });
}