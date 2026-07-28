BÖLÜM 28 (DEVAM)
Accessibility (WCAG), Dark Mode, Dashboard UX, Form UX, Micro-interactions ve Design Governance

Not: İyi görünen bir arayüz her zaman iyi bir kullanıcı deneyimi sunmaz. Enterprise seviyesindeki yazılımlar; erişilebilir, öğrenilebilir, hızlı kullanılabilir ve binlerce günlük işlemde kullanıcıyı yormayan arayüzler üretmek zorundadır.

28.31 Accessibility (Erişilebilirlik)

Antrenova;

her kullanıcının erişebileceği şekilde tasarlanmalıdır.

Platform;

WCAG 2.2 AA seviyesini hedeflemelidir.

28.32 WCAG Temel İlkeleri

Erişilebilirlik;

dört temel prensipten oluşur.

Perceivable

↓

Operable

↓

Understandable

↓

Robust
28.33 Klavye Kullanımı

Fare olmadan;

tüm platform kullanılabilmelidir.

Desteklenmesi gereken işlemler;

Tab
Shift + Tab
Enter
Space
Esc
Arrow Keys
28.34 Focus Yönetimi

Kullanıcı;

hangi bileşende olduğunu her zaman görebilmelidir.

Focus;

asla gizlenmemelidir.

28.35 Screen Reader

Tüm önemli bileşenler;

Screen Reader tarafından okunabilir olmalıdır.

Örneğin;

Button
Dialog
Tabs
Menu
Notification
Calendar

uygun ARIA özelliklerine sahip olmalıdır.

28.36 ARIA Kullanımı

ARIA;

yalnızca gerekli olduğunda kullanılmalıdır.

Öncelik;

semantic HTML olmalıdır.

28.37 Kontrast

Metin ile arka plan arasında;

yeterli kontrast bulunmalıdır.

Düşük kontrast;

yasaktır.

28.38 Renk Tek Başına Bilgi Taşımamalıdır

Başarı,

hata,

uyarı

yalnızca renkle ifade edilmemelidir.

Örneğin;

✔ Başarılı

⚠ Uyarı

✖ Hata

ikonları da kullanılmalıdır.

28.39 Font Boyutu

Minimum okunabilir font;

kurumsal standartlara uygun olmalıdır.

Çok küçük yazılar kullanılmamalıdır.

28.40 Zoom Desteği

Platform;

%200 yakınlaştırmada

işlevselliğini kaybetmemelidir.

28.41 Business Rules
BR-427

Platform WCAG 2.2 AA standartlarını hedeflemelidir.

BR-428

Tüm işlemler yalnızca klavye ile yapılabilmelidir.

BR-429

Focus durumu görünür olmalıdır.

BR-430

Semantic HTML öncelikli kullanılmalıdır.

BR-431

Kontrast oranları erişilebilirlik standartlarını karşılamalıdır.

BR-432

Bilgilendirme yalnızca renge bağlı olmamalıdır.

Architecture Decision (ADR-065)

Antrenova'nın erişilebilirlik politikası; WCAG 2.2 AA, Semantic HTML, Keyboard Navigation, ARIA ve Screen Reader uyumluluğu üzerine kurulacaktır. Erişilebilirlik sonradan eklenen bir özellik değil, tasarım sürecinin ayrılmaz bir parçası olacaktır.

28.42 Form UX Standartları

Formlar;

hızlı veri girişi için optimize edilmelidir.

Amaç;

minimum tıklama,

minimum hata,

maksimum hızdır.

28.43 Label Kullanımı

Her Input;

görünür Label içermelidir.

Placeholder;

Label yerine kullanılmamalıdır.

28.44 Zorunlu Alanlar

Zorunlu alanlar;

açık şekilde belirtilmelidir.

Örneğin;

Ad Soyad *

Telefon *
28.45 Gerçek Zamanlı Doğrulama

Validation;

form gönderildikten sonra değil,

uygun zamanda yapılmalıdır.

Örneğin;

Telefon numarası yazılırken format kontrolü yapılabilir.

28.46 Hata Mesajları

Hata mesajları;

anlaşılır olmalıdır.

Yanlış:

Validation Error

Doğru:

Telefon numarası 10 haneli olmalıdır.
28.47 Varsayılan Değerler

Sık kullanılan seçenekler;

önceden seçilmiş olabilir.

Bu;

işlem süresini azaltır.

28.48 Otomatik Odak

Yeni açılan formlarda;

ilk anlamlı alan otomatik odak almalıdır.

28.49 Klavye Akışı

Tab sırası;

ekrandaki doğal okuma sırasını takip etmelidir.

28.50 Kaydet Butonu

Kaydet işlemi;

her zaman görünür olmalıdır.

Uzun formlarda;

Sticky Footer kullanılabilir.

