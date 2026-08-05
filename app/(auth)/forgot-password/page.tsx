import Link from "next/link";

import { requestPasswordReset } from "../actions";

type ForgotPasswordPageProps = {
  searchParams: Promise<{
    success?: string;
  }>;
};

export default async function ForgotPasswordPage({
  searchParams,
}: ForgotPasswordPageProps) {
  const { success } = await searchParams;

  return (
    <section className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          AntreNova
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Parolanızı yenileyin
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Hesabınıza bağlı e-posta adresini girin. Parola yenileme
          bağlantısını size gönderelim.
        </p>
      </div>

      {success ? (
        <div
          role="status"
          className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700"
        >
          {success}
        </div>
      ) : null}

      <form action={requestPasswordReset} className="space-y-5">
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

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
        >
          Yenileme bağlantısı gönder
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-700 underline-offset-4 transition hover:text-zinc-950 hover:underline"
        >
          Giriş ekranına dön
        </Link>
      </div>
    </section>
  );
}