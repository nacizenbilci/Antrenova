BÖLÜM 21
Domain Driven Design (DDD), Bounded Contexts ve Kurumsal Alan Modeli

Not: Antrenova büyüdükçe yalnızca dosya sayısı artmayacak; iş kuralları, ekip sayısı, entegrasyonlar ve modüller de büyüyecektir. Bu nedenle mimari, yalnızca teknik katmanlara değil, gerçek iş alanlarına (Business Domain) göre organize edilmelidir.

21.1 Amaç

Domain mimarisinin amacı;

iş kurallarını merkezileştirmek,
modülleri birbirinden ayırmak,
bağımlılıkları azaltmak,
ölçeklenebilir geliştirme sağlamak,
ekiplerin bağımsız çalışmasını kolaylaştırmaktır.
21.2 Domain Nedir?

Domain;

yazılımın çözdüğü gerçek iş problemidir.

Antrenova'da Domain;

Spor Tesisi Yönetimi

olarak tanımlanır.

Tüm teknik kararlar;

iş kurallarını desteklemek amacıyla alınmalıdır.

21.3 Domain Kategorileri

Sistem;

üç ana Domain seviyesine ayrılır.

Core Domain

↓

Supporting Domain

↓

Generic Domain
21.4 Core Domain

Core Domain;

Antrenova'nın rekabet avantajını oluşturan bölümdür.

Örneğin;

Üye Yönetimi
Paket Mantığı
Seans Kuralları
AI Destekli Analiz
Bildirim Motoru
Randevu Motoru
21.5 Supporting Domain

Destekleyici Domain'ler;

iş süreçlerini tamamlar.

Örneğin;

Finans
Kullanıcı Yönetimi
Formlar
Raporlama
CRM
Görev Yönetimi
21.6 Generic Domain

Her projede bulunabilecek;

genel altyapılardır.

Örneğin;

Authentication
Logging
Storage
Email
Cache
Monitoring
21.7 Bounded Context

Her Domain;

bağımsız bir Context içerisinde yaşamalıdır.

Örneğin;

Members

Packages

Appointments

Finance

Notifications

CRM

AI

Bir Context;

başka Context'in iç verisini doğrudan kullanmamalıdır.

21.8 Context Haritası

Antrenova'nın ilk Context haritası;

Members

↓

Packages

↓

Appointments

↓

Attendance

↓

Payments

↓

Reports

↓

AI

Her ok;

kontrollü bağımlılığı temsil eder.

21.9 Context Bağımsızlığı

Hiçbir Context;

başka bir Context'in tablo yapısına bağımlı olmamalıdır.

İletişim;

servisler veya Domain Event'ler üzerinden kurulmalıdır.

21.10 Ubiquitous Language

Tüm ekip;

aynı dili konuşmalıdır.

Örneğin;

Doğru;

Member

Yanlış;

User

Client

Customer

Person

Aynı kavram için;

tek isim kullanılmalıdır.

21.11 Entity

Kimliği olan;

yaşam döngüsüne sahip nesnelerdir.

Örneğin;

Member
Package
Appointment
Trainer
Business
21.12 Value Object

Kimliği olmayan;

değer taşıyan nesnelerdir.

Örneğin;

Money
Address
Phone
Email
DateRange
21.13 Aggregate

Bir iş bütününü yöneten;

Entity grubudur.

Örneğin;

Member

↓

Packages

↓

Appointments

↓

Attendance

Aggregate dışından;

iç nesnelere doğrudan erişim olmamalıdır.

21.14 Aggregate Root

Aggregate;

tek giriş noktasına sahip olmalıdır.

Örneğin;

Member

Member Aggregate Root olur.

Appointments;

Member üzerinden yönetilebilir.

21.15 Invariant Kuralları

Aggregate;

iş kurallarını korumalıdır.

Örneğin;

Negatif seans olamaz.
Aynı saate iki randevu açılamaz.
Pasif üyeye yeni paket atanamaz.

Bu kurallar;

UI tarafından değil,

Domain tarafından korunmalıdır.

21.16 Domain Service

Bir işlem;

tek Entity'ye ait değilse,

Domain Service kullanılmalıdır.

Örneğin;

AppointmentScheduler

↓

PackageValidator

↓

PaymentCalculator

↓

NotificationPlanner
21.17 Factory

Karmaşık nesneler;

Factory üzerinden oluşturulmalıdır.

Örneğin;

PackageFactory

↓

Default Rules

↓

Package
21.18 Repository

Repository;

yalnızca veri erişim katmanıdır.

İş kuralları;

Repository içerisinde bulunmamalıdır.

21.19 Specification Pattern

Karmaşık filtreler;

Specification olarak tanımlanabilir.

Örneğin;

ActiveMembers

↓

DebtMembers

↓

ExpiredPackages
21.20 Domain Events

İş kuralları sonucunda;

Domain Event oluşmalıdır.

Örneğin;

PackagePurchased

↓

AppointmentCreated

↓

PaymentReceived

↓

MemberRegistered
21.21 Business Rules
BR-253

