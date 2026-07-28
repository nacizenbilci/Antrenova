# finance-settings-types.ts Kuralları

## Sorumluluk

Finans ayarları için TypeScript tiplerini tanımlar.

## Kurallar

1. `default_payment_method` merkezi union kullanmalıdır.
2. Taksit listesi sayı dizisi olarak tanımlanmalıdır.
3. Nullable veritabanı alanları form modelinden ayrılmalıdır.
4. Para ve oran alanlarının türleri açık olmalıdır.
5. Eski `transfer`/`eft` alanlarından birleşik modele geçiş uyumluluğu planlanmalıdır.
