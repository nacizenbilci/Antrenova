"use client";

import { Bell, Moon, Search, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const routeTitles: Record<string, string> = {
  "/": "Dashboard",
  "/business": "İşletmeler",
  "/branches": "Şubeler",
  "/users": "Kullanıcılar",
  "/members": "Üyeler",
  "/trainers": "Eğitmenler",
  "/packages": "Paketler",
  "/calendar": "Takvim",
  "/finance": "Finans",
  "/reports": "Raporlar",
  "/settings": "Ayarlar",
};

function getPageTitle(pathname: string) {
  const exactMatch = routeTitles[pathname];

  if (exactMatch) {
    return exactMatch;
  }

  const matchingRoute = Object.keys(routeTitles)
    .filter((route) => route !== "/")
    .sort((a, b) => b.length - a.length)
    .find((route) => pathname.startsWith(`${route}/`));

  return matchingRoute ? routeTitles[matchingRoute] : "AntreNova";
}

export function Topbar() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span>AntreNova</span>
            <span>/</span>
            <span className="truncate">{pageTitle}</span>
          </div>

          <h1 className="mt-0.5 truncate text-base font-semibold tracking-tight text-zinc-950 dark:text-white">
            {pageTitle}
          </h1>
        </div>

        <div className="hidden w-full max-w-sm md:block">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              strokeWidth={1.8}
            />

            <input
              type="search"
              placeholder="Ara..."
              className="h-10 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-9 pr-4 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-600 dark:focus:bg-zinc-950"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Tema değiştir"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <Sun className="h-[18px] w-[18px] dark:hidden" strokeWidth={1.8} />
            <Moon
              className="hidden h-[18px] w-[18px] dark:block"
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Bildirimler"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <Bell className="h-[18px] w-[18px]" strokeWidth={1.8} />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-white" />
          </button>

          <button
            type="button"
            className="flex h-10 items-center gap-3 rounded-xl border border-zinc-200 bg-white px-2 pr-3 text-left transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-xs font-semibold text-white dark:bg-white dark:text-zinc-950">
              AN
            </div>

            <div className="hidden min-w-0 sm:block">
              <div className="max-w-32 truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">
                Yönetim Paneli
              </div>

              <div className="max-w-32 truncate text-[11px] text-zinc-500">
                Aktif oturum
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}