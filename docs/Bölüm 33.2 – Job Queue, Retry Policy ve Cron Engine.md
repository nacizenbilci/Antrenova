# Bölüm 33.2 – Job Queue, Retry Policy ve Cron Engine

**Dosya:** `33.2_JOB_QUEUE_RETRY_POLICY_AND_CRON_ENGINE.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Job Queue altyapısı, uzun süren işlemlerin güvenilir, izlenebilir ve ölçeklenebilir şekilde yürütülmesini sağlar. Cron Engine ise zamanlanmış görevlerin belirlenen kurallara göre otomatik olarak tetiklenmesinden sorumludur.

---

## 33.11 Job Queue

Job Queue; kullanıcı isteğinden bağımsız olarak çalışacak görevleri sıraya alır.

Temel özellikler:

- FIFO desteği
- Öncelik sıralaması
- Gecikmeli görevler
- Yeniden deneme

---

## 33.12 Queue Durumları

Her görev aşağıdaki durumlardan birinde olmalıdır.

- Pending
- Queued
- Processing
- Completed
- Failed
- Cancelled
- Dead Letter

---

## 33.13 Retry Policy

Başarısız görevler otomatik olarak yeniden denenmelidir.

Önerilen strateji:

- 1. deneme → hemen
- 2. deneme → 30 saniye
- 3. deneme → 2 dakika
- 4. deneme → 10 dakika
- Sonrasında Dead Letter Queue

---

## 33.14 Dead Letter Queue

Belirlenen deneme sayısını aşan görevler ayrı bir kuyruğa taşınmalıdır.

Bu görevler manuel olarak incelenebilmelidir.

---

## 33.15 Cron Engine

Cron Engine;

- zamanlanmış görevleri,
- bakım işlemlerini,
- rapor üretimini,
- bildirim planlarını

otomatik başlatmalıdır.

---

## 33.16 Zamanlanmış Görev Örnekleri

- Günlük yedekleme
- Gece raporları
- Paket bitiş kontrolleri
- Randevu hatırlatmaları
- Bildirim temizliği
- İndeks optimizasyonu

---

## 33.17 Idempotency

Aynı görev birden fazla kez tetiklense bile yalnızca bir kez etkili olacak şekilde tasarlanmalıdır.

---

## 33.18 Timeout Yönetimi

Uzun süren görevler için maksimum çalışma süresi tanımlanmalıdır.

Timeout aşımında görev başarısız kabul edilmelidir.

---

## 33.19 Monitoring

Queue metrikleri sürekli izlenmelidir.

- Bekleyen görev sayısı
- Ortalama bekleme süresi
- Başarı oranı
- Retry oranı
- Dead Letter sayısı

---

## 33.20 Ölçeklenebilirlik

Queue altyapısı yatay olarak büyütülebilmelidir.

---

## Business Rules

### BR-499

Her Background Job benzersiz bir Job ID taşımalıdır.

### BR-500

Retry politikası görev türüne göre yapılandırılabilir olmalıdır.

### BR-501

Dead Letter Queue manuel yeniden çalıştırmayı desteklemelidir.

### BR-502

Cron görevleri merkezi Scheduler tarafından yönetilmelidir.

### BR-503

Idempotency kritik görevler için zorunludur.

### BR-504

Queue performansı sürekli izlenmeli ve raporlanmalıdır.

---

## Architecture Decision (ADR-077)

Antrenova görev işleme altyapısı; Queue-First yaklaşımı, Retry Policy, Dead Letter Queue ve Cron Engine prensipleri üzerine kurulacaktır.

---

# ✅ Bölüm 33.2 TAMAMLANDI

## Sonraki Dosya

**33.3 – Task Execution, Monitoring ve Worker Orchestration**
