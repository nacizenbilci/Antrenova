export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard.view",

  MEMBERS_VIEW: "members.view",
  MEMBERS_CREATE: "members.create",
  MEMBERS_UPDATE: "members.update",
  MEMBERS_DELETE: "members.delete",

  TRAINERS_VIEW: "trainers.view",
  TRAINERS_CREATE: "trainers.create",
  TRAINERS_UPDATE: "trainers.update",

  PACKAGES_VIEW: "packages.view",
  PACKAGES_CREATE: "packages.create",
  PACKAGES_UPDATE: "packages.update",

  APPOINTMENTS_VIEW: "appointments.view",
  APPOINTMENTS_CREATE: "appointments.create",
  APPOINTMENTS_UPDATE: "appointments.update",
  APPOINTMENTS_CANCEL: "appointments.cancel",

  ATTENDANCE_VIEW: "attendance.view",
  ATTENDANCE_MANAGE: "attendance.manage",

  PAYMENTS_VIEW: "payments.view",
  PAYMENTS_CREATE: "payments.create",
  PAYMENTS_UPDATE: "payments.update",
  PAYMENTS_REFUND: "payments.refund",

  USERS_VIEW: "users.view",
  USERS_CREATE: "users.create",
  USERS_UPDATE: "users.update",
  USERS_ASSIGN_ROLE: "users.assign_role",

  BUSINESSES_VIEW: "businesses.view",
  BUSINESSES_UPDATE: "businesses.update",

  BRANCHES_VIEW: "branches.view",
  BRANCHES_CREATE: "branches.create",
  BRANCHES_UPDATE: "branches.update",
  BRANCHES_DELETE: "branches.delete",

  REPORTS_VIEW: "reports.view",
  REPORTS_EXPORT: "reports.export",

  SETTINGS_VIEW: "settings.view",
  SETTINGS_UPDATE: "settings.update",
} as const;

export type PermissionKey =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const ROLES = {
  SUPER_ADMIN: "super_admin",
  BUSINESS_OWNER: "business_owner",
  BUSINESS_MANAGER: "business_manager",
  RECEPTIONIST: "receptionist",
  TRAINER: "trainer",
  MEMBER: "member",
  PARENT: "parent",
  ACCOUNTANT: "accountant",
} as const;

export type RoleKey =
  (typeof ROLES)[keyof typeof ROLES];