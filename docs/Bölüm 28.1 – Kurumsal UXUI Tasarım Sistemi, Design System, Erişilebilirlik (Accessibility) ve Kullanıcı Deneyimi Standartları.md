BÖLÜM 28
Kurumsal UX/UI Tasarım Sistemi, Design System, Erişilebilirlik (Accessibility) ve Kullanıcı Deneyimi Standartları

Not: Kullanıcılar yazılımın kodunu görmez; yalnızca arayüzünü deneyimler. Bu nedenle kullanıcı arayüzü yalnızca estetik bir katman değil, ürünün güvenilirliğini, kullanılabilirliğini ve marka algısını belirleyen en önemli bileşenlerden biridir. Antrenova'nın tüm ekranları tek bir Enterprise Design System üzerine inşa edilecektir.

28.1 Amaç

Design System'in amacı;

tüm ekranlarda tutarlılık sağlamak,
geliştirme hızını artırmak,
bakım maliyetini azaltmak,
erişilebilirliği iyileştirmek,
kullanıcı deneyimini standartlaştırmaktır.
28.2 Tasarım Felsefesi

Antrenova;

Minimal,

Profesyonel,

Modern,

Veri Odaklı,

Mobil Öncelikli,

erişilebilir bir tasarım yaklaşımı benimser.

28.3 Design System

Tüm arayüz;

ortak bileşenlerden oluşmalıdır.

Design Tokens

↓

Base Components

↓

Composite Components

↓

Page Templates

↓

Screens
28.4 Tek Tasarım Dili

Platform içerisinde;

aynı işlemi yapan iki farklı tasarım kullanılmamalıdır.

Örneğin;

tüm butonlar
tüm kartlar
tüm tablolar
tüm modal pencereler

aynı standartta olmalıdır.

28.5 Design Tokens

Tüm görsel değerler;

merkezi Token sistemi ile yönetilmelidir.

Örneğin;

Renk
Font
Radius
Shadow
Border
Spacing
Animation
Opacity
28.6 Token Katmanları
Primitive Tokens

↓

Semantic Tokens

↓

Component Tokens

↓

Screen Tokens
28.7 Renk Sistemi

Renkler;

rastgele kullanılmamalıdır.

Her rengin bir amacı olmalıdır.

Örneğin;

Primary

Success

Warning

Danger

Info

Neutral

Surface

Background

28.8 Kurumsal Renk Kullanımı

Renk;

yalnızca estetik amaçlı kullanılmaz.

Aynı zamanda;

durum belirtir,
öncelik belirtir,
risk belirtir,
işlem sonucunu belirtir.
28.9 Tipografi

Platform;

maksimum iki yazı tipi kullanmalıdır.

Başlık,

alt başlık,

gövde,

yardımcı metin,

tablo,

etiket

standartları tanımlanmalıdır.

28.10 Spacing Sistemi

Boşluklar;

8 px tabanlı Grid sistemi ile oluşturulmalıdır.

4

↓

8

↓

16

↓

24

↓

32

↓

48

↓

64
28.11 Radius Standardı

Yuvarlak köşeler;

ortak standartta olmalıdır.

Örneğin;

Small
Medium
Large
Pill
Circle
28.12 Shadow Sistemi

Her kartın farklı Shadow kullanması yasaktır.

Standart Shadow seviyeleri oluşturulmalıdır.

Örneğin;

Elevation 1

Elevation 2

Elevation 3

Elevation 4

28.13 Icon Sistemi

Platform;

tek ikon kütüphanesi kullanmalıdır.

İkonlar;

aynı stroke,

aynı oran,

aynı boyut

standartlarını takip etmelidir.

28.14 Grid Sistemi

Desktop,

Tablet,

Mobil

ayrı Grid yapılarına sahip olmalıdır.

28.15 Responsive Tasarım

Platform;

Mobile First yaklaşımıyla geliştirilmelidir.

Breakpoint'ler;

merkezi olarak yönetilmelidir.

28.16 Business Rules
BR-415

Tüm ekranlar merkezi Design System kullanmalıdır.

BR-416

Renkler yalnızca tanımlı Token'lar üzerinden kullanılmalıdır.

BR-417

Spacing sistemi 8 px Grid standardına uygun olmalıdır.

BR-418

Her bileşen tek bir tasarım standardını takip etmelidir.

BR-419

Responsive davranışlar tüm ekranlarda tutarlı olmalıdır.

BR-420

Design Token dışında sabit renk ve ölçü kullanılmamalıdır.

Architecture Decision (ADR-063)

