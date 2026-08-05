"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

function getRequiredFormValue(formData: FormData, field: string): string {
  const value = formData.get(field);

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${field} alanı zorunludur.`);
  }

  return value.trim();
}

export async function login(formData: FormData) {
  const email = getRequiredFormValue(formData, "email").toLowerCase();
  const password = getRequiredFormValue(formData, "password");

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase giriş hatası:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });

    redirect(
      `/login?error=${encodeURIComponent(
        "E-posta adresi veya parola hatalı.",
      )}`,
    );
  }

  redirect("/");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

export async function requestPasswordReset(formData: FormData) {
  const email = getRequiredFormValue(formData, "email").toLowerCase();

  const supabase = await createClient();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/auth/callback?next=/reset-password`,
  });

  if (error) {
    console.error("Parola sıfırlama hatası:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });
  }

  redirect(
    `/forgot-password?success=${encodeURIComponent(
      "E-posta adresi sistemde kayıtlıysa parola yenileme bağlantısı gönderildi.",
    )}`,
  );
}

export async function updatePassword(formData: FormData) {
  const password = getRequiredFormValue(formData, "password");
  const passwordConfirmation = getRequiredFormValue(
    formData,
    "passwordConfirmation",
  );

  if (password.length < 8) {
    redirect(
      `/reset-password?error=${encodeURIComponent(
        "Parola en az 8 karakter olmalıdır.",
      )}`,
    );
  }

  if (password !== passwordConfirmation) {
    redirect(
      `/reset-password?error=${encodeURIComponent(
        "Parolalar birbiriyle eşleşmiyor.",
      )}`,
    );
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/login?error=${encodeURIComponent(
        "Parola yenileme oturumu geçersiz veya süresi dolmuş.",
      )}`,
    );
  }

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.error("Parola güncelleme hatası:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });

    redirect(
      `/reset-password?error=${encodeURIComponent(
        "Parola güncellenemedi. Lütfen yeniden deneyin.",
      )}`,
    );
  }

  await supabase.auth.signOut();

  redirect(
    `/login?success=${encodeURIComponent(
      "Parolanız başarıyla güncellendi. Yeni parolanızla giriş yapabilirsiniz.",
    )}`,
  );
}