# Bölüm 48.3 – Enterprise Change and Release Management

**Dosya:** `48.3_ENTERPRISE_CHANGE_AND_RELEASE_MANAGEMENT.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Bu bölüm, Antrenova platformunda değişiklik (Change) ve sürüm (Release) yönetimi süreçlerini standartlaştırır.

## 48.9 Değişiklik Türleri

- Standard Change
- Normal Change
- Emergency Change

## 48.10 Değişiklik Süreci

Talep → Etki Analizi → Risk Değerlendirmesi → Onay → Geliştirme → Test → Yayın → İzleme → Kapatma

## 48.11 Release Yönetimi

Her sürüm için:

- Release Planı
- Changelog
- Rollback Planı
- Risk Analizi
- Başarı Kriterleri

hazırlanmalıdır.

## 48.12 CAB (Change Advisory Board)

Yüksek riskli değişiklikler teknik lider, ürün sahibi ve operasyon temsilcisinin onayından geçmelidir.

## 48.13 Başarı Ölçütleri

- Başarılı yayın oranı
- Rollback oranı
- Acil değişiklik yüzdesi
- Yayın sonrası kritik hata sayısı

---

## Business Rules

### BR-775
Her değişiklik kayıt altına alınmalıdır.

### BR-776
Yüksek riskli değişiklikler CAB onayı gerektirir.

### BR-777
Her yayın için rollback planı hazırlanmalıdır.

### BR-778
Emergency Change sonradan dokümante edilmelidir.

### BR-779
Release notları tüm paydaşlarla paylaşılmalıdır.

### BR-780
Yayın sonrası sistem sağlık kontrolleri tamamlanmalıdır.

---

## Architecture Decision (ADR-123)

Antrenova değişiklik ve sürüm yönetimi, kontrollü yayın, risk azaltma ve izlenebilirlik prensiplerine göre yürütülecektir.

---

# ✅ Bölüm 48.3 TAMAMLANDI

## Sonraki Dosya

**49.1_ENTERPRISE_BUSINESS_CONTINUITY_AND_DISASTER_RECOVERY.md**
