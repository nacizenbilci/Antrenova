# notification-engine.ts Kuralları

## Sorumluluk

Olay, kural, kanal, şablon ve alıcı bilgilerini birleştirerek gönderim kararı verir.

## Kurallar

1. İşletmenin kanal ve olay ayarlarını kontrol etmelidir.
2. Alıcının telefon/e-posta uygunluğunu doğrulamalıdır.
3. Şablonu render etmeden önce izin verilen değişkenleri kontrol etmelidir.
4. Aktif olmayan kural için gönderim üretmemelidir.
5. Gecikmeli veya hatırlatma gönderimlerini kuyruğa yazmalıdır.
6. Aynı olay için mükerrer gönderimi engellemelidir.
7. Her kanal sonucunu teslimat kaydına dönüştürmelidir.
8. Sağlayıcı hatası standart hata koduna çevrilmelidir.
