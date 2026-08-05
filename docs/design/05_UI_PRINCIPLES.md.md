# 05_UI_PRINCIPLES.md

# AntreNova UI/UX Bible v1.0
## 05. UI Principles

---

# Amaç

Bu belge, AntreNova kullanıcı arayüzünde uygulanacak temel UI (User Interface) prensiplerini tanımlar. Buradaki kurallar, tüm ekranların ortak bir görsel dile sahip olmasını, kullanıcıların farklı modüller arasında geçiş yaparken tutarlı bir deneyim yaşamasını ve ürünün zaman içinde büyürken tasarım bütünlüğünü korumasını sağlar.

Her yeni ekran, mevcut bileşenleri mümkün olduğunca yeniden kullanmalı ve burada tanımlanan prensiplere uygun olarak geliştirilmelidir.

---

# Tek Bir Tasarım Dili

AntreNova'nın tamamı tek bir ürün gibi görünmelidir.

Bir kullanıcı Dashboard ekranından Finans modülüne veya Takvim ekranından Üye Yönetimi'ne geçtiğinde farklı bir yazılım kullanıyormuş hissine kapılmamalıdır.

Renkler, tipografi, boşluklar, ikonlar ve bileşen davranışları ortak standartlara bağlı kalır.

---

# Arayüz İçeriği Destekler

Arayüz hiçbir zaman içeriğin önüne geçmez.

Kartlar, ikonlar, renkler ve görsel efektler yalnızca bilgiyi daha anlaşılır hâle getirmek için kullanılır.

Kullanıcının dikkati dekoratif öğelere değil, yaptığı işe yönelmelidir.

---

# Görsel Hiyerarşi

Her ekranda kullanıcıya doğal bir okuma sırası sunulmalıdır.

Genel sıralama aşağıdaki yapıyı takip eder:

1. Sayfa başlığı
2. Özet bilgiler
3. Ana işlem alanı
4. Destekleyici içerikler
5. İkincil işlemler

Kullanıcı ilk bakışta hangi bilginin daha önemli olduğunu kolayca anlayabilmelidir.

---

# Düzenli Yerleşim

Tüm ekranlar ortak bir yerleşim mantığı kullanır.

Bileşenler rastgele hizalanmaz.

Her sayfada;

- düzenli kenar boşlukları,
- dengeli kart yerleşimleri,
- hizalı başlıklar,
- ortak grid sistemi

kullanılır.

Bu yapı profesyonel görünümün temelidir.

---

# Boşluk Kullanımı

Boş alan, kullanılmayan alan değildir.

Doğru kullanılan boşluk;

- okunabilirliği artırır,
- içerikleri ayırır,
- odaklanmayı kolaylaştırır,
- ekran karmaşasını azaltır.

Hiçbir ekran gereğinden fazla sıkıştırılmaz.

---

# Tipografi Önceliklidir

Bilgiye ulaşmanın en önemli yolu metindir.

Bu nedenle tipografi;

- okunabilir,
- tutarlı,
- dengeli

olmalıdır.

Başlıklar, alt başlıklar ve içerik metinleri ortak hiyerarşiyi takip eder.

Farklı ekranlarda farklı yazı düzenleri kullanılmaz.

---

# Renk Bilgi Taşır

Renkler dekorasyon amacıyla kullanılmaz.

Her rengin sistem içerisinde belirli bir anlamı vardır.

Örneğin;

- başarı,
- uyarı,
- hata,
- bilgi,
- pasif durum

aynı renk mantığıyla gösterilir.

Bir rengin farklı ekranlarda farklı anlam taşımasına izin verilmez.

---

# İkonlar Yardımcı Unsurdur

İkonlar metnin yerine geçmez.

İkonların amacı;

- işlemi desteklemek,
- hızlı tanımayı sağlamak,
- görsel taramayı kolaylaştırmaktır.

Anlamı belirsiz ikonlar kullanılmaz.

Kritik işlemler yalnızca ikon ile gösterilmez.

