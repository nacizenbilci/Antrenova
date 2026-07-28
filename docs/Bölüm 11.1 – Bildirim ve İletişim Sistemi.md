BÖLÜM 11
Bildirim ve İletişim Sistemi

Not: Bildirim sistemi, Antrenova'nın CRM altyapısının merkezidir. Amaç yalnızca mesaj göndermek değil; doğru kişiye, doğru zamanda, doğru kanal üzerinden, doğru içerikle ulaşmaktır. Sistem; WhatsApp, SMS, E-posta, Push Bildirimi ve gelecekte eklenecek tüm iletişim kanallarını ortak bir mimari altında yönetmelidir.

11.1 Amaç

Bildirim sisteminin amacı;

üyeleri bilgilendirmek,
operasyonel süreçleri otomatikleştirmek,
iletişim hatalarını azaltmak,
müşteri memnuniyetini artırmak,
satış ve tahsilat süreçlerini desteklemektir.
11.2 Bildirim Felsefesi

Antrenova'da;

bir olay (event) oluşur.

Bildirim sistemi bu olayı dinler.

Kurallar uygunsa;

ilgili kanallar üzerinden mesaj gönderilir.

Appointment Created

↓

Notification Engine

↓

Rule Engine

↓

WhatsApp

SMS

Mail

Push
11.3 Bildirim Motoru

Notification Engine;

sistemin tamamından gelen olayları dinler.

Örneğin;

Üye oluşturuldu
Paket satıldı
Randevu oluşturuldu
Randevu iptal edildi
Ödeme alındı
Paket bitti
Doğum günü geldi

Motor;

olayın ne olduğunu bilmez.

Sadece Event işler.

11.4 Desteklenen Kanallar

İlk sürümde;

WhatsApp Business Platform
SMS
E-Posta
Mobil Push

desteklenir.

İleride;

Telegram
Apple Wallet
Google Wallet
Webhook
Microsoft Teams
Slack

eklenebilir.

11.5 Kanal Bağımsızlığı

Hiçbir modül;

doğrudan WhatsApp kodu çağırmaz.

Doğru mimari;

Appointment

↓

Notification Event

↓

Notification Engine

↓

Provider

olmalıdır.

11.6 Sağlayıcı (Provider) Mimarisi

Her kanal;

Provider mantığıyla çalışmalıdır.

Örneğin;

WhatsApp

↓

Meta Provider
SMS

↓

Netgsm Provider
Mail

↓

SMTP Provider

İşletme sağlayıcı değiştirdiğinde;

uygulama kodu değişmez.

11.7 Bildirim Olayları

Varsayılan olaylar;

Yeni Üye
Üye Güncellendi
Paket Oluşturuldu
Paket Bitti
Paket Bitiyor
Ödeme Alındı
Borç Hatırlatma
Randevu Oluşturuldu
Randevu İptal Edildi
Randevu Hatırlatma
Yoklama Tamamlandı
Doğum Günü
Şifre Sıfırlama

İşletme yeni olay tanımlayabilir.

11.8 Bildirim Kuralları

Her olay;

ayrı kurallara sahiptir.

Örneğin;

Appointment Reminder

↓

WhatsApp

✔

↓

SMS

✖

↓

Mail

✔

Bu yapı mevcut notification_rules tasarımınla uyumludur.

11.9 Zamanlama

Bildirimler;

hemen

veya

planlanmış gönderilebilir.

Örneğin;

Randevu

↓

24 Saat Önce

↓

Gönder
11.10 Gecikmeli Gönderim

Bazı olaylar;

belirli süre sonra gönderilebilir.

Örneğin;

Ödeme

↓

10 Dakika

↓

Teşekkür Mesajı
11.11 Sessiz Saatler

İşletme;

gece saatlerinde mesaj gönderilmesini engelleyebilir.

Örneğin;

22:00

↓

08:00

Gönderme

Mesaj kuyruğa alınır.

11.12 Şablon Sistemi

Her mesaj;

şablonlardan oluşturulur.

Şablonlar;

WhatsApp
SMS
Mail

