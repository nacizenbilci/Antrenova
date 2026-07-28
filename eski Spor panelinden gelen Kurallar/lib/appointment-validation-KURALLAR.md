# appointment-validation.ts Kuralları

## Sorumluluk

Randevu form verisini yapısal ve temel iş kuralları açısından doğrular.

## Kurallar

1. Üye, eğitmen, tarih, saat ve süre alanları doğrulanmalıdır.
2. Geçersiz UUID, tarih ve saat değerleri reddedilmelidir.
3. Form doğrulaması ile kural motoru ayrılmalıdır.
4. Kullanıcı mesajı ve teknik hata kodu birlikte üretilebilmelidir.
5. Yeni ve düzenleme işlemi ortak şemayı paylaşmalıdır.
