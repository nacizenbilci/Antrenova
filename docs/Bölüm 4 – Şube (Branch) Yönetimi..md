BÖLÜM 4
Şube (Branch) Yönetimi
4.1 Amaç

Şube (Branch), bir işletmeye bağlı fiziksel veya sanal hizmet noktasıdır.

Antrenova, tek şubeli işletmeler kadar yüzlerce şubesi bulunan kurumsal yapıları da desteklemek üzere tasarlanmıştır.

Sistem hiçbir zaman yalnızca tek şubeli çalışacak varsayımıyla geliştirilmez.

4.2 Branch Tanımı

Her şube mutlaka bir işletmeye bağlıdır.

Business
    │
    ├── Branch A
    ├── Branch B
    ├── Branch C

Şube tek başına var olamaz.

4.3 Şube Kimliği

Her şubenin benzersiz UUID değeri vardır.

id

Ayrıca;

business_id

alanı zorunludur.

4.4 Şube Bilgileri

Her şube aşağıdaki bilgileri içerir.

Kimlik
Şube Adı
Kısa Kod
Şube Kodu
UUID
İletişim
Telefon
WhatsApp
E-Posta
Adres
Ülke
Şehir
İlçe
Posta Kodu
Açık Adres
Konum
Latitude
Longitude
Çalışma
Açılış Saati
Kapanış Saati
Tatil Günleri
Finans
Kasa
Banka Hesapları
POS Bilgileri
4.5 Varsayılan Şube

İşletme oluşturulduğunda sistem otomatik olarak ilk şubeyi oluşturur.

Örneğin;

Merkez Şube

Tek şubeli işletmeler bile sistemde teknik olarak bir şubeye sahiptir.

Bu yaklaşım ileride çok şubeye geçişi kolaylaştırır.

4.6 Şube Durumları

Bir şube aşağıdaki durumlardan yalnızca birinde olabilir.

Draft
Active
Suspended
Archived
4.7 Şube Açma

Yeni şube açılırken;

işletme lisansı
maksimum şube limiti
aktif abonelik

kontrol edilir.

Limit aşılırsa yeni şube oluşturulamaz.

4.8 Şube Kapatma

Şube kapatıldığında;

yeni randevu oluşturulamaz,
yeni üye kaydı yapılamaz,
yeni ödeme alınamaz.

Ancak geçmiş veriler korunur.

4.9 Şube Silme

Şube doğrudan silinmez.

Önce arşivlenir.

Kalıcı silme yalnızca;

hiç veri yoksa

veya

Platform Super Admin onayı varsa

gerçekleşebilir.

4.10 Üye Bağlantısı

Her üyenin varsayılan bir şubesi vardır.

Member

↓

branch_id

Bu bilgi;

raporlama,

giriş kontrolü,

finans

için kullanılır.

4.11 Eğitmen Bağlantısı

Bir eğitmen;

tek şubede çalışabilir.

veya

birden fazla şubede görev alabilir.

Bu nedenle ilişki;

Trainer

↓

TrainerBranch

↓

Branch

şeklinde tasarlanmalıdır.

4.12 Paketler

Paketler;

İşletme genelinde geçerli olabilir.

veya

yalnızca belirli şubelerde kullanılabilir.

Örneğin

Premium Paket

↓

Bütün şubelerde

Geçerli.

4.13 Randevular

Her randevu mutlaka bir şubeye bağlıdır.

Appointment

↓

branch_id

Boş bırakılamaz.

4.14 Yoklama

Üye;

hangi şubede giriş yaptıysa

o şubenin yoklamasına yazılır.

4.15 Ödemeler

Her ödeme;

şubeye bağlıdır.

Böylece;

şube bazlı

ciro hesaplanabilir.

4.16 Dashboard

Dashboard;

isterse

işletmenin tamamını

gösterebilir.

İsterse

tek şubeyi gösterebilir.

