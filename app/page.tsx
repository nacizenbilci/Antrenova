import { redirect } from "next/navigation";

import { logout } from "@/app/(auth)/actions";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <section className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          AntreNova
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
          Giriş başarılı
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-600">
          Güvenli oturum oluşturuldu. Şu anda sisteme aşağıdaki hesapla
          giriş yaptınız.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
          {user.email}
        </div>

        <form action={logout} className="mt-6">
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Güvenli çıkış yap
          </button>
        </form>
      </section>
    </main>
  );
}