# notifications/types.ts Kuralları

## Sorumluluk

Bildirim olayları, şablonlar, kanallar, işler ve sonuçlar için ortak TypeScript tiplerini tanımlar.

## Kurallar

1. Kanal türleri merkezi union/enum olmalıdır.
2. Olay verileri mümkün olduğunca ayrıştırılmış union kullanılmalıdır.
3. `any` kullanılmamalıdır.
4. Sunucu ve istemciye özel tipler ayrılmalıdır.
5. Veritabanı nullable alanları doğru temsil edilmelidir.
6. Render edilmiş şablon ile ham şablon tipleri karıştırılmamalıdır.
