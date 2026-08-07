"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  CalendarDays,
  ChevronRight,
  CreditCard,
  Dumbbell,
  LayoutDashboard,
  Package,
  Settings,
  Users,
  UserRound,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "İşletmeler",
    href: "/business",
    icon: Building2,
  },
  {
    label: "Şubeler",
    href: "/branches",
    icon: Building2,
  },
  {
    label: "Kullanıcılar",
    href: "/users",
    icon: Users,
  },
  {
    label: "Üyeler",
    href: "/members",
    icon: UserRound,
  },
  {
    label: "Eğitmenler",
    href: "/trainers",
    icon: Dumbbell,
  },
  {
    label: "Paketler",
    href: "/packages",
    icon: Package,
  },
  {
    label: "Takvim",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Finans",
    href: "/finance",
    icon: CreditCard,
  },
  {
    label: "Raporlar",
    href: "/reports",
    icon: BarChart3,
  },
  {
    label: "Ayarlar",
    href: "/settings",
    icon: Settings,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-[264px] shrink-0 border-r border-zinc-200/80 bg-white lg:flex lg:flex-col dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-16 items-center border-b border-zinc-200/80 px-5 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white shadow-sm dark:bg-white dark:text-zinc-950">
            A
          </div>

          <div className="min-w-0">
            <div className="text-[15px] font-semibold tracking-tight text-zinc-950 dark:text-white">
              AntreNova
            </div>

            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Yönetim Platformu
            </div>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-5">
        <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
          Yönetim
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-all",
                  active
                    ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white",
                ].join(" ")}
              >
                <Icon
                  className={[
                    "h-[18px] w-[18px] shrink-0",
                    active
                      ? "text-current"
                      : "text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200",
                  ].join(" ")}
                  strokeWidth={1.8}
                />

                <span className="min-w-0 flex-1 truncate">
                  {item.label}
                </span>

                {active && (
                  <ChevronRight
                    className="h-4 w-4 shrink-0 opacity-70"
                    strokeWidth={1.8}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-zinc-200/80 p-3 dark:border-zinc-800">
        <div className="rounded-xl bg-zinc-50 px-3 py-3 dark:bg-zinc-900/70">
          <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            AntreNova
          </div>

          <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-500">
            Business Management
          </div>
        </div>
      </div>
    </aside>
  );
}