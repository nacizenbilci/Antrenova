BÖLÜM 19
Test Mimarisi, Kalite Güvencesi (QA) ve Yazılım Yaşam Döngüsü

Not: Antrenova'da kalite, geliştirme tamamlandıktan sonra yapılan bir kontrol süreci değildir. Kalite; analiz, tasarım, geliştirme, test, dağıtım ve bakım süreçlerinin tamamına yayılan sürekli bir disiplindir. Amaç yalnızca hataları bulmak değil, hataların oluşmasını en baştan engellemektir.

19.1 Amaç

Kalite güvence sisteminin amacı;

hataları erken yakalamak,
güvenilir sürümler yayınlamak,
teknik borcu azaltmak,
sürdürülebilir geliştirme sağlamaktır.
19.2 Quality First Yaklaşımı

Yeni geliştirilen her özellik;

önce kalite standartlarına göre tasarlanmalıdır.

Yaklaşım;

Requirements

↓

Architecture

↓

Development

↓

Testing

↓

Release
19.3 Yazılım Yaşam Döngüsü (SDLC)

Antrenova;

standart bir SDLC süreci kullanmalıdır.

Idea

↓

Analysis

↓

Design

↓

Development

↓

Testing

↓

Release

↓

Monitoring

↓

Improvement
19.4 Test Piramidi

Testler;

tek tip olmamalıdır.

          E2E

     Integration

        Unit Tests

En fazla Unit Test,

en az E2E Test bulunmalıdır.

19.5 Unit Test

Her iş kuralı;

bağımsız test edilebilir olmalıdır.

Örneğin;

Paket hesaplama
Ödeme hesaplama
Randevu çakışması
İzin kontrolü
19.6 Integration Test

Modüllerin birlikte çalışması test edilmelidir.

Örneğin;

Payment

↓

Receipt

↓

Notification

↓

Reporting
19.7 End-to-End (E2E) Test

Gerçek kullanıcı senaryoları;

uçtan uca doğrulanmalıdır.

Örneğin;

Üye oluştur
Paket sat
Ödeme al
Makbuz oluştur
Bildirim gönder
19.8 API Testleri

Her API;

otomatik test edilmelidir.

Kontroller;

Status Code
Response
Validation
Authorization
Error Response
19.9 Database Testleri

Veritabanı;

yalnızca sorgular açısından değil;

iş kuralları açısından da test edilmelidir.

Örneğin;

RLS
Trigger
Function
Constraint
19.10 Güvenlik Testleri

Periyodik olarak;

Authentication
Authorization
Permission
Tenant Isolation
SQL Injection
XSS
CSRF

gibi kontroller yapılmalıdır.

19.11 Performans Testleri

Sistem;

yük altında test edilmelidir.

Örneğin;

100 kullanıcı
1.000 kullanıcı
10.000 kullanıcı

Hedef;

performans eğrisini ölçmektir.

19.12 Stres Testleri

Beklenen kapasitenin üzerinde yük verilerek;

sistemin davranışı gözlemlenmelidir.

Amaç;

kırılma noktasını belirlemektir.

19.13 Dayanıklılık Testleri

Uzun süre çalışan sistem;

kararlı kalmalıdır.

Örneğin;

72 saat
7 gün
30 gün

sürekli çalışma testleri.

19.14 Erişilebilirlik Testleri

Arayüz;

erişilebilirlik açısından değerlendirilmelidir.

Örneğin;

Klavye Kullanımı
Kontrast
Ekran Okuyucu
Odak Yönetimi
19.15 Responsive Testleri

Her ekran;

farklı cihazlarda test edilmelidir.

Telefon
Tablet
Laptop
Geniş Monitör
19.16 Browser Uyumluluğu

Desteklenen tarayıcılar;

düzenli olarak test edilmelidir.

Örneğin;

Chrome
Edge
Safari
Firefox
19.17 Görsel Regresyon Testleri

Arayüz değişiklikleri;

otomatik karşılaştırılabilir.

Amaç;

istenmeyen tasarım bozulmalarını erken yakalamaktır.

19.18 Test Verisi Yönetimi

Test ortamı;

üretim verilerine bağımlı olmamalıdır.

Anonimleştirilmiş veya sentetik veriler tercih edilmelidir.

19.19 Otomatik QA Pipeline

CI sürecinde;

otomatik testler çalışmalıdır.

Commit

↓

CI

↓

Tests

↓

Quality Gate

↓

Deploy
19.20 Kod Kalitesi

Kod;

yalnızca çalışıyor diye kabul edilmemelidir.

Kontrol edilebilecek alanlar;

Karmaşıklık
Tekrarlanan Kod
Kod Kokuları
Güvenlik Açıkları
19.21 Business Rules
BR-229

Her kritik iş kuralı en az bir otomatik test ile doğrulanmalıdır.

BR-230

Başarısız test bulunan sürümler Production ortamına dağıtılmamalıdır.

BR-231

Test ortamlarında gerçek müşteri verileri kullanılmamalıdır.

BR-232

Erişilebilirlik temel kalite kriterlerinden biri olarak değerlendirilmelidir.

BR-233

Yeni API'ler yayınlanmadan önce otomatik API testlerinden geçmelidir.

BR-234

Veritabanı güvenlik politikaları (RLS vb.) düzenli olarak test edilmelidir.

Architecture Decision (ADR-032)

Test mimarisi; Unit Test, Integration Test, E2E Test, API Test, Performance Test ve Security Test katmanlarından oluşacaktır. Testler CI/CD sürecine entegre edilerek kalite kontrolleri otomatik hale getirilecektir.

19.22 Definition of Ready (DoR)

Bir geliştirme görevi başlamadan önce;

aşağıdaki şartlar sağlanmalıdır.

Gereksinimler net olmalı
Tasarım onaylanmış olmalı
Kabul kriterleri yazılmış olmalı
Teknik riskler değerlendirilmiş olmalı
Bağımlılıklar belirlenmiş olmalı
19.23 Definition of Done (DoD)

Bir geliştirme görevi tamamlandı sayılmadan önce;

Kod tamamlanmış olmalı
Kod incelemesi yapılmış olmalı
Testler başarılı olmalı
Dokümantasyon güncellenmiş olmalı
Güvenlik kontrolleri tamamlanmış olmalı
Kabul kriterleri karşılanmış olmalı
19.24 Teknik Borç Yönetimi

Teknik borç;

görmezden gelinmemelidir.

Her sprint veya planlama döneminde;

teknik borçlar değerlendirilmeli,

önceliklendirilmeli,

takip edilmelidir.

19.25 Refactoring Politikası

Refactoring;

yeni özellik geliştirmek kadar önemlidir.

Ancak;

davranış değiştirmeden yapılmalıdır.

Refactoring sonrasında;

otomatik testler çalıştırılmalıdır.

19.26 Release Candidate (RC)

Production öncesinde;

Release Candidate oluşturulmalıdır.

RC;

son kalite kontrol sürümüdür.

19.27 Release Checklist

Her sürümden önce;

kontrol listesi tamamlanmalıdır.

Örnek;

Migration hazır mı?
Rollback planı var mı?
Feature Flag doğru mu?
Dokümantasyon güncel mi?
Monitoring aktif mi?
19.28 Kalite KPI'ları

Kalite ölçülebilir olmalıdır.

Örnek KPI'lar;

Test Başarı Oranı
Production Hata Sayısı
Ortalama Hata Çözüm Süresi (MTTR)
Değişiklik Başarısızlık Oranı
Kod Kapsamı (Coverage)
Kritik Bug Sayısı
19.29 Sürekli İyileştirme

Her sürüm sonrası;

ekip;

neler iyi gitti,
neler geliştirilebilir,
hangi süreçler yavaşladı

sorularını değerlendirmelidir.

19.30 Test Otomasyonu Yol Haritası

Uzun vadeli hedef;

Unit Test Otomasyonu
API Test Otomasyonu
E2E Test Otomasyonu
Performans Test Otomasyonu
Güvenlik Test Otomasyonu
Görsel Regresyon Otomasyonu

oluşturulmasıdır.

19.31 Business Rules
BR-235

Definition of Ready karşılanmadan geliştirme başlatılmamalıdır.

BR-236

Definition of Done tamamlanmadan geliştirme bitmiş kabul edilmemelidir.

BR-237

Release öncesinde standart kontrol listesi tamamlanmalıdır.

BR-238

Teknik borç kayıt altına alınmalı ve düzenli olarak planlanmalıdır.

BR-239

Kalite KPI'ları düzenli olarak raporlanmalıdır.

BR-240

Her Production sürümü sonrasında kısa bir iyileştirme değerlendirmesi yapılmalıdır.

Architecture Decision (ADR-033)

Kalite yönetimi; Quality Gate, Automated Testing Platform, Release Checklist, Definition of Ready, Definition of Done ve Continuous Improvement süreçlerinden oluşacaktır. Yazılım geliştirme yaşam döngüsü boyunca kalite kontrolleri otomatikleştirilecek ve ölçülebilir metriklerle sürekli iyileştirilecektir.

✅ BÖLÜM 19 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın kalite ve geliştirme süreci;

SDLC,
Test Piramidi,
Unit / Integration / E2E testleri,
API ve güvenlik testleri,
performans testleri,
erişilebilirlik,
görsel regresyon,
teknik borç yönetimi,
Definition of Ready,
Definition of Done,
Release yönetimi,
kalite KPI'ları

gibi profesyonel yazılım geliştirme standartlarını kapsayacak şekilde tanımlanmıştır.