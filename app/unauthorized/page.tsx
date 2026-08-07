import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-4 text-5xl font-semibold">
          403
        </div>

        <h1 className="text-2xl font-semibold">
          Yetkisiz erişim
        </h1>

        <p className="mt-3 text-sm text-neutral-600">
          Bu sayfayı görüntülemek veya bu işlemi yapmak için
          gerekli yetkiye sahip değilsiniz.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}