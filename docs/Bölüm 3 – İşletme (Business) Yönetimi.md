BÖLÜM 3
İşletme (Business) Yönetimi
3.1 Amaç

Business (İşletme), Antrenova sistemindeki en üst organizasyon birimidir.

Sistemde oluşturulan bütün veriler bir işletmeye aittir.

İşletme olmadan;

üye oluşturulamaz,
paket oluşturulamaz,
ödeme alınamaz,
randevu oluşturulamaz,
rapor üretilemez.

Business sistemi Antrenova'nın temelidir.

3.2 Business Tanımı

Business;

tek bir şirketi veya işletmeyi temsil eder.

Örnekler;

ABC Fitness
Kapadokya Pilates Studio
Elite Tennis Club
Yoga Center İstanbul

Her biri sistemde bağımsız tenant olarak çalışır.

3.3 Business Kimliği

Her işletmenin değiştirilemeyen benzersiz bir kimliği vardır.

id (UUID)

Bu kimlik hiçbir zaman kullanıcı tarafından düzenlenemez.

İşletmenin adı değişse bile ID değişmez.

3.4 İşletme Yaşam Döngüsü

Her işletme aşağıdaki yaşam döngüsünü takip eder.

Oluşturuldu

↓

Kurulum

↓

Aktif

↓

Askıya Alındı

↓

Tekrar Aktif

↓

Arşivlendi

↓

Kalıcı Silindi (Sadece Platform)
3.5 Business Durumları

Her işletmenin yalnızca bir durumu olabilir.

Draft

Kurulum tamamlanmamıştır.

Active

Normal şekilde kullanılmaktadır.

Suspended

Ödeme veya güvenlik nedeniyle geçici olarak durdurulmuştur.

Archived

İşletme kapatılmıştır.

Veriler korunur.

Deleted

Platform yöneticisi tarafından tamamen kaldırılmıştır.

3.6 Business Oluşturma Kuralları

Yeni işletme oluşturulurken minimum aşağıdaki bilgiler zorunludur.

İşletme Adı
Yetkili Kişi
E-posta
Telefon
Ülke
Saat Dilimi
Varsayılan Dil
Varsayılan Para Birimi

Eksik bilgilerle işletme aktif hale getirilemez.

3.7 İlk Kurulum Sihirbazı

İlk girişte işletme aşağıdaki adımlardan geçer.

İşletme Bilgileri
Şube Bilgileri
Çalışma Saatleri
Eğitmenler
Paketler
Bildirim Ayarları
Finans Ayarları
İlk Kullanıcı
İlk Üye (İsteğe Bağlı)

Kurulum tamamlanmadan Dashboard açılmaz.

3.8 İşletme Ayarları

Her işletmenin aşağıdaki ayarları bulunur.

Genel
Logo
Kapak Fotoğrafı
Açıklama
Web Sitesi
İletişim
Telefon
WhatsApp
E-posta
Adres
Ülke
Şehir
İlçe
Posta Kodu
Adres
Finans
Vergi Dairesi
Vergi No
Fatura Ünvanı
IBAN
Bölgesel
Para Birimi
Saat Dilimi
Tarih Formatı
Saat Formatı
3.9 Lisans Yapısı

Her işletmenin aktif bir lisansı bulunur.

Lisans;

modülleri,
kullanıcı sayısını,
şube sayısını,
depolama alanını,
entegrasyonları

belirler.

Lisans dışında kalan özellikler pasif görünür.

3.10 Paket Tipleri (SaaS)

İleride aşağıdaki lisans tipleri desteklenebilir.

Starter
Professional
Enterprise
Franchise
Custom

Lisans sistemi modüler olmalıdır.

3.11 Özellik Yönetimi

Her işletmede kullanılabilir modüller ayrı ayrı açılıp kapatılabilir.

Örneğin;

RFID
AI
QR Giriş
Online Ödeme
WhatsApp
SMS
Muhasebe Entegrasyonu

Lisansa göre aktif edilir.

3.12 İşletme Silinemez

Normal kullanıcı;

işletmesini silemez.

Sadece;

Platform Super Admin

