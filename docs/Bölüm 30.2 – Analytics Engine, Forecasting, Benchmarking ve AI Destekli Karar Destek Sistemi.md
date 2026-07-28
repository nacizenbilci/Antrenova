# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 30 (DEVAM)

# Analytics Engine, Forecasting, Benchmarking ve AI Destekli Karar Destek Sistemi

> Enterprise analitik altyapısı yalnızca geçmişi raporlamaz; geleceği tahmin eder, sapmaları tespit eder ve yöneticilere öneriler sunar.

---

## 30.11 Analytics Engine

Analytics Engine tüm modüllerden gelen verileri tek merkezde işler.

Veri kaynakları:

- Üyeler
- Paketler
- Randevular
- Ödemeler
- Yoklama
- Bildirimler

---

## 30.12 Veri Katmanları

Analytics üç katmandan oluşmalıdır.

1. Operational Analytics
2. Tactical Analytics
3. Strategic Analytics

---

## 30.13 Grafik Standartları

Grafikler;

- sade,
- okunabilir,
- renk körlüğü dostu,
- mobil uyumlu

olmalıdır.

---

## 30.14 Benchmarking

İşletme performansı;

- geçen hafta,
- geçen ay,
- geçen yıl

ile karşılaştırılabilmelidir.

---

## 30.15 Forecasting

Sistem geçmiş verilere göre tahmin üretebilmelidir.

Örnekler:

- Beklenen gelir
- Paket yenileme oranı
- Tahmini üye kaybı
- Doluluk tahmini

---

## 30.16 Anomali Tespiti

Sistem olağan dışı değişimleri otomatik belirlemelidir.

Örneğin;

- Ani gelir düşüşü
- Devamsızlık artışı
- İptal oranındaki yükseliş

---

## 30.17 AI Destekli İçgörüler

Yapay zeka;

- dikkat edilmesi gereken KPI'ları,
- riskleri,
- fırsatları,
- önerilen aksiyonları

sunabilmelidir.

---

## 30.18 Widget Sistemi

Dashboard widget yapısı;

- sürükle bırak,
- yeniden boyutlandırılabilir,
- kişiselleştirilebilir

olmalıdır.

---

## 30.19 Export

Analitik ekranları;

- PDF
- Excel
- CSV

olarak dışa aktarılabilmelidir.

---

## 30.20 Yetkilendirme

Her kullanıcı yalnızca yetkili olduğu KPI ve raporları görebilmelidir.

---

## Business Rules

### BR-463

Analytics hesaplamaları merkezi servislerde yapılmalıdır.

### BR-464

Forecast algoritmaları versiyonlanmalıdır.

### BR-465

Anomali kuralları yapılandırılabilir olmalıdır.

### BR-466

AI önerileri karar destek niteliğinde olmalıdır.

### BR-467

Widget yerleşimleri kullanıcı bazlı saklanmalıdır.

### BR-468

Dashboard dışa aktarma işlemleri yetkilendirmeye tabi olmalıdır.

---

## Architecture Decision (ADR-071)

Antrenova analitik mimarisi; merkezi Analytics Engine, Forecasting, Benchmarking ve AI destekli karar mekanizmaları üzerine inşa edilecektir.

---

# ✅ BÖLÜM 30 TAMAMLANDI

## Sonraki Bölüm

**BÖLÜM 31 – Enterprise Reporting Architecture (Raporlama Mimarisi ve Dinamik Rapor Motoru)**
