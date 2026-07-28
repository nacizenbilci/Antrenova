BÖLÜM 25 (DEVAM)
Webhook Altyapısı, Geliştirici Portalı, SDK Stratejisi, Plugin Sistemi, Marketplace ve Partner Ekosistemi

Not: Modern SaaS platformları yalnızca API sunmaz. Aynı zamanda olay bazlı (Event-Driven) entegrasyonlar, geliştirici araçları, eklenti sistemi ve partner ekosistemi sunar. Antrenova da uzun vadede geliştiricilerin üzerine uygulamalar geliştirebildiği bir platform olacaktır.

25.24 Event-Driven Yaklaşımı

Her entegrasyon;

API çağrısı gerektirmemelidir.

Sistemde meydana gelen önemli olaylar;

Event olarak yayınlanabilir.

Örneğin;

MemberCreated
PackagePurchased
PaymentCompleted
AppointmentCreated
AppointmentCancelled
AttendanceCompleted
25.25 Webhook Mimarisi

Partner sistemleri;

belirli olaylara abone olabilir.

Antrenova

↓

Webhook Dispatcher

↓

Partner URL

↓

Response
25.26 Event Subscription

Her partner;

yalnızca ihtiyaç duyduğu olaylara abone olmalıdır.

Örneğin;

PaymentCompleted

✓

AppointmentCancelled

✓

MemberDeleted

✗
25.27 Webhook Payload Standardı

Webhook içerikleri;

standart formatta gönderilmelidir.

{
  "event": "payment.completed",
  "timestamp": "...",
  "businessId": "...",
  "data": {}
}
25.28 Event Kimliği

Her Event;

benzersiz bir Event ID taşımalıdır.

Bu;

çift işlem (Duplicate Processing)

riskini azaltır.

25.29 Signature Verification

Webhook çağrıları;

imzalanmalıdır.

Partner;

imzayı doğrulayarak isteğin gerçekten Antrenova'dan geldiğini doğrulayabilmelidir.

25.30 Retry Politikası

Partner sistemi cevap veremezse;

Webhook tekrar gönderilebilir.

Örneğin;

1 dk

↓

5 dk

↓

15 dk

↓

1 saat

Belirlenen maksimum deneme sayısı aşılmamalıdır.

25.31 Dead Letter Queue (DLQ)

Başarısız Webhook'lar;

sonsuz tekrar edilmemelidir.

Başarısız olaylar;

Dead Letter Queue'ya alınmalıdır.

25.32 Idempotency

Webhook tüketicileri;

aynı Event'i iki kez işlese bile

aynı sonucu üretmelidir.

25.33 Event Ordering

Gerekli durumlarda;

olay sırası korunmalıdır.

Örneğin;

PackageCreated

↓

PaymentCompleted

↓

PackageActivated
25.34 Webhook Monitoring

Webhook başarı oranları;

izlenmelidir.

Ölçülebilecek metrikler;

Başarılı Gönderim
Retry Sayısı
Ortalama Süre
Başarısız Gönderim
DLQ Sayısı
25.35 Business Rules
BR-355

Webhook olayları standart payload formatında gönderilmelidir.

BR-356

Her Event benzersiz kimliğe sahip olmalıdır.

BR-357

Webhook çağrıları dijital imza ile doğrulanmalıdır.

BR-358

Başarısız gönderimler Retry politikasına göre tekrar denenmelidir.

BR-359

Retry sınırı aşan olaylar Dead Letter Queue'ya taşınmalıdır.

BR-360

Webhook tüketicileri idempotent çalışacak şekilde tasarlanmalıdır.

Architecture Decision (ADR-053)

Antrenova'nın olay tabanlı entegrasyon mimarisi; Event Bus, Webhook Dispatcher, Retry Engine, Signature Service, Dead Letter Queue ve Monitoring bileşenlerinden oluşacaktır. Böylece sistem güvenilir ve ölçeklenebilir olay iletimi sağlayacaktır.

25.36 OpenAPI Standardı

Tüm API'ler;

OpenAPI Specification (OAS) ile belgelenmelidir.

Dokümantasyon;

otomatik üretilebilmelidir.

25.37 Geliştirici Portalı

Partner geliştiriciler için;

tek merkezden erişilebilen bir portal sunulmalıdır.

Portal;

API Dokümantasyonu
SDK'lar
Webhook Rehberi
Kod Örnekleri
Changelog
Sürüm Bilgileri

içermelidir.

25.38 SDK Stratejisi

Resmî SDK'lar;

yaygın platformlar için sağlanabilir.

Örneğin;

JavaScript / TypeScript
Flutter
Kotlin
Swift
.NET
PHP
Python
25.39 Kod Örnekleri

Her API;

çalışan örneklerle desteklenmelidir.

Örneğin;

cURL
JavaScript
Python
PHP
C#
25.40 Sandbox Ortamı

Partner geliştiriciler;

üretim sistemini etkilemeden test yapabilmelidir.

Sandbox;

gerçek sistem davranışını mümkün olduğunca yansıtmalıdır.

25.41 Plugin Mimarisi

Platform;

çekirdek sistemi değiştirmeden

eklenti yüklenmesini destekleyebilir.

Örnek eklentiler;

Muhasebe
CRM
RFID
Turnike
WhatsApp
SMS
E-Posta
AI
25.42 Plugin Yaşam Döngüsü

Her Plugin;

aşağıdaki yaşam döngüsüne sahip olmalıdır.

Install

↓

Enable

↓

Configure

↓

Update

↓

Disable

↓

Remove
25.43 Marketplace

Uzun vadede;

Antrenova Marketplace oluşturulabilir.

Burada;

Resmî Eklentiler
Partner Çözümleri
Premium Modüller
Tema Paketleri

yayınlanabilir.

25.44 Partner Sertifikasyonu

Partner geliştiriciler;

belirli kalite standartlarını sağladıktan sonra

sertifikalandırılabilir.

Değerlendirme kriterleri;

Güvenlik
Performans
Kod Kalitesi
API Uyumluluğu
Dokümantasyon
25.45 Business Rules
BR-361

Tüm API'ler OpenAPI standardına uygun belgelenmelidir.

BR-362

Resmî SDK'lar ortak API sözleşmesini kullanmalıdır.

BR-363

Plugin'ler çekirdek sistemi doğrudan değiştirmemelidir.

BR-364

Marketplace'e eklenecek çözümler kalite incelemesinden geçmelidir.

BR-365

Partner uygulamaları güvenlik standartlarına uymalıdır.

BR-366

Sandbox ortamı üretim ortamından tamamen izole olmalıdır.

Architecture Decision (ADR-054)

Antrenova geliştirici ekosistemi; OpenAPI, Developer Portal, SDK Platformu, Plugin Framework, Marketplace ve Partner Certification Program üzerine inşa edilecektir. Platform, üçüncü taraf geliştiricilerin güvenli ve sürdürülebilir biçimde çözüm geliştirebildiği açık bir ekosistem olarak konumlandırılacaktır.

✅ BÖLÜM 25 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın kurumsal entegrasyon mimarisi;

API-First,
REST standartları,
API Gateway,
OAuth2 / OpenID Connect,
API sürümleme,
Webhook altyapısı,
Event-Driven mimari,
Retry ve DLQ,
OpenAPI,
Developer Portal,
SDK stratejisi,
Plugin sistemi,
Marketplace,
Partner sertifikasyonu

gibi modern platform ekosisteminin temel bileşenlerini kapsayacak şekilde tanımlanmıştır.