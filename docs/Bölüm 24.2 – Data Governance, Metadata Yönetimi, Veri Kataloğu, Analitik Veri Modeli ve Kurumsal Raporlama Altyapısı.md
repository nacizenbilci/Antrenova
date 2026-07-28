BÖLÜM 24 (DEVAM)
Data Governance, Metadata Yönetimi, Veri Kataloğu, Analitik Veri Modeli ve Kurumsal Raporlama Altyapısı

Not: Veri yönetişimi (Data Governance), yalnızca BT ekibinin sorumluluğu değildir. Verinin doğru, güvenilir, erişilebilir ve sürdürülebilir şekilde yönetilmesini sağlayan kurumsal yönetim modelidir.

24.23 Data Governance

Veri;

kurumsal bir varlık olarak yönetilmelidir.

Data Governance;

politika,
standart,
süreç,
rol,
sorumluluk

tanımlarını kapsar.

24.24 Veri Sahibi (Data Owner)

Her veri kümesinin;

iş tarafından belirlenmiş bir sahibi olmalıdır.

Örneğin;

Payments

↓

Finance Domain Owner

Data Owner;

verinin doğruluğundan sorumludur.

24.25 Data Steward

Data Steward;

günlük veri kalitesini takip eder.

Görevleri;

veri doğruluğu
eksik kayıtlar
standartlara uyum
kalite raporları
24.26 Data Custodian

Teknik ekip;

verinin teknik güvenliğinden sorumludur.

Görevleri;

Backup
Encryption
Storage
Security
Availability
24.27 Veri Kataloğu

Kurumdaki tüm veri kümeleri;

tek katalogda bulunmalıdır.

Örneğin;

Members

↓

Description

↓

Owner

↓

Fields

↓

Business Rules
24.28 Metadata Yönetimi

Metadata;

manuel tutulmamalıdır.

Mümkün olduğunca;

otomatik üretilmeli

ve güncel tutulmalıdır.

24.29 İş Metadata'sı

Teknik metadata yeterli değildir.

İş anlamı da tanımlanmalıdır.

Örneğin;

remaining_sessions

↓

Üyenin kullanabileceği kalan seans sayısı
24.30 Teknik Metadata

Her veri için;

teknik bilgiler tutulmalıdır.

Örneğin;

Veri Tipi
Nullable
Index
Constraint
Default Value
24.31 Metadata Versiyonlama

Metadata değişimleri;

izlenebilir olmalıdır.

Örneğin;

v1

↓

v2

↓

v3

Her değişiklik;

Audit sistemine kaydedilmelidir.

24.32 Veri Yaşam Döngüsü

Veri;

oluşturulduğu andan itibaren yönetilmelidir.

Create

↓

Use

↓

Archive

↓

Delete

Her veri aynı yaşam süresine sahip olmayabilir.

24.33 Archive Politikası

Eski veriler;

aktif sistemden ayrılabilir.

Ancak;

raporlama ihtiyaçları dikkate alınmalıdır.

24.34 Business Rules
BR-331

Her veri kümesinin tanımlı bir Data Owner'ı olmalıdır.

BR-332

Metadata sürekli güncel tutulmalıdır.

BR-333

Veri katalogları geliştiriciler tarafından erişilebilir olmalıdır.

BR-334

Teknik ve iş metadata'sı birlikte yönetilmelidir.

BR-335

Arşivleme politikaları veri tipine göre tanımlanmalıdır.

BR-336

Metadata değişiklikleri sürümlendirilmelidir.

Architecture Decision (ADR-049)

Antrenova'nın veri yönetişimi; Data Catalog, Metadata Repository, Data Owner, Data Steward ve Lifecycle Management bileşenlerinden oluşacaktır. Her veri kümesi teknik ve iş açısından tanımlanmış olacak, veri kalitesi yaşam döngüsü boyunca yönetilecektir.

24.35 OLTP ve OLAP Ayrımı

Operasyonel sistem;

raporlama sistemi ile aynı amaç için kullanılmamalıdır.

OLTP

↓

Operational Database

-----------------------

OLAP

↓

Analytics Database

Bu ayrım;

performansı artırır.

24.36 Veri Ambarı (Data Warehouse)

Uzun vadede;

raporlama için ayrı veri ambarı kullanılabilir.

Kaynaklar;

Payments
Members
Appointments
Attendance
CRM
AI

verileri belirli aralıklarla aktarılabilir.

24.37 ETL / ELT Süreçleri

Operasyonel veriler;

analitik ortama taşınırken;

doğrulama,
temizleme,
dönüştürme

işlemlerinden geçirilmelidir.

24.38 Boyutsal Modelleme

Kurumsal raporlama;

boyutsal modelleme prensiplerini destekleyebilir.

Örneğin;

Fact Tabloları

FactPayments
FactAttendance
FactAppointments

Dimension Tabloları

DimDate
DimMember
DimTrainer
DimBusiness
DimBranch
24.39 BI Katmanı

Business Intelligence;

operasyonel veriden bağımsız çalışmalıdır.

Dashboard'lar;

analitik katmandan beslenebilir.

24.40 Self-Service Analytics

Yetkili kullanıcılar;

teknik ekipten bağımsız olarak

rapor oluşturabilmelidir.

Filtreleme,

gruplama,

karşılaştırma

gibi işlemler desteklenmelidir.

24.41 KPI Katmanı

Kurumsal KPI'lar;

tek merkezden hesaplanmalıdır.

Örneğin;

Aktif Üye
Churn Rate
Ortalama Gelir
Paket Yenileme Oranı
Eğitmen Doluluk Oranı

Aynı KPI farklı ekranlarda farklı hesaplanmamalıdır.

24.42 AI Veri Besleme Katmanı

AI modelleri;

ham veriden değil,

temizlenmiş ve doğrulanmış veri katmanından beslenmelidir.

Bu;

AI çıktılarının doğruluğunu artırır.

24.43 Data Quality Dashboard

Veri kalitesi;

ölçülmelidir.

Örneğin;

Eksik Veri %
Duplicate Kayıt
Geçersiz Telefon
Eksik E-posta
Hatalı Tarih
24.44 Business Rules
BR-337

Operasyonel ve analitik veri katmanları gerektiğinde ayrıştırılabilmelidir.

BR-338

Kurumsal KPI'lar merkezi olarak hesaplanmalıdır.

BR-339

ETL/ELT süreçleri veri doğrulama adımlarını içermelidir.

BR-340

AI sistemleri doğrulanmış veri katmanını kullanmalıdır.

BR-341

Self-Service raporlama yetkilendirme kurallarına tabi olmalıdır.

BR-342

Veri kalitesi metrikleri düzenli olarak izlenmeli ve raporlanmalıdır.

Architecture Decision (ADR-050)

Antrenova'nın analitik veri mimarisi; Operational Database, ETL/ELT Pipeline, Data Warehouse, Business Intelligence Layer, KPI Engine ve AI Data Layer bileşenlerinden oluşacaktır. Operasyonel işlemler ile analitik iş yükleri ayrıştırılarak hem performans hem de raporlama doğruluğu artırılacaktır.

✅ BÖLÜM 24 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın kurumsal veri mimarisi;

Master Data Management (MDM),
Data Governance,
Data Catalog,
Metadata Yönetimi,
Data Lineage,
Veri Kalitesi,
OLTP / OLAP ayrımı,
Veri Ambarı,
BI katmanı,
KPI yönetimi,
AI veri besleme stratejisi

gibi kurumsal veri yönetiminin temel yapı taşlarını kapsayacak şekilde tanımlanmıştır.