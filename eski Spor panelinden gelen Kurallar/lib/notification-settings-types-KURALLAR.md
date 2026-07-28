# notification-settings-types.ts Kuralları

## Sorumluluk

Bildirim ayarları, kanallar ve olay kuralları için ortak tipleri tanımlar.

## Kurallar

1. Kanal türleri WhatsApp, SMS ve e-posta ile sınırlı olmalıdır.
2. Event anahtarları `event-definitions` ile uyumlu olmalıdır.
3. Hatırlatma ve gecikme alanları açık sayısal tip taşımalıdır.
4. Form tipi ile veritabanı tipi gerektiğinde ayrılmalıdır.
5. Gizli sağlayıcı kimlik bilgileri istemci tipine eklenmemelidir.
