BÖLÜM 27 (DEVAM)
Semantic Versioning, Release Management, Feature Flags, Blue/Green Deployment, Canary Release, Rollback ve Infrastructure as Code (IaC)

Not: Büyük ölçekli SaaS platformlarında sürüm yayınlamak yalnızca yeni kodu Production'a göndermek değildir. Her sürüm; planlanmalı, doğrulanmalı, geri alınabilir olmalı ve kullanıcıları minimum düzeyde etkileyecek şekilde yayınlanmalıdır.

27.23 Semantic Versioning (SemVer)

Antrenova;

Semantic Versioning standardını kullanmalıdır.

MAJOR.MINOR.PATCH

↓

2.5.14
27.24 MAJOR Sürüm

MAJOR sürüm;

geriye dönük uyumsuz değişiklikleri ifade eder.

Örneğin;

2.x.x

↓

3.0.0
27.25 MINOR Sürüm

MINOR sürüm;

geriye dönük uyumlu yeni özellikleri ifade eder.

Örneğin;

2.4.0

↓

2.5.0
27.26 PATCH Sürüm

PATCH;

hata düzeltmeleri için kullanılır.

2.5.3

↓

2.5.4
27.27 Release Calendar

Kurumsal sürümler;

plansız yayınlanmamalıdır.

Örneğin;

Haftalık
İki Haftalık
Aylık

yayın takvimi oluşturulmalıdır.

27.28 Release Train

Yeni özellikler;

hazır olduğunda değil,

belirlenen sürüm trenine dahil edilmelidir.

Bu yaklaşım;

yayın sürecini öngörülebilir hale getirir.

27.29 Release Candidate (RC)

Production öncesinde;

Release Candidate oluşturulmalıdır.

v3.2.0

↓

v3.2.0-RC1

↓

v3.2.0
27.30 Release Notes

Her sürüm;

yayın notu ile birlikte gelmelidir.

En az aşağıdaki bilgiler bulunmalıdır.

Yeni Özellikler
Düzeltilen Hatalar
Güvenlik Güncellemeleri
Bilinen Problemler
27.31 Changelog

Sürüm geçmişi;

otomatik olarak tutulmalıdır.

Örneğin;

Added

Changed

Fixed

Removed

Deprecated

Security
27.32 Feature Flags

Yeni özellikler;

yayınlanmadan önce

Feature Flag ile kontrol edilebilmelidir.

27.33 Feature Flag Türleri

Desteklenebilecek flag tipleri;

Boolean
Percentage Rollout
Business Bazlı
Branch Bazlı
Kullanıcı Bazlı
27.34 Dark Launch

Yeni özellik;

arayüzde görünmeden

arka planda aktif edilebilir.

Bu sayede;

performans ve hata takibi yapılabilir.

27.35 Kill Switch

Her kritik özellik;

anlık kapatılabilir olmalıdır.

Feature

↓

Kill Switch

↓

Disabled

Bu işlem;

Deployment gerektirmemelidir.

27.36 Blue/Green Deployment

İki Production ortamı kullanılabilir.

Blue

↓

Green

↓

Switch Traffic

Kesintisiz geçiş sağlanır.

27.37 Canary Release

Yeni sürüm;

önce küçük kullanıcı grubuna açılmalıdır.

Örneğin;

%5

↓

%20

↓

%50

↓

%100
27.38 Progressive Delivery

Yayınlama;

tek seferde değil,

kontrollü olarak yapılmalıdır.

27.39 Business Rules
BR-403

Semantic Versioning tüm sürümlerde uygulanmalıdır.

BR-404

Her sürüm için Release Notes hazırlanmalıdır.

BR-405

Yeni özellikler mümkün olduğunca Feature Flag arkasında geliştirilmelidir.

BR-406

Kill Switch desteklenmeyen kritik özellik Production'a alınmamalıdır.

BR-407

Canary Release yüksek riskli sürümlerde tercih edilmelidir.

BR-408