28.51 Dashboard UX

Dashboard;

güzel görünmek için değil,

karar vermeyi kolaylaştırmak için tasarlanmalıdır.

28.52 KPI Kartları

Her KPI;

tek bakışta anlaşılmalıdır.

Kartta mümkünse;

Başlık
Değer
Trend
Önceki dönem
Detay bağlantısı

bulunmalıdır.

28.53 Dashboard Yoğunluğu

Tek ekranda;

çok fazla kart gösterilmemelidir.

Bilgi yoğunluğu;

okunabilirliği azaltmamalıdır.

28.54 Grafik Standartları

Grafikler;

dekoratif değil,

karar destekleyici olmalıdır.

Örneğin;

Çizgi Grafik
Bar Grafik
Alan Grafik
Donut Grafik

uygun senaryolarda kullanılmalıdır.

28.55 Business Rules
BR-433

Her Input görünür Label içermelidir.

BR-434

Placeholder tek başına açıklama olarak kullanılmamalıdır.

BR-435

Validation mesajları kullanıcı tarafından anlaşılabilir olmalıdır.

BR-436

Dashboard yalnızca anlamlı KPI'lar göstermelidir.

BR-437

Grafikler karar vermeyi desteklemelidir.

BR-438

Uzun formlarda kullanıcı aksiyonları görünür tutulmalıdır.

Architecture Decision (ADR-066)

Antrenova'nın form ve dashboard deneyimi; Fast Data Entry, Real-Time Validation, Meaningful KPIs ve Decision-Oriented UX prensipleri üzerine kurulacaktır. Amaç, kullanıcıların günlük operasyonlarını mümkün olan en az çaba ile tamamlamalarını sağlamaktır.

28.56 Dark Mode

Platform;

Light ve Dark Mode'u doğal olarak desteklemelidir.

Tema değişikliği;

tasarımı bozmayacak şekilde çalışmalıdır.

28.57 Tema Mimarisi

Tema;

renk değişimi değil,

Semantic Token değişimidir.

Light Theme

↓

Semantic Tokens

↓

Dark Theme
28.58 Motion Design

Animasyonlar;

işlem hakkında bilgi vermek için kullanılmalıdır.

Gösteriş amaçlı animasyonlardan kaçınılmalıdır.

28.59 Micro-interactions

Küçük etkileşimler;

ürünün hissedilen kalitesini artırır.

Örneğin;

Hover
Ripple
Success Animation
Toast
Progress
Skeleton
28.60 Design Governance

Design System;

kontrolsüz büyümemelidir.

Yeni bileşenler;

inceleme sürecinden geçmelidir.

28.61 Design Review

Yeni ekranlar;

yayınlanmadan önce aşağıdaki kriterlere göre değerlendirilmelidir.

Tasarım tutarlılığı
Responsive davranış
Accessibility
Performans
Component tekrar kullanımı
UX standartlarına uyum
28.62 UX Ölçümleri

Kullanıcı deneyimi;

ölçülebilir olmalıdır.

Takip edilebilecek metrikler;

Task Completion Rate
Time on Task
Error Rate
Abandonment Rate
User Satisfaction
28.63 Tasarım Borcu (Design Debt)

Kod borcu gibi;

tasarım borcu da takip edilmelidir.

Geçici çözümler;

kalıcı hale gelmemelidir.

28.64 Business Rules
BR-439

Dark Mode Semantic Token sistemi üzerinden yönetilmelidir.

BR-440

Animasyonlar kullanıcıyı bekletmemeli, işlemi açıklamalıdır.

BR-441

Yeni bileşenler Design Review sürecinden geçmelidir.

BR-442

UX metrikleri düzenli olarak analiz edilmelidir.

BR-443

Design Debt kayıt altına alınmalı ve planlı olarak azaltılmalıdır.

BR-444

Enterprise Design System dışındaki bileşenler Production ortamına alınmamalıdır.

Architecture Decision (ADR-067)

Antrenova'nın tasarım yönetişimi; Accessibility, Dark Mode, Micro-interactions, UX Metrics ve Design Governance ilkeleri üzerine kurulacaktır. Tüm yeni ekranlar merkezi Design System'in kurallarına uymak zorunda olacak ve tasarım kalitesi sürekli olarak ölçülüp geliştirilecektir.

✅ BÖLÜM 28 TAMAMLANDI

Bu bölüm ile birlikte Antrenova'nın kullanıcı deneyimi ve tasarım mimarisi;

Enterprise Design System,
Design Tokens,
Atomic Design,
Component Library,
Responsive Grid,
WCAG 2.2 AA,
Dashboard UX,
Form UX,
Accessibility,
Dark Mode,
Micro-interactions,
Design Governance,
UX Metrics

başlıkları altında kurumsal ölçekte standartlaştırılmıştır.