# Bölüm 38.3 – External Services and Connectors

**Dosya:** `38.3_EXTERNAL_SERVICES_AND_CONNECTORS.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Antrenova, harici servislerle güvenli, sürdürülebilir ve ölçeklenebilir entegrasyon sağlayan standart bir Connector mimarisi kullanmalıdır.

## 38.21 Amaç

Connector katmanı, farklı servis sağlayıcılarını ortak bir arayüz üzerinden yönetmeyi hedefler.

## 38.22 Desteklenen Servisler

- WhatsApp Business Platform
- SMS Sağlayıcıları
- SMTP / E-posta
- Ödeme Sistemleri
- RFID Donanımları
- Muhasebe Yazılımları
- E-İmza Servisleri
- Bulut Depolama

## 38.23 Connector Yapısı

Her entegrasyon aşağıdaki bileşenlerden oluşmalıdır:

- Connector Interface
- Provider Adapter
- Authentication Layer
- Retry Manager
- Logging Service

## 38.24 Sağlayıcı Değiştirilebilirliği

Yeni bir servis sağlayıcısı mevcut iş kurallarını değiştirmeden sisteme eklenebilmelidir.

## 38.25 Hata Yönetimi

Connector katmanı standart hata kodları üretmeli ve merkezi log sistemine kayıt göndermelidir.

## 38.26 Timeout ve Retry

Timeout, Retry ve Circuit Breaker politikaları yapılandırılabilir olmalıdır.

## 38.27 Sağlık Kontrolü

Her connector için Health Check desteği bulunmalıdır.

## 38.28 Güvenlik

API anahtarları güvenli kasada saklanmalı ve uygulama kodunda tutulmamalıdır.

## 38.29 İzlenebilirlik

Tüm connector çağrıları Trace ID ile izlenebilmelidir.

## 38.30 Test Edilebilirlik

Connector mimarisi Mock Provider desteği ile test edilebilir olmalıdır.

---

## Business Rules

### BR-595

Tüm harici servisler Connector katmanı üzerinden kullanılmalıdır.

### BR-596

Provider değişimi uygulama iş kurallarını etkilememelidir.

### BR-597

Başarısız entegrasyon çağrıları yeniden denenmelidir.

### BR-598

Connector sağlık durumu izlenmelidir.

### BR-599

API anahtarları güvenli şekilde saklanmalıdır.

### BR-600

Connector işlemleri Audit Log'a kaydedilmelidir.

---

## Architecture Decision (ADR-093)

Antrenova harici servis mimarisi Connector Pattern, Adapter Pattern ve merkezi entegrasyon yönetimi üzerine kurulacaktır.

---

# ✅ Bölüm 38 TAMAMLANDI

## Sonraki Dosya

**39.1_SECURITY_ARCHITECTURE.md**