4.17 Filtreleme

Sistemdeki bütün listeler;

şube filtresi desteklemelidir.

Örneğin;

Üyeler

↓

Merkez Şube

↓

Liste

4.18 Raporlama

Raporlar;

işletme bazlı
şube bazlı
tüm şubeler

olarak alınabilir.

4.19 Şubeler Arası Üye Transferi

Üye başka şubeye aktarılabilir.

Ancak;

bütün geçmişi korunur.

Transfer;

üyeyi yeniden oluşturmaz.

Sadece aktif şubesi değişir.

4.20 Eğitmen Transferi

Eğitmen başka şubeye taşınabilir.

Geçmiş randevular değişmez.

Yeni randevular yeni şubede oluşur.

4.21 Paket Transferi

İşletme isterse;

paketleri

şubeler arasında geçerli yapabilir.

veya

yalnızca satın alınan şubede kullanılmasını seçebilir.

Bu ayar işletme seviyesinde yapılandırılabilir.

4.22 Şubeler Arası Yetki

Branch Manager;

yalnızca kendi şubesini görebilir.

Başka şubeleri göremez.

4.23 Bölgesel Ayarlar

İleride her şube için;

farklı KDV
farklı para birimi
farklı çalışma saatleri
farklı tatiller

tanımlanabilir.

Mimari buna hazır olmalıdır.

4.24 RFID

Turnike;

hangi şubede okutulduysa

o şubenin girişi olarak kaydedilir.

4.25 QR Giriş

QR kod;

şubeye özeldir.

Bir şubenin QR kodu başka şubede kullanılamaz.

4.26 Bildirimler

Şube bazlı;

WhatsApp,

SMS,

Mail

şablonları tanımlanabilir.

4.27 Finans

Her şubenin;

günlük cirosu,
aylık cirosu,
borç durumu,
tahsilatı,
gideri

ayrı raporlanabilir.

İşletme sahibi tüm şubelerin konsolide finansal durumunu da görebilmelidir.

4.28 Stok (Gelecek Modül)

İleride eklenecek stok modülü;

şube bazlı çalışacaktır.

Bir ürünün;

Merkez Şube
Şube A
Şube B

stok miktarları birbirinden bağımsız olacaktır.

4.29 Franchise Hazırlığı

Şube mimarisi, gelecekte franchise modeline geçişi destekleyecek şekilde tasarlanmalıdır.

Her franchise;

kendi personelini,
kendi finansını,
kendi üyelerini

yönetebilir.

Merkez ise bütün franchise'ları tek panelden görebilir.

4.30 Business Rules
BR-018

Her şube mutlaka bir işletmeye bağlıdır.

BR-019

Her randevu bir şubeye bağlı olmak zorundadır.

BR-020

Her ödeme bir şubeye bağlı olmak zorundadır.

BR-021

Şube yöneticisi başka şubelerin verilerini göremez.

BR-022

Şubeler arası transferlerde geçmiş kayıtlar değiştirilemez.

BR-023

İlk işletme oluşturulduğunda varsayılan şube otomatik oluşturulur.

BR-024

Şube silme işlemi fiziksel silme yerine varsayılan olarak arşivleme şeklinde uygulanmalıdır.

Architecture Decision (ADR-002)

Tüm modüllerde branch_id alanını zorunlu yapmak yerine, yalnızca iş açısından anlamlı olduğu tablolarda kullanacağız.

Örneğin:

Members ✅
Appointments ✅
Payments ✅
Attendances ✅
Trainers (ilişki tablosu üzerinden) ✅
Notification Templates (isteğe bağlı) ⚠️

Buna karşılık;

Global sistem ayarları,
Platform tanımları,
Ortak referans verileri

gibi yapılarda branch_id kullanılmayacaktır.

Bu yaklaşım, gereksiz veri tekrarını önlerken çok şubeli yapıyı da tam olarak destekler.