# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 29

# Enterprise Navigation, Bilgi Mimarisi (Information Architecture), Menü Sistemi ve Kullanıcı Akışları (User Flows)

> **Not:** Büyük ölçekli kurumsal yazılımlarda kullanıcılar özellik aramaz; görevlerini tamamlamak ister. Bu nedenle bilgi mimarisi, menü yapısı ve kullanıcı akışları; yazılımın öğrenilebilirliğini, hızını ve verimliliğini doğrudan etkiler.

---

## 29.1 Amaç

Enterprise Navigation mimarisinin amacı;

- kullanıcıların istedikleri bilgiye en kısa sürede ulaşmasını sağlamak,
- ekranlar arasında tutarlı gezinme sunmak,
- öğrenme süresini azaltmak,
- görev odaklı kullanıcı akışları oluşturmaktır.

---

## 29.2 Bilgi Mimarisi (Information Architecture)

Bilgiler rastgele gruplanmamalıdır.

Her modül;

- İş Alanı
- Süreç
- Veri İlişkisi
- Kullanım Sıklığı

esas alınarak organize edilmelidir.

---

## 29.3 Navigation Prensibi

Platform;

'Önce görev, sonra ekran'

yaklaşımıyla tasarlanacaktır.

---

## 29.4 Menü Yapısı

Ana menü;

iş süreçlerini temsil etmelidir.

Örnek:

- Dashboard
- Üyeler
- Paketler
- Randevular
- Ödemeler
- Raporlar
- Ayarlar

---

## 29.5 Menü Derinliği

Menü hiyerarşisi mümkün olduğunca sığ olmalıdır.

Önerilen maksimum derinlik:

- 3 seviye

---

## 29.6 Sidebar

Sidebar;

- daraltılabilir,
- sabit,
- responsive,
- klavye ile kullanılabilir

olmalıdır.

---

## 29.7 Breadcrumb

Kullanıcı bulunduğu konumu her zaman görebilmelidir.

Örnek:

Dashboard / Üyeler / Ahmet Yılmaz / Paketler

---

## 29.8 Global Search

Global arama;

üyeler, paketler, ödemeler, randevular ve diğer ana kayıtlar üzerinde çalışmalıdır.

---

## 29.9 Quick Actions

Sık kullanılan işlemler;

tek tıklamayla başlatılabilmelidir.

Örneğin;

- Yeni Üye
- Yeni Randevu
- Ödeme Al
- Paket Sat

---

## 29.10 Business Rules

### BR-445

Menü yapısı iş süreçlerini temsil etmelidir.

### BR-446

Menü derinliği üç seviyeyi geçmemelidir.

### BR-447

Her sayfada Breadcrumb bulunmalıdır.

### BR-448

Global Search tüm ana modülleri desteklemelidir.

### BR-449

Quick Actions tüm kritik işlemler için sağlanmalıdır.

### BR-450

Sidebar masaüstü ve mobilde tutarlı davranmalıdır.

---

## Architecture Decision (ADR-068)

Antrenova'nın gezinme sistemi; görev odaklı bilgi mimarisi, tutarlı menü yapısı, Breadcrumb, Global Search ve Quick Actions bileşenleri üzerine kurulacaktır.

---

# ✅ BÖLÜM 29 (1. KISIM) TAMAMLANDI

Bir sonraki kısımda;

- User Flows
- Onboarding
- Wizard Yapıları
- Favoriler
- Son Kullanılanlar
- Command Palette
- Menü Kişiselleştirme
- Empty State Navigation

konuları ele alınacaktır.
