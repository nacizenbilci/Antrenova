BÖLÜM 21 (DEVAM)
Domain Event Bus, Modüler Monolit Kuralları, Event-Driven Mimari ve Mikro Servislere Geçiş

Not: Antrenova ilk aşamada modüler monolit olarak geliştirilecek olsa da, tüm mimari gelecekte servislerin birbirinden ayrılabileceği şekilde tasarlanacaktır. Bu nedenle modüller bugünden itibaren Event-Driven prensiplerini desteklemelidir.

21.32 Event-Driven Yaklaşımı

Bir Domain;

başka Domain'i doğrudan çağırmamalıdır.

Bunun yerine;

olay (Event) üretmelidir.

Package Purchased

↓

Event

↓

Notification

↓

Reports

↓

AI

↓

CRM
21.33 Event Bus

Tüm Domain Event'leri;

merkezi Event Bus üzerinden yayınlanmalıdır.

Domain

↓

Event Bus

↓

Subscribers

Event Bus;

Publisher ile Subscriber arasında gevşek bağlılık sağlar.

21.34 Publisher

Event'i oluşturan taraf;

Publisher olarak adlandırılır.

Örneğin;

Payment Module

↓

PaymentReceived Event

Publisher;

event'i kimin işleyeceğini bilmemelidir.

21.35 Subscriber

Event'i dinleyen modüller;

Subscriber olur.

Örneğin;

PaymentReceived

↓

Receipt

↓

Notifications

↓

Finance Reports

↓

AI Analytics

İsteyen her modül aynı olayı dinleyebilir.

21.36 Event Sözleşmesi (Contract)

Her Event;

değiştirilemez bir sözleşmeye sahip olmalıdır.

Örneğin;

{
  "eventId": "...",
  "eventType": "PaymentReceived",
  "occurredAt": "...",
  "businessId": "...",
  "memberId": "...",
  "paymentId": "..."
}

Event yapısı geriye dönük uyumluluğu koruyacak şekilde sürümlendirilmelidir.

21.37 Event Versioning

Event içerikleri zamanla değişebilir.

Bu nedenle;

Event Version kullanılmalıdır.

Örneğin;

MemberRegistered v1

↓

MemberRegistered v2

Eski Subscriber'lar çalışmaya devam edebilmelidir.

21.38 Integration Event

Domain Event;

iç kullanım içindir.

Harici sistemlere gönderilecek olaylar;

Integration Event olarak dönüştürülmelidir.

Domain Event

↓

Mapper

↓

Integration Event
21.39 Event Store

İstenildiğinde;

yayınlanan Event'ler saklanabilir.

Amaç;

denetim,
geçmiş analiz,
hata inceleme,
yeniden oynatma (Replay)

işlemlerini desteklemektir.

21.40 Replay

Bazı durumlarda;

eski Event'ler tekrar işlenebilir.

Örneğin;

Notification Failed

↓

Replay

↓

Notification Success

Replay işlemleri kontrollü şekilde yapılmalıdır.

21.41 Outbox Pattern

Veritabanı işlemi ile Event yayını;

tek mantıksal işlem olarak ele alınmalıdır.

Transaction

↓

Database

↓

Outbox Table

↓

Publisher

Bu yaklaşım;

veri ile Event'in tutarsızlaşmasını önlemeye yardımcı olur.

21.42 Inbox Pattern

Bir Event;

aynı Subscriber tarafından birden fazla kez işlenmemelidir.

Inbox mekanizması;

işlenen Event kayıtlarını tutmalıdır.

21.43 Idempotency

Bir Event tekrar gelirse;

aynı sonucu üretmelidir.

Örneğin;

PaymentReceived

↓

Run

↓

Run Again

↓

Same Result
21.44 Eventual Consistency

Tüm modüller;

aynı anda güncellenmek zorunda değildir.

Payment

↓

Event

↓

Notification

↓

Report

↓

CRM

Kısa süreli gecikmeler kabul edilebilir.

21.45 Transaction Boundary

Transaction;

tek Aggregate içerisinde kalmalıdır.

Farklı Aggregate'ler;

Event ile haberleşmelidir.

21.46 Saga Pattern

Uzun süren iş akışları;

Saga mantığı ile yönetilebilir.

Örneğin;

Package Purchase

↓

Payment

↓

Appointment

↓

Notification

↓

AI Analysis

