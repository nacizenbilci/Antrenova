# lib/notifications/providers Klasörü Kuralları

## Sorumluluk

WhatsApp, SMS ve e-posta sağlayıcı adaptörlerini barındırır.

## Kurallar

1. Her sağlayıcı ortak bir arayüz uygulamalıdır.
2. Sağlayıcıya özel kod notification engine içine sızmamalıdır.
3. Gizli anahtarlar yalnızca sunucu ortamında okunmalıdır.
4. Zaman aşımı, yeniden deneme ve hata eşleme kuralları tanımlanmalıdır.
5. Sağlayıcı yanıtı standart teslimat sonucuna dönüştürülmelidir.
6. Test ve production yapılandırmaları ayrılmalıdır.
7. Mesaj içeriği loglanırken hassas veriler maskelenmelidir.
