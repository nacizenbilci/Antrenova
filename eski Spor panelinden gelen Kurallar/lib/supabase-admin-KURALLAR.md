# supabase-admin.ts Kuralları

## Sorumluluk

Service role yetkisine sahip yalnızca sunucu tarafı Supabase istemcisini oluşturur.

## Kurallar

1. Bu dosya istemci bundle'ına asla girmemelidir.
2. Service role anahtarı yalnızca environment değişkeninden okunmalıdır.
3. Fonksiyon adı ve kullanım alanı yüksek yetkiyi açıkça belirtmelidir.
4. RLS atlandığı için her sorguda işletme filtresi uygulanmalıdır.
5. Anahtar veya hata detayları loglarda açığa çıkmamalıdır.