için ayrı hazırlanabilir.

11.13 Değişkenler

Şablonlarda değişken kullanılabilir.

Örneğin;

Merhaba {{member_name}}

Randevunuz

{{appointment_date}}

Saat

{{appointment_time}}

Bu yapı mevcut template-renderer altyapınla uyumludur.

11.14 Çoklu Dil

Şablonlar;

birden fazla dil destekler.

Örneğin;

Türkçe
İngilizce
İspanyolca
Almanca

Üyenin tercih ettiği dil otomatik kullanılır.

11.15 Önizleme

Gönderilmeden önce;

oluşacak mesaj önizlenebilir.

Boş değişkenler uyarı üretir.

11.16 Mesaj Kuyruğu

Bildirimler doğrudan gönderilmez.

Önce kuyruğa yazılır.

Event

↓

Queue

↓

Worker

↓

Provider

Bu sayede yüksek trafikte sistem yavaşlamaz.

11.17 Tekrar Deneme (Retry)

Gönderim başarısız olursa;

otomatik tekrar denenebilir.

Örneğin;

1 dakika sonra
5 dakika sonra
30 dakika sonra

Belirli sayıda başarısızlıktan sonra hata oluşur.

11.18 Gönderim Durumları

Her bildirim;

aşağıdaki durumlardan birine sahiptir.

Bekliyor
Kuyrukta
Gönderiliyor
Gönderildi
Teslim Edildi
Okundu
Başarısız
11.19 Teslimat Takibi

Destekleyen sağlayıcılarda;

Delivered
Read
Failed

bilgileri sisteme geri yazılır.

Özellikle WhatsApp Business Platform bu yapıyı destekler.

11.20 Bildirim Günlüğü

Her gönderim için aşağıdaki bilgiler saklanır.

Gönderen
Alıcı
Kanal
Şablon
İçerik Özeti
Gönderim Zamanı
Durum
Sağlayıcı Yanıtı
11.21 Business Rules
BR-101

Hiçbir modül doğrudan mesaj göndermemeli; tüm bildirimler Notification Engine üzerinden çalışmalıdır.

BR-102

Her bildirim bir olay (event) sonucunda oluşturulmalıdır.

BR-103

Şablonlar kanal bağımsız değişken sistemi kullanmalıdır.

BR-104

Başarısız gönderimler otomatik tekrar deneme politikasına göre işlenmelidir.

BR-105

Mesaj içerikleri ve gönderim durumları denetim amacıyla saklanmalıdır.

BR-106

Bildirim sağlayıcısı değiştirildiğinde iş kuralları değişmemelidir.

Architecture Decision (ADR-014)

Bildirim sistemi; Event-Driven, Queue-Based ve Provider Pattern mimarisi üzerine kurulacaktır. Modüller yalnızca olay üretir; mesaj oluşturma, kuyruklama, gönderim ve teslimat takibi Notification Engine tarafından yönetilir. Bu yaklaşım, yüksek ölçeklenebilirlik, çoklu sağlayıcı desteği ve gelecekte yeni iletişim kanallarının minimum değişiklikle sisteme eklenmesini sağlar.

✅ BÖLÜM 11 (1. KISIM) TAMAMLANDI
Sonraki bölüm

Bölüm 11.2 – Gelişmiş Bildirim Yönetimi

Bu bölümde;

WhatsApp Business Embedded Signup,
WhatsApp Business App Coexistence,
resmi Meta API entegrasyonu,
toplu kampanya gönderimleri,
segment bazlı hedefleme,
otomatik drip kampanyaları,
AI ile mesaj önerileri,
A/B testleri,
opt-in / opt-out yönetimi,
KVKK/GDPR uyumluluğu,
webhook işleme,
teslimat analitiği,
bildirim performans KPI'ları

kurumsal CRM seviyesinde ayrıntılı olarak tanımlanacaktır. Bu bölüm, mevcut geliştirdiğin bildirim altyapısı ve resmi WhatsApp Business Platform yaklaşımıyla doğrudan uyumlu olacaktır.