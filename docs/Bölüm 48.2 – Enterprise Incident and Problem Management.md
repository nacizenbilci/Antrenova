# Bölüm 48.2 – Enterprise Incident and Problem Management

**Dosya:** `48.2_ENTERPRISE_INCIDENT_AND_PROBLEM_MANAGEMENT.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Bu bölüm, olay (Incident) ve problem (Problem) yönetimi süreçlerini tanımlar.

## 48.5 Incident Yönetimi

Yaşam döngüsü:

1. Tespit
2. Kayıt
3. Sınıflandırma
4. Önceliklendirme
5. Atama
6. Çözüm
7. Doğrulama
8. Kapatma

## 48.6 Problem Yönetimi

- Tekrarlayan incident analizi
- Kök neden analizi (RCA)
- Kalıcı çözüm
- Bilgi tabanı güncellemesi

## 48.7 Öncelik Matrisi

- P1: Sistem tamamen kullanılamıyor
- P2: Kritik fonksiyon etkileniyor
- P3: Kısmi işlev kaybı
- P4: İyileştirme talebi

## 48.8 KPI

- MTTR
- MTBF
- İlk temas çözüm oranı
- Tekrarlayan incident oranı

---

## Business Rules

### BR-769
Her incident benzersiz kimlikle kayıt altına alınmalıdır.

### BR-770
P1 olaylar derhal eskale edilmelidir.

### BR-771
Tekrarlayan olaylar problem kaydına dönüştürülmelidir.

### BR-772
RCA tamamlanmadan problem kapatılamaz.

### BR-773
Bilgi tabanı çözümlerle güncellenmelidir.

### BR-774
Incident KPI'ları aylık değerlendirilmelidir.

---

## Architecture Decision (ADR-122)

Incident ve Problem yönetimi süreçleri birbirinden ayrılarak izlenebilir ve sürekli iyileştirilebilir şekilde tasarlanacaktır.

---

# ✅ Bölüm 48.2 TAMAMLANDI

## Sonraki Dosya

**48.3_ENTERPRISE_CHANGE_AND_RELEASE_MANAGEMENT.md**