Bir adım başarısız olursa;

telafi (Compensation) işlemleri uygulanabilir.

21.47 Compensation

Saga başarısız olursa;

geri alma işlemleri tanımlanmalıdır.

Örneğin;

Payment Failed

↓

Cancel Package

↓

Refund

↓

Notification
21.48 Business Rules
BR-265

Domain'ler doğrudan birbirlerinin iş kurallarını çağırmamalıdır.

BR-266

Domain Event'leri Event Bus üzerinden yayınlanmalıdır.

BR-267

Event sözleşmeleri sürümlendirilebilir olmalıdır.

BR-268

Outbox Pattern kritik işlemlerde tercih edilmelidir.

BR-269

Subscriber'lar aynı Event'i tekrar işlediklerinde tutarlı sonuç üretmelidir.

BR-270

Transaction sınırları tek Aggregate içerisinde tutulmalıdır.

Architecture Decision (ADR-038)

Antrenova, modüller arası iletişim için Event Bus yaklaşımını benimseyecektir. İlk sürümde Event Bus uygulama içerisinde çalışacak, ilerleyen aşamalarda aynı sözleşmeler korunarak harici mesajlaşma altyapılarına geçiş yapılabilecektir.

21.49 Modüler Monolit Kuralları

İlk sürüm;

tek uygulama olacaktır.

Ancak;

her modül bağımsız servis gibi davranmalıdır.

Örneğin;

Members
Packages
Payments
Notifications
CRM
AI

birbirlerinin iç katmanlarına erişmemelidir.

21.50 Servis Sınırlarının Belirlenmesi

Bir modül;

aşağıdaki şartlar oluştuğunda ayrılabilir.

Bağımsız ölçeklenme ihtiyacı
Ayrı ekip tarafından geliştirilmesi
Farklı performans gereksinimi
Yoğun işlem yükü
Ayrı dağıtım ihtiyacı
21.51 API First Yaklaşımı

Her modül;

ileride servis olabilecek şekilde tasarlanmalıdır.

İç kullanım olsa bile;

net servis sözleşmeleri bulunmalıdır.

21.52 Shared Database Kaçınılmalıdır

Gelecekte mikro servislere geçildiğinde;

aynı tabloyu kullanan servisler olmamalıdır.

Her servis;

kendi veri sahipliğine sahip olmalıdır.

21.53 Mikro Servis Adayları

İlk ayrılabilecek modüller;

Notification Service
AI Service
Reporting Service
File Service
Search Service

olarak öngörülmektedir.

21.54 Senkron ve Asenkron İletişim

Gerçek zamanlı işlemler;

senkron olabilir.

Arka plan işlemleri ise;

asenkron yürütülmelidir.

21.55 Servis Keşfi (Service Discovery) Hazırlığı

İlk sürümde gerekli olmayabilir.

Ancak mimari;

gelecekte servis keşif mekanizmalarını destekleyebilecek şekilde tasarlanmalıdır.

21.56 Business Rules
BR-271

Modüler monolit yapısında modüller birbirlerinin iç katmanlarına erişmemelidir.

BR-272

Yeni modüller gelecekte servisleşmeye uygun tasarlanmalıdır.

BR-273

Her servis kendi verisinin sahibi olmalıdır.

BR-274

Yoğun işlem yapan modüller bağımsız ölçeklenebilir olmalıdır.

BR-275

Asenkron işlemler kullanıcı deneyimini olumsuz etkilemeyecek şekilde tasarlanmalıdır.

BR-276

Servisleşme kararları teknik moda göre değil, iş gereksinimlerine göre verilmelidir.

Architecture Decision (ADR-039)

Antrenova'nın ilk mimarisi Modüler Monolit olacaktır. Ancak tüm modüller; net sınırlar, Event tabanlı iletişim ve bağımsız veri sahipliği prensipleriyle geliştirilecek, böylece gelecekte mikro servis mimarisine minimum yeniden yazım maliyetiyle geçiş yapılabilecektir.

✅ BÖLÜM 21 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın;

Domain Driven Design (DDD),
Bounded Context yapısı,
Aggregate kuralları,
Domain Event mimarisi,
Event Bus,
Outbox / Inbox Pattern,
Saga Pattern,
Eventual Consistency,
Modüler Monolit prensipleri,
Mikro servislere geçiş stratejisi

kurumsal seviyede tanımlanmıştır.