---

# Kart Tasarımı

Kartlar bilgi gruplarını birbirinden ayırmak için kullanılır.

Her kart;

- tek bir amaca hizmet eder,
- açık bir başlığa sahiptir,
- gereksiz içerik barındırmaz.

Kart içerisinde farklı konular karıştırılmaz.

---

# Buton Öncelikleri

Tüm butonlar aynı görsel ağırlıkta olmamalıdır.

Genel öncelik sırası:

- Birincil işlem
- İkincil işlem
- Yardımcı işlem
- Tehlikeli işlem

Bu öncelik renk, boyut ve konum ile desteklenir.

Kullanıcının hangi işlemi önce yapması gerektiği görsel olarak anlaşılmalıdır.

---

# Form Tasarımı

Formlar kullanıcıyı yormamalıdır.

Alanlar mantıklı gruplar hâlinde düzenlenir.

Zorunlu bilgiler ön planda tutulur.

Uzun formlar bölümlere ayrılır.

Kullanıcı gereksiz bilgi girmek zorunda bırakılmaz.

---

# Tablo Yapısı

Tablolar yalnızca veri göstermek için değil, veriyle çalışmayı kolaylaştırmak için tasarlanır.

Her tabloda mümkün olduğunca;

- arama,
- filtreleme,
- sıralama,
- sayfalama,
- hızlı işlem

desteklenmelidir.

Yoğun veri bulunan ekranlarda okunabilirlik her zaman önceliklidir.

---

# Modal Kullanımı

Modal pencereler yalnızca gerekli durumlarda kullanılmalıdır.

Uzun süreçler modal içine yerleştirilmez.

Modal kullanım amaçları:

- kısa bilgi gösterimi,
- onay alma,
- hızlı düzenleme,
- tek adımlı işlem.

Bir ekranın tamamını modal içerisine taşımak doğru yaklaşım değildir.

---

# Durum Göstergeleri

Kullanıcı sistemin mevcut durumunu her zaman anlayabilmelidir.

Yükleniyor, tamamlandı, bekleniyor veya hata oluştu gibi durumlar açık şekilde gösterilir.

Belirsiz ekranlar kullanıcı güvenini azaltır.

---

# Responsive Yaklaşım

Tüm bileşenler farklı ekran boyutlarında tutarlı çalışmalıdır.

Hiçbir bileşen yalnızca masaüstü kullanımına göre tasarlanmaz.

Mobil cihazlarda;

- dokunma alanları büyütülür,
- içerik yeniden düzenlenir,
- öncelikli bilgiler korunur.

İşlev kaybı yaşanmaz.

---

# Yeniden Kullanılabilirlik

Her UI bileşeni yeniden kullanılabilir olacak şekilde geliştirilmelidir.

Aynı amaç için farklı tasarımlar oluşturulmaz.

Tek bir standart bileşen;

- Dashboard,
- Finans,
- Üyeler,
- Takvim,
- Paketler,
- Ayarlar

gibi tüm modüllerde ortak şekilde kullanılmalıdır.

Bu yaklaşım geliştirme sürecini hızlandırırken ürün bütünlüğünü de korur.

---

# UI Prensiplerinin Özeti

AntreNova kullanıcı arayüzü aşağıdaki temel prensiplere göre geliştirilir:

- Tek bir tasarım dili kullan.
- İçeriği ön plana çıkar.
- Görsel hiyerarşiyi koru.
- Düzenli yerleşim oluştur.
- Boşluğu bilinçli kullan.
- Tipografiyi önceliklendir.
- Renklere anlam yükle.
- İkonları destekleyici olarak kullan.
- Kartları tek amaçlı tasarla.
- Buton önceliklerini belirginleştir.
- Formları sadeleştir.
- Tabloları verimli hâle getir.
- Modal kullanımını sınırlandır.
- Durum geri bildirimlerini açık göster.
- Mobil uyumluluğu koru.
- Yeniden kullanılabilir bileşenler oluştur.