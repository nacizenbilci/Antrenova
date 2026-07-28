# AppointmentSettingsClient.tsx Kuralları

## Sorumluluk

Randevu ayarları sayfasının istemci tarafındaki sekmelerini, form durumunu ve kayıt akışını yönetir.

## Kurallar

1. Çalışma saatleri, öğle arası, kapalı günler, kapasite ve iptal ayarları aynı işletmeye ait olmalıdır.
2. Başlangıçta sunucudan gelen ayarlar güvenli varsayılanlarla birleştirilmelidir.
3. Kaydedilmemiş değişiklikler izlenmelidir.
4. Sekme değişikliği veri kaybına yol açmamalıdır.
5. Kaydetme sırasında buton kilitlenmeli ve yükleme durumu gösterilmelidir.
6. İstemci doğrulaması yapılsa da sunucu doğrulaması zorunludur.
7. Hata mesajları teknik değil kullanıcı dostu olmalıdır.
8. Mobil görünümde sekmeler taşmamalı; yatay kaydırma veya seçici kullanılmalıdır.
