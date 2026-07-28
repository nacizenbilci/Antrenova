# Bölüm 36.1 – CRM Architecture (Müşteri İlişkileri Yönetimi Mimarisi)

**Dosya:** `36.1_CRM_ARCHITECTURE.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> CRM yalnızca müşteri kartlarının tutulduğu bir modül değildir. Enterprise CRM; adaydan sadık müşteriye kadar tüm yaşam döngüsünü yöneten merkezi ilişki platformudur.

---

## 36.1 Amaç

CRM mimarisinin amacı;

- müşteri yaşam döngüsünü yönetmek,
- satış süreçlerini desteklemek,
- iletişim geçmişini merkezileştirmek,
- sadakati artırmaktır.

---

## 36.2 CRM Yaşam Döngüsü

Potansiyel Aday

↓

İlk İletişim

↓

Teklif

↓

Üyelik

↓

Aktif Müşteri

↓

Yenileme

↓

Referans

---

## 36.3 Temel Varlıklar

- Lead
- Opportunity
- Member
- Company
- Contact
- Activity
- Note
- Task

---

## 36.4 İletişim Geçmişi

Her müşteri için;

- Aramalar
- WhatsApp
- SMS
- E‑Posta
- Toplantılar
- Notlar

tek zaman çizelgesinde görüntülenmelidir.

---

## 36.5 Lead Yönetimi

Lead kayıtları;

- Kaynak,
- Durum,
- Öncelik,
- Sorumlu Personel

bilgilerini içermelidir.

---

## 36.6 Opportunity Pipeline

Satış fırsatları aşamalı olarak takip edilmelidir.

Örnek:

- Yeni
- Görüşme
- Teklif
- Kazanıldı
- Kaybedildi

---

## 36.7 Görev Yönetimi

Her müşteriyle ilişkili görevler atanabilir olmalıdır.

---

## 36.8 Etiketleme

Müşteriler dinamik etiketlerle sınıflandırılabilmelidir.

---

## 36.9 Yetkilendirme

Kullanıcı yalnızca yetkili olduğu müşteri kayıtlarını görüntüleyebilmelidir.

---

## 36.10 Performans

CRM ekranları büyük veri kümelerinde düşük gecikmeyle çalışmalıdır.

---

## Business Rules

### BR-547

Tüm müşteri etkileşimleri zaman çizelgesine kaydedilmelidir.

### BR-548

Lead ve Opportunity yaşam döngüsü izlenebilir olmalıdır.

### BR-549

Görevler sorumlu kullanıcıya atanmalıdır.

### BR-550

CRM kayıtları Business ID ile ayrıştırılmalıdır.

### BR-551

İletişim geçmişi silinmemeli, arşivlenmelidir.

### BR-552

CRM erişimleri rol bazlı yetkilendirmeye tabi olmalıdır.

---

## Architecture Decision (ADR-085)

Antrenova CRM mimarisi; müşteri yaşam döngüsü, merkezi iletişim zaman çizelgesi ve satış fırsatı yönetimi üzerine kurulacaktır.

---

# ✅ Bölüm 36.1 TAMAMLANDI

## Sonraki Dosya

**36.2_LEAD_AND_OPPORTUNITY_MANAGEMENT.md**
