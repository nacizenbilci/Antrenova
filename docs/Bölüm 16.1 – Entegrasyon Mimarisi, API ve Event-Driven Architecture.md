BÖLÜM 16
Entegrasyon Mimarisi, API ve Event-Driven Architecture

Not: Antrenova yalnızca kendi içinde çalışan kapalı bir yazılım olmayacaktır. Platform; ödeme sistemleri, WhatsApp, e-posta servisleri, muhasebe yazılımları, IoT cihazları, RFID sistemleri, mobil uygulamalar ve gelecekte geliştirilecek üçüncü taraf uygulamalarla güvenli, ölçeklenebilir ve standartlara uygun şekilde haberleşebilen bir platform olarak tasarlanacaktır.

16.1 Amaç

Entegrasyon katmanının amacı;

sistemler arası iletişimi standartlaştırmak,
dış servislerle güvenli haberleşmek,
modüller arası bağımlılığı azaltmak,
ölçeklenebilir veri akışı sağlamaktır.
16.2 Entegrasyon Felsefesi

Hiçbir modül;

başka bir modülün veritabanına doğrudan erişmemelidir.

İletişim;

API

veya

Event

üzerinden yapılmalıdır.

16.3 Katmanlı Entegrasyon
Application

↓

Service Layer

↓

Integration Layer

↓

External Systems

İş kuralları;

Integration Layer'ın içine yazılmaz.

16.4 REST API Standartları

REST API;

kurumsal standartlara uygun tasarlanmalıdır.

Örneğin;

GET

POST

PUT

PATCH

DELETE

HTTP metodları amacına uygun kullanılmalıdır.

16.5 Endpoint Standartları

Örneğin;

/api/v1/members

/api/v1/packages

/api/v1/payments

/api/v1/trainers

İsimlendirme;

tutarlı olmalıdır.

16.6 API Versioning

API değişiklikleri;

mevcut istemcileri bozmamalıdır.

Örneğin;

v1

↓

v2

↓

v3

Eski sürümler belirlenen geçiş süresince desteklenebilir.

16.7 Standard Response

API cevapları;

tek formatta dönmelidir.

{
  "success": true,
  "data": {},
  "meta": {},
  "error": null
}
16.8 Error Standard

Hatalar;

standart yapıda olmalıdır.

{
  "success": false,
  "error": {
    "code": "MEMBER_NOT_FOUND",
    "message": "Üye bulunamadı."
  }
}
16.9 Pagination

Liste API'leri;

sayfalamayı desteklemelidir.

page

limit

total

totalPages
16.10 Filtering

API;

filtreleme desteklemelidir.

Örneğin;

status=active

trainer=...

branch=...

package=...
16.11 Sorting

Her liste;

sıralanabilir olmalıdır.

Örneğin;

created_at

↓

DESC
16.12 Search

Tam metin arama;

API seviyesinde desteklenmelidir.

Örneğin;

search=Ahmet
16.13 Field Selection

İstemci;

yalnızca ihtiyaç duyduğu alanları isteyebilmelidir.

Örneğin;

fields=id,name,phone

Bu performansı artırabilir.

16.14 Bulk API

Toplu işlemler;

tek istekle yapılabilir.

Örneğin;

Toplu silme
Toplu güncelleme
Toplu bildirim
16.15 API Dokümantasyonu

Her endpoint;

otomatik dokümante edilmelidir.

Dokümantasyonda;

Parametreler
Response
Error
Örnekler

bulunmalıdır.

16.16 Business Rules
BR-175

Hiçbir istemci doğrudan veritabanına erişemez.

BR-176

REST endpoint isimleri tutarlı olmalıdır.

BR-177

API cevapları standart formatta dönmelidir.

BR-178

Tüm liste endpoint'leri sayfalamayı desteklemelidir.

BR-179

API sürüm değişiklikleri geriye dönük uyumluluk stratejisiyle yönetilmelidir.

BR-180

Toplu işlemler tekil işlemlerle aynı yetkilendirme kurallarına tabi olmalıdır.

Architecture Decision (ADR-024)

