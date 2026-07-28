BÖLÜM 14
Kullanıcılar, Roller, Yetkilendirme ve Güvenlik Sistemi

Not: Güvenlik, Antrenova'nın sonradan eklenen bir özelliği değildir. Platformun ilk satır kodundan itibaren tüm modüller Security by Design yaklaşımıyla geliştirilecektir. Her kullanıcı yalnızca yetkisi kadarını görebilecek, her işlem izlenebilir olacak ve tüm işletmeler birbirinden tam olarak izole edilecektir.

14.1 Amaç

Güvenlik sisteminin amacı;

kullanıcıları doğrulamak,
yetkileri yönetmek,
işletmeleri birbirinden izole etmek,
veri güvenliğini sağlamak,
tüm işlemleri denetlenebilir hale getirmektir.
14.2 Güvenlik Felsefesi

Antrenova'da hiçbir kullanıcı;

varsayılan olarak hiçbir yetkiye sahip değildir.

Yetkiler sonradan verilir.

Yaklaşım;

DENY BY DEFAULT

olmalıdır.

14.3 Kimlik Doğrulama (Authentication)

Kullanıcının sisteme giriş yaptığını doğrular.

Desteklenen yöntemler;

E-posta + Şifre
Telefon + OTP
Magic Link
Google
Apple
Microsoft

İleride;

SSO desteği eklenebilir.

14.4 Yetkilendirme (Authorization)

Authentication

↓

"Kim?"

Authorization

↓

"Ne Yapabilir?"

Bu iki kavram birbirinden tamamen ayrıdır.

14.5 Multi-Tenant Güvenliği

Her kayıt;

bir işletmeye aittir.

business_id

olmayan hiçbir veri oluşturulamaz.

İşletmeler birbirlerinin verisini göremez.

14.6 Branch İzolasyonu

İşletme isterse;

şube bazlı erişim kullanabilir.

Örneğin;

Merkez Şube

↓

Sadece Merkez Personeli
14.7 Kullanıcı Tanımı

Her kullanıcı;

id

business_id

profile_id

status

created_at

alanlarına sahip olmalıdır.

14.8 Roller

Bir kullanıcı;

birden fazla role sahip olabilir.

Örneğin;

Resepsiyon

+

Muhasebe
14.9 Varsayılan Roller

Sistem;

aşağıdaki varsayılan rolleri sunmalıdır.

Business Owner
General Manager
Branch Manager
Reception
Trainer
Finance
Sales
Marketing
Support

İşletme yeni roller oluşturabilir.

14.10 Yetki Yapısı

Yetkiler;

ekran bazlı değil,

işlem bazlı tanımlanmalıdır.

Örneğin;

Üye

↓

Listele

↓

Oluştur

↓

Güncelle

↓

Sil

14.11 Permission Sistemi

Permission örnekleri;

members.read

members.create

members.update

members.delete

payments.read

payments.create

reports.export
14.12 Rol Grupları

Roller;

ortak izin kümeleri içerebilir.

Örneğin;

Muhasebe

↓

Finans Yetkileri

↓

Tahsilat

↓

Makbuz

↓

Borç

14.13 Geçici Yetki

Belirli süreli yetki verilebilir.

Örneğin;

3 Gün

↓

Muhasebe Yetkisi

Süre sonunda otomatik kaldırılır.

14.14 Kullanıcı Durumu

Desteklenen durumlar;

Aktif
Pasif
Askıya Alındı
Kilitlendi
Silinmiş (Soft Delete)
14.15 Şifre Politikası

İşletme aşağıdaki kuralları belirleyebilir.

Minimum uzunluk
Büyük harf
Küçük harf
Rakam
Özel karakter
Son kullanma süresi
14.16 Çok Faktörlü Kimlik Doğrulama (MFA)

Desteklenebilecek yöntemler;

Authenticator App
SMS OTP
E-posta OTP
Donanım Anahtarı (FIDO2/WebAuthn)

İşletme belirli roller için MFA'yı zorunlu kılabilir.

14.17 Oturum Yönetimi

Her oturum;

ayrı kayıt olarak tutulmalıdır.

Saklanacak bilgiler;

Başlangıç
Son Aktivite
Tarayıcı
İşletim Sistemi
IP
Yaklaşık Konum
14.18 Eşzamanlı Oturumlar

İşletme;

aynı kullanıcının kaç cihazdan giriş yapabileceğini belirleyebilir.

Örneğin;

Maksimum

2

Aktif Oturum
14.19 Güvenilir Cihazlar

Kullanıcı;

cihazını güvenilir olarak işaretleyebilir.

Yeni cihaz girişlerinde;

ek doğrulama istenebilir.

14.20 Hesap Kilitleme

Yanlış şifre denemeleri sonrası;

hesap geçici olarak kilitlenebilir.

Örneğin;

5 Başarısız Deneme

↓

30 Dakika Kilit
14.21 Business Rules
BR-145

Tüm kullanıcılar varsayılan olarak yetkisiz başlamalıdır.

BR-146

Her kayıt geçerli bir business_id ile ilişkilendirilmelidir.

BR-147

Roller yalnızca izin gruplarını temsil etmeli; iş kuralları roller içine gömülmemelidir.

BR-148

Geçici yetkiler süresi dolduğunda otomatik kaldırılmalıdır.

BR-149

MFA gereksinimi işletme ve rol bazında yapılandırılabilmelidir.

BR-150

Başarısız giriş denemeleri güvenlik kayıtlarına yazılmalı ve gerektiğinde hesap geçici olarak kilitlenmelidir.

Architecture Decision (ADR-020)

Kimlik doğrulama (Authentication) ile yetkilendirme (Authorization) tamamen ayrıştırılacaktır. Kimlik doğrulama güvenilir sağlayıcılar (örneğin Supabase Auth) tarafından yönetilirken, yetkilendirme Antrenova'nın kendi Role & Permission Engine bileşeni üzerinden gerçekleştirilecektir. Böylece farklı giriş yöntemleri eklenebilirken iş kuralları ve izin sistemi değişmeden korunacaktır.

✅ BÖLÜM 14 (1. KISIM) TAMAMLANDI
Sonraki bölüm

Bölüm 14.2 – Gelişmiş Güvenlik Mimarisi

Bu bölümde;

Row Level Security (RLS),
API güvenliği,
JWT ve erişim belirteçleri,
servis hesapları,
audit log sistemi,
güvenlik olay yönetimi,
IP kısıtlamaları,
cihaz güveni,
rate limiting,
veri maskeleme,
hassas veri yönetimi,
şifreleme (at-rest / in-transit),
OWASP Top 10 uyumluluğu,
SOC 2 ve ISO 27001 hazırlıkları

kurumsal SaaS güvenlik standartlarına uygun şekilde ayrıntılı olarak tanımlanacaktır. Bu bölüm, mevcut Supabase + Multi-Tenant mimarini profesyonel güvenlik seviyesine taşıyacaktır.