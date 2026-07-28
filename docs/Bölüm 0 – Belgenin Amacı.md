Bölüm 0 – Belgenin Amacı

0.1 Giriş

Antrenova Master Handbook, Antrenova platformunun resmi mimari, teknik ve iş kuralı dokümanıdır.

Bu belge;

geliştiriciler,
sistem mimarları,
UI/UX tasarımcıları,
mobil geliştiriciler,
veritabanı yöneticileri,
test mühendisleri,
yapay zekâ destekli geliştirme araçları

için tek referans kaynağıdır.

Bu kitapta yazılan kurallar, Antrenova'nın geliştirme sürecinde bağlayıcı kabul edilir.

Kod, bu kitabı takip eder.

Kod hiçbir zaman bu kitabın önüne geçmez.

0.2 Vizyon

Antrenova;

yalnızca bir spor salonu yönetim programı değildir.

Antrenova;

işletme yönetimi,

CRM,

ERP,

üyelik yönetimi,

randevu sistemi,

ödeme sistemi,

raporlama,

RFID,

akıllı erişim,

yapay zekâ,

çok şubeli yönetim,

çok işletmeli SaaS

altyapısını tek platformda birleştiren profesyonel bir işletme yönetim sistemidir.

Uzun vadede;

spor salonları
pilates stüdyoları
yoga merkezleri
tenis kulüpleri
yüzme okulları
dans okulları
dövüş sporları
rehabilitasyon merkezleri
fizik tedavi merkezleri
kişisel antrenörler

aynı altyapıyı kullanabilecektir.

0.3 Misyon

Antrenova'nın amacı;

işletmelerin operasyonlarını kolaylaştırmak,

manuel işlemleri azaltmak,

otomasyonu artırmak,

müşteri memnuniyetini yükseltmek,

ve yöneticilerin doğru kararlar almasını sağlayacak verileri üretmektir.

0.4 Yazılım Felsefesi

Antrenova geliştirilirken aşağıdaki prensipler esas alınır.

Kural 1

Önce iş kuralı yazılır.

Sonra kod yazılır.

Kural 2

Her ekranın bir amacı vardır.

Amaçsız ekran geliştirilmez.

Kural 3

Her veri en fazla bir kez tutulur.

Tekrarlanan veri teknik borç oluşturur.

Kural 4

Her özellik raporlanabilir olmalıdır.

Kullanıcı yaptığı işlemin geçmişini görebilmelidir.

Kural 5

Her işlem geri izlenebilir olmalıdır.

Kim yaptı?

Ne zaman yaptı?

Neden yaptı?

Bu bilgiler kaydedilir.

Kural 6

Sistem kullanıcıyı mümkün olduğunca düşünmek zorunda bırakmamalıdır.

Varsayılanlar akıllıca seçilir.

Kural 7

Sistem kullanıcıyı hata yapmaktan korur.

Yanlış işlem yaptıktan sonra uyarmak yerine,

yanlış işlem yapmasını engellemek tercih edilir.

Kural 8

Her modül bağımsız geliştirilebilir olmalıdır.

Bir modülde yapılan değişiklik başka modülleri bozmamalıdır.

Kural 9

Antrenova;

küçük işletmeler için kolay,

büyük işletmeler için güçlü,

geliştiriciler için sürdürülebilir olmalıdır.

Kural 10

Tüm geliştirmeler;

ölçeklenebilir,

bakımı kolay,

test edilebilir,

güvenli

olmalıdır.

0.5 Ürün İlkeleri

Antrenova'nın bütün modülleri aşağıdaki ilkeleri takip eder.

Basitlik

Kullanıcı ilk bakışta sistemi anlayabilmelidir.

Tutarlılık

Aynı işlem her sayfada aynı şekilde çalışmalıdır.

Hız

Hiçbir ekran gereksiz sorgu çalıştırmamalıdır.

Güvenlik

Yetkisi olmayan hiçbir kullanıcı veri göremez.

Ölçeklenebilirlik

Bugün 1 işletme,

yarın 10,

sonra 100,

daha sonra 10.000 işletme

aynı mimari ile çalışabilmelidir.

Modülerlik

Yeni modüller eklenirken mevcut sistem değiştirilmemelidir.

Yapay Zekâ Uyumluluğu

Sistemdeki her modül;

gelecekte AI destekli öneri,

otomatik analiz,

tahmin,

raporlama

üretebilecek şekilde tasarlanmalıdır.

0.6 Kapsam

Bu kitap aşağıdaki alanların tamamını kapsar:

Sistem Mimarisi
Multi-Tenant Yapısı
İşletme Yönetimi
Şube Yönetimi
Kullanıcı ve Roller
Üye Yönetimi
Eğitmen Yönetimi
Paket Yönetimi
Randevu Sistemi
Devam Takibi
Yoklama
Finans
Tahsilat
Makbuz
Fatura
Bildirim Sistemi
WhatsApp Entegrasyonu
SMS
E-posta
Formlar ve Sözleşmeler
Raporlama
Dashboard
RFID
Turnike
QR Giriş
Mobil Uygulama
API
Veritabanı
Güvenlik
Performans
Test Süreçleri
Dağıtım Süreci
Yapay Zekâ Modülleri
0.7 Temel Hedef

Antrenova'nın temel hedefi;

sektördeki mevcut spor salonu yazılımlarından daha profesyonel, daha hızlı, daha güvenli ve daha ölçeklenebilir bir platform oluşturmaktır.

Her mimari karar, her geliştirme ve her yeni özellik bu hedef doğrultusunda değerlendirilir.