API katmanı; istemciler ile iş mantığı arasında tek giriş noktası olacaktır. Endpoint tasarımı, sürümleme, doğrulama ve hata yönetimi merkezi standartlara göre yönetilecektir.

16.17 Webhook Sistemi

Antrenova;

olay gerçekleştiğinde dış sistemleri bilgilendirebilir.

Örneğin;

Üye oluşturuldu
Ödeme alındı
Paket bitti
Randevu iptal edildi
16.18 Domain Events

İş kurallarını temsil eden olaylar oluşturulmalıdır.

Örneğin;

MemberCreated

PaymentReceived

AppointmentCompleted

PackageExpired

Event isimleri geçmiş zamanda olmalıdır.

16.19 Event Bus

Tüm olaylar;

merkezi Event Bus üzerinden yayınlanmalıdır.

Module

↓

Event Bus

↓

Subscribers
16.20 Publisher / Subscriber

Bir modül;

olayı yayınlar.

Diğer modüller;

abone olur.

Örneğin;

Payment

↓

PaymentReceived

↓

Notification

↓

Accounting

↓

Reporting

Modüller birbirini bilmek zorunda değildir.

16.21 Asenkron İşleme

Uzun süren işlemler;

arka planda çalışmalıdır.

Örneğin;

PDF üretimi
WhatsApp gönderimi
AI analizi
Rapor oluşturma

Kullanıcı bekletilmemelidir.

16.22 Queue Sistemi

Asenkron işler;

kuyruğa alınmalıdır.

Request

↓

Queue

↓

Worker

↓

Completed
16.23 Retry Mekanizması

Başarısız işler;

otomatik tekrar denenebilir.

Örneğin;

1

↓

5 dk

↓

30 dk

↓

2 saat

Yeniden deneme stratejisi yapılandırılabilir olmalıdır.

16.24 Dead Letter Queue (DLQ)

Belirlenen deneme sayısını aşan işler;

DLQ'ya taşınmalıdır.

Yönetici;

bunları inceleyebilmelidir.

16.25 Outbox Pattern

Veritabanı işlemi ile Event yayını;

tutarlı çalışmalıdır.

Outbox Pattern kullanılarak;

olayın kaybolma riski azaltılmalıdır.

16.26 Idempotency

Aynı istek;

iki kez işlendiğinde

aynı sonucu üretmelidir.

Örneğin;

ödeme isteği tekrar gönderildiğinde;

çift tahsilat oluşmamalıdır.

16.27 Business Rules
BR-181

Her Domain Event tek bir iş olayını temsil etmelidir.

BR-182

Event isimleri geçmiş zamanda tanımlanmalıdır.

BR-183

Başarısız işler otomatik yeniden denenebilmelidir.

BR-184

DLQ kayıtları kullanıcı tarafından silinmeden önce incelenebilmelidir.

BR-185

Idempotency gerektiren işlemler tekrar çalıştırıldığında veri tutarsızlığı oluşturmamalıdır.

BR-186

Event tüketicileri birbirinden bağımsız çalışmalıdır.

Architecture Decision (ADR-025)

Antrenova, Event-Driven Architecture yaklaşımını benimseyecektir. Kritik iş olayları merkezi Event Bus üzerinden yayınlanacak; Notification Engine, Reporting Engine, AI Engine ve Integration Layer bu olaylara abone olarak gevşek bağlı (loosely coupled) şekilde çalışacaktır.

✅ BÖLÜM 16 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 16.2 – Üçüncü Taraf Entegrasyonları ve Developer Platformu

Bu bölümde;

WhatsApp Business Platform,
SMS sağlayıcıları,
SMTP ve e-posta servisleri,
ödeme sistemleri,
e-Fatura/e-Arşiv,
muhasebe entegrasyonları,
RFID cihazları,
turnike ve kapı sistemleri,
mobil push servisleri,
API Key yönetimi,
OAuth 2.0,
SDK stratejisi,
geliştirici portalı,
webhook güvenliği,
entegrasyon test altyapısı

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın açık ve genişletilebilir bir Platform as a Service (PaaS) ekosisteminin temelini oluşturacaktır.