Blue/Green veya eşdeğer güvenli yayın stratejileri desteklenmelidir.

Architecture Decision (ADR-061)

Antrenova'nın sürüm yönetimi; Semantic Versioning, Release Calendar, Feature Flags, Canary Release, Blue/Green Deployment ve Progressive Delivery prensipleri üzerine kurulacaktır. Böylece yeni sürümler kontrollü, geri alınabilir ve düşük riskle yayınlanacaktır.

27.40 Rollback Stratejisi

Her Production yayını;

geri alınabilir olmalıdır.

Rollback;

önceden test edilmiş prosedürlere dayanmalıdır.

27.41 Database Migration

Migration'lar;

versiyonlanmalıdır.

Her migration;

idempotent,
tekrar çalıştırılabilir,
izlenebilir

olmalıdır.

27.42 Forward Only Yaklaşımı

Mümkün olduğunca;

Forward Only Migration tercih edilmelidir.

Geri alma işlemleri;

ayrı migration'larla yönetilmelidir.

27.43 Environment Yönetimi

Her ortam;

bağımsız yapılandırmaya sahip olmalıdır.

Development

↓

Testing

↓

Staging

↓

Production

Konfigürasyonlar birbirine karıştırılmamalıdır.

27.44 Configuration Management

Kod ile yapılandırma ayrılmalıdır.

Örneğin;

Environment Variables
Secret Manager
Feature Flags

ayrı yönetilmelidir.

27.45 Infrastructure as Code (IaC)

Altyapı;

manuel oluşturulmamalıdır.

Sunucu,

ağ,

depolama,

güvenlik kuralları

kod olarak tanımlanmalıdır.

27.46 GitOps

Altyapı değişiklikleri;

Git üzerinden yönetilebilir olmalıdır.

Her değişiklik;

inceleme ve sürüm geçmişine sahip olmalıdır.

27.47 Deployment Verification

Deployment sonrasında;

otomatik doğrulama yapılmalıdır.

Kontroller;

Health Check
Kritik API'ler
Login
Dashboard
Payment

işlemlerini kapsayabilir.

27.48 Roll Forward

Rollback her zaman en iyi seçenek değildir.

Bazı durumlarda;

hızlı düzeltme sürümü

(Roll Forward)

tercih edilebilir.

27.49 Disaster Release Planı

Başarısız büyük sürümler için;

önceden hazırlanmış acil durum planı bulunmalıdır.

Plan;

iletişim,
teknik adımlar,
sorumlular,
geri dönüş kriterleri

içermelidir.

27.50 Business Rules
BR-409

Her Production sürümü geri alınabilir olmalıdır.

BR-410

Migration dosyaları sürümlendirilmeli ve denetlenebilir olmalıdır.

BR-411

Infrastructure değişiklikleri mümkün olduğunca kod üzerinden yönetilmelidir.

BR-412

Deployment sonrasında otomatik doğrulama çalıştırılmalıdır.

BR-413

Environment yapılandırmaları birbirinden tamamen bağımsız olmalıdır.

BR-414

Acil durum yayın planı düzenli olarak gözden geçirilmelidir.

Architecture Decision (ADR-062)

Antrenova'nın yayın ve altyapı yönetimi; Rollback Strategy, Infrastructure as Code, GitOps, Migration Management, Deployment Verification ve Disaster Release Planning bileşenlerinden oluşacaktır. Böylece sürüm yayınlama süreçleri güvenli, tekrarlanabilir ve denetlenebilir olacaktır.

✅ BÖLÜM 27 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın yazılım yaşam döngüsü;

DevSecOps,
SDLC,
Git stratejisi,
CI/CD,
otomatik testler,
güvenlik taramaları,
Semantic Versioning,
Release Management,
Feature Flags,
Canary Release,
Blue/Green Deployment,
Rollback,
Infrastructure as Code,
GitOps

gibi kurumsal yazılım geliştirme ve yayınlama süreçlerinin temel bileşenlerini kapsayacak şekilde