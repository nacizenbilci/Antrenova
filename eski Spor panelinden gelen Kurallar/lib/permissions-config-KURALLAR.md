# permissions-config.ts Kuralları

## Sorumluluk

Sistemdeki izin anahtarlarını ve gruplarını merkezi olarak tanımlar.

## Kurallar

1. İzin anahtarları benzersiz ve değişmez olmalıdır.
2. Modül ve aksiyon yapısı kullanılmalıdır: `members.view`, `payments.create`.
3. UI etiketi ile teknik anahtar ayrılmalıdır.
4. Silinen izinler için rol ilişkisi migration planı yapılmalıdır.
5. Menü ve API kontrolleri aynı anahtarları kullanmalıdır.
