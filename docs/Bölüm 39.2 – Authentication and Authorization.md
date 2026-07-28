# Bölüm 39.2 – Authentication and Authorization

**Dosya:** `39.2_AUTHENTICATION_AND_AUTHORIZATION.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Kimlik doğrulama (Authentication) ve yetkilendirme (Authorization), platform güvenliğinin temelini oluşturur. Doğru tasarlanmış bir erişim modeli hem kullanıcı deneyimini hem de veri güvenliğini artırır.

## 39.11 Authentication

Desteklenen yöntemler:

- E-posta / Parola
- Magic Link
- OAuth 2.0
- Çok Faktörlü Kimlik Doğrulama (MFA)
- Service Account

## 39.12 Password Policy

- Minimum 12 karakter
- Büyük/küçük harf
- Rakam
- Özel karakter
- Zayıf parola engelleme

## 39.13 Session Management

- Güvenli oturum oluşturma
- Refresh Token
- Oturum zaman aşımı
- Tek cihazdan çıkış
- Tüm cihazlardan çıkış

## 39.14 Authorization

Rol tabanlı (RBAC) ve gerektiğinde izin tabanlı erişim (PBAC) desteklenmelidir.

## 39.15 Permission Model

İzinler modül, işlem ve kaynak seviyesinde tanımlanabilmelidir.

## 39.16 Multi-Tenant Isolation

Business ve Branch seviyesinde veri izolasyonu zorunlu olmalıdır.

## 39.17 MFA

Yönetici hesaplarında MFA varsayılan olarak etkinleştirilebilmelidir.

## 39.18 Login Security

- Rate limiting
- CAPTCHA desteği
- Başarısız giriş kilidi
- Şüpheli IP tespiti

## 39.19 Audit

Tüm giriş, çıkış ve yetki değişiklikleri kayıt altına alınmalıdır.

## 39.20 Future Readiness

Passkey (WebAuthn/FIDO2) desteği ileride eklenebilecek şekilde mimari tasarlanmalıdır.

---

## Business Rules

### BR-607
Tüm kullanıcılar güvenli kimlik doğrulama ile sisteme giriş yapmalıdır.

### BR-608
Yetkilendirme merkezi RBAC sistemi üzerinden yürütülmelidir.

### BR-609
Business sınırları hiçbir sorguda ihlal edilmemelidir.

### BR-610
Başarısız giriş denemeleri sınırlandırılmalıdır.

### BR-611
Tüm yetki değişiklikleri Audit Log'a yazılmalıdır.

### BR-612
Yönetici hesaplarında MFA önerilmeli veya zorunlu tutulabilmelidir.

---

## Architecture Decision (ADR-095)

Antrenova erişim kontrol mimarisi; merkezi Authentication Service, RBAC, MFA ve Multi-Tenant veri izolasyonu üzerine kurulacaktır.

---

# ✅ Bölüm 39.2 TAMAMLANDI

## Sonraki Dosya

**39.3_AUDIT_LOGGING_AND_COMPLIANCE.md**
