# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 31 (DEVAM)

# Pivot Raporlar, Zamanlanmış Raporlar, Audit Raporları ve Veri Ambarı (Data Warehouse)

> Kurumsal raporlama altyapısı yalnızca standart raporlar üretmekle sınırlı değildir. İş zekâsı süreçlerini destekleyen esnek, denetlenebilir ve ölçeklenebilir bir mimari sunmalıdır.

---

## 31.11 Pivot Raporlar

Kullanıcılar raporları dinamik olarak;

- satır,
- sütun,
- değer,
- filtre

alanları ile yeniden düzenleyebilmelidir.

---

## 31.12 Grafik Raporları

Her sayısal rapor uygun olduğunda grafik görünümü sunmalıdır.

Desteklenen grafik tipleri:

- Çizgi
- Sütun
- Alan
- Pasta
- Donut
- Isı Haritası

---

## 31.13 Scheduled Reports

Raporlar otomatik olarak;

- günlük,
- haftalık,
- aylık,
- özel zamanlarda

oluşturulup gönderilebilmelidir.

---

## 31.14 Bildirim Entegrasyonu

Planlanan raporlar;

- E-posta
- WhatsApp
- Sistem Bildirimi

kanallarıyla paylaşılabilmelidir.

---

## 31.15 Audit Reports

Tüm kritik işlemler için denetim raporları üretilebilmelidir.

Örnek:

- Kim değiştirdi?
- Ne değişti?
- Ne zaman değişti?
- Eski değer
- Yeni değer

---

## 31.16 Veri Ambarı (Data Warehouse)

Operasyonel verilerden bağımsız analiz amaçlı veri katmanı oluşturulmalıdır.

Bu katman;

- performansı artırmalı,
- tarihsel analizleri kolaylaştırmalı,
- BI araçlarına veri sağlamalıdır.

---

## 31.17 Veri Tutarlılığı

Raporlarda kullanılan veriler tek doğruluk kaynağından (Single Source of Truth) gelmelidir.

---

## 31.18 Performans

Büyük raporlar;

- önbellekleme,
- sayfalama,
- asenkron üretim

teknikleriyle optimize edilmelidir.

---

## 31.19 Güvenlik

Kullanıcı yalnızca yetkili olduğu raporları görüntüleyebilmelidir.

---

## 31.20 Arşivleme

Eski raporlar arşivlenmeli ancak gerektiğinde erişilebilir olmalıdır.

---

## Business Rules

### BR-475

Pivot raporlar dinamik alan seçimini desteklemelidir.

### BR-476

Zamanlanmış raporlar arka plan görevleriyle üretilmelidir.

### BR-477

Audit raporları silinemez kayıtlar üzerinden oluşturulmalıdır.

### BR-478

Veri ambarı operasyonel sistemi etkilemeyecek şekilde tasarlanmalıdır.

### BR-479

Rapor önbellekleri otomatik yenilenebilmelidir.

### BR-480

Tüm rapor çıktıları denetlenebilir ve tekrar üretilebilir olmalıdır.

---

## Architecture Decision (ADR-073)

Antrenova raporlama mimarisi; merkezi rapor motoru, Data Warehouse, zamanlanmış görevler ve değiştirilemez audit kayıtları üzerine inşa edilecektir.

---

# ✅ BÖLÜM 31 TAMAMLANDI

## Sonraki Bölüm

**BÖLÜM 32 – Enterprise Notification Architecture (Bildirim Altyapısı, Event Driven Yapı ve Mesajlaşma Mimarisi)**
