BÖLÜM 22
Kurumsal Güvenlik Mimarisi (Enterprise Security Architecture)

Not: Güvenlik; yalnızca giriş ekranında parola istemek değildir. Antrenova'nın güvenlik mimarisi; kullanıcı, cihaz, ağ, uygulama, veritabanı ve altyapının tamamını kapsayan çok katmanlı (Defense in Depth) bir yaklaşım üzerine kurulacaktır.

22.1 Amaç

Kurumsal güvenlik mimarisinin amacı;

kullanıcı verilerini korumak,
sistem bütünlüğünü sağlamak,
yetkisiz erişimi engellemek,
saldırıları erken tespit etmek,
yasal yükümlülüklere uyum sağlamaktır.
22.2 Security by Design

Güvenlik;

geliştirme tamamlandıktan sonra eklenmez.

Her yeni özellik;

tasarım aşamasından itibaren güvenlik gereksinimlerini karşılamalıdır.

22.3 Zero Trust Mimarisi

Hiçbir kullanıcı,

cihaz,

servis

veya ağ;

varsayılan olarak güvenilir kabul edilmemelidir.

Verify

↓

Authenticate

↓

Authorize

↓

Audit
22.4 Defense in Depth

Tek bir güvenlik katmanı yeterli değildir.

Koruma;

birden fazla katmandan oluşmalıdır.

Network

↓

Application

↓

API

↓

Database

↓

Storage

↓

Audit
22.5 En Az Yetki Prensibi (Least Privilege)

Her kullanıcı;

yalnızca ihtiyaç duyduğu yetkilere sahip olmalıdır.

Fazladan verilen her izin;

potansiyel güvenlik riskidir.

22.6 Varsayılan Red Politikası

Bir işlem için;

açık izin tanımlanmamışsa;

erişim reddedilmelidir.

Permission?

↓

No

↓

Access Denied
22.7 Güvenlik Katmanları

Koruma;

en az aşağıdaki katmanlarda uygulanmalıdır.

Kimlik Doğrulama
Yetkilendirme
API
Veritabanı
Ağ
Dosya Depolama
Audit
Monitoring
22.8 OWASP ASVS

Antrenova;

OWASP Application Security Verification Standard (ASVS) prensiplerini mümkün olduğunca takip etmelidir.

Özellikle;

Authentication
Session Management
Access Control
Cryptography
Validation

başlıkları düzenli olarak gözden geçirilmelidir.

22.9 OWASP Top 10

Geliştirme sürecinde;

yaygın güvenlik riskleri dikkate alınmalıdır.

Örneğin;

Injection
Broken Access Control
Cryptographic Failures
Security Misconfiguration
SSRF
22.10 Tehdit Modelleme

Yeni modüller geliştirilirken;

potansiyel tehditler analiz edilmelidir.

Sorulması gereken örnek sorular;

Kim saldırabilir?
Ne elde etmek isteyebilir?
En zayıf nokta neresi?
Etki seviyesi nedir?
22.11 Saldırı Yüzeyi Analizi

Her yeni özellik;

saldırı yüzeyini artırabilir.

Bu nedenle;

yeni endpoint,
yeni entegrasyon,
yeni dosya yükleme,
yeni servis

güvenlik açısından değerlendirilmelidir.

22.12 Güvenli Varsayılanlar

Yeni oluşturulan;

kullanıcılar,
roller,
API anahtarları,
ayarlar

en güvenli varsayılanlarla başlamalıdır.

22.13 Business Rules
BR-277

Hiçbir kullanıcı varsayılan olarak tam yetkili oluşturulmamalıdır.

BR-278

Yeni modüller geliştirilmeden önce temel tehdit analizi yapılmalıdır.

BR-279

Yeni API'ler OWASP güvenlik kontrollerine uygun olmalıdır.

BR-280

Varsayılan güvenlik ayarları kullanıcı lehine değil, sistem güvenliği lehine seçilmelidir.

BR-281

Güvenlik katmanları birbirini tamamlayacak şekilde tasarlanmalıdır.

BR-282

Yetkilendirme başarısız olduğunda sistem varsayılan olarak erişimi reddetmelidir.

Architecture Decision (ADR-040)

Antrenova'nın güvenlik yaklaşımı; Zero Trust, Defense in Depth, Least Privilege ve Security by Design prensipleri üzerine kurulacaktır. Güvenlik kontrolleri yalnızca giriş noktasında değil, uygulamanın tüm katmanlarında uygulanacaktır.

22.14 API Güvenliği

Her API isteği;

kimlik doğrulama ve yetkilendirme kontrollerinden geçmelidir.

API'ler;

istemciye gereğinden fazla veri döndürmemelidir.

22.15 Input Validation

Sisteme giren tüm veriler;

güvenilmeyen veri olarak değerlendirilmelidir.

Doğrulama;

tip,
uzunluk,
format,
izin verilen değerler

açısından yapılmalıdır.

22.16 Output Encoding

Kullanıcıdan gelen veriler;

ekrana yazdırılmadan önce uygun şekilde işlenmelidir.

Bu yaklaşım;

XSS riskini azaltmaya yardımcı olur.

22.17 SQL Injection Koruması

Tüm veritabanı işlemleri;

parametreli sorgular veya güvenli ORM katmanları üzerinden yürütülmelidir.

Ham SQL yalnızca gerçekten gerekli durumlarda ve dikkatli incelemeyle kullanılmalıdır.

22.18 Dosya Yükleme Güvenliği

Dosya yüklemelerinde;

dosya türü,
boyut,
içerik doğrulaması,
zararlı dosya kontrolleri

uygulanmalıdır.

Dosya adı güvenilir kabul edilmemelidir.

22.19 Rate Limiting

Yoğun istek gönderen istemciler;

kontrollü şekilde sınırlandırılmalıdır.

Örneğin;

Client

↓

API Gateway

↓

Rate Limit

↓

Application
22.20 Brute Force Koruması

Art arda başarısız giriş denemeleri;

tespit edilmelidir.

Gerekirse;

geçici bekleme,
CAPTCHA,
ek doğrulama

gibi mekanizmalar uygulanabilir.

22.21 Güvenlik Başlıkları (HTTP Security Headers)

Uygulama;

uygun HTTP güvenlik başlıklarını kullanmalıdır.

Örneğin;

Content Security Policy (CSP)
X-Content-Type-Options
Referrer-Policy
Permissions-Policy

Bu başlıklar uygulama gereksinimlerine göre yapılandırılmalıdır.

22.22 Business Rules
BR-283

Tüm istemci verileri doğrulanmadan işlenmemelidir.

BR-284

API uç noktaları uygun hız sınırlama (Rate Limiting) politikalarını desteklemelidir.

BR-285

Dosya yüklemeleri güvenlik kontrollerinden geçirilmelidir.

BR-286

Veritabanı sorgularında güvenli sorgulama yöntemleri kullanılmalıdır.

BR-287

Başarısız kimlik doğrulama girişimleri izlenmeli ve gerektiğinde sınırlandırılmalıdır.

BR-288

HTTP güvenlik başlıkları uygulama genelinde tutarlı şekilde uygulanmalıdır.

Architecture Decision (ADR-041)

API güvenliği; Authentication Middleware, Authorization Layer, Input Validation, Rate Limiter, Security Headers ve Secure Query prensipleriyle uygulanacaktır. Her yeni API bu standartlara uygun olarak geliştirilecektir.

✅ BÖLÜM 22 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 22.2 – Şifreleme, Anahtar Yönetimi, Secrets Yönetimi, Audit Log, KVKK/GDPR Uyumluluğu ve Güvenlik Operasyonları

Bu bölümde;

veri şifreleme (at-rest / in-transit),
anahtar yönetimi (Key Management),
Secret Management,
dijital imza,
denetim kayıtları (Audit Trail),
veri sınıflandırması,
kişisel veri yönetimi,
KVKK ve GDPR ilkeleri,
güvenlik olay yönetimi (SIEM),
olay müdahale süreçleri,
penetrasyon testleri,
güvenlik denetimleri

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın güvenlik mimarisini tamamlayarak kurumsal müşteriler ve yasal uyumluluk gereksinimleri için kapsamlı bir referans oluşturacaktır.