# Bölüm 38.2 – API Design and Webhooks

**Dosya:** `38.2_API_DESIGN_AND_WEBHOOKS.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Güçlü API tasarımı ve güvenilir webhook altyapısı, Antrenova'nın üçüncü taraf sistemlerle güvenli ve sürdürülebilir şekilde haberleşmesini sağlar.

## 38.11 API Tasarım İlkeleri

- REST tabanlı kaynak odaklı tasarım
- Gerektiğinde GraphQL desteği
- Tutarlı endpoint isimlendirmesi
- Sürümleme (/v1, /v2)

## 38.12 İstek / Yanıt Standartları

Tüm API'ler standart HTTP durum kodları ve ortak hata formatı kullanmalıdır.

## 38.13 Kimlik Doğrulama

- OAuth 2.0
- JWT
- API Key
- Service Account

## 38.14 Rate Limiting

İstemci bazlı hız sınırları uygulanmalıdır.

## 38.15 Webhook Olayları

Örnek olaylar:

- Member.Created
- Payment.Completed
- Appointment.Created
- Package.Expired

## 38.16 Retry Politikası

Başarısız webhook çağrıları artan bekleme süresiyle yeniden denenmelidir.

## 38.17 İmza Doğrulama

Webhook payload'ları HMAC imzası ile doğrulanmalıdır.

## 38.18 Idempotency

Tekrarlanan istekler aynı işlemi ikinci kez oluşturmamalıdır.

## 38.19 İzlenebilirlik

Her API isteği Correlation ID / Trace ID ile takip edilmelidir.

## 38.20 Dokümantasyon

OpenAPI uyumlu API dokümantasyonu otomatik üretilmelidir.

---

## Business Rules

### BR-589
API sözleşmeleri geriye dönük uyumlu olmalıdır.

### BR-590
Webhook imzaları doğrulanmadan işlenmemelidir.

### BR-591
Retry mekanizması yapılandırılabilir olmalıdır.

### BR-592
Idempotency kritik işlemlerde zorunlu olmalıdır.

### BR-593
API kullanım logları saklanmalıdır.

### BR-594
API dokümantasyonu güncel tutulmalıdır.

---

## Architecture Decision (ADR-092)

Antrenova API katmanı; OpenAPI, güvenli kimlik doğrulama, webhook doğrulama ve idempotent işlem prensipleri üzerine kurulacaktır.

---

# ✅ Bölüm 38.2 TAMAMLANDI

## Sonraki Dosya

**38.3_EXTERNAL_SERVICES_AND_CONNECTORS.md**
