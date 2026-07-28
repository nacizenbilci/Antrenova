BÖLÜM 22 (DEVAM)
Şifreleme, Anahtar Yönetimi, Secrets Yönetimi, Audit Log, KVKK/GDPR Uyumluluğu ve Güvenlik Operasyonları

Not: Kurumsal güvenlik yalnızca saldırıları engellemekten ibaret değildir. Aynı zamanda verilerin gizliliğini, bütünlüğünü ve erişilebilirliğini korumayı; güvenlik olaylarını izlemeyi; yasal düzenlemelere uyumu ve denetlenebilirliği sağlamayı da kapsar.

22.23 Veri Şifreleme (Encryption at Rest)

Veritabanında saklanan kritik veriler;

yetkisiz erişime karşı korunmalıdır.

Şifreleme uygulanabilecek örnek alanlar;

Kimlik Numarası
Vergi Numarası
API Anahtarları
Refresh Token'lar
Entegrasyon Gizli Bilgileri

Şifreleme;

veri depolandığı anda uygulanmalıdır.

22.24 Veri Aktarımı (Encryption in Transit)

İstemci ile sunucu arasındaki tüm iletişim;

şifreli bağlantılar üzerinden gerçekleştirilmelidir.

Client

↓

TLS

↓

API

↓

Database

Şifrelenmemiş bağlantılar desteklenmemelidir.

22.25 Anahtar Yönetimi (Key Management)

Şifreleme anahtarları;

uygulama kodunun içerisinde tutulmamalıdır.

Anahtarlar;

güvenli saklanmalı,
erişimi sınırlandırılmalı,
düzenli olarak yenilenebilmelidir.
22.26 Key Rotation

Uzun süre aynı anahtar kullanılmamalıdır.

Belirli aralıklarla;

anahtar değişimi (Rotation)

desteklenmelidir.

Eski anahtarlarla şifrelenmiş veriler için kontrollü geçiş planı uygulanmalıdır.

22.27 Secrets Management

Gizli bilgiler;

kaynak kodunda bulunmamalıdır.

Örneğin;

API Key
SMTP Password
JWT Secret
OAuth Secret
Service Token

Bu bilgiler güvenli Secret yönetim mekanizmalarıyla saklanmalıdır.

22.28 Credential Ayrıştırması

Development,

Testing,

Staging,

Production

ortamları;

aynı gizli bilgileri kullanmamalıdır.

Her ortam;

kendine ait kimlik bilgilerine sahip olmalıdır.

22.29 Hassas Veri Maskeleme

Hassas bilgiler;

ekranda ve loglarda tam olarak gösterilmemelidir.

Örneğin;

**** **** **** 4821

na**@example.com

+90 5** *** ** 45
22.30 Veri Sınıflandırması

Veriler;

önem derecelerine göre sınıflandırılmalıdır.

Örneğin;

Public

↓

Internal

↓

Confidential

↓

Restricted

Her sınıf için farklı koruma politikaları uygulanabilir.

22.31 Audit Log

Kritik işlemler;

değiştirilemez denetim kayıtlarına yazılmalıdır.

Örneğin;

Kullanıcı Girişi
Rol Değişikliği
Ödeme
Paket Satışı
Ayar Güncellemesi

Audit kayıtları silinmemeli, yalnızca saklama politikalarına göre arşivlenmelidir.

22.32 Audit Trail Yapısı

Her Audit kaydı;

en az aşağıdaki bilgileri içermelidir.

Timestamp

↓

User

↓

Business

↓

Action

↓

Resource

↓

Old Value

↓

New Value

↓

IP Address
22.33 Değişmezlik (Immutability)

Audit kayıtları;

sonradan değiştirilememelidir.

Gerekirse;

ek düzeltme kayıtları oluşturulmalı,

mevcut kayıt değiştirilmemelidir.

22.34 KVKK ve GDPR Yaklaşımı

Platform;

kişisel verilerin korunmasına yönelik yürürlükteki mevzuat dikkate alınarak tasarlanmalıdır.

Özellikle;

veri minimizasyonu,
amaçla sınırlılık,
saklama süresi,
güvenli işleme

ilkeleri gözetilmelidir.

22.35 Veri Saklama Politikası

Her veri;

sonsuza kadar tutulmamalıdır.

Veri türüne göre;

saklama süresi,
arşivleme,
anonimleştirme,
silme

politikaları belirlenmelidir.

22.36 Veri Silme ve Anonimleştirme

Mevzuat veya iş gereksinimleri doğrultusunda;

kişisel veriler;

tamamen silinebilir,
anonim hale getirilebilir,
erişimi sınırlandırılabilir.

İşlem kayıtlarının korunması gereken durumlarda kişisel bilgiler anonimleştirilerek saklanabilir.

22.37 Güvenlik Olay Yönetimi (SIEM Hazırlığı)

Güvenlik olayları;

merkezi olarak toplanabilir.

Örneğin;

Başarısız Girişler
Yetki İhlalleri
Şüpheli API Kullanımı
Olağan Dışı Trafik

Bu kayıtlar ileride SIEM çözümleriyle entegre edilebilir.

22.38 Olay Müdahale Süreci

Bir güvenlik olayı gerçekleştiğinde;

standart süreç uygulanmalıdır.

Detect

↓

Analyze

↓

Contain

↓

Recover

↓

Review
22.39 Penetrasyon Testleri

Belirli aralıklarla;

bağımsız güvenlik testleri yapılmalıdır.

Test kapsamı;

Web
API
Mobil
Kimlik Doğrulama
Yetkilendirme

olmalıdır.

22.40 Güvenlik Denetimleri

Platform;

düzenli güvenlik değerlendirmelerinden geçirilmelidir.

Örneğin;

Kod İncelemesi
Bağımlılık Taraması
Konfigürasyon Kontrolü
Altyapı Denetimi
22.41 Business Rules
BR-289

Şifreleme anahtarları kaynak kodunda tutulmamalıdır.

BR-290

Kritik işlemler değiştirilemez Audit kayıtlarına yazılmalıdır.

BR-291

Hassas veriler loglarda ve kullanıcı arayüzünde maskelenmelidir.

BR-292

Her ortam kendi gizli bilgilerini (Secrets) kullanmalıdır.

BR-293

Veri saklama ve silme politikaları iş gereksinimleri ile yasal yükümlülüklere uygun tanımlanmalıdır.

BR-294

Düzenli güvenlik değerlendirmeleri ve penetrasyon testleri planlanmalıdır.

Architecture Decision (ADR-042)

Antrenova'nın güvenlik operasyonları; Encryption, Key Management, Secrets Management, Audit Trail, Security Monitoring, Incident Response ve Compliance bileşenlerinden oluşacaktır. Platform; denetlenebilir, izlenebilir ve güvenlik olaylarına hızlı müdahale edilebilir şekilde tasarlanacaktır.

✅ BÖLÜM 22 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın kurumsal güvenlik mimarisi;

Zero Trust,
Defense in Depth,
OWASP prensipleri,
API güvenliği,
veri şifreleme,
anahtar yönetimi,
Secrets yönetimi,
Audit Trail,
veri sınıflandırması,
KVKK/GDPR yaklaşımı,
güvenlik operasyonları,
olay müdahale süreçleri,
penetrasyon testleri

gibi kurumsal güvenlik standartlarını kapsayacak şekilde tanımlanmıştır.