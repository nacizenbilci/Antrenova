# Bölüm 34.1 – Enterprise Search Architecture (Kurumsal Arama Mimarisi)

**Dosya:** `34.1_ENTERPRISE_SEARCH_ARCHITECTURE.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Enterprise seviyesindeki arama sistemi yalnızca kayıt bulmak için değil; milyonlarca veri arasında milisaniyeler içinde doğru sonuca ulaşmak için tasarlanmalıdır.

---

## 34.1 Amaç

Kurumsal arama altyapısının amacı;

- hızlı erişim sağlamak,
- kullanıcı deneyimini artırmak,
- veri keşfini kolaylaştırmak,
- iş süreçlerini hızlandırmaktır.

---

## 34.2 Search Katmanları

Arama altyapısı aşağıdaki katmanlardan oluşmalıdır.

- Global Search
- Module Search
- Advanced Search
- Smart Search
- AI Search

---

## 34.3 Global Search

Global Search tüm ana modülleri kapsamalıdır.

Örnek:

- Üyeler
- Paketler
- Randevular
- Ödemeler
- Eğitmenler
- Salonlar
- Formlar
- Bildirimler

---

## 34.4 Modül Bazlı Arama

Her modül kendi alanlarında optimize edilmiş arama sunmalıdır.

---

## 34.5 Full Text Search

Uzun metin alanlarında Full Text Search desteklenmelidir.

---

## 34.6 Anlık Arama

Kullanıcı yazarken sonuçlar gerçek zamanlı güncellenmelidir.

---

## 34.7 Arama Sonuçları

Her sonuç;

- Başlık
- Açıklama
- Modül
- İlgililik Puanı

bilgilerini göstermelidir.

---

## 34.8 Arama Geçmişi

Kullanıcının son aramaları saklanabilmelidir.

---

## 34.9 Popüler Aramalar

Sistem sık kullanılan aramaları analiz edebilmelidir.

---

## 34.10 Güvenlik

Kullanıcı yalnızca yetkili olduğu kayıtları arayabilmelidir.

---

## Business Rules

### BR-511

Global Search tüm ana modülleri desteklemelidir.

### BR-512

Arama sonuçları yetki filtrelerinden geçirilmelidir.

### BR-513

Arama motoru Full Text Search desteği sunmalıdır.

### BR-514

Anlık arama gecikmesi minimum seviyede tutulmalıdır.

### BR-515

Son aramalar kullanıcı bazında saklanmalıdır.

### BR-516

Arama sonuçları ilgililik puanına göre sıralanmalıdır.

---

## Architecture Decision (ADR-079)

Antrenova arama altyapısı; Full Text Search, Global Search ve modül bazlı indeksleme prensipleri üzerine kurulacaktır.

---

# ✅ Bölüm 34.1 TAMAMLANDI

## Sonraki Dosya

**34.2 – Filter Engine ve Advanced Filtering**
