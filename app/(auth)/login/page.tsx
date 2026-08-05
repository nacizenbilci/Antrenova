import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { login } from "../actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

export default async function LoginPage({
  searchParams,
}: LoginPageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  const { error, success } = await searchParams;

  return (
    <section className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          AntreNova
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Hesabınıza giriş yapın
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          İşletme yönetim paneline erişmek için e-posta adresinizi ve
          parolanızı girin.
        </p>
      </div>

      {error ? (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      ) : null}

      {success ? (
        <div
          role="status"
          className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          {success}
        </div>
      ) : null}

      <form action={login} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-800"
          >
            E-posta adresi
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="ornek@antrenova.com"
            className="h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-zinc-800"
          >
            Parola
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            minLength={6}
            placeholder="Parolanızı girin"
            className="h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-zinc-600 underline-offset-4 transition hover:text-zinc-950 hover:underline"
          >
            Parolamı unuttum
          </Link>
        </div>

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
        >
          Giriş yap
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-zinc-500">
        Hesabınız henüz oluşturulmadıysa sistem yöneticinizle iletişime
        geçin.
      </p>
    </section>
  );
}