BÖLÜM 16 (DEVAM)
Üçüncü Taraf Entegrasyonları ve Developer Platformu

Not: Antrenova'nın entegrasyon mimarisi yalnızca birkaç servise bağlanmayı değil; gelecekte yüzlerce farklı servis, cihaz ve iş ortağıyla güvenli şekilde haberleşebilecek bir Platform as a Service (PaaS) altyapısını hedeflemektedir.

16.28 Entegrasyon Katmanları

Her entegrasyon aynı seviyede değildir.

Sistem;

üç katmanda düşünülmelidir.

Presentation

↓

Application

↓

Integration Layer

↓

External Service

Her dış servis yalnızca Integration Layer ile haberleşmelidir.

16.29 Integration Adapter Pattern

Her sağlayıcı;

ayrı Adapter kullanmalıdır.

Örneğin;

Notification Interface

↓

WhatsApp Adapter

SMS Adapter

Email Adapter

İş kuralları sağlayıcıya bağımlı olmamalıdır.

16.30 WhatsApp Business Platform

WhatsApp entegrasyonu;

Meta'nın resmi Business Platform'u üzerinden çalışmalıdır.

Desteklenebilecek işlemler;

Hatırlatma
Ödeme Bildirimi
Paket Bitişi
Doğum Günü
Kampanyalar
Belge Gönderimi

QR ile bağlantı kurulması gerekiyorsa yalnızca Meta'nın sunduğu resmi yöntemler kullanılmalıdır.

16.31 SMS Sağlayıcıları

SMS sistemi;

tek sağlayıcıya bağımlı olmamalıdır.

Desteklenebilecek örnekler;

Netgsm
İleti Merkezi
Turatel
Diğer yerel sağlayıcılar

Yeni sağlayıcı eklemek mevcut Notification Engine'i değiştirmemelidir.

16.32 E-posta Servisleri

SMTP

veya

API tabanlı servisler desteklenebilir.

Örneğin;

SMTP
SendGrid
Amazon SES
Mailgun
Postmark

Gönderim motoru sağlayıcıdan bağımsız olmalıdır.

16.33 Push Notification

Mobil uygulamalar için;

Push servisleri desteklenebilir.

Örneğin;

Android
iOS
Web Push

Bildirim kuralları merkezi Notification Engine tarafından yönetilmelidir.

16.34 Ödeme Sistemleri

Ödeme altyapısı;

Provider Pattern kullanmalıdır.

Desteklenebilecek örnekler;

Sanal POS
Link ile Ödeme
Dijital Cüzdanlar
Banka Transferi Doğrulama

Yeni ödeme sağlayıcısı eklemek;

Finans modülünü değiştirmemelidir.

16.35 Muhasebe Entegrasyonları

Gelecekte;

farklı muhasebe çözümleriyle veri paylaşılabilir.

Örneğin;

Faturalar
Tahsilatlar
Cari Hareketler
KDV Bilgileri

Entegrasyon tek yönlü veya çift yönlü olabilir.

16.36 e-Fatura ve e-Arşiv Hazırlığı

Sistem;

e-Fatura

e-Arşiv

e-İrsaliye

gibi süreçlere uygun veri modeliyle tasarlanmalıdır.

Belirli bir servis sağlayıcısına bağımlılık oluşturulmamalıdır.

16.37 RFID ve Donanım Entegrasyonu

Antrenova;

RFID cihazlarıyla haberleşebilmelidir.

Desteklenebilecek işlemler;

Giriş
Çıkış
Turnike Açma
Kapı Kontrolü
Seans Başlatma

Donanım katmanı;

uygulamadan ayrılmalıdır.

16.38 Turnike ve Kapı Sistemleri

Desteklenebilecek cihazlar;

TCP/IP
HTTP API
WebSocket
MQTT destekli kontrol sistemleri

Fiziksel cihaz protokolleri Integration Layer tarafından yönetilmelidir.

16.39 IoT Cihazları

Gelecekte;

akıllı cihazlar sisteme bağlanabilir.

Örneğin;

Akıllı Dolap
Akıllı Terazi
Nabız Ölçer
Vücut Analiz Cihazı

Her cihaz standart veri sözleşmeleri kullanmalıdır.

16.40 Webhook Güvenliği

Webhook çağrıları;

imzalanmalıdır.

Doğrulama;

Signature
Timestamp
Secret Key

ile yapılmalıdır.

Tekrar saldırıları (Replay Attack) engellenmelidir.

16.41 API Key Yönetimi

Her entegrasyon;

ayrı API Key kullanmalıdır.

API Key;

Business

↓

Integration

↓

Permissions

şeklinde sınırlandırılabilir.

16.42 OAuth 2.0 Hazırlığı

Desteklenen servislerde;

OAuth 2.0 tercih edilmelidir.

Avantajları;

Şifre paylaşılmaz.
Yetkiler sınırlandırılır.
Token iptal edilebilir.
16.43 Developer Portal

Antrenova;

geliştiriciler için portal sunabilir.

Portalda;

API Dokümantasyonu
SDK'lar
Örnek Kodlar
Webhook Testi
API Explorer

bulunabilir.

16.44 SDK Stratejisi

Resmî SDK'lar;

gelecekte desteklenebilir.

Örneğin;

JavaScript
TypeScript
Dart
Kotlin
Swift
C#

SDK'lar API standartlarını soyutlamalıdır.

16.45 Sandbox Ortamı

Entegrasyon geliştiren firmalar;

canlı sisteme bağlanmadan önce

Sandbox kullanabilmelidir.

Sandbox;

üretim ortamından tamamen izole olmalıdır.

16.46 Entegrasyon Sağlığı (Health Monitoring)

Her entegrasyon;

izlenmelidir.

Takip edilecek örnek metrikler;

Son Başarılı İstek
Başarısız İstek Sayısı
Ortalama Yanıt Süresi
Son Hata
16.47 Business Rules
BR-187

Hiçbir iş kuralı üçüncü taraf sağlayıcıya bağımlı olmamalıdır.

BR-188

Her entegrasyon Adapter Pattern kullanmalıdır.

BR-189

Webhook istekleri doğrulanmadan işlenmemelidir.

BR-190

API Key'ler işletme bazında yönetilebilmelidir.

BR-191

Yeni sağlayıcı eklemek mevcut Integration Layer mimarisini değiştirmemelidir.

BR-192

Sandbox ortamı üretim verilerini hiçbir şekilde kullanmamalıdır.

BR-193

RFID ve diğer donanım cihazları standart Integration API üzerinden haberleşmelidir.

BR-194

Entegrasyon hataları merkezi izleme sisteminde kayıt altına alınmalıdır.

Architecture Decision (ADR-026)

Antrenova'nın entegrasyon mimarisi Adapter Pattern, Provider Pattern, API Gateway, Webhook Engine, Integration Health Monitor ve Developer Platform bileşenlerinden oluşacaktır. Tüm üçüncü taraf servisler ortak arayüzler üzerinden sisteme bağlanacak, böylece sağlayıcı değişiklikleri uygulamanın çekirdek iş mantığını etkilemeyecektir.

✅ BÖLÜM 16 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın entegrasyon altyapısı;

REST API,
Event-Driven Architecture,
Webhook Engine,
Queue ve Outbox Pattern,
WhatsApp, SMS ve E-posta entegrasyonları,
ödeme sistemleri,
RFID ve IoT cihazları,
OAuth 2.0,
API Key yönetimi,
Developer Portal,
SDK stratejisi,
Sandbox ortamı

gibi kurumsal ölçekte genişletilebilir bir platform mimarisiyle tanımlanmıştır.