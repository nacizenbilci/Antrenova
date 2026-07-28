BÖLÜM 18
Altyapı, Dağıtım (Deployment), DevOps ve Gözlemlenebilirlik (Observability)

Not: Güçlü bir yazılım yalnızca iyi koddan oluşmaz. Antrenova'nın altyapısı; güvenilir, otomatik dağıtılabilen, kolay izlenebilen, hızlı geri alınabilen ve yıllarca kesintisiz çalışabilecek kurumsal SaaS prensipleriyle tasarlanacaktır.

18.1 Amaç

DevOps mimarisinin amacı;

güvenilir dağıtım yapmak,
kesintileri azaltmak,
hızlı geri dönüş sağlamak,
sistemi sürekli izlemek,
ölçeklenebilir altyapı oluşturmaktır.
18.2 Ortamlar (Environments)

Sistem;

en az aşağıdaki ortamları desteklemelidir.

Development

↓

Testing

↓

Staging

↓

Production

Her ortam birbirinden tamamen ayrılmalıdır.

18.3 Environment Isolation

Hiçbir ortam;

başka bir ortamın verisini kullanmamalıdır.

Örneğin;

Production Database

↓

yalnızca

Production

tarafından kullanılabilir.

18.4 Konfigürasyon Yönetimi

Uygulama ayarları;

kod içerisine yazılmamalıdır.

Konfigürasyonlar;

Environment Variables
Secret Manager
Runtime Config

üzerinden yönetilmelidir.

18.5 Git Stratejisi

Kod yönetimi;

Git tabanlı olmalıdır.

Önerilen dallar;

main

develop

