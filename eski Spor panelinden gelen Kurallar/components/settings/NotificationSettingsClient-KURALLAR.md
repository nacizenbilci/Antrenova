# NotificationSettingsClient.tsx Kuralları

## Sorumluluk

WhatsApp, SMS ve e-posta kanalları ile olay bazlı bildirim kurallarını yönetir.

## Kurallar

1. Kanal ana anahtarı kapalıysa ilgili olay ayarları etkisiz olmalıdır.
2. Olay anahtarları merkezi `event-definitions` kaynağından gelmelidir.
3. Şablon değişkenleri izin verilen değişkenlerle sınırlandırılmalıdır.
4. Hatırlatma süreleri pozitif ve makul aralıkta olmalıdır.
5. Test gönderimi üretim olayından ayrılmalıdır.
6. Sağlayıcı gizli bilgileri istemciye gönderilmemelidir.
7. Değişiklikler işletme bazında kaydedilmelidir.
8. Kaydetme sonrası notification engine tarafından okunabilir yapı korunmalıdır.