Antrenova'nın kullanıcı arayüzü; Design Tokens, Component Library, Responsive Grid ve Enterprise Design System üzerine kurulacaktır. Tüm ekranlar tek bir görsel dil kullanacak ve tasarım kararları merkezi olarak yönetilecektir.

28.17 Atomic Design

Bileşenler;

Atomic Design yaklaşımına göre geliştirilecektir.

Atoms

↓

Molecules

↓

Organisms

↓

Templates

↓

Pages
28.18 Atom (Atoms)

En küçük yeniden kullanılabilir bileşenlerdir.

Örneğin;

Button
Input
Label
Checkbox
Badge
Icon
28.19 Molecules

Birden fazla Atom'un birleşmesiyle oluşur.

Örneğin;

Search Box
Login Form Alanı
Date Picker
Phone Input
28.20 Organisms

Bir ekranın anlamlı bölümleridir.

Örneğin;

Sidebar
Header
Dashboard KPI Alanı
Appointment Calendar
Payment Summary
28.21 Templates

Sayfa düzenini tanımlar.

İçerik değişebilir;

yerleşim değişmez.

28.22 Pages

Gerçek veriyle çalışan son kullanıcı ekranlarıdır.

28.23 Component Library

Tüm ortak bileşenler;

tek Component Library altında bulunmalıdır.

Örneğin;

Button

Card

Table

Input

Tabs

Modal

Drawer

Toast

Avatar

Badge

Timeline

Calendar
28.24 Varyant Sistemi

Her bileşenin;

ayrı kopyaları oluşturulmamalıdır.

Variant mantığı kullanılmalıdır.

Örneğin;

Button;

Primary

Secondary

Outline

Ghost

Danger

Link

gibi varyantlara sahip olabilir.

28.25 Boyut Sistemi

Her bileşen;

standart boyutlar kullanmalıdır.

Örneğin;

Small

Medium

Large

Extra Large

28.26 Durumlar (States)

Her Component;

en az aşağıdaki durumları desteklemelidir.

Default
Hover
Focus
Active
Disabled
Loading
Success
Error
28.27 Loading Deneyimi

Sayfa yüklenirken;

boş ekran gösterilmemelidir.

Kullanılabilecek yöntemler;

Skeleton
Progress
Spinner
Shimmer
28.28 Empty States

Boş veri gösterimleri;

bilgilendirici olmalıdır.

Örneğin;

Henüz üye bulunmuyor.

İlk üyeyi ekleyerek başlayabilirsiniz.

28.29 Error States

Hata ekranları;

yalnızca "Bir hata oluştu"

mesajından oluşmamalıdır.

Her hata;

nedeni,
kullanıcıya etkisi,
çözüm önerisi,
tekrar dene

aksiyonunu içermelidir.

28.30 Business Rules
BR-421

Bileşenler Atomic Design mimarisine göre geliştirilecektir.

BR-422

Yeni Component oluşturulmadan önce mevcut kütüphane kontrol edilmelidir.

BR-423

Her Component varyant sistemini desteklemelidir.

BR-424

Her Component tüm temel durumları (States) desteklemelidir.

BR-425

Boş veri ekranları kullanıcıya rehberlik etmelidir.

BR-426

Loading ve Error deneyimi tüm platformda standart olmalıdır.

Architecture Decision (ADR-064)

Antrenova'nın UI bileşen mimarisi; Atomic Design, Component Library, Variant System ve State Management ilkeleri üzerine kurulacaktır. Yeni geliştirilen her ekran mevcut bileşenlerden oluşturulacak, kopya bileşen geliştirilmesi engellenecektir.

✅ BÖLÜM 28 (1. KISIM) TAMAMLANDI
Devamında işlenecek konular

Bir sonraki kısımda;

WCAG 2.2 AA erişilebilirlik standartları,
klavye ile tam kullanım,
ekran okuyucu (Screen Reader) desteği,
renk körlüğü ve kontrast kuralları,
form kullanılabilirliği,
veri yoğun ekranlar (Dashboard, Table, Calendar) için UX standartları,
Dark Mode mimarisi,
animasyon ve mikro etkileşim standartları,
kullanıcı araştırmaları ve UX metrikleri,
Design Governance

kurumsal seviyede tanımlanacaktır. Bu bölüm tamamlandığında Antrenova'nın tasarım sistemi yalnızca görsel olarak değil, erişilebilirlik, kullanılabilirlik ve sürdürülebilirlik açısından da Enterprise seviyesinde standartlaştırılmış olacaktır.