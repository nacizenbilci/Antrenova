import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type {
  PermissionKey,
  RoleKey,
} from "@/lib/auth/rbac-types";

/**
 * Oturum açmış kullanıcıyı döndürür.
 * Kullanıcı yoksa null döner.
 */
export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}

/**
 * Kullanıcı AntreNova platform yöneticisi mi?
 */
export async function isPlatformAdmin(): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("is_platform_admin");

  if (error) {
    console.error("isPlatformAdmin RBAC error:", error);
    return false;
  }

  return data === true;
}

/**
 * Kullanıcı belirtilen işletmenin aktif üyesi mi?
 */
export async function isBusinessMember(
  businessId: string
): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("is_business_member", {
    target_business_id: businessId,
  });

  if (error) {
    console.error("isBusinessMember RBAC error:", error);
    return false;
  }

  return data === true;
}

/**
 * Kullanıcı belirtilen işletmede verilen role sahip mi?
 */
export async function hasBusinessRole(
  businessId: string,
  roleKey: RoleKey
): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("has_business_role", {
    target_business_id: businessId,
    target_role_key: roleKey,
  });

  if (error) {
    console.error("hasBusinessRole RBAC error:", error);
    return false;
  }

  return data === true;
}

/**
 * Kullanıcı belirtilen işletmede verilen permission'a sahip mi?
 *
 * Örnek:
 * hasPermission(businessId, "members.view")
 */
export async function hasPermission(
  businessId: string,
  permissionKey: PermissionKey
): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("has_permission", {
    target_business_id: businessId,
    target_permission_key: permissionKey,
  });

  if (error) {
    console.error("hasPermission RBAC error:", error);
    return false;
  }

  return data === true;
}

/**
 * Kullanıcının belirtilen şubeye erişimi var mı?
 */
export async function hasBranchAccess(
  branchId: string
): Promise<boolean> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("has_branch_access", {
    target_branch_id: branchId,
  });

  if (error) {
    console.error("hasBranchAccess RBAC error:", error);
    return false;
  }

  return data === true;
}



/**
 * Oturum açılmamışsa login sayfasına yönlendirir.
 * Oturum varsa user nesnesini döndürür.
 */
export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}

/**
 * Platform admin erişimi zorunlu kılar.
 */
export async function requirePlatformAdmin() {
  await requireUser();

  const allowed = await isPlatformAdmin();

  if (!allowed) {
    redirect("/unauthorized");
  }
}

/**
 * Belirtilen işletmeye üyelik zorunlu kılar.
 */
export async function requireBusinessMember(
  businessId: string
) {
  await requireUser();

  const allowed = await isBusinessMember(businessId);

  if (!allowed) {
    redirect("/unauthorized");
  }
}

/**
 * Belirtilen permission zorunlu kılar.
 *
 * Örnek:
 * await requirePermission(
 *   businessId,
 *   "members.view"
 * );
 */
export async function requirePermission(
  businessId: string,
  permissionKey: PermissionKey
) {
  await requireUser();

  const allowed = await hasPermission(
    businessId,
    permissionKey
  );

  if (!allowed) {
    redirect("/unauthorized");
  }
}

/**
 * Belirtilen şubeye erişim zorunlu kılar.
 */
export async function requireBranchAccess(
  branchId: string
) {
  await requireUser();

  const allowed = await hasBranchAccess(branchId);

  if (!allowed) {
    redirect("/unauthorized");
  }
}