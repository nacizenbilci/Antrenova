# 20_ELEVATION_AND_SHADOWS.md

# AntreNova UI/UX Bible v1.0
## 20. Elevation and Shadows

---

# Amaç

Bu belge, AntreNova kullanıcı arayüzünde yükseklik (elevation), gölge (shadow) ve katman (layer) kullanımına ilişkin standartları tanımlar. Gölge ve yükseklik efektleri yalnızca görsel estetik oluşturmak için değil; bileşenler arasındaki hiyerarşiyi belirlemek, etkileşimleri açıklamak ve kullanıcıya mekânsal bir düzen hissi vermek amacıyla kullanılır.

AntreNova'nın görsel dili sade ve profesyoneldir. Bu nedenle gölgeler abartılı değil, doğal ve işlev odaklı kullanılmalıdır.

---

# Katman Mantığı

Her kullanıcı arayüzü tek bir düzlemden oluşmaz.

Kartlar, açılır menüler, modal pencereler ve bildirimler farklı katmanlarda yer alır.

Katman sistemi kullanıcıya hangi bileşenin aktif, hangisinin arka planda olduğunu açık biçimde göstermelidir.

Yükseklik algısı yalnızca gerekli durumlarda oluşturulur.

---

# Gölgenin Amacı

Gölge dekoratif bir efekt değildir.

Doğru kullanıldığında;

- bileşenleri ayırır,
- odak oluşturur,
- aktif alanı belirtir,
- derinlik hissi verir.

Yanlış kullanıldığında ise arayüzü karmaşık ve eski görünmesine neden olabilir.

---

# Az ve Tutarlı Kullanım

AntreNova'da gölgeler mümkün olduğunca sınırlı kullanılır.

Her kart veya her bileşen gölge taşımak zorunda değildir.

Yalnızca katman ayrımı gereken bileşenlerde gölge uygulanır.

Tutarlılık, yoğun efekt kullanımından daha değerlidir.

---

# Kart Yüksekliği

Varsayılan kartlar hafif yükseltilmiş görünüm sunabilir.

Bu yükselti kullanıcıya kartın bağımsız bir bilgi grubu olduğunu hissettirmelidir.

Ancak kartlar sayfa üzerinde "yüzen" nesneler gibi görünmemelidir.

Sade ve kontrollü bir derinlik yeterlidir.

---

# Modal Pencereler

Modal pencereler arka plandaki içerikten belirgin şekilde ayrılmalıdır.

Bu ayrım;

- overlay katmanı,
- kontrollü gölge,
- odak düzeni

ile sağlanır.

Modal açıldığında kullanıcının dikkati doğal olarak aktif pencereye yönelmelidir.

---

# Açılır Menüler

Dropdown, popover ve benzeri geçici bileşenler hafif yükselti hissine sahip olmalıdır.

Bu sayede kullanıcı bunların ana sayfanın üzerinde yer alan geçici katmanlar olduğunu kolayca anlayabilir.

Gölgeler dikkat çekici değil, destekleyici olmalıdır.

---

# Hover Durumları

Bazı bileşenlerde hover sırasında hafif yükseklik hissi oluşturulabilir.

Bu yaklaşım özellikle;

- kartlar,
- listeler,
- seçim alanları

gibi etkileşimli öğelerde kullanıcıya geri bildirim sağlar.

Geçişler kısa ve doğal olmalıdır.

---

# Aktif Durumlar

Seçili veya aktif bileşenler gerektiğinde gölge yerine;

- kenarlık,
- vurgu rengi,
- arka plan değişimi

ile de ayırt edilebilir.

Her aktif durum için gölge kullanılması zorunlu değildir.

Öncelik sadelik ve okunabilirliktir.

---

# Gölge Seviyeleri

Ürün genelinde sınırlı sayıda gölge seviyesi bulunmalıdır.

Örneğin;

- düşük,
- orta,
- yüksek

derinlik seviyeleri.

Her geliştirici kendi gölge değerlerini oluşturmaz.

Tüm gölgeler merkezi tasarım sistemi tarafından yönetilir.

---

# İç Gölge Kullanımı

İç gölgeler yalnızca belirli kullanım senaryolarında değerlendirilmelidir.

Form alanları veya özel etkileşimler dışında yaygın olarak kullanılmaları önerilmez.

Aşırı iç gölge kullanımı arayüzü gereksiz karmaşık gösterebilir.

---

# Gölge ve Performans

Yoğun gölge efektleri özellikle düşük donanımlı cihazlarda performansı olumsuz etkileyebilir.

Bu nedenle yalnızca gerekli durumlarda hafif gölgeler tercih edilir.

Performans, görsel efektlerden daha yüksek önceliğe sahiptir.

---

# Tema Uyumluluğu

Gölge sistemi açık ve koyu tema ile uyumlu çalışmalıdır.

Tema değiştiğinde;

- katman algısı korunmalı,
- derinlik hissi kaybolmamalı,
- okunabilirlik etkilenmemelidir.

Gölge yoğunluğu tema koşullarına göre uyarlanabilir.

---

# Tutarlılık

Yeni modüller geliştirildiğinde mevcut elevation sistemi korunmalıdır.

Her ekran farklı gölge mantığı kullanmamalıdır.

Katman davranışı ürün genelinde aynı deneyimi sunmalıdır.

---

# Geliştirici Standartları

Shadow değerleri doğrudan kod içerisinde tanımlanmaz.

Tüm elevation seviyeleri merkezi tasarım tokenları üzerinden yönetilir.

Bu yaklaşım;

- bakım kolaylığı sağlar,
- tema desteğini güçlendirir,
- tutarlılığı artırır,
- yeni bileşenlerin sisteme kolay uyum sağlamasını mümkün kılar.

---

# Elevation ve Shadow Sisteminin Özeti

AntreNova'nın yükseklik ve gölge sistemi aşağıdaki prensiplere dayanır:

- Katmanları anlamlı şekilde ayır.
- Gölgeyi dekorasyon için değil, işlev için kullan.
- Gölge kullanımını sınırlı tut.
- Kartlarda hafif derinlik hissi oluştur.
- Modalleri belirgin şekilde öne çıkar.
- Açılır bileşenlerde kontrollü yükseklik kullan.
- Hover geri bildirimlerini doğal tut.
- Aktif durumlarda yalnızca gerektiğinde gölge kullan.
- Standart gölge seviyelerine bağlı kal.
- İç gölge kullanımını sınırlandır.
- Performansı önceliklendir.
- Tüm temalarda aynı katman mantığını koru.
- Yeni modüllerde mevcut elevation sistemini sürdür.
- Shadow değerlerini merkezi tasarım tokenları üzerinden yönet.