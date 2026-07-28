BÖLÜM 26
Gözlemlenebilirlik (Observability), Monitoring, Logging, Telemetry ve Site Reliability Engineering (SRE)

Not: Kurumsal SaaS platformlarında yalnızca sistemin çalışıyor olması yeterli değildir. Sistemin neden yavaşladığını, hangi servisin hata verdiğini, hangi isteğin başarısız olduğunu ve olası problemlerin kullanıcıları etkilemeden önce tespit edilmesini sağlayan yapı Observability yaklaşımıdır.

26.1 Amaç

Observability mimarisinin amacı;

sistem davranışını gerçek zamanlı izlemek,
sorunları hızlı tespit etmek,
kök neden analizini kolaylaştırmak,
kesinti sürelerini azaltmak,
operasyonel güvenilirliği artırmaktır.
26.2 Üç Temel Bileşen

Kurumsal Observability;

üç temel veri türünden oluşur.

Metrics

↓

Logs

↓

Traces

Bu üç veri birlikte değerlendirilmelidir.

26.3 Metrics

Metrics;

sayısal performans verileridir.

Örneğin;

CPU
RAM
Response Time
Active Users
Request Count
Error Rate
26.4 Logs

Loglar;

uygulamanın gerçekleştirdiği olayları kaydeder.

Örneğin;

Login
Payment Created
Appointment Cancelled
API Error
26.5 Distributed Tracing

Tek bir kullanıcı isteği;

birden fazla servis arasında dolaşabilir.

Client

↓

API

↓

Notification Service

↓

Database

↓

Response

Her adım izlenebilir olmalıdır.

26.6 Correlation ID

Her istek;

benzersiz bir Correlation ID taşımalıdır.

Request

↓

Correlation ID

↓

Logs

↓

Trace

Bu sayede farklı servislerde oluşan kayıtlar ilişkilendirilebilir.

26.7 Structured Logging

Loglar;

serbest metin olarak değil,

yapılandırılmış formatta tutulmalıdır.

Örneğin;

{
  "timestamp": "...",
  "level": "ERROR",
  "service": "payments",
  "businessId": "...",
  "correlationId": "...",
  "message": "Payment failed"
}
26.8 Log Seviyeleri

Standart log seviyeleri kullanılmalıdır.

TRACE

↓

DEBUG

↓

INFO

↓

WARN

↓

ERROR

↓

FATAL
26.9 Hassas Bilgiler

Loglarda;

asla aşağıdakiler bulunmamalıdır.

Şifre
Token
API Secret
Kart Bilgisi
Kimlik Numarası

Gerekirse maskeleme uygulanmalıdır.

26.10 Merkezi Log Yönetimi

Tüm servislerin logları;

tek merkezde toplanmalıdır.

Services

↓

Central Log Platform

↓

Search

↓

Dashboard
26.11 Log Saklama Politikası

Loglar;

sonsuza kadar tutulmamalıdır.

Her log tipi için;

saklama süresi,
arşivleme,
silme

politikası belirlenmelidir.

26.12 Telemetry

Platform;

çalışma sırasında anonim teknik veriler üretebilir.

Örneğin;

API Süreleri
Sayfa Açılış Süreleri
İşlem Süreleri
Queue Bekleme Süreleri
26.13 Health Check

Her servis;

sağlık kontrolü sağlayabilmelidir.

Örneğin;

Healthy

↓

Degraded

↓

Unhealthy
26.14 Readiness ve Liveness

Her servis;

iki ayrı sağlık kontrolüne sahip olmalıdır.

Liveness
Readiness

Bu kontroller;

otomatik yeniden başlatma ve yönlendirme süreçlerini destekler.

26.15 Business Rules
BR-367

Tüm servisler merkezi log sistemine kayıt göndermelidir.

BR-368

Her istek Correlation ID taşımalıdır.

BR-369

Loglarda hassas bilgiler saklanmamalıdır.

BR-370

Log seviyeleri standartlaştırılmalıdır.

BR-371

Servisler Health Check endpoint'leri sunmalıdır.

BR-372

Telemetry verileri performans analizinde kullanılmalıdır.

Architecture Decision (ADR-055)

