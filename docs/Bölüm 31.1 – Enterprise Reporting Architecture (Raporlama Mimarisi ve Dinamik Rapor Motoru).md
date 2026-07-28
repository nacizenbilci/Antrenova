# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 31

# Enterprise Reporting Architecture (Raporlama Mimarisi ve Dinamik Rapor Motoru)

> Kurumsal raporlama sistemi yalnızca geçmiş verileri listelemek için değil, işletmenin performansını analiz etmek, eğilimleri görmek ve stratejik kararları desteklemek için tasarlanmalıdır.

---

## 31.1 Amaç

Raporlama altyapısının amacı;

- güvenilir veri üretmek,
- hızlı analiz yapmak,
- karar süreçlerini desteklemek,
- tüm modüller için standart rapor yapısı sağlamaktır.

---

## 31.2 Raporlama Katmanları

Kurumsal raporlama sistemi dört ana katmandan oluşmalıdır.

1. Operasyonel Raporlar
2. Yönetim Raporları
3. Finansal Raporlar
4. Stratejik Raporlar

---

## 31.3 Standart Raporlar

Sistem varsayılan olarak aşağıdaki raporları sunmalıdır.

- Aktif Üyeler
- Pasif Üyeler
- Yeni Kayıtlar
- Paket Satışları
- Paket Yenilemeleri
- Günlük Tahsilat
- Aylık Gelir
- Eğitmen Performansı
- Devamsızlık
- İptal Edilen Randevular

---

## 31.4 Dinamik Rapor Motoru

Kullanıcı kendi raporunu oluşturabilmelidir.

Seçilebilir özellikler;

- Alanlar
- Filtreler
- Gruplama
- Sıralama
- Toplamlar

---

## 31.5 Filtreleme

Her rapor;

- Tarih
- Şube
- Eğitmen
- Üye
- Paket
- Durum

filtrelerini desteklemelidir.

---

## 31.6 Gruplama

Raporlar;

- Gün
- Hafta
- Ay
- Yıl

bazında gruplanabilmelidir.

---

## 31.7 Kaydedilmiş Raporlar

Kullanıcı oluşturduğu raporları yeniden kullanabilmek için kaydedebilmelidir.

---

## 31.8 Paylaşım

Yetkili kullanıcılar raporları ekip üyeleriyle paylaşabilmelidir.

---

## 31.9 Planlı Raporlar

Belirlenen raporlar;

- günlük,
- haftalık,
- aylık

otomatik oluşturulabilmelidir.

---

## 31.10 Export

Raporlar;

- PDF
- Excel
- CSV

formatlarında dışa aktarılabilmelidir.

---

## Business Rules

### BR-469

Tüm raporlar merkezi raporlama motoru üzerinden üretilmelidir.

### BR-470

Kaydedilen raporlar kullanıcı bazlı saklanmalıdır.

### BR-471

Planlı raporlar zamanlanabilir olmalıdır.

### BR-472

Tüm raporlar yetki kontrolüne tabi olmalıdır.

### BR-473

Filtreler rapor performansını olumsuz etkilemeyecek şekilde optimize edilmelidir.

### BR-474

Export edilen raporlar sistemdeki verilerle birebir tutarlı olmalıdır.

---

## Architecture Decision (ADR-072)

Antrenova raporlama altyapısı; dinamik rapor motoru, merkezi filtreleme sistemi ve zamanlanabilir rapor üretimi üzerine kurulacaktır.

---

# ✅ BÖLÜM 31 (1. KISIM) TAMAMLANDI

## Devamında

- Dashboard Reports
- Pivot Reports
- Grafik Raporlar
- Scheduled Reports
- Notification Reports
- Audit Reports
- Data Warehouse Yaklaşımı
