BÖLÜM 27
Kurumsal DevSecOps, CI/CD, Release Management ve Yazılım Yaşam Döngüsü (SDLC)

Not: Kurumsal yazılım geliştirme yalnızca kod yazmaktan ibaret değildir. Kodun güvenli şekilde geliştirilmesi, test edilmesi, doğrulanması, sürümlenmesi, dağıtılması ve işletilmesi tek bir yaşam döngüsü olarak ele alınmalıdır. Antrenova'da tüm geliştirme süreçleri DevSecOps yaklaşımıyla yönetilecektir.

27.1 Amaç

DevSecOps yaklaşımının amacı;

yazılım kalitesini artırmak,
güvenliği geliştirme sürecine dahil etmek,
sürüm yayınlama süresini kısaltmak,
insan hatalarını azaltmak,
sürdürülebilir geliştirme sağlamaktır.
27.2 SDLC (Software Development Life Cycle)

Her geliştirme;

standart yaşam döngüsünü takip etmelidir.

Plan

↓

Analysis

↓

Design

↓

Development

↓

Testing

↓

Deployment

↓

Monitoring

↓

Improvement
27.3 DevSecOps Yaklaşımı

Güvenlik;

proje sonunda eklenen bir özellik değildir.

Her aşamada;

Planlama
Kodlama
Test
Yayınlama
Operasyon

içerisinde yer almalıdır.

27.4 Git Stratejisi

Kaynak kodu;

Git üzerinden yönetilmelidir.

Temel prensipler;

küçük commit'ler,
anlamlı commit mesajları,
kod incelemesi,
izlenebilir geçmiş.
27.5 Branch Stratejisi

Uzun vadede aşağıdaki yapı kullanılmalıdır.

main

↓

develop

↓

feature/*

↓

release/*

↓

hotfix/*

Her Branch;

belirli bir amaca hizmet etmelidir.

27.6 Pull Request

Doğrudan ana dala kod gönderilmemelidir.

Her geliştirme;

Pull Request üzerinden değerlendirilmelidir.

27.7 Code Review

Her kritik değişiklik;

en az bir geliştirici tarafından incelenmelidir.

İnceleme;

Kod Kalitesi
Güvenlik
Performans
Mimari Uyum

başlıklarını kapsamalıdır.

27.8 Coding Standards

Tüm geliştiriciler;

aynı kod standartlarını kullanmalıdır.

Örneğin;

ESLint
Prettier
TypeScript Strict Mode
Ortak klasör yapısı
27.9 Semantic Commit

Commit mesajları;

standart biçimde yazılmalıdır.

Örneğin;

feat:

fix:

refactor:

docs:

test:

chore:
27.10 Conventional Commit

Commit mesajları;

otomatik sürüm oluşturmayı desteklemelidir.

Örnek;

feat(payments): add automatic receipt generation

fix(appointments): resolve package validation bug
27.11 Business Rules
BR-391

Her geliştirme Git üzerinden izlenebilir olmalıdır.

BR-392

Ana dala doğrudan Commit yapılmamalıdır.

BR-393

Tüm değişiklikler Pull Request üzerinden değerlendirilmelidir.

BR-394

Kod standartları tüm ekip tarafından uygulanmalıdır.

BR-395

Commit mesajları Conventional Commit standardına uygun olmalıdır.

BR-396

Kod incelemesi tamamlanmadan Merge işlemi yapılmamalıdır.

Architecture Decision (ADR-059)

Antrenova geliştirme süreçleri; Git, Pull Request, Code Review, Coding Standards ve Conventional Commits üzerine kurulacaktır. Tüm değişiklikler izlenebilir ve denetlenebilir olacaktır.

27.12 Continuous Integration (CI)

Her kod değişikliği;

otomatik olarak doğrulanmalıdır.

CI Pipeline;

şunları çalıştırmalıdır.

Build
Lint
Test
Type Check
27.13 Continuous Delivery (CD)

Başarılı Build sonrasında;

uygulama test ortamına otomatik dağıtılabilir.

Production dağıtımı;

onay mekanizmasına bağlı olabilir.

27.14 Pipeline Aşamaları

Standart Pipeline;

Commit

↓

Build

↓

Test

↓

Security Scan

↓

Quality Gate

↓

Deploy
27.15 Otomatik Testler

Pipeline;

manuel teste bağımlı olmamalıdır.

Desteklenmesi gereken testler;

Unit Test
Integration Test
API Test
E2E Test
27.16 Build Doğrulaması

Build başarısızsa;

Deployment yapılmamalıdır.

Başarısız Build;

otomatik olarak durdurulmalıdır.

27.17 Static Code Analysis

Kod;

otomatik analiz edilmelidir.

Kontroller;

Kod Kalitesi
Güvenlik Açıkları
Kod Kokuları
Karmaşıklık
27.18 Dependency Scanning

Harici paketler;

güvenlik açısından taranmalıdır.

Riskli bağımlılıklar;

raporlanmalı ve güncellenmelidir.

27.19 Secret Scanning

Repository içerisinde;

şunlar bulunmamalıdır.

API Key
JWT Secret
SMTP Password
Token
Private Key

CI Pipeline;

bunları otomatik tespit edebilmelidir.

27.20 License Compliance

Kullanılan açık kaynak paketlerin;

lisansları takip edilmelidir.

Uygun olmayan lisanslar;

incelemeye alınmalıdır.

27.21 Quality Gate

Kod;

belirlenen kalite kriterlerini geçmeden

yayınlanmamalıdır.

Örneğin;

Test Başarısı
Kod Kapsamı
Kritik Güvenlik Açığı
Build Başarısı
27.22 Business Rules
BR-397

Her Commit otomatik CI Pipeline'dan geçmelidir.

BR-398

Başarısız Build Production'a dağıtılamaz.

BR-399

Dependency ve Secret taramaları otomatik yapılmalıdır.

BR-400

Quality Gate başarısızsa Deployment durdurulmalıdır.

BR-401

Kod kapsamı (Code Coverage) minimum hedef değerini sağlamalıdır.

BR-402

CI Pipeline sonuçları ekip tarafından izlenebilir olmalıdır.

Architecture Decision (ADR-060)

Antrenova'nın CI/CD süreci; Build Automation, Testing Pipeline, Static Analysis, Dependency Scanning, Secret Detection ve Quality Gates bileşenleri üzerine kurulacaktır. Production ortamına yalnızca kalite kriterlerini sağlayan sürümler dağıtılacaktır.

✅ BÖLÜM 27 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 27.2 – Semantic Versioning, Release Management, Feature Flags, Blue/Green Deployment, Canary Release, Rollback ve Infrastructure as Code (IaC)

Bu bölümde;

Semantic Versioning,
Release Train,
Release Calendar,
Feature Flag yönetimi,
Canary Release,
Blue/Green Deployment,
Rollback stratejileri,
Database Migration yönetimi,
Infrastructure as Code,
GitOps,
Environment yönetimi,
Release doğrulama süreçleri

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın güvenli, kontrollü ve kesintisiz sürüm yayınlama süreçlerinin temelini oluşturacaktır.