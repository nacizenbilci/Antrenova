BÖLÜM 25
Kurumsal Entegrasyon Mimarisi, API Ekosistemi ve Geliştirici Platformu (Developer Platform)

Not: Antrenova yalnızca kendi kullanıcı arayüzü üzerinden çalışan kapalı bir yazılım olmayacaktır. Platform; üçüncü taraf uygulamalar, mobil istemciler, RFID cihazları, ödeme sistemleri, muhasebe yazılımları, e-ticaret altyapıları ve gelecekte geliştirilecek partner uygulamalarıyla güvenli şekilde entegre olabilecek açık bir platform mimarisine sahip olacaktır.

25.1 Amaç

Kurumsal entegrasyon mimarisinin amacı;

sistemler arası veri alışverişini standartlaştırmak,
entegrasyon maliyetini azaltmak,
geliştirici deneyimini iyileştirmek,
platformun genişletilebilirliğini artırmaktır.
25.2 API-First Yaklaşımı

Yeni geliştirilecek tüm modüller;

öncelikle API olarak tasarlanmalıdır.

Ardından;

Web Paneli
Mobil Uygulama
AI Agent
Partner Servisleri

aynı API'yi kullanmalıdır.

25.3 Headless Yaklaşımı

İş mantığı;

arayüzden bağımsız olmalıdır.

Web

↓

API

↓

Business Layer

↓

Database

↑

Mobile

↑

AI

↑

Partner Apps
25.4 API Tasarım İlkeleri

Her API;

tutarlı,
tahmin edilebilir,
sürümlenebilir,
belgelenebilir

olmalıdır.

25.5 REST Standartları

REST endpoint'leri;

isimlendirme açısından standart olmalıdır.

Örnek;

/api/v1/members

/api/v1/packages

/api/v1/payments

/api/v1/trainers
25.6 HTTP Method Standartları

İşlemler;

HTTP standartlarına uygun olmalıdır.

GET

↓

Read

POST

↓

Create

PUT

↓

Replace

PATCH

↓

Update

DELETE

↓

Delete
25.7 Resource Tabanlı Tasarım

Endpoint'ler;

işlem odaklı değil,

kaynak (Resource) odaklı tasarlanmalıdır.

Doğru;

/members

/payments

Yanlış;

/createMember

/getPayments

/updatePackage
25.8 Tutarlı Response Yapısı

API cevapları;

ortak standartta olmalıdır.

Örnek;

{
  "success": true,
  "data": {},
  "meta": {},
  "errors": []
}
25.9 Hata Yönetimi

API;

teknik hata mesajlarını istemciye göstermemelidir.

Kullanıcıya;

anlaşılır hata mesajı,

geliştiriciye ise

log ve hata kodu sunulmalıdır.

25.10 Pagination

Liste endpoint'leri;

sayfalamayı desteklemelidir.

page

limit

total

totalPages
25.11 Filtering

API;

esnek filtrelemeyi desteklemelidir.

Örneğin;

status=active

trainer=123

branch=1

startDate=...
25.12 Sorting

Liste endpoint'lerinde;

sıralama desteklenmelidir.

Örneğin;

sort=name

sort=-created_at
25.13 Field Selection

İstemci;

gereksiz veri almamalıdır.

Örneğin;

fields=id,name,phone
25.14 Business Rules
BR-343

Tüm yeni modüller API-First yaklaşımıyla geliştirilmelidir.

BR-344

Endpoint isimleri Resource tabanlı olmalıdır.

BR-345

API Response formatı tüm sistemde standart olmalıdır.

BR-346

Liste endpoint'leri Pagination desteği sağlamalıdır.

BR-347

Filtering ve Sorting ortak standartlarla uygulanmalıdır.

BR-348

İstemci yalnızca ihtiyaç duyduğu alanları talep edebilmelidir.

Architecture Decision (ADR-051)

Antrenova'nın tüm servisleri API-First prensibiyle geliştirilecek; web paneli, mobil uygulama, AI katmanı ve üçüncü taraf entegrasyonlar aynı API sözleşmesini kullanacaktır.

25.15 API Versioning

API'ler;

sürüm numarasıyla yayınlanmalıdır.

Örneğin;

/api/v1

↓

/api/v2

Eski sürümler;

belirlenen süre boyunca desteklenebilir.

25.16 Backward Compatibility

Yeni sürümler;

mümkün olduğunca mevcut istemcileri bozmamalıdır.

Kırıcı değişiklikler;

yeni API sürümünde yayınlanmalıdır.

25.17 Deprecation Politikası

Kullanımdan kaldırılacak endpoint'ler;

önceden duyurulmalıdır.

Geçiş süreci tamamlanmadan ani kaldırma yapılmamalıdır.

25.18 API Gateway

Tüm dış istekler;

API Gateway üzerinden geçmelidir.

Client

↓

API Gateway

↓

Services

Gateway;

Authentication
Rate Limiting
Logging
Routing

gibi işlemleri yönetebilir.

25.19 OAuth2 ve OpenID Connect

Üçüncü taraf uygulamalar;

güvenli yetkilendirme standartlarını kullanmalıdır.

Desteklenebilecek senaryolar;

Authorization Code
Client Credentials
PKCE
25.20 API Key Yönetimi

Partner sistemleri için;

API Key desteği sağlanabilir.

Her anahtar;

Business
Yetki
Süre
Durum

bilgileriyle ilişkilendirilmelidir.

25.21 Scope Yönetimi

API erişimleri;

Scope mantığıyla sınırlandırılmalıdır.

Örneğin;

members:read

members:write

payments:read

payments:write
25.22 Rate Limit Politikası

Her istemci;

belirli kullanım limitlerine tabi olabilir.

Limitler;

abonelik planına veya entegrasyon türüne göre değişebilir.

25.23 Business Rules
BR-349

API sürümleri geriye dönük uyumluluk gözetilerek yönetilmelidir.

BR-350

Kırıcı değişiklikler yeni API sürümünde yayınlanmalıdır.

BR-351

API Gateway tüm dış erişimlerin merkezi giriş noktası olmalıdır.

BR-352

Partner erişimleri Scope tabanlı yetkilendirme kullanmalıdır.

BR-353

API anahtarları iptal edilebilir ve süresi dolabilir olmalıdır.

BR-354

API kullanım limitleri merkezi olarak yönetilmelidir.

Architecture Decision (ADR-052)

Antrenova'nın entegrasyon katmanı; API Gateway, Version Manager, OAuth2/OpenID Connect, Scope Manager, API Key Service ve Rate Limiter bileşenlerinden oluşacaktır. Bu yapı; güvenli, ölçeklenebilir ve uzun ömürlü entegrasyonlar sağlayacaktır.

✅ BÖLÜM 25 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 25.2 – Webhook Altyapısı, Geliştirici Portalı, SDK Stratejisi, Plugin Sistemi, Marketplace ve Partner Ekosistemi

Bu bölümde;

Webhook mimarisi,
Event Subscription,
Retry politikaları,
Signature doğrulama,
geliştirici portalı,
OpenAPI dokümantasyonu,
SDK üretimi,
Plugin API,
Marketplace,
Partner sertifikasyon süreci,
üçüncü taraf uygulama standartları

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın gelecekte kendi geliştirici ekosistemini oluşturarak güvenli ve sürdürülebilir bir platform haline gelmesini sağlayacaktır.