Her iş kuralı ait olduğu Domain içerisinde bulunmalıdır.

BR-254

UI katmanı hiçbir zaman iş kurallarının tek uygulayıcısı olmamalıdır.

BR-255

Her Bounded Context bağımsız geliştirilebilir olmalıdır.

BR-256

Aggregate dışından iç Entity'lere doğrudan erişim yapılmamalıdır.

BR-257

Repository'ler yalnızca veri erişiminden sorumlu olmalıdır.

BR-258

Tüm ekip Ubiquitous Language sözlüğünü kullanmalıdır.

Architecture Decision (ADR-036)

Antrenova'nın kaynak kodu, Domain Driven Design (DDD) prensiplerine göre organize edilecektir. Her iş alanı kendi Bounded Context'i içerisinde geliştirilecek, iş kuralları Domain katmanında korunacak ve Context'ler yalnızca tanımlı sözleşmeler (contracts), servisler veya Domain Event'ler aracılığıyla iletişim kuracaktır.

21.22 Domain Event Yaşam Döngüsü

Bir iş olayı gerçekleştiğinde;

önce Domain Event oluşmalıdır.

Business Action

↓

Domain Event

↓

Application Layer

↓

Notification

↓

Reporting

↓

Audit Log

Domain Event;

yan etkileri tetiklemek için kullanılmalıdır.

21.23 Application Service

Application Service;

Domain nesnelerini orkestre eder.

Sorumlulukları;

Transaction yönetimi
Repository çağrıları
Yetki kontrolü
Domain Event yayınlama

İş kurallarını kendisi üretmemelidir.

21.24 Anti-Corruption Layer (ACL)

Harici sistemlerle entegrasyonlarda;

doğrudan veri modeli kullanılmamalıdır.

External API

↓

Anti-Corruption Layer

↓

Internal Domain

Bu katman;

harici değişikliklerin Domain'i etkilemesini önler.

21.25 Context Mapping

Context'ler arasındaki ilişki açık şekilde tanımlanmalıdır.

Örneğin;

Members

↓

Packages

↓

Appointments

↓

Payments

↓

Reports

Her ilişkinin;

veri sahibi,
okuma hakkı,
yazma hakkı

belirlenmelidir.

21.26 Shared Kernel

Gerçekten ortak olan modeller;

Shared Kernel içerisinde tutulabilir.

Örneğin;

Money
Address
Phone
Country
Currency

Ancak Shared Kernel mümkün olduğunca küçük tutulmalıdır.

21.27 Domain Policy

Sık değişen iş kuralları;

Policy nesneleri ile temsil edilebilir.

Örneğin;

İptal Politikası
Geç Kalma Politikası
Seans Düşme Politikası
Ücretlendirme Politikası
21.28 CQRS Hazırlığı

İlk sürümde klasik CRUD kullanılabilir.

Ancak mimari;

ileride Command ve Query ayrımını desteklemelidir.

Commands

↓

Write Model

----------------

Queries

↓

Read Model
21.29 Domain Modül Organizasyonu

Her Domain benzer klasör yapısını kullanmalıdır.

members/

domain/

application/

infrastructure/

presentation/

contracts/

events/

tests/

Bu yapı;

tüm modüllerde standart olmalıdır.

21.30 Domain Bağımlılık Kuralları

Bağımlılıklar tek yönlü olmalıdır.

Presentation

↓

Application

↓

Domain

↓

Infrastructure

Domain;

hiçbir üst katmanı bilmemelidir.

21.31 Business Rules
BR-259

Application Service yalnızca orkestrasyon görevini üstlenmelidir.

BR-260

Harici sistem entegrasyonları Anti-Corruption Layer üzerinden yapılmalıdır.

BR-261

Context'ler arasında doğrudan tablo paylaşımı yapılmamalıdır.

BR-262

Shared Kernel yalnızca gerçekten ortak kavramları içermelidir.

BR-263

Yeni Domain modülleri standart klasör yapısını kullanmalıdır.

BR-264

Domain katmanı Presentation veya Infrastructure katmanlarına bağımlı olmamalıdır.

Architecture Decision (ADR-037)

Antrenova'nın kod tabanı; Presentation → Application → Domain → Infrastructure bağımlılık yönünü koruyacaktır. Domain modeli platformun en kararlı katmanı olacak; Application katmanı kullanım senaryolarını yönetecek, Infrastructure katmanı ise teknik ayrıntıları soyutlayacaktır.

✅ BÖLÜM 21 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 21.2 – Domain Event Bus, Modüler Monolit Kuralları, Event-Driven Mimari ve Gelecekte Mikro Servislere Geçiş

Bu bölümde;

Event Bus,
Integration Event,
Event Store,
Outbox Pattern,
Saga Pattern,
eventual consistency,
transaction sınırları,
modüler monolit kuralları,
servis sınırlarının belirlenmesi,
mikro servislere geçiş stratejisi

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın gelecekte mimarisini değiştirmeden büyüyebilmesini sağlayacak en kritik teknik tasarım kararlarını içerecektir.