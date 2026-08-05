# 10_SPACING_SYSTEM.md

# AntreNova UI/UX Bible v1.0
## 10. Spacing System

---

# Amaç

Bu belge, AntreNova kullanıcı arayüzünde uygulanacak boşluk (spacing) sistemini tanımlar. Doğru boşluk kullanımı yalnızca estetik görünüm sağlamaz; okunabilirliği artırır, bilgi gruplarını ayırır, kullanıcı odaklanmasını kolaylaştırır ve tüm ekranlarda tutarlı bir düzen oluşturur.

Spacing sistemi, ürünün tamamında ortak bir görsel ritim oluşturmayı hedefler. Rastgele boşluk değerleri kullanılmaz; tüm yerleşimler tanımlı ölçeklere göre oluşturulur.

---

# Temel Yaklaşım

Boşluk, tasarımın görünmeyen ancak en önemli yapı taşlarından biridir.

AntreNova'da boşluklar;

- içerikleri ayırmak,
- ilişkili öğeleri gruplamak,
- görsel yoğunluğu azaltmak,
- ekranın okunabilirliğini artırmak

amacıyla kullanılır.

Her boşluk bilinçli bir tasarım kararıdır.

---

# Tutarlı Ölçek Sistemi

Tüm boşluklar ortak bir ölçek sistemi üzerine kurulmalıdır.

Geliştirme sırasında gelişi güzel piksel değerleri kullanılmaz.

Spacing değerleri tasarım tokenları üzerinden yönetilir ve tüm bileşenlerde aynı mantıkla uygulanır.

Bu yaklaşım hem tasarım hem de geliştirme süreçlerinde tutarlılığı sağlar.

---

# Dış Boşluk (Margin)

Margin, bileşenler arasındaki mesafeyi belirler.

Her bileşen çevresindeki diğer içeriklerle dengeli bir ilişki kurmalıdır.

Çok dar boşluklar ekranı sıkışık gösterirken, gereğinden fazla boşluk ise bilgi bütünlüğünü bozar.

Margin değerleri ekran genelinde tutarlı olmalıdır.

---

# İç Boşluk (Padding)

Padding, bir bileşenin kendi içindeki içerikle olan mesafesini tanımlar.

Kartlar, butonlar, giriş alanları ve bilgi kutuları yeterli iç boşluğa sahip olmalıdır.

İçerik hiçbir zaman bileşenin kenarına yapışık görünmemelidir.

Yeterli padding, kalite algısını doğrudan artırır.

---

# Bölümler Arası Mesafe

Sayfa içerisindeki ana bölümler belirgin şekilde ayrılmalıdır.

Örneğin;

- başlık,
- filtre alanı,
- içerik,
- grafik,
- tablo,
- özet kartları

birbirinden yeterli mesafe ile ayrılır.

Bu yapı sayfanın daha rahat taranmasını sağlar.

---

# İlgili Öğeleri Yakın Tut

Birbiriyle ilişkili içerikler birbirine yakın yerleştirilmelidir.

Örneğin;

- etiket ile giriş alanı,
- başlık ile açıklama,
- ikon ile metin,
- grafik ile açıklaması

aynı görsel grup içerisinde algılanmalıdır.

Bu yaklaşım bilgi hiyerarşisini güçlendirir.

---

# Kart İçi Yerleşim

Kartların içindeki öğeler belirli bir ritimle yerleştirilir.

Başlık, açıklama, içerik ve işlem alanları arasında dengeli boşluk bırakılır.

Kart içerisinde sıkışık veya düzensiz yerleşimlerden kaçınılır.

Her kart rahat okunabilir olmalıdır.

---

# Form Boşlukları

Form alanları arasında yeterli mesafe bulunmalıdır.

Alanlar birbirine çok yakın yerleştirildiğinde veri giriş hataları artabilir.

Uzun formlarda alt başlıklar ve alan grupları boşluklarla desteklenerek daha kolay okunabilir bir yapı oluşturulur.

---

# Liste ve Tablo Yoğunluğu

Veri yoğun ekranlarda okunabilirlik korunmalıdır.

Satırlar çok sıkışık olmamalı, gereksiz şekilde de geniş bırakılmamalıdır.

Kullanıcı uzun tabloları rahat takip edebilmeli ve satırları kolay ayırt edebilmelidir.

Yoğun bilgi içeren ekranlarda boşluk, okunabilirliği artıran en önemli unsurlardan biridir.

---

# Mobil Boşluk Yaklaşımı

Mobil ekranlarda alan daha sınırlıdır.

Ancak bu durum boşluk kullanımından vazgeçilmesi anlamına gelmez.

Bileşenler;

- rahat dokunulabilir,
- kolay okunabilir,
- birbirinden ayırt edilebilir

şekilde yerleştirilmelidir.

Mobil görünümde gereksiz sıkıştırmalardan kaçınılır.

---

# Dokunma Alanları

Spacing yalnızca görsel amaçlı kullanılmaz.

Butonlar, seçim kutuları ve diğer etkileşimli öğeler yeterli dokunma alanına sahip olmalıdır.

Bir kullanıcının yanlış bileşene dokunma ihtimali minimum seviyeye indirilmelidir.

Boşluklar kullanılabilirliği doğrudan etkiler.

---

# Görsel Ritim

Sayfa boyunca tekrar eden boşluk düzeni görsel ritim oluşturur.

Başlıklar, kartlar, tablolar ve formlar ortak mesafelerle yerleştirildiğinde kullanıcı ekranı daha hızlı algılar.

Düzensiz boşluk kullanımı profesyonel görünümü zayıflatır.

---

# Ölçeklenebilirlik

Yeni ekranlar geliştirildiğinde mevcut spacing sistemi korunmalıdır.

Yeni bileşenler farklı boşluk kuralları oluşturmamalıdır.

Tek bir spacing yaklaşımı ürünün tamamında uygulanmalıdır.

Bu yapı bakım kolaylığı ve tasarım bütünlüğü sağlar.

---

# Geliştirici Standartları

Spacing değerleri doğrudan kod içerisine rastgele yazılmaz.

Tüm boşluklar merkezi tasarım değişkenleri üzerinden yönetilir.

Bu yaklaşım;

- tutarlılığı artırır,
- güncellemeleri kolaylaştırır,
- kod tekrarını azaltır,
- tasarım sistemiyle tam uyum sağlar.

---

# Spacing Sisteminin Özeti

AntreNova'nın boşluk sistemi aşağıdaki prensiplere dayanır:

- Ortak spacing ölçeği kullan.
- Rastgele boşluk değerlerinden kaçın.
- Margin ve padding görevlerini ayır.
- Bölümleri belirgin şekilde birbirinden ayır.
- İlişkili öğeleri yakın konumlandır.
- Kart içi düzeni dengeli oluştur.
- Form alanlarını rahat okunabilir yerleştir.
- Veri yoğun ekranlarda okunabilirliği koru.
- Mobil cihazlarda dokunma alanlarını önceliklendir.
- Görsel ritmi tüm sayfalarda sürdür.
- Yeni bileşenlerde mevcut spacing sistemini koru.
- Boşlukları merkezi tasarım tokenları üzerinden yönet.