kalıcı silme yapabilir.

3.13 İşletme Arşivleme

İşletme arşivlenirse;

giriş yapılamaz,
yeni kayıt oluşturulamaz,
API erişimi durdurulur.

Ancak veriler korunur.

3.14 İşletme Dondurma

Askıya alınan işletmede;

Dashboard açılabilir.

Ancak;

ödeme,
üye,
paket,
randevu

oluşturulamaz.

Bu özellik abonelik problemi yaşayan müşteriler için kullanılır.

3.15 Veri Sahipliği

Bir işletmenin oluşturduğu bütün veriler yalnızca o işletmeye aittir.

Platform bu verilere yalnızca teknik bakım amacıyla erişebilir.

İşletme verileri başka işletmelerle paylaşılmaz.

3.16 Varsayılan Ayarlar

Yeni işletme oluşturulduğunda sistem otomatik olarak oluşturur.

Varsayılan Roller
Varsayılan İzinler
Dashboard Ayarları
Finans Ayarları
Bildirim Kuralları
Paket Ayarları
Randevu Ayarları
Form Şablonları
Makbuz Ayarları

Böylece işletme kurulumdan hemen sonra çalışabilir.

3.17 İşletme Logosu

Logo;

Dashboard
Makbuz
PDF
Mobil
E-posta
Formlar

gibi tüm alanlarda otomatik kullanılabilir.

3.18 İşletme Teması

İşletme isteğe bağlı olarak;

Ana Renk
Yardımcı Renk
Logo
Karanlık Tema
Açık Tema

belirleyebilir.

Tema kullanıcı deneyimini etkiler ancak iş kurallarını değiştirmez.

3.19 İşletme Saat Dilimi

Tüm tarih ve saat hesaplamaları işletmenin saat dilimine göre yapılır.

Sunucu UTC kullansa bile kullanıcıya gösterilen zaman işletme saatine çevrilir.

3.20 İşletme Para Birimi

Her işletmenin varsayılan para birimi vardır.

Örneğin:

TRY
USD
EUR
GBP

Tüm finansal kayıtlar varsayılan para birimi ile tutulur.

İleride çoklu para birimi desteği eklense bile ana muhasebe para birimi değişmez.

3.21 İşletme Dili

Varsayılan dil;

arayüz metinlerini,
otomatik mesajları,
PDF şablonlarını

etkiler.

Kullanıcılar kendi kişisel arayüz dillerini ayrıca seçebilir.

3.22 İşletme Kapasitesi

İşletmenin;

maksimum kullanıcı,
maksimum şube,
maksimum depolama,
maksimum aktif üye

limitleri lisansa göre belirlenebilir.

Limit aşımı durumunda sistem uyarı verir ve yeni kayıt oluşturmayı engeller.

3.23 Business Rule
BR-011

Her kayıt tam olarak bir işletmeye ait olmak zorundadır.

BR-012

İşletme silme işlemi yalnızca Platform Super Admin tarafından yapılabilir.

BR-013

İşletme arşivlendiğinde veriler korunur.

BR-014

Kurulum sihirbazı tamamlanmadan Dashboard aktif olmaz.

BR-015

Yeni işletme oluşturulduğunda tüm temel ayarlar otomatik oluşturulur.

BR-016

İşletmenin saat dilimi ve para birimi sonradan değiştirilebilir; ancak geçmiş finansal kayıtlar kendi oluşturuldukları para birimi bilgisiyle saklanmalıdır.

BR-017

Lisans kısıtlamaları yalnızca arayüzde değil, sunucu tarafında da doğrulanmalıdır.

Mimari Not (Architecture Decision)

Business modülü Antrenova'nın "root aggregate"idir. Yani sistemdeki tüm diğer ana modüller (şubeler, kullanıcılar, üyeler, paketler, finans, raporlar vb.) doğrudan veya dolaylı olarak bir Business'a bağlıdır. Bu nedenle Business modeli sade tutulmalı, ancak genişlemeye açık olmalıdır. Yeni özellikler mümkün olduğunca Business modeline yeni alanlar eklemek yerine ilgili alt modüllerde çözümlenmelidir.