BÖLÜM 7
Paket (Package) Yönetimi

Not: Paket modülü, Antrenova'nın ticari kalbidir. Üye ile işletme arasındaki hizmet sözleşmesini temsil eder. Ödeme, randevu, devam, finans, raporlama, bildirim ve AI modülleri doğrudan paket sistemiyle ilişkilidir.

7.1 Amaç

Paket sistemi;

satılan hizmeti tanımlar,
kullanım hakkını yönetir,
üyenin seanslarını takip eder,
finansal süreci başlatır,
otomatik kuralları çalıştırır.

Bir paket yalnızca "10 seans" değildir.

Paket, işletme ile üye arasındaki hizmet anlaşmasının dijital karşılığıdır.

7.2 Temel Tanımlar

Antrenova'da iki farklı kavram vardır.

Paket Şablonu (Package Template)

Satılabilir ürünün tanımıdır.

Örneğin;

Pilates 8 Seans
Fitness Aylık
Tenis Özel Ders
CrossFit Premium
Üye Paketi (Member Package)

Şablonun belirli bir üyeye satılmış halidir.

Package Template

↓

Satış

↓

Member Package

Bu ayrım sayesinde şablon değişse bile daha önce satılmış paketler etkilenmez.

7.3 Paket Kimliği

Her üye paketinin benzersiz UUID değeri vardır.

id

Her kayıt aşağıdaki ilişkilere sahiptir.

business_id

member_id

package_template_id

trainer_id (opsiyonel)

branch_id
7.4 Paket Yaşam Döngüsü
Taslak

↓

Satıldı

↓

Aktif

↓

Donduruldu

↓

Tekrar Aktif

↓

Tamamlandı

↓

Süresi Doldu

↓

İptal

↓

Arşiv
7.5 Paket Durumları
Draft

Henüz satış tamamlanmamıştır.

Active

Normal kullanım devam etmektedir.

Frozen

Geçici olarak durdurulmuştur.

Completed

Seansları bitmiştir.

Expired

Süresi dolmuştur.

Cancelled

İptal edilmiştir.

Archived

Geçmiş kayıt olarak saklanır.

7.6 Paket Türleri

Sistem aşağıdaki paket tiplerini desteklemelidir.

Seans Bazlı

Örneğin;

10 Seans

20 Seans

50 Seans

Süre Bazlı

1 Ay

3 Ay

6 Ay

12 Ay

Karma Paket

Hem süre

hem seans

birlikte kontrol edilir.

Örneğin;

20 Seans

+

90 Gün

Hangisi önce biterse paket sona erer.

Limitsiz

Belirli süre boyunca sınırsız kullanım.

Örneğin;

1 Ay Sınırsız Fitness.

Kredi Sistemi

Her hizmet farklı kredi tüketebilir.

Örneğin;

Pilates = 1

EMS = 2

Reformer = 2

PT = 4
7.7 Paket Süresi

Paket;

satış tarihinde,
ilk kullanım tarihinde,
işletmenin belirlediği tarihte

başlayabilir.

Bu davranış Paket Ayarları modülünden belirlenir.

7.8 İlk Kullanım

Bazı işletmeler;

paketi satın alınca başlatır.

Bazıları ise;

ilk giriş yapınca başlatır.

Her iki yöntem de desteklenmelidir.

7.9 Son Kullanma Tarihi

Her paketin;

başlangıç

ve

bitiş

tarihi bulunabilir.

Süre kontrolü bu tarihlere göre yapılır.

7.10 Seans Sayısı

Örneğin;

Toplam

↓

20

Kullanılan

↓

7

Kalan

↓

13

Kalan seans manuel hesaplanmaz.

Sistem tarafından otomatik hesaplanır.

7.11 Kullanılan Seans

Seans yalnızca aşağıdaki durumda düşer.

✔ Üye geldi.

Hayır;

randevu oluşturunca,
planlayınca,
rezervasyon yapınca

seans eksilmez.

7.12 İptal Edilen Randevu

İptal edilen randevunun;

seans düşüp düşmeyeceği

işletme ayarıdır.

Örneğin;

24 saat önceden iptal

↓

Seans düşmez.

Geç iptal

↓

Seans düşebilir.

7.13 Gelmedi (No Show)

İşletme belirleyebilir.

No Show

↓

Seans düşsün.

veya

↓

Düşmesin.

7.14 Eğitmen İlişkisi

Paket;

tek eğitmene bağlı olabilir.

veya

bütün eğitmenlerde geçerli olabilir.

7.15 Şube İlişkisi

Paket;

tek şubede

veya

tüm şubelerde

geçerli olabilir.

7.16 Otomatik Randevu

Paket satıldığında sistem;

otomatik randevular oluşturabilir.

Örneğin;

12 Seans

↓

Haftada

3 Gün

↓

4 Hafta

Bütün randevular otomatik üretilebilir.

7.17 Esnek Takvim

Oluşturulan otomatik randevular;

gerekirse değiştirilebilir.

Otomatik oluşturulmuş olmaları kilitli oldukları anlamına gelmez.

7.18 Paket Yenileme

Paket tamamlanınca;

tek tıkla

yenileme yapılabilir.

Yeni paket,

eski paketin geçmişini değiştirmez.

7.19 Paket Devri

İşletme isterse;

kullanılmayan seansları

bir sonraki pakete aktarabilir.

Bu özellik tamamen ayarlanabilir olmalıdır.

7.20 Dondurma

Paket dondurulduğunda;

bitiş tarihi

otomatik uzatılır.

Ancak kullanılan seans sayısı değişmez.

7.21 Business Rules
BR-045

Paket şablonu değiştirildiğinde daha önce satılmış paketler etkilenmez.

BR-046

Seans yalnızca "Geldi" durumunda otomatik düşürülür.

BR-047

Kalan seans değeri manuel değiştirilemez; sistem tarafından hesaplanır.

BR-048

Karma paketlerde süre ve seans kontrolleri birlikte çalışır; hangisi önce sona ererse paket tamamlanmış kabul edilir.

BR-049

Otomatik oluşturulan randevular gerektiğinde kullanıcı tarafından değiştirilebilir.

BR-050

Paket yenileme işlemi mevcut paketi değiştirmez; yeni bir üye paketi kaydı oluşturur.