# NeNe Seans Projesi — Modül Kuralları

Bu klasör, NeNe Seans projesinde bugüne kadar belirlenen iş kurallarının modül bazında düzenlenmiş ilk sürümüdür.

## Amaç

- Mevcut sistemdeki kuralları sohbetlerden çıkarıp kalıcı hale getirmek
- Yeni yazılacak profesyonel sürüm için referans oluşturmak
- Web, mobil uygulama, API ve veritabanında aynı kuralların uygulanmasını sağlamak
- Geliştirici değişse bile sistem davranışlarının bozulmasını önlemek

## Genel Mimari İlkeler

1. Sistem çok işletmeli yapıya hazırlanmalıdır.
2. Her işletmeye ait veri `business_id` ile ayrılmalıdır.
3. Kullanıcı yalnızca yetkili olduğu işletmenin verilerini görebilmelidir.
4. Kritik işlemler yalnızca arayüzde değil, sunucu ve veritabanı seviyesinde de doğrulanmalıdır.
5. Mobil ve masaüstü ekranlarda aynı iş kuralları geçerli olmalıdır.
6. Para, randevu, yoklama, paket ve yetki değişiklikleri kayıt altına alınmalıdır.
7. Hiçbir kritik işlem yalnızca istemci tarafındaki kontrole güvenmemelidir.
8. Tarih ve saat işlemleri işletmenin zaman dilimine göre yürütülmelidir.
9. Kullanıcıya gösterilen hata mesajları teknik değil, anlaşılır olmalıdır.
10. Üretime gönderilmeden önce `npm.cmd run build` çalıştırılmalıdır.

## Modüller

- access
- api
- appointments
- attendance
- calendar
- forgot-password
- login
- members
- packages
- payments
- reports
- reset-password
- settings
- trainers
- unauthorized
