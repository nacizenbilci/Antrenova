import { z } from "zod";

import {
  actionError,
  actionSuccess,
  type ActionResult,
} from "@/lib/actions/action-result";

import {
  getCurrentUser,
  hasPermission,
} from "@/lib/auth/permissions";

import type {
  PermissionKey,
} from "@/lib/auth/rbac-types";

import {
  validateSchema,
  validationToActionError,
} from "@/lib/validation/validate";

type AuthenticatedActionContext = {
  userId: string;
};

type BusinessActionContext = {
  userId: string;
  businessId: string;
};

type AuthenticatedActionOptions<
  TSchema extends z.ZodType,
  TResult
> = {
  schema: TSchema;
  input: unknown;

  execute: (
    data: z.infer<TSchema>,
    context: AuthenticatedActionContext
  ) => Promise<TResult>;
};

type BusinessActionOptions<
  TSchema extends z.ZodType,
  TResult
> = {
  schema: TSchema;
  input: unknown;

  permission: PermissionKey;

  getBusinessId: (
    data: z.infer<TSchema>
  ) => string;

  execute: (
    data: z.infer<TSchema>,
    context: BusinessActionContext
  ) => Promise<TResult>;
};

/**
 * Authentication gerektiren standart server action çalıştırıcısı.
 *
 * Akış:
 * Validation -> Authentication -> Execute -> ActionResult
 */
export async function runAuthenticatedAction<
  TSchema extends z.ZodType,
  TResult
>(
  options: AuthenticatedActionOptions<TSchema, TResult>
): Promise<ActionResult<TResult>> {
  const validation = validateSchema(
    options.schema,
    options.input
  );

  if (!validation.success) {
    return validationToActionError(validation);
  }

  const user = await getCurrentUser();

  if (!user) {
    return actionError(
      "Bu işlemi gerçekleştirmek için oturum açmalısınız."
    );
  }

  try {
    const data = await options.execute(
      validation.data,
      {
        userId: user.id,
      }
    );

    return actionSuccess(data);
  } catch (error) {
    console.error(
      "Authenticated server action error:",
      error
    );

    return actionError(
      "İşlem sırasında beklenmeyen bir hata oluştu."
    );
  }
}

/**
 * İşletme seviyesinde permission gerektiren
 * standart server action çalıştırıcısı.
 *
 * Akış:
 * Validation
 * -> Authentication
 * -> Business ID
 * -> Permission
 * -> Execute
 * -> ActionResult
 */
export async function runBusinessAction<
  TSchema extends z.ZodType,
  TResult
>(
  options: BusinessActionOptions<TSchema, TResult>
): Promise<ActionResult<TResult>> {
  const validation = validateSchema(
    options.schema,
    options.input
  );

  if (!validation.success) {
    return validationToActionError(validation);
  }

  const user = await getCurrentUser();

  if (!user) {
    return actionError(
      "Bu işlemi gerçekleştirmek için oturum açmalısınız."
    );
  }

  const businessId = options.getBusinessId(
    validation.data
  );

  const allowed = await hasPermission(
    businessId,
    options.permission
  );

  if (!allowed) {
    return actionError(
      "Bu işlemi gerçekleştirmek için gerekli yetkiye sahip değilsiniz."
    );
  }

  try {
    const data = await options.execute(
      validation.data,
      {
        userId: user.id,
        businessId,
      }
    );

    return actionSuccess(data);
  } catch (error) {
    console.error(
      "Business server action error:",
      error
    );

    return actionError(
      "İşlem sırasında beklenmeyen bir hata oluştu."
    );
  }
}