feature/*

hotfix/*

release/*

Branch isimlendirme standart hale getirilmelidir.

18.6 Pull Request Süreci

Kod;

doğrudan ana dala gönderilmemelidir.

Süreç;

Feature Branch

↓

Pull Request

↓

Code Review

↓

CI

↓

Merge
18.7 Code Review

Her önemli değişiklik;

en az bir göz tarafından incelenmelidir.

İnceleme kriterleri;

Kod Kalitesi
Güvenlik
Performans
Mimari Uyum
Testler
18.8 CI (Continuous Integration)

Her commit sonrasında;

otomatik kontroller çalışmalıdır.

Örneğin;

Type Check
Lint
Unit Test
Build
Security Scan

Başarısız işlem Production'a ilerlememelidir.

18.9 CD (Continuous Deployment)

Başarılı pipeline sonrasında;

uygulama otomatik dağıtılabilir.

Ancak;

kritik sürümlerde

manuel onay kullanılabilir.

18.10 Build Yönetimi

Her Build;

benzersiz kimliğe sahip olmalıdır.

Örneğin;

Version

Build Number

Commit SHA

Build Date
18.11 Artifact Yönetimi

Build çıktıları;

değiştirilemez (immutable) artifact olarak saklanmalıdır.

Aynı artifact;

farklı ortamlarda tekrar kullanılabilir.

18.12 Feature Flags

Yeni özellikler;

kod dağıtılmadan önce

kapalı olabilir.

Deploy

↓

Feature Flag

↓

Enable

Bu sayede;

risksiz geçiş yapılabilir.

18.13 Blue-Green Deployment

Kritik sistemlerde;

iki ortam kullanılabilir.

Blue

↓

Green

↓

Switch

Geçiş;

anlık yapılabilir.

18.14 Canary Deployment

Yeni sürüm;

önce küçük kullanıcı grubuna açılabilir.

Her şey yolundaysa;

tüm sisteme yayılır.

18.15 Rollback

Başarısız dağıtım sonrası;

önceki sürüme

hızlı dönüş yapılabilmelidir.

Rollback;

dakikalar içinde tamamlanmalıdır.

18.16 Business Rules
BR-209

Development, Staging ve Production ortamları tamamen izole olmalıdır.

BR-210

Kod değişiklikleri CI kontrollerinden geçmeden ana dala alınmamalıdır.

BR-211

Başarısız Build hiçbir şekilde Production ortamına dağıtılmamalıdır.

BR-212

Feature Flag sistemi yeni özellikleri kontrollü şekilde açabilmelidir.

BR-213

Rollback işlemleri otomatikleştirilebilir olmalı ve veri kaybına yol açmamalıdır.

BR-214

Her dağıtım benzersiz Build kimliğiyle izlenebilmelidir.

Architecture Decision (ADR-029)

Dağıtım mimarisi; Git Flow, CI/CD Pipeline, Immutable Build Artifacts, Feature Flag Manager ve Deployment Manager bileşenlerinden oluşacaktır. Kod, test ve dağıtım süreçleri mümkün olduğunca otomatikleştirilecek; manuel müdahaleler yalnızca kritik onay noktalarında kullanılacaktır.

18.17 Log Yönetimi

Tüm servisler;

merkezi log sistemine yazmalıdır.

Her log;

standart formatta olmalıdır.

18.18 Log Seviyeleri

Standart seviyeler;

Debug
Info
Warning
Error
Critical

Üretim ortamında Debug logları dikkatli kullanılmalıdır.

18.19 Structured Logging

Loglar;

serbest metin yerine

yapısal formatta tutulmalıdır.

Örneğin;

Timestamp

Service

Business

User

Request ID

Level

Message
18.20 Correlation ID

Her istek;

benzersiz bir Correlation ID taşımalıdır.

Request

↓

Correlation ID

↓

API

↓

Worker

↓

Database

Böylece tek bir işlemin uçtan uca takibi yapılabilir.

18.21 Monitoring

Sistem;

sürekli izlenmelidir.

Takip edilecek örnek metrikler;

CPU
Bellek
Disk
API Süresi
Queue Uzunluğu
Hata Oranı
18.22 Application Metrics

Uygulama seviyesinde;

Aktif Kullanıcı
API Başarı Oranı
Ortalama Yanıt Süresi
AI Kullanımı
Bildirim Başarı Oranı

gibi metrikler izlenebilir.

18.23 Distributed Tracing

Tek bir kullanıcı isteği;

birden fazla servisten geçebilir.

Tracing sistemi;

isteğin tüm yolculuğunu gösterebilmelidir.

18.24 Alarm Sistemi

Belirlenen eşikler aşılırsa;

otomatik alarm oluşturulabilir.

Örneğin;

CPU > %90
API Error > %5
Queue > 10.000
Disk Alanı < %15
18.25 Health Check

Her servis;

Health Endpoint sunmalıdır.

Örneğin;

Healthy

↓

Degraded

↓

Unhealthy

Yük dengeleyiciler bu bilgiyi kullanabilir.

18.26 Backup

Yedekleme politikası tanımlanmalıdır.

Örneğin;

Günlük
Haftalık
Aylık

Yedekler düzenli olarak doğrulanmalıdır.

18.27 Disaster Recovery

Felaket durumlarında;

Kurtarma Süresi (RTO)
Veri Kaybı Hedefi (RPO)

iş gereksinimlerine göre belirlenmelidir.

Felaket kurtarma planı düzenli olarak test edilmelidir.

18.28 High Availability

Tek sunucu arızası;

sistemi durdurmamalıdır.

Kritik servisler;

yüksek erişilebilirlik prensiplerine göre tasarlanmalıdır.

18.29 Horizontal Scaling

Artan yükte;

yeni uygulama örnekleri eklenebilmelidir.

Bu nedenle;

servisler mümkün olduğunca stateless tasarlanmalıdır.

18.30 Vertical Scaling

Gerekli durumlarda;

CPU

RAM

Disk

kaynakları artırılarak ölçeklenebilir.

18.31 Business Rules
BR-215

Tüm servisler merkezi log altyapısına standart formatta kayıt yazmalıdır.

BR-216

Her kullanıcı isteği Correlation ID ile izlenebilmelidir.

BR-217

Kritik sistem metrikleri gerçek zamanlı izlenmelidir.

BR-218

Backup işlemleri düzenli olarak doğrulanmalı ve geri yükleme testleri yapılmalıdır.

BR-219

Felaket kurtarma planı belirli aralıklarla test edilmelidir.

BR-220

Yeni servisler yatay ölçeklenebilir mimariye uygun geliştirilmelidir.

Architecture Decision (ADR-030)

Operasyonel mimari; Monitoring Platform, Logging Platform, Tracing System, Alert Manager, Backup Service ve Disaster Recovery Planı bileşenlerinden oluşacaktır. Tüm servisler gözlemlenebilir (observable) olacak, hata ayıklama süreçleri merkezi araçlar üzerinden yönetilecek ve platform yüksek erişilebilirlik prensipleriyle işletilecektir.

✅ BÖLÜM 18 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 18.2 – Ölçeklenebilir SaaS Altyapısı, Maliyet Optimizasyonu ve Küresel Dağıtım

Bu bölümde;

çok bölgeli (multi-region) mimari,
CDN stratejisi,
dosya depolama mimarisi,
cache katmanları,
Redis kullanımı,
job scheduling,
maliyet optimizasyonu,
FinOps yaklaşımı,
kapasite planlaması,
tenant bazlı kaynak yönetimi,
otomatik ölçeklendirme,
küresel dağıtım (global deployment),
gelecekte Kubernetes ve mikro servis dönüşüm stratejisi

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın on binlerce işletmeye ve milyonlarca son kullanıcıya hizmet verebilecek uzun vadeli SaaS altyapısının temelini oluşturacaktır.