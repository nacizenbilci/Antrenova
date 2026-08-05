# 07_DESIGN_SYSTEM_OVERVIEW.md

# AntreNova UI/UX Bible v1.0
## 07. Design System Overview

---

# Amaç

Bu belge, AntreNova'nın tasarım sisteminin genel yapısını tanımlar. Design System; yalnızca ortak renkler veya bileşenlerden oluşan bir kütüphane değildir. Ürünün tamamında görsel bütünlüğü, geliştirilebilirliği ve sürdürülebilirliği sağlayan ortak kurallar bütünüdür.

AntreNova büyüdükçe yeni ekranlar, modüller ve kullanıcı rolleri eklenecektir. Tasarım sistemi, bu büyümenin kontrol altında ilerlemesini sağlar.

---

# Design System Nedir?

Design System;

- tasarım kuralları,
- ortak bileşenler,
- tipografi,
- renk sistemi,
- ikon yapısı,
- boşluk sistemi,
- etkileşim kuralları,
- erişilebilirlik standartları

gibi tüm UI kararlarının merkezi kaynağıdır.

Her geliştirici ve tasarımcı aynı sistemi referans alarak çalışmalıdır.

---

# Tek Kaynak Prensibi

Aynı bileşen farklı ekranlarda yeniden tasarlanmaz.

Her ortak öğe yalnızca bir kez tanımlanır ve ihtiyaç duyulan tüm modüllerde tekrar kullanılır.

Örneğin;

- Primary Button
- Data Table
- Search Box
- Modal
- Badge
- Avatar
- Alert
- Form Input

tek bir standart tasarıma sahip olur.

Bu yaklaşım hem geliştirme süresini kısaltır hem de ürün bütünlüğünü korur.

---

# Bileşen Tabanlı Yaklaşım

AntreNova'nın tüm arayüzü bağımsız bileşenlerden oluşur.

Her bileşen;

- tek sorumluluğa sahip,
- tekrar kullanılabilir,
- kolay güncellenebilir,
- bağımsız test edilebilir

şekilde geliştirilmelidir.

Bir bileşende yapılan iyileştirme, onu kullanan tüm ekranlara otomatik olarak yansıyabilmelidir.

---

# Tasarım Tokenları

Renkler, boşluklar, yazı boyutları ve kenar yuvarlaklıkları doğrudan kod içerisine yazılmaz.

Bunun yerine merkezi tasarım tokenları kullanılır.

Örnek kategoriler:

- Color Tokens
- Typography Tokens
- Spacing Tokens
- Radius Tokens
- Shadow Tokens
- Animation Tokens

Bu yapı tasarımın sürdürülebilirliğini artırır ve güncellemeleri kolaylaştırır.

---

# Modüler Yapı

Design System tek parça büyük bir yapı değildir.

Birbirinden bağımsız ancak birlikte çalışan modüllerden oluşur.

Temel modüller:

- Foundation
- Components
- Patterns
- Layout
- Navigation
- Feedback
- Forms
- Data Display

Bu ayrım büyüyen projelerde yönetilebilirliği artırır.

---

# Foundation Katmanı

Foundation katmanı tasarım sisteminin temelidir.

Burada;

- renk paleti,
- tipografi,
- grid sistemi,
- boşluk kuralları,
- ikon sistemi,
- temel ölçüler

tanımlanır.

Diğer tüm bileşenler bu katmana bağlı olarak geliştirilir.

---

# Component Katmanı

Bileşen katmanı kullanıcıyla doğrudan etkileşim kuran tüm UI elemanlarını içerir.

Örneğin;

- Button
- Input
- Checkbox
- Select
- Card
- Badge
- Tabs
- Dialog
- Toast
- Tooltip

Her bileşenin kullanım amacı ve davranışı standarttır.

---

# Pattern Katmanı

Pattern'ler birden fazla bileşenin birlikte oluşturduğu tekrar kullanılabilir yapılardır.

Örneğin;

- filtre alanları,
- arama panelleri,
- dashboard kartları,
- veri giriş ekranları,
- ödeme akışları,
- kullanıcı oluşturma süreçleri

aynı tasarım mantığını kullanır.

Bu yaklaşım kullanıcı deneyiminde süreklilik sağlar.

---

# Sayfa Şablonları

Birçok modül ortak sayfa yapısını kullanacaktır.

Örneğin;

- Liste Sayfası
- Detay Sayfası
- Oluşturma Sayfası
- Düzenleme Sayfası
- Ayarlar Sayfası
- Dashboard Sayfası

Bu şablonlar ortak yerleşim kurallarına bağlı kalmalıdır.

---

# Esneklik

Tasarım sistemi katı kurallar koyarken gelişime de açık olmalıdır.

Yeni bir ihtiyaç oluştuğunda mevcut bileşenler genişletilebilir.

Ancak aynı amaca hizmet eden yeni bileşenler oluşturulmadan önce mevcut yapı değerlendirilmelidir.

Öncelik her zaman yeniden kullanımdır.

---

# Versiyon Yönetimi

Design System zaman içerisinde gelişecektir.

Her değişiklik;

- belgelenmeli,
- geriye dönük uyumluluk değerlendirilmeli,
- etkilenen bileşenler belirlenmeli,
- gerekli güncellemeler planlanmalıdır.

Kontrolsüz değişiklikler tasarım bütünlüğünü bozar.

---

# Geliştirici ve Tasarımcı Uyumu

Design System yalnızca tasarım ekibi için hazırlanmaz.

Geliştiriciler de aynı standartları uygulamalıdır.

Tasarım dosyaları ile uygulama arasında görsel fark oluşmaması hedeflenir.

Tüm ekip ortak terminoloji kullanmalıdır.

---

# Ölçeklenebilirlik

Yeni modüller geliştirilirken mevcut Design System temel alınır.

Yeni ekranlar eski tasarım dilini bozmaz.

Ürün büyüdükçe ortak bileşen sayısı artabilir ancak temel kurallar değişmez.

Bu yaklaşım bakım maliyetini azaltır ve uzun vadeli sürdürülebilirlik sağlar.

---

# Design System'in Sağladığı Faydalar

AntreNova Design System aşağıdaki kazanımları hedefler:

- Ortak tasarım dili oluşturur.
- Geliştirme sürecini hızlandırır.
- Kod tekrarını azaltır.
- Görsel tutarlılığı korur.
- Yeni ekran geliştirmeyi kolaylaştırır.
- Öğrenme süresini kısaltır.
- Kullanıcı deneyimini güçlendirir.
- Tasarım ve geliştirme ekiplerini aynı standartta buluşturur.
- Ürünün uzun vadeli bakımını kolaylaştırır.
- Ölçeklenebilir ve sürdürülebilir bir yapı oluşturur.