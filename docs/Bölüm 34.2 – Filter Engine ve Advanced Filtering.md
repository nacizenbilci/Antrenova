# Bölüm 34.2 – Filter Engine ve Advanced Filtering

**Dosya:** `34.2_FILTER_ENGINE_AND_ADVANCED_FILTERING.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Güçlü bir filtreleme sistemi, kullanıcıların büyük veri kümeleri içinde ihtiyaç duydukları kayıtlara saniyeler içinde ulaşmasını sağlar.

---

## 34.11 Filter Engine

Merkezi Filter Engine tüm modüller tarafından ortak kullanılmalıdır.

Desteklenen filtre tipleri:

- Metin
- Sayı
- Tarih
- Durum
- Çoklu seçim
- Aralık
- Etiket

---

## 34.12 Gelişmiş Filtreleme

Kullanıcılar birden fazla filtreyi birlikte kullanabilmelidir.

Örnek:

- Aktif Üyeler
- Borcu > 500 TL
- Son 30 günde gelenler
- Eğitmen = Ahmet

---

## 34.13 Mantıksal Operatörler

Filtre motoru;

- AND
- OR
- NOT

operatörlerini desteklemelidir.

---

## 34.14 Kaydedilmiş Filtreler

Kullanıcı kendi filtrelerini kaydedebilmelidir.

---

## 34.15 Varsayılan Filtreler

Sistem sık kullanılan hazır filtreleri sunmalıdır.

---

## 34.16 Dinamik Filtreler

Filtre seçenekleri mevcut verilere göre otomatik güncellenmelidir.

---

## 34.17 Sıralama

Filtre sonuçları;

- artan,
- azalan,
- çoklu alan

sıralamasını desteklemelidir.

---

## 34.18 Performans

Filtreleme işlemleri indeksleri etkin kullanacak şekilde optimize edilmelidir.

---

## 34.19 Yetkilendirme

Filtreleme sonucunda yalnızca kullanıcının erişim yetkisi olan kayıtlar döndürülmelidir.

---

## 34.20 Kullanılabilirlik

Aktif filtreler kullanıcıya görünür etiketler (chips) olarak gösterilmelidir.

---

## Business Rules

### BR-517

Tüm modüller ortak Filter Engine kullanmalıdır.

### BR-518

Filtreler URL ile paylaşılabilir olmalıdır.

### BR-519

Kaydedilmiş filtreler kullanıcı bazlı saklanmalıdır.

### BR-520

AND/OR desteği zorunludur.

### BR-521

Filtre performansı milyonlarca kayıt altında korunmalıdır.

### BR-522

Filtreleme yetkilendirme kurallarını aşmamalıdır.

---

## Architecture Decision (ADR-080)

Antrenova filtreleme altyapısı; merkezi Filter Engine, dinamik filtreler ve paylaşılabilir sorgu yapısı üzerine kurulacaktır.

---

# ✅ Bölüm 34.2 TAMAMLANDI

## Sonraki Dosya

**34.3 – Search Indexing, Relevance Scoring ve Search Optimization**
