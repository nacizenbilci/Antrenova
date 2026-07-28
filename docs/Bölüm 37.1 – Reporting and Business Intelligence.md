# Bölüm 37.1 – Reporting and Business Intelligence

**Dosya:** `37.1_REPORTING_AND_BUSINESS_INTELLIGENCE.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> İş zekâsı, veriyi anlamlı bilgiye dönüştürerek yöneticilerin daha hızlı ve doğru karar almasını sağlar.

## 37.1 Amaç

Raporlama altyapısı operasyonel, finansal ve yönetsel kararları desteklemelidir.

## 37.2 Rapor Kategorileri

- Operasyon
- Finans
- Üyelik
- Paket
- Randevu
- Eğitmen
- CRM
- Bildirim

## 37.3 Dashboard KPI'ları

- Aktif Üye
- Günlük Ciro
- Tahsilat Oranı
- Doluluk
- Churn Rate
- Yeni Üyeler

## 37.4 Filtreleme

Raporlar;

- Business
- Şube
- Tarih
- Eğitmen
- Paket
- Üye

bazında filtrelenebilmelidir.

## 37.5 Grafikler

- Çizgi
- Sütun
- Pasta
- Alan
- Heatmap
- KPI Kartları

## 37.6 Export

- PDF
- Excel
- CSV

## 37.7 Yetkilendirme

Rapor erişimi rol bazlı olmalıdır.

## 37.8 Performans

Büyük raporlar asenkron oluşturulmalıdır.

## 37.9 Veri Doğruluğu

Tüm KPI hesaplamaları merkezi servislerden beslenmelidir.

## 37.10 Audit

Rapor üretimleri kayıt altına alınmalıdır.

---

## Business Rules

### BR-565
Tüm KPI hesaplamaları standart olmalıdır.

### BR-566
Rapor filtreleri tüm modüllerde tutarlı çalışmalıdır.

### BR-567
Export işlemleri loglanmalıdır.

### BR-568
Yetkisiz kullanıcı rapor görememelidir.

### BR-569
Uzun süren raporlar arka planda üretilmelidir.

### BR-570
Dashboard gerçek zamanlı yenilenebilir olmalıdır.

---

## Architecture Decision (ADR-088)

Antrenova raporlama altyapısı merkezi BI servisleri ve ölçeklenebilir KPI mimarisi üzerine kurulacaktır.

---

# ✅ Bölüm 37.1 TAMAMLANDI

## Sonraki Dosya

**37.2_ANALYTICS_AND_KPI_ENGINE.md**
