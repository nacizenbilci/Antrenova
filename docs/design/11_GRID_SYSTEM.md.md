# 11_GRID_SYSTEM.md

# AntreNova UI/UX Bible v1.0
## 11. Grid System

---

# Amaç

Bu belge, AntreNova kullanıcı arayüzünde uygulanacak grid (ızgara) sistemini tanımlar. Grid sistemi, tüm sayfalarda düzenli hizalama, tutarlı yerleşim ve ölçeklenebilir ekran yapısı oluşturmanın temelidir. Tasarımın profesyonel görünmesini sağlayan en önemli unsurlardan biri rastgele yerleşim yerine sistematik hizalama kullanılmasıdır.

AntreNova'daki tüm sayfalar, kartlar, formlar, tablolar ve dashboard bileşenleri ortak grid mantığı üzerine kurulmalıdır.

---

# Grid Sisteminin Rolü

Grid yalnızca bileşenleri hizalamak için kullanılmaz.

Doğru uygulanan bir grid sistemi;

- ekran bütünlüğünü korur,
- içeriklerin kolay taranmasını sağlar,
- görsel denge oluşturur,
- yeni ekran geliştirmeyi hızlandırır,
- responsive dönüşümleri kolaylaştırır.

Grid kullanılmayan ekranlar zamanla düzensizleşir ve bakım maliyetini artırır.

---

# Tek Grid Yaklaşımı

AntreNova içerisinde farklı modüller farklı grid sistemleri kullanmaz.

Dashboard, Finans, Üyeler, Takvim, Raporlar ve Ayarlar aynı yerleşim mantığını paylaşır.

Kullanıcı ekran değiştirirken bileşenlerin konumunu yeniden öğrenmek zorunda kalmamalıdır.

---

# İçerik Konteyneri

Her sayfa belirlenmiş içerik alanı içerisinde çalışmalıdır.

İçerikler ekranın kenarlarına yapışık yerleştirilmez.

Kenar boşlukları tüm sayfalarda ortak standartlara bağlı kalır.

Bu yaklaşım hem geniş monitörlerde hem de küçük ekranlarda dengeli görünüm sağlar.

---

# Kolon Yapısı

Grid sistemi kolon mantığıyla çalışır.

Kolonlar;

- içerik gruplarını ayırmak,
- kartları hizalamak,
- form alanlarını düzenlemek,
- dashboard bileşenlerini yerleştirmek

amacıyla kullanılır.

Kolon genişlikleri rastgele belirlenmez.

Tüm yerleşimler ortak oranları takip eder.

---

# Satır Düzeni

Dikey hizalama en az yatay hizalama kadar önemlidir.

Başlıklar, kartlar, tablolar ve formlar aynı başlangıç çizgisine oturmalıdır.

Satırlar arasında düzenli boşluk bırakılarak sayfa boyunca görsel ritim korunur.

---

# Hizalama Kuralları

Hizalama tasarımın temel disiplinlerinden biridir.

Bileşenler;

- sola,
- sağa,
- ortaya

yalnızca belirli bir tasarım gerekçesi varsa hizalanmalıdır.

Rastgele hizalama tercih edilmez.

Özellikle veri giriş ekranlarında sol hizalama temel standarttır.

---

# Dashboard Grid Yapısı

Dashboard ekranları farklı boyutlardaki kartlardan oluşabilir.

Ancak bu çeşitlilik düzensizlik oluşturmamalıdır.

KPI kartları, grafikler ve özet paneller ortak grid yapısına bağlı kalır.

Büyük bileşenler küçük kartların hizasını bozmayacak şekilde yerleştirilir.

---

# Form Grid Yapısı

Formlar bilgi yoğun yapılardır.

Alanlar tek sütun veya çok sütun düzeninde olabilir.

Ancak aynı form içerisinde gereksiz kolon değişikliklerinden kaçınılır.

İlgili alanlar aynı satırda, bağımsız bilgiler ise farklı satırlarda yer almalıdır.

---

# Tablo Grid Yapısı

Veri tabloları mümkün olduğunca tam genişlik kullanmalıdır.

Kolon genişlikleri içerik türüne göre belirlenmeli, gereksiz boşluk bırakılmamalıdır.

İşlem sütunları sabit konumda yer almalı ve kullanıcı tarafından kolay erişilebilir olmalıdır.

---

# Kart Yerleşimi

Kartlar grid sistemine uygun şekilde hizalanmalıdır.

Yan yana bulunan kartlar;

- aynı başlangıç çizgisine,
- dengeli yükseklik oranlarına,
- ortak boşluk sistemine

sahip olmalıdır.

Kartlar arasında rastgele mesafeler kullanılmaz.

---

# Responsive Grid

Grid sistemi farklı ekran boyutlarında yeniden düzenlenebilir olmalıdır.

Mobil cihazlarda;

- kolon sayısı azaltılır,
- kartlar alt alta sıralanır,
- formlar tek sütuna dönüşür.

Responsive dönüşüm sırasında içerik önceliği korunmalıdır.

---

# Görsel Denge

Grid sistemi yalnızca teknik bir yapı değildir.

Doğru grid kullanımı ekranın daha sakin, düzenli ve güvenilir görünmesini sağlar.

Yoğun içerik bulunan sayfalarda bile kullanıcı gözünü yormayan bir denge oluşturulmalıdır.

---

# Esnek Yapı

Yeni modüller eklendiğinde mevcut grid sistemi genişletilebilir olmalıdır.

İstisnai ihtiyaçlar oluşsa bile temel hizalama mantığı korunur.

Esneklik, standartlardan vazgeçmek anlamına gelmez.

---

# Geliştirici Standartları

Grid yapısı uygulama genelinde ortak bileşenlerle oluşturulmalıdır.

Her geliştirici kendi yerleşim sistemini oluşturmamalıdır.

Standart grid bileşenleri kullanılarak;

- kod tekrarının önüne geçilir,
- bakım kolaylaşır,
- tasarım tutarlılığı korunur.

---

# Grid Sisteminin Özeti

AntreNova'nın grid sistemi aşağıdaki prensiplere göre uygulanır:

- Ortak grid yapısını tüm modüllerde kullan.
- İçerikleri standart konteyner içinde konumlandır.
- Kolon ve satır düzenini koru.
- Tutarlı hizalama uygula.
- Dashboard bileşenlerini dengeli yerleştir.
- Formları mantıklı kolon yapısıyla düzenle.
- Tablolarda okunabilirliği önceliklendir.
- Kartları ortak grid sistemine bağla.
- Responsive dönüşümlerde bilgi önceliğini koru.
- Görsel dengeyi tüm ekranlarda sürdür.
- Yeni modüllerde mevcut grid yapısını devam ettir.
- Yerleşim kurallarını merkezi bileşenlerle uygula.