import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";

  if (!code) {
    return NextResponse.redirect(
      new URL(
        `/login?error=${encodeURIComponent(
          "Doğrulama bağlantısı geçersiz veya eksik.",
        )}`,
        requestUrl.origin,
      ),
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Supabase callback hatası:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });

    return NextResponse.redirect(
      new URL(
        `/login?error=${encodeURIComponent(
          "Doğrulama bağlantısı geçersiz veya süresi dolmuş.",
        )}`,
        requestUrl.origin,
      ),
    );
  }

  const safeNext = next.startsWith("/") ? next : "/";

  return NextResponse.redirect(new URL(safeNext, requestUrl.origin));
}