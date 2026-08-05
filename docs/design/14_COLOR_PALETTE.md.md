# 14_COLOR_PALETTE.md

# AntreNova UI/UX Bible v1.0
## 14. Color Palette

---

# Amaç

Bu belge, AntreNova'nın resmi renk paletini ve bu renklerin kullanım kurallarını tanımlar. Renk paleti, marka kimliğini güçlendirmek, kullanıcıya tutarlı bir deneyim sunmak ve arayüz boyunca anlam bütünlüğü oluşturmak amacıyla hazırlanmıştır.

Burada tanımlanan renkler, tasarım sistemi içerisinde tek referans kaynağı olarak kabul edilir. Rastgele renk kullanımı veya modüllere özel farklı paletler oluşturulmaz.

---

# Renk Sistemi Yapısı

AntreNova'nın renk sistemi aşağıdaki katmanlardan oluşur:

- Primary Colors
- Secondary Colors
- Neutral Colors
- Semantic Colors
- Surface Colors
- Border Colors
- Text Colors
- Overlay Colors

Her katmanın belirli bir görevi vardır ve kullanım amacı birbirinden farklıdır.

---

# Primary Renkler

Primary renkler marka kimliğini temsil eder.

Kullanım alanları:

- ana butonlar,
- aktif menüler,
- bağlantılar,
- odak durumları,
- önemli aksiyonlar.

Primary renkler ekranın en baskın öğesi olmamalı, yalnızca öncelikli işlemleri vurgulamalıdır.

---

# Secondary Renkler

Secondary renkler destekleyici bileşenlerde kullanılır.

Başlıca kullanım alanları:

- yardımcı işlemler,
- bilgi kartları,
- ikincil aksiyonlar,
- alternatif seçimler.

Primary rengin etkisini azaltmadan görsel çeşitlilik sağlar.

---

# Neutral Renkler

Arayüzün büyük bölümü nötr renklerden oluşur.

Nötr renkler şu alanlarda kullanılır:

- arka planlar,
- kart yüzeyleri,
- ayırıcı çizgiler,
- boş durum ekranları,
- pasif bileşenler.

Nötr tonlar içeriklerin daha belirgin görünmesini sağlar.

---

# Semantic Renkler

Semantic renkler sistem durumlarını ifade eder.

Temel kategoriler:

- Success
- Warning
- Error
- Information

Bu renkler yalnızca anlam taşıyan durumlarda kullanılmalıdır.

Dekoratif amaçlı semantic renk kullanımı önerilmez.

---

# Surface Renkleri

Surface renkleri arayüzün katmanlarını ayırmak için kullanılır.

Örneğin;

- ana arka plan,
- kart yüzeyi,
- modal yüzeyi,
- yan panel,
- dropdown,
- popup

gibi farklı yüzeyler kontrollü ton farklarıyla ayrıştırılır.

Bu yaklaşım derinlik hissi oluştururken sadeliği korur.

---

# Border Renkleri

Sınırlar kullanıcıya yapısal düzen sağlar.

Border renkleri;

- kart ayırıcıları,
- tablo çizgileri,
- giriş alanları,
- aktif seçimler

gibi alanlarda kullanılır.

Sınırlar dikkat çekici değil, destekleyici olmalıdır.

---

# Text Renkleri

Metin renkleri okunabilirliği önceliklendirir.

Metin sistemi genel olarak üç seviyeden oluşur:

- Ana metin
- Yardımcı metin
- Pasif metin

Başlıklar ve kritik bilgiler daha güçlü kontrasta sahip olmalıdır.

İkincil bilgiler daha yumuşak tonlarda gösterilebilir.

---

# Overlay Renkleri

Overlay katmanları kullanıcı dikkatini belirli alana yönlendirmek için kullanılır.

Örneğin;

- modal arka planı,
- loading ekranı,
- odak katmanı,
- yan panel geçişleri.

Overlay opaklığı kullanıcıyı rahatsız etmeyecek seviyede olmalıdır.

---

# Renk Tonları

Her ana renk farklı tonlara sahip olabilir.

Bu tonlar;

- hover,
- aktif,
- devre dışı,
- arka plan,
- kenarlık

gibi farklı durumlarda kullanılabilir.

Ton geçişleri doğal olmalı, aynı renk ailesi korunmalıdır.

---

# Etkileşim Durumları

Etkileşimli bileşenlerin renk davranışları standart olmalıdır.

Her bileşen;

- Normal
- Hover
- Active
- Focus
- Disabled

durumlarında belirli kurallara göre görünüm değiştirir.

Farklı ekranlarda farklı renk davranışları kullanılmaz.

---

# Grafik Renkleri

Veri görselleştirme için kullanılan renkler standartlaştırılmalıdır.

Aynı kategori her grafik türünde aynı renk ile temsil edilir.

Grafiklerde aşırı renk çeşitliliğinden kaçınılır.

Okunabilirlik estetikten önce gelir.

---

# Tema Uyumluluğu

Renk paleti açık ve koyu temalarda çalışabilecek şekilde tasarlanmalıdır.

Tema değiştiğinde;

- renk anlamları korunmalı,
- kontrast dengesi bozulmamalı,
- kullanıcı alışkanlıkları değişmemelidir.

Tek tema yerine ölçeklenebilir bir renk sistemi hedeflenir.

---

# Geliştirici Standartları

Renk değerleri doğrudan bileşen içerisine yazılmaz.

Tüm renkler merkezi tasarım tokenları üzerinden yönetilir.

Bu yaklaşım;

- bakım kolaylığı sağlar,
- tutarlılığı artırır,
- tema desteğini kolaylaştırır,
- tasarım sistemiyle tam uyum oluşturur.

---

# Geleceğe Açık Yapı

Yeni modüller geliştirildiğinde mevcut renk sistemi korunmalıdır.

Yeni renk eklemek yerine mevcut renk ailesi değerlendirilmelidir.

Gerçekten yeni bir renk ihtiyacı oluşursa bu değişiklik merkezi tasarım sistemi üzerinden planlanmalıdır.

---

# Renk Paletinin Özeti

AntreNova'nın renk paleti aşağıdaki temel yapıdan oluşur:

- Primary renkleri ana işlemler için kullan.
- Secondary renkleri destekleyici alanlarda değerlendir.
- Neutral tonlarla sade arka plan oluştur.
- Semantic renkleri yalnızca anlam taşıyan durumlarda kullan.
- Surface renkleriyle katmanları ayır.
- Border renklerini yapısal destek olarak uygula.
- Text renklerini okunabilirlik odaklı belirle.
- Overlay katmanlarını dikkat yönetimi için kullan.
- Tüm etkileşim durumlarında ortak renk davranışını koru.
- Grafiklerde tutarlı renk sistemi uygula.
- Tema değişimlerinde anlam bütünlüğünü sürdür.
- Renkleri merkezi tasarım tokenları üzerinden yönet.