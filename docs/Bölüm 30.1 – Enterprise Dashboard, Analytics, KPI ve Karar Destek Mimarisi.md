# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 30

# Enterprise Dashboard, Analytics, KPI ve Karar Destek Mimarisi

> **Not:** Dashboard'lar yalnızca grafik gösteren ekranlar değildir. Enterprise seviyesinde bir dashboard, yöneticilerin saniyeler içinde doğru karar verebilmesini sağlayan karar destek merkezidir.

---

## 30.1 Amaç

Dashboard mimarisinin amacı;

- kritik verileri tek ekranda sunmak,
- karar alma süresini azaltmak,
- operasyonel görünürlüğü artırmak,
- eğilimleri (trend) göstermek,
- aksiyon alınmasını kolaylaştırmaktır.

---

## 30.2 Dashboard İlkeleri

Her dashboard;

- sade,
- okunabilir,
- hızlı,
- aksiyon odaklı

olmalıdır.

---

## 30.3 KPI (Key Performance Indicator)

KPI'lar işletmenin en önemli performans göstergeleridir.

Her KPI;

- tek anlam taşımalı,
- açık tanımlanmalı,
- ölçülebilir olmalıdır.

---

## 30.4 Dashboard Katmanları

```text
Executive Dashboard

↓

Business Dashboard

↓

Operational Dashboard

↓

Personal Dashboard
```

---

## 30.5 Executive Dashboard

İşletme sahibine yönelik üst düzey göstergeler.

Örnek;

- Toplam Ciro
- Aktif Üye
- Tahsilat Oranı
- Doluluk
- Yeni Üyeler

---

## 30.6 Operational Dashboard

Günlük operasyon için hazırlanır.

Örnek;

- Bugünkü Randevular
- Bekleyen Ödemeler
- Gelmeyen Üyeler
- Yaklaşan Paket Bitişleri

---

## 30.7 KPI Kartları

Her KPI kartında mümkün olduğunca;

- Başlık
- Değer
- Trend
- Karşılaştırma
- Son Güncelleme

bulunmalıdır.

---

## 30.8 Drill Down

Her KPI ayrıntıya inebilecek şekilde tasarlanmalıdır.

Kart →

Liste →

Detay

---

## 30.9 Filtreleme

Dashboard;

- Tarih
- Şube
- Eğitmen
- İşletme
- Üyelik Türü

filtrelerini desteklemelidir.

---

## 30.10 Gerçek Zamanlı Güncelleme

Uygun KPI'lar gerçek zamanlı güncellenebilmelidir.

---

## Business Rules

### BR-457

Her KPI'nın iş tanımı dokümante edilmelidir.

### BR-458

Dashboard karar vermeyi kolaylaştırmalıdır.

### BR-459

KPI kartları detay sayfasına yönlendirmelidir.

### BR-460

Filtreler tüm dashboard genelinde tutarlı çalışmalıdır.

### BR-461

Gerçek zamanlı göstergeler açık şekilde belirtilmelidir.

### BR-462

KPI hesaplamaları merkezi servislerden yapılmalıdır.

---

## Architecture Decision (ADR-070)

Dashboard mimarisi; merkezi KPI motoru, filtrelenebilir analizler ve Drill Down yaklaşımı üzerine kurulacaktır.

---

# ✅ BÖLÜM 30 (1. KISIM) TAMAMLANDI

## Devamında

- Analytics Engine
- Grafik Standartları
- Benchmarking
- Forecasting
- AI Destekli İçgörüler
- Rapor Panelleri
- Widget Sistemi