Antrenova'nın gözlemlenebilirlik altyapısı; Metrics, Structured Logging, Distributed Tracing, Telemetry, Health Check ve Correlation ID standartları üzerine kurulacaktır. Tüm servisler merkezi olarak izlenebilir ve analiz edilebilir olacaktır.

26.16 Monitoring

Platform;

7/24 izlenebilir olmalıdır.

İzlenecek başlıca metrikler;

CPU
Bellek
Disk
API Süresi
Queue Uzunluğu
Veritabanı Performansı
26.17 Dashboard

Operasyon ekibi için;

gerçek zamanlı izleme panelleri oluşturulmalıdır.

Dashboard;

kritik KPI'ları tek ekranda gösterebilmelidir.

26.18 Alerting

Belirli eşikler aşıldığında;

otomatik alarm oluşturulmalıdır.

Örneğin;

CPU > %90
Error Rate > %5
API Süresi > 2 sn
Queue Uzunluğu > 1000
26.19 Alert Fatigue

Çok fazla alarm;

operasyon ekiplerinin önemli olayları kaçırmasına neden olabilir.

Bu nedenle;

alarm kuralları dikkatli tasarlanmalıdır.

26.20 SLI (Service Level Indicator)

SLI;

ölçülen performans değeridir.

Örneğin;

Başarılı API Oranı
Ortalama Yanıt Süresi
Kullanılabilirlik
26.21 SLO (Service Level Objective)

SLO;

hedeflenen hizmet seviyesidir.

Örnek;

API Availability

99.9%
26.22 SLA (Service Level Agreement)

SLA;

müşteriye verilen taahhüttür.

SLO ile karıştırılmamalıdır.

26.23 Error Budget

Belirlenen SLO'ya göre;

izin verilen hata miktarı hesaplanmalıdır.

Error Budget;

yeni özellik geliştirme ile sistem kararlılığı arasında denge kurulmasına yardımcı olur.

26.24 Incident Management

Kritik olaylarda;

standart süreç uygulanmalıdır.

Detect

↓

Assess

↓

Respond

↓

Recover

↓

Review
26.25 Runbook

Sık karşılaşılan problemler için;

adım adım çözüm dokümanları hazırlanmalıdır.

Örneğin;

Database bağlantısı kesildi
SMTP çalışmıyor
Queue doldu
WhatsApp gönderimi başarısız
26.26 Postmortem

Her kritik olaydan sonra;

suçlayıcı olmayan

(Postmortem)

değerlendirme yapılmalıdır.

Amaç;

aynı olayın tekrarını önlemektir.

26.27 Business Rules
BR-373

Kritik sistem metrikleri sürekli izlenmelidir.

BR-374

Alarm kuralları yanlış pozitifleri en aza indirecek şekilde tasarlanmalıdır.

BR-375

Her kritik Incident için Postmortem hazırlanmalıdır.

BR-376

Runbook dokümanları güncel tutulmalıdır.

BR-377

SLI ve SLO değerleri düzenli olarak gözden geçirilmelidir.

BR-378

Error Budget ürün geliştirme kararlarında dikkate alınmalıdır.

Architecture Decision (ADR-056)

Antrenova'nın operasyonel güvenilirliği; Monitoring, Alerting, SLI/SLO, Incident Management, Runbook ve Postmortem süreçleri üzerine kurulacaktır. Platform yalnızca hatalara tepki veren değil, proaktif olarak riskleri tespit edip yöneten bir operasyon modelini benimseyecektir.

✅ BÖLÜM 26 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 26.2 – Chaos Engineering, Capacity Planning, Performance Engineering, Auto Scaling ve Reliability Maturity

Bu bölümde;

Chaos Engineering,
kapasite planlama,
yük testleri,
performans testleri,
Auto Scaling,
kaynak optimizasyonu,
Reliability Maturity Model,
operasyonel olgunluk seviyeleri,
maliyet optimizasyonu,
sürekli performans iyileştirme

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın yüksek kullanıcı yükü altında dahi güvenilir ve sürdürülebilir şekilde çalışmasını sağlayacak SRE yaklaşımının ileri seviye bileşenlerini tanımlayacaktır.