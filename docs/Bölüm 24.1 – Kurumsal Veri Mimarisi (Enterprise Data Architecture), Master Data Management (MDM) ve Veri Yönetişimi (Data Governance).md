BÖLÜM 24
Kurumsal Veri Mimarisi (Enterprise Data Architecture), Master Data Management (MDM) ve Veri Yönetişimi (Data Governance)

Not: Veri yalnızca uygulamanın kullandığı bilgiler değildir. Kurumsal ölçekte veri; yönetilen, kalite standartları olan, sahipliği belirlenmiş, yaşam döngüsü tanımlanmış ve stratejik kararların temelini oluşturan bir kurumsal varlıktır.

24.1 Amaç

Kurumsal veri mimarisinin amacı;

veri tutarlılığını sağlamak,
veri tekrarını azaltmak,
güvenilir raporlama oluşturmak,
AI sistemlerini kaliteli veriyle beslemek,
uzun vadeli veri yönetişimi sağlamaktır.
24.2 Veri İlkeleri

Antrenova'nın veri yönetimi aşağıdaki prensiplere dayanmalıdır.

Tek Doğru Veri Kaynağı
Veri Sahipliği
Veri Kalitesi
İzlenebilirlik
Standartlaştırma
Güvenlik
Yaşam Döngüsü Yönetimi
24.3 Kurumsal Veri Katmanları

Veri;

tek katmanda değerlendirilmemelidir.

Operational Data

↓

Analytical Data

↓

AI Data

↓

Archive
24.4 Master Data (Ana Veri)

Sistemde nadiren değişen;

ancak birçok modül tarafından kullanılan veriler;

Master Data olarak değerlendirilmelidir.

Örneğin;

Business
Branch
Member
Trainer
Hall
Package Type
Currency
Country
24.5 Transaction Data

Günlük operasyonlarda oluşan kayıtlar;

Transaction Data'dır.

Örneğin;

Payment
Appointment
Attendance
Invoice
Receipt
Notification Log
24.6 Reference Data

Sistemin ortak kullandığı sabit bilgiler;

Reference Data olarak tanımlanmalıdır.

Örneğin;

Ülkeler
Para Birimleri
Saat Dilimleri
Dil Kodları
Vergi Oranları
Bildirim Türleri
24.7 Metadata

Her veri;

yalnızca kendi değeriyle değil,

metadata'sıyla birlikte değerlendirilmelidir.

Örneğin;

Created At
Updated At
Created By
Updated By
Source
Version
24.8 Data Dictionary

Her tablo;

her kolon;

tek merkezde tanımlanmalıdır.

Data Dictionary;

şunları içermelidir.

Alan Adı
Veri Tipi
Açıklama
Zorunluluk
Varsayılan Değer
İş Kuralı
24.9 Naming Standards

Veri isimlendirmeleri;

standart olmalıdır.

Örneğin;

business_id

member_id

appointment_id

created_at

updated_at

Farklı isimlendirme stilleri aynı projede kullanılmamalıdır.

24.10 Tek Doğru Veri Kaynağı (Single Source of Truth)

Aynı bilgi;

birden fazla tabloda tutulmamalıdır.

Örneğin;

Üye Adı

↓

Members Tablosu

↓

Diğer Modüller yalnızca referans kullanır.

24.11 Veri Tekrarı

Gereksiz veri çoğaltılması;

engellenmelidir.

Denormalizasyon;

yalnızca performans gereksinimi varsa ve bilinçli şekilde uygulanmalıdır.

24.12 Veri Sahipliği

Her veri kümesinin;

bir sahibi olmalıdır.

Örneğin;

Members

↓

Member Domain

Başka bir modül;

bu verinin sahibi olamaz.

24.13 Business Rules
BR-319

Her veri kümesinin açık şekilde tanımlanmış bir sahibi olmalıdır.

BR-320

Master Data yalnızca yetkili Domain tarafından değiştirilebilmelidir.

BR-321

Reference Data merkezi olarak yönetilmelidir.

BR-322

Her tablo ve kolon Data Dictionary içerisinde belgelenmelidir.

BR-323

Aynı veri birden fazla yerde gereksiz şekilde saklanmamalıdır.

BR-324

Metadata alanları kurumsal standartlara uygun tutulmalıdır.

Architecture Decision (ADR-047)

Antrenova'nın veri mimarisi; Master Data, Reference Data, Transaction Data ve Metadata katmanlarından oluşacaktır. Her veri kümesi tek bir Domain'in sahipliğinde olacak ve kurumsal veri sözlüğü ile yönetilecektir.

24.14 Master Data Management (MDM)

Master Data;

merkezi kurallar ile yönetilmelidir.

MDM;

şunları sağlamalıdır.

Tekillik
Tutarlılık
Kalite
Standart Kimlik
Sürüm Takibi
24.15 Global Kimlikler

Her ana veri;

küresel olarak benzersiz kimliğe sahip olmalıdır.

UUID

↓

Business

↓

Member

↓

Trainer

Kimlikler yeniden kullanılmamalıdır.

24.16 Veri Kalitesi

Veri kalitesi;

ölçülebilir olmalıdır.

Örnek kriterler;

Doğruluk
Tamlık
Tutarlılık
Güncellik
Benzersizlik
24.17 Veri Doğrulama

Veri yalnızca kullanıcı arayüzünde değil;

uygulama ve veritabanı katmanlarında da doğrulanmalıdır.

Katmanlı doğrulama tercih edilmelidir.

24.18 Veri Standartlaştırma

Aynı bilgi;

aynı formatta tutulmalıdır.

Örneğin;

Telefon numaraları,

ülke kodu dahil standart biçimde saklanmalıdır.

24.19 Duplicate Detection

Sistem;

olası tekrar kayıtları tespit edebilmelidir.

Örneğin;

Aynı telefon
Aynı e-posta
Aynı kimlik numarası

İş kurallarına göre uyarı veya engelleme uygulanabilir.

24.20 Merge Politikası

Tekrarlanan kayıtlar;

kontrollü şekilde birleştirilebilmelidir.

Birleştirme sırasında;

ilişkili kayıtların bütünlüğü korunmalıdır.

24.21 Veri Soy Ağacı (Data Lineage)

Kritik veriler;

nereden geldiği,

hangi süreçlerden geçtiği,

nerelerde kullanıldığı

izlenebilir olmalıdır.

Source

↓

Transform

↓

Store

↓

Report

↓

AI
24.22 Business Rules
BR-325

Master Data için benzersiz küresel kimlikler kullanılmalıdır.

BR-326

Veri kalitesi düzenli olarak ölçülmeli ve raporlanmalıdır.

BR-327

Tekrarlanan kayıtlar tespit edilebilir olmalıdır.

BR-328

Merge işlemleri veri bütünlüğünü bozmayacak şekilde uygulanmalıdır.

BR-329

Kritik verilerin Data Lineage bilgisi izlenebilir olmalıdır.

BR-330

Veri standartları tüm modüllerde tutarlı şekilde uygulanmalıdır.

Architecture Decision (ADR-048)

Master Data Management; Global Identity, Duplicate Detection, Merge Engine, Data Quality Monitor ve Data Lineage bileşenleriyle desteklenecektir. Veri kalitesi yalnızca giriş anında değil, yaşam döngüsü boyunca sürekli izlenecektir.

✅ BÖLÜM 24 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 24.2 – Data Governance, Metadata Yönetimi, Veri Kataloğu, Analitik Veri Modeli ve Kurumsal Raporlama Altyapısı

Bu bölümde;

Data Governance organizasyonu,
veri sahipleri (Data Owner),
veri sorumluları (Data Steward),
veri kataloğu,
metadata yönetimi,
veri yaşam döngüsü,
veri ambarı (Data Warehouse) hazırlığı,
OLTP / OLAP ayrımı,
kurumsal raporlama modeli,
BI katmanı,
AI veri besleme stratejisi

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın veri yönetimini yalnızca operasyonel değil, stratejik ve analitik açıdan da olgunlaştıracak kurumsal veri yönetişimi çerçevesini oluşturacaktır.