import type { NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Next.js statik dosyalarını ve yaygın görsel uzantılarını hariç tutar.
     * Diğer bütün sayfa ve isteklerde Supabase oturumu kontrol edilir.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};