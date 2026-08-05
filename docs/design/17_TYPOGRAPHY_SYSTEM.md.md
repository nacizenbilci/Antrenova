# 17_TYPOGRAPHY_SYSTEM.md

# AntreNova UI/UX Bible v1.0
## 17. Typography System

---

# Amaç

Bu belge, AntreNova kullanıcı arayüzünde kullanılacak tipografi sistemini tanımlar. Tipografi sistemi; yazı tiplerinin, başlık seviyelerinin, metin hiyerarşisinin ve okunabilirlik kurallarının ürün genelinde aynı standartta uygulanmasını sağlar.

Amaç yalnızca estetik bir görünüm oluşturmak değil; kullanıcıların bilgiyi hızlı tarayabilmesini, ekranlar arasında görsel tutarlılık yaşamasını ve uzun süreli kullanımlarda göz yorgunluğunu azaltmaktır.

---

# Sistem Yaklaşımı

AntreNova tek bir tipografi sistemi kullanır.

Farklı modüller kendi yazı düzenlerini oluşturmaz.

Dashboard, Üyeler, Finans, Takvim, Ayarlar ve gelecekte eklenecek tüm modüller aynı tipografi kurallarına bağlı kalır.

Bu yaklaşım ürünün profesyonel ve bütüncül görünmesini sağlar.

---

# Yazı Ailesi

Ürün genelinde tek bir ana yazı ailesi kullanılır.

Bu yazı ailesi;

- yüksek okunabilirlik,
- geniş karakter desteği,
- dijital ekran uyumluluğu,
- farklı ağırlık seçenekleri

sunmalıdır.

Ek yazı aileleri yalnızca istisnai durumlarda değerlendirilir.

---

# Başlık Hiyerarşisi

Başlıklar içerik yapısını açık biçimde göstermelidir.

Standart başlık seviyeleri aşağıdaki sırayı takip eder:

- Sayfa Başlığı
- Bölüm Başlığı
- Kart Başlığı
- Alt Başlık
- Yardımcı Başlık

Her seviyenin görsel ağırlığı belirli ve tutarlı olmalıdır.

---

# Gövde Metni

Gövde metni kullanıcı tarafından en fazla okunan içeriktir.

Bu nedenle;

- sade,
- okunabilir,
- dengeli satır uzunluğuna sahip

olmalıdır.

Uzun açıklamalar rahat okunabilecek şekilde düzenlenir.

---

# Yardımcı Metinler

Yardımcı metinler ana bilgiyi desteklemek amacıyla kullanılır.

Örneğin;

- açıklamalar,
- ipuçları,
- ek bilgiler,
- yönlendirmeler.

Bu metinler ana içerikten daha düşük görsel ağırlığa sahip olmalı ancak okunabilirliğini kaybetmemelidir.

---

# Etiketler

Etiketler kısa bilgi taşır.

Form alanları, filtreler, küçük bilgi kutuları ve kategori göstergelerinde kullanılır.

Etiketler dikkat çekici değil, yönlendirici olmalıdır.

Uzun açıklamalar etiket alanlarında kullanılmaz.

---

# Sayısal Gösterimler

Sayılar ve finansal veriler özel öneme sahiptir.

Ödeme tutarları, istatistikler, üye sayıları ve rapor verileri kolay taranabilir şekilde sunulmalıdır.

Yoğun sayısal ekranlarda hizalama ve boşluk düzeni okunabilirliği doğrudan etkiler.

---

# Vurgu Kullanımı

Kalın yazı yalnızca önemli bilgileri öne çıkarmak amacıyla kullanılır.

Bir paragrafın büyük bölümünün kalın yazılması önerilmez.

Vurgu miktarı arttıkça etkisi azalır.

Önemli olan gerçekten önemli bilgileri belirginleştirmektir.

---

# Satır Aralıkları

Her metin türü uygun satır yüksekliğine sahip olmalıdır.

Başlıklar daha sıkı, uzun içerikler ise daha rahat satır aralıklarıyla sunulur.

Yetersiz satır aralığı okunabilirliği azaltırken, aşırı geniş aralık içerik bütünlüğünü bozar.

---

# Harf Boşlukları

Harf aralıkları doğal görünmelidir.

Başlıklarda veya kısa etiketlerde gerektiğinde küçük ayarlamalar yapılabilir.

Normal gövde metinlerinde yapay harf aralıklarından kaçınılmalıdır.

Okuma ritmi korunmalıdır.

---

# Metin Uzunluğu

Kullanıcı mümkün olduğunca kısa ve anlaşılır metinlerle karşılaşmalıdır.

Butonlar, bildirimler ve alan isimleri gereksiz uzun olmamalıdır.

Uzun açıklamalar gerektiğinde ayrı bilgi alanlarında gösterilmelidir.

Arayüz metinleri sade olmalıdır.

---

# Tipografik Ritim

Başlıklar, metinler ve boşluklar arasında tutarlı bir ritim bulunmalıdır.

Her ekran aynı okuma deneyimini sunmalıdır.

Düzensiz yazı boyutları ve rastgele ağırlıklar ürün bütünlüğünü zayıflatır.

---

# Responsive Tipografi

Farklı ekran boyutlarında tipografi yeniden düzenlenmelidir.

Mobil cihazlarda;

- başlıklar uygun şekilde ölçeklenir,
- satır uzunlukları kısalır,
- okunabilirlik korunur.

Hiçbir metin yalnızca ekrana sığması için gereğinden fazla küçültülmez.

---

# Geliştirici Standartları

Yazı boyutları doğrudan bileşen içerisine yazılmaz.

Tüm tipografi değerleri merkezi tasarım tokenları üzerinden yönetilir.

Bu yaklaşım;

- bakım kolaylığı sağlar,
- tutarlılığı artırır,
- tema desteğini kolaylaştırır,
- yeni modüllerde aynı sistemi sürdürür.

---

# Ölçeklenebilirlik

Yeni ekranlar oluşturulurken mevcut tipografi seviyeleri kullanılmalıdır.

Yeni başlık veya metin türleri eklenmeden önce mevcut yapı değerlendirilmelidir.

Tek bir tipografi sistemi ürünün uzun vadeli gelişimini destekler.

---

# Tipografi Sisteminin Özeti

AntreNova'nın tipografi sistemi aşağıdaki prensiplere göre uygulanır:

- Ürün genelinde tek yazı sistemi kullan.
- Başlık hiyerarşisini koru.
- Gövde metnini okunabilir tut.
- Yardımcı metinleri destekleyici olarak kullan.
- Etiketleri kısa ve net oluştur.
- Sayısal verileri kolay taranabilir göster.
- Vurguyu yalnızca gerektiğinde kullan.
- Satır ve harf aralıklarını dengeli uygula.
- Metinleri gereksiz yere uzatma.
- Tipografik ritmi tüm ekranlarda koru.
- Responsive tipografi kurallarına uy.
- Yazı değerlerini merkezi tasarım tokenlarıyla yönet.
- Yeni modüllerde mevcut tipografi sistemini devam ettir.