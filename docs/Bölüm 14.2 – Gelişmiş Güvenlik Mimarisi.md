BÖLÜM 14 (DEVAM)
Gelişmiş Güvenlik Mimarisi

Not: Bu bölüm, Antrenova'nın güvenlik altyapısını uluslararası SaaS standartlarına yaklaştırmayı hedefler. Buradaki kurallar yalnızca yazılım güvenliğini değil; veri gizliliğini, denetlenebilirliği ve ölçeklenebilirliği de kapsar.

14.22 Row Level Security (RLS)

Tüm tenant verileri;

veritabanı seviyesinde korunmalıdır.

İlk savunma katmanı;

uygulama kodu değildir.

İlk savunma katmanı;

Row Level Security'dir.

User

↓

JWT

↓

RLS Policy

↓

Database
14.23 Tenant İzolasyonu

Her sorgu;

otomatik olarak

business_id

filtrelemesini kullanmalıdır.

Hiçbir SQL sorgusu;

manuel tenant kontrolüne güvenmemelidir.

14.24 Branch Güvenliği

Şube bazlı erişim kullanan işletmelerde;

RLS;

branch_id

kontrolünü de yapmalıdır.

Örneğin;

Business

↓

Branch

↓

Permission

↓

Data
14.25 API Güvenliği

Her API;

aşağıdaki doğrulamaları yapmalıdır.

Authentication
Authorization
Business Validation
Input Validation
Rate Limit
Audit

Bir adım eksik olmamalıdır.

14.26 JWT Yönetimi

JWT;

yalnızca kimlik doğrulama amacıyla kullanılmalıdır.

İş kuralları;

JWT içine gömülmemelidir.

Token küçültülmeli,

gereksiz bilgi taşımamalıdır.

14.27 Refresh Token

Uzun süreli oturumlar;

Refresh Token ile yönetilmelidir.

Access Token;

kısa ömürlü olmalıdır.

14.28 Service Account

Bazı işlemler;

arka planda çalışacaktır.

Örneğin;

Bildirim Kuyruğu
AI Servisi
Rapor Motoru
Senkronizasyon

Bu servisler;

ayrı servis kimlikleri ile çalışmalıdır.

14.29 Internal API

Servisler arası iletişim;

Internal API üzerinden yapılmalıdır.

Kullanıcı tokenı;

arka plan servislerinde kullanılmamalıdır.

14.30 Audit Log

Audit sistemi;

Antrenova'nın en kritik modüllerinden biridir.

Aşağıdaki bilgiler saklanmalıdır.

Kullanıcı
Tarih
Saat
IP
Browser
Device
Business
Branch
İşlem
Eski Değer
Yeni Değer
14.31 Audit Seviyeleri

Audit kayıtları önem derecesine göre sınıflandırılabilir.

Info
Warning
Critical
Security
14.32 Güvenlik Olayları

Aşağıdaki olaylar;

Security Event oluşturmalıdır.

Başarısız giriş
Yetkisiz erişim
Permission Denied
JWT Hatası
SQL Injection Denemesi
Çok Fazla İstek
Şüpheli Login
14.33 IP Kısıtlaması

İşletme;

belirli IP adreslerine izin verebilir.

Örneğin;

Merkez Ofis

↓

Statik IP

↓

Admin Panel

14.34 Rate Limiting

API;

aşırı istekleri sınırlandırmalıdır.

Örneğin;

Dakikada

100

İstek

Limit aşılırsa;

geçici engelleme uygulanabilir.

14.35 Veri Maskeleme

Hassas bilgiler;

her kullanıcıya tam gösterilmemelidir.

Örneğin;

Telefon

0555 *** ** 22

TC Kimlik

123******10

Kart numarası

**** **** **** 4581

Maskeleme kuralları yetkiye bağlı olmalıdır.

14.36 Hassas Veri Yönetimi

Özel nitelikli veya hassas veriler (örneğin sağlıkla ilgili bilgiler), yalnızca görev gereği erişmesi gereken yetkili kullanıcılar tarafından görüntülenebilmelidir.

Bu veriler;

en az yetki ilkesi,
erişim kayıtları,
gerektiğinde ek doğrulama

ile korunmalıdır.

14.37 Veri Şifreleme

Şifreleme iki seviyede düşünülmelidir.

Veri aktarımı

↓

TLS

Veri depolama

↓

Depolama altyapısının sunduğu şifreleme ve gerektiğinde uygulama seviyesinde ek koruma

14.38 Secret Yönetimi

Hiçbir gizli anahtar;

kaynak kodunda tutulmamalıdır.

Örneğin;

API Key
SMTP Password
Meta Token
Service Key

ortam değişkenleri veya güvenli gizli bilgi yönetim sistemleri üzerinden yönetilmelidir.

14.39 Güvenlik Dashboard'u

Yönetici aşağıdaki bilgileri görebilmelidir.

Başarısız Girişler
Kilitlenen Hesaplar
Aktif Oturumlar
Kritik Audit Kayıtları
Son Güvenlik Olayları
Şüpheli IP'ler
14.40 Güvenlik Testleri

Her sürümde;

aşağıdaki kontroller yapılmalıdır.

Authentication Testi
Authorization Testi
Permission Testi
Tenant İzolasyonu
RLS Testleri
API Testleri

Güvenlik testleri mümkün olduğunca otomatikleştirilmelidir.

14.41 OWASP Yaklaşımı

Geliştirme sürecinde;

OWASP Top 10 riskleri dikkate alınmalıdır.

Örneğin;

Broken Access Control
Cryptographic Failures
Injection
Security Misconfiguration
Identification and Authentication Failures

Bu liste zaman içinde güncellenebileceği için referans alınmalı, belirli bir sürüme bağımlı kalınmamalıdır.

14.42 Güvenlik Günlüğü

Kritik güvenlik olayları;

ayrı log altyapısında tutulabilir.

Operasyon logları ile karıştırılmaz.

14.43 İş Sürekliliği

Güvenlik olaylarında;

sistem tamamen durmamalı,
mümkünse güvenli modda çalışmaya devam etmeli,
kritik servisler izlenmelidir.
14.44 Business Rules
BR-151

Tüm tenant erişimleri veritabanı seviyesinde doğrulanmalıdır.

BR-152

JWT yalnızca kimlik doğrulama amacıyla kullanılmalı; iş kuralları token içeriğine bağımlı olmamalıdır.

BR-153

Audit kayıtları kullanıcılar tarafından değiştirilemez veya silinemez.

BR-154

Hassas veriler yalnızca gerekli yetkilere sahip kullanıcılar tarafından görüntülenebilmelidir.

BR-155

Tüm API uç noktaları kimlik doğrulama, yetkilendirme ve giriş doğrulamasından geçmelidir (genel erişime açık olarak tasarlanan uç noktalar hariç).

BR-156

Rate limiting kuralları API türüne göre yapılandırılabilir olmalıdır.

BR-157

Gizli anahtarlar ve servis kimlik bilgileri kaynak kodunda tutulmamalıdır.

BR-158

Güvenlik olayları standart uygulama loglarından ayrıştırılarak izlenebilmelidir.

Architecture Decision (ADR-021)

Antrenova'nın güvenlik mimarisi Defense in Depth (Katmanlı Savunma) yaklaşımını benimseyecektir. Kimlik doğrulama, yetkilendirme, RLS, API doğrulamaları, audit kayıtları, şifreleme ve güvenlik izleme birbirini tamamlayan bağımsız katmanlar olarak tasarlanacaktır. Herhangi bir katmandaki zafiyetin tek başına tüm sistemi tehlikeye atmaması hedeflenmelidir.

✅ BÖLÜM 14 (2. KISIM) TAMAMLANDI

Bu bölümle birlikte Antrenova'nın güvenlik mimarisi;

Multi-Tenant izolasyonu,
Row Level Security,
JWT ve oturum yönetimi,
API güvenliği,
Audit Log,
Güvenlik olay yönetimi,
Veri maskeleme,
Gizli anahtar yönetimi,
Katmanlı savunma yaklaşımı

gibi kurumsal SaaS platformlarında beklenen temel güvenlik prensiplerini kapsayacak şekilde tanımlanmıştır.