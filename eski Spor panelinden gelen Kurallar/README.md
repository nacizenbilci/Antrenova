# NeNe Seans — Components ve Lib Dosya Kuralları

Bu klasör, görsellerde görünen `components` ve `lib` dosyalarının her biri için ayrı kural dosyaları içerir.

## Önemli not

Bu belgeler, dosya adları ve bugüne kadar belirlenen proje kurallarına göre hazırlanmış resmi taslaklardır. Kaynak kodlar ayrıca incelendiğinde her dosyanın gerçek prop, fonksiyon, veri akışı ve hata durumlarıyla ikinci kez güncellenmelidir.

## Ortak kurallar

1. Her bileşen tek bir açık sorumluluk taşımalıdır.
2. İş kuralları yalnızca istemci bileşeninde tutulmamalıdır.
3. Kritik doğrulamalar sunucuda tekrar yapılmalıdır.
4. `business_id` güvenliği istemci verisine bırakılmamalıdır.
5. TypeScript tipleri açık olmalı; gereksiz `any` kullanılmamalıdır.
6. Mobil ve masaüstü davranışları birlikte düşünülmelidir.
7. Yükleniyor, boş, hata ve başarı durumları tanımlanmalıdır.
8. Kullanıcıya ham Supabase veya veritabanı hatası gösterilmemelidir.
9. Finans, randevu, paket, bildirim ve yetki değişiklikleri denetlenebilir olmalıdır.
10. Gizli anahtarlar istemci tarafına gönderilmemelidir.
