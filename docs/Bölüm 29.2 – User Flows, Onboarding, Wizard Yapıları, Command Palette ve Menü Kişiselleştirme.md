# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 29 (DEVAM)

# User Flows, Onboarding, Wizard Yapıları, Command Palette ve Menü Kişiselleştirme

> **Not:** Enterprise yazılımlarda kullanıcıların amacı ekranları gezmek değil, görevlerini en kısa sürede tamamlamaktır. Bu nedenle tüm kullanıcı akışları standartlaştırılmalı ve ölçülebilir olmalıdır.

---

## 29.11 User Flow

Her iş süreci önceden tanımlanmış bir kullanıcı akışına sahip olmalıdır.

Örnek süreçler:

- Yeni Üye Kaydı
- Paket Satışı
- Randevu Oluşturma
- Ödeme Alma
- Yoklama İşlemi

---

## 29.12 Tek Amaçlı Akışlar

Bir ekran mümkün olduğunca tek bir göreve odaklanmalıdır.

---

## 29.13 Onboarding

Yeni kullanıcılar için sistem;

- ilk giriş turu,
- ipuçları,
- örnek veriler,
- yardım bağlantıları

sunmalıdır.

---

## 29.14 Wizard (Sihirbaz)

Karmaşık işlemler tek sayfa yerine adımlara bölünmelidir.

Örnek:

1. Üye Bilgileri
2. Paket Seçimi
3. Ödeme
4. Onay

---

## 29.15 Adım Göstergesi

Wizard yapılarında kullanıcı hangi adımda olduğunu her zaman görebilmelidir.

---

## 29.16 Otomatik Kaydetme

Uzun formlar uygun durumlarda taslak olarak otomatik kaydedilebilmelidir.

---

## 29.17 Favoriler

Kullanıcı sık kullandığı ekranları favorilere ekleyebilmelidir.

---

## 29.18 Son Kullanılanlar

Son ziyaret edilen ekranlar hızlı erişim için listelenmelidir.

---

## 29.19 Command Palette

Platform; Ctrl+K / Cmd+K ile açılabilen merkezi komut paletini desteklemelidir.

Komut Paleti;

- ekran açma,
- kayıt arama,
- hızlı işlem başlatma

işlevlerini yerine getirmelidir.

---

## 29.20 Menü Kişiselleştirme

Yetki sınırları içerisinde kullanıcı;

- favorileri,
- sabitlenen menüleri,
- hızlı işlemleri

kişiselleştirebilmelidir.

---

## 29.21 Empty State Navigation

Boş ekranlar kullanıcıyı bir sonraki adıma yönlendirmelidir.

Örneğin:

'Henüz aktif üye bulunmuyor. İlk üyeyi oluştur.'

---

## Business Rules

### BR-451

Tüm kritik süreçler standart User Flow'lara sahip olmalıdır.

### BR-452

Karmaşık işlemler Wizard yapısıyla desteklenmelidir.

### BR-453

Command Palette tüm ana modüllerde çalışmalıdır.

### BR-454

Favoriler ve Son Kullanılanlar kullanıcı bazlı saklanmalıdır.

### BR-455

Boş ekranlar kullanıcıyı sonraki adıma yönlendirmelidir.

### BR-456

Onboarding isteğe bağlı olarak tekrar çalıştırılabilmelidir.

---

## Architecture Decision (ADR-069)

Antrenova'nın kullanıcı akışları; görev odaklı User Flow, Wizard, Command Palette, Favoriler ve kişiselleştirilebilir navigasyon üzerine kurulacaktır.

---

# ✅ BÖLÜM 29 TAMAMLANDI

## Sonraki Bölüm

**BÖLÜM 30 – Enterprise Dashboard, Analytics, KPI ve Karar Destek Mimarisi**
