import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";

type BusinessLayoutProps = {
  children: ReactNode;
};

export default function BusinessLayout({
  children,
}: BusinessLayoutProps) {
  return <AppShell>{children}</AppShell>;
}