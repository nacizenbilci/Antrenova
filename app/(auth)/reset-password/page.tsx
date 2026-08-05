import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { updatePassword } from "../actions";

type ResetPasswordPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/login?error=${encodeURIComponent(
        "Parola yenileme bağlantısı geçersiz veya süresi dolmuş.",
      )}`,
    );
  }

  const { error } = await searchParams;

  return (
    <section className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          AntreNova
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Yeni parola oluşturun
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Hesabınız için en az 8 karakterden oluşan yeni bir parola
          belirleyin.
        </p>
      </div>

      {error ? (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
        >
          {error}
        </div>
      ) : null}

      <form action={updatePassword} className="space-y-5">
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-zinc-800"
          >
            Yeni parola
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="Yeni parolanızı girin"
            className="h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="passwordConfirmation"
            className="mb-2 block text-sm font-medium text-zinc-800"
          >
            Yeni parola tekrar
          </label>

          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="Yeni parolanızı tekrar girin"
            className="h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
        >
          Parolayı güncelle
        </button>
      </form>
    </section>
  );
}