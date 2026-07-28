# Settings Modülü Kuralları

## Amaç

İşletmeye özel çalışma, finans, randevu, paket, bildirim, kullanıcı ve görünüm kurallarını merkezi olarak yönetir.

## Ayar Bölümleri

- İşletme
- Kullanıcılar
- Roller ve izinler
- Formlar ve sözleşmeler
- Randevu
- Paket
- Finans
- Bildirim
- Dashboard

## Genel Kurallar

1. Ayarlar doğru `business_id` altında saklanmalıdır.
2. Kullanıcı yalnızca yetkili olduğu ayarı değiştirebilmelidir.
3. Kaydetme öncesi veriler doğrulanmalıdır.
4. Ayar değişiklikleri audit log içine yazılmalıdır.
5. Kritik ayarlar için onay veya açıklama istenebilmelidir.
6. Ayarlar mobil ve masaüstünde erişilebilir olmalıdır.
7. Her sekme ayrı yüklenebilir, fakat ortak kayıt davranışı tutarlı olmalıdır.
8. Kaydedilmemiş değişikliklerde kullanıcı uyarılmalıdır.
9. Varsayılan değerler sistem tarafından açıkça tanımlanmalıdır.
10. Eksik ayar kaydı uygulamayı çökertecek biçimde ele alınmamalıdır.

## Randevu Ayarları

- Çalışma günleri ve saatleri
- Öğle arası
- Randevu süresi
- İptal süresi
- Geç iptal
- Salon kapasitesi
- Eğitmen çakışması
- Paket zorunluluğu
- Kapalı tarihler
- Hatırlatma süreleri

## Finans Ayarları

- Varsayılan ödeme yöntemi
- Kısmi ödeme
- Fazla ödeme
- Otomatik makbuz
- Para birimi
- Kart taksitleri
- Minimum kart tutarı
- Komisyon oranı
- Online ödeme sağlayıcısı
- Fatura bilgileri
- KDV
- Makbuz logo, alt bilgi ve imza

## Bildirim Ayarları

Kanallar:

- WhatsApp
- SMS
- E-posta

Olaylar:

- Yeni üye
- Üye güncellendi
- Doğum günü
- Paket oluşturuldu
- Paket bitiyor/bitti
- Ödeme alındı
- Randevu oluşturuldu
- Randevu iptal edildi
- Randevu hatırlatma

Bildirimler merkezi notification engine üzerinden çalışmalıdır.
