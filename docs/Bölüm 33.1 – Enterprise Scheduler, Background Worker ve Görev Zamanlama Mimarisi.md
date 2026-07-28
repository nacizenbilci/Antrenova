# Bölüm 33.1 – Enterprise Scheduler, Background Worker ve Görev Zamanlama Mimarisi

**Dosya:** `33.1_ENTERPRISE_SCHEDULER_AND_BACKGROUND_WORKERS.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Enterprise sistemlerde uzun süren işlemler kullanıcı isteği (request) içerisinde çalıştırılmamalıdır. Scheduler ve Background Worker mimarisi; ölçeklenebilir, güvenilir ve izlenebilir görev yürütme altyapısı sağlar.

---

## 33.1 Amaç

Scheduler mimarisinin amacı;

- zamanlanmış görevleri yönetmek,
- arka plan işlemlerini güvenli şekilde çalıştırmak,
- kullanıcı deneyimini hızlandırmak,
- sistem yükünü dengelemektir.

---

## 33.2 Scheduler Katmanı

Scheduler;

- zamanlanmış görevleri tetikler,
- Cron ifadelerini yorumlar,
- görev kuyruğunu besler,
- tekrar eden işleri yönetir.

---

## 33.3 Background Worker

Background Worker;

- kuyruğa alınan görevleri,
- bağımsız süreçlerde,
- ölçeklenebilir şekilde işler.

---

## 33.4 Kullanım Alanları

- Bildirim gönderimi
- PDF oluşturma
- Rapor üretimi
- Yedekleme
- Veri senkronizasyonu
- AI görevleri
- Büyük veri aktarımları

---

## 33.5 Görev Yaşam Döngüsü

Request

↓

Queue

↓

Worker

↓

Success / Retry / Failed

---

## 33.6 Worker Türleri

- Notification Worker
- Report Worker
- Finance Worker
- Media Worker
- AI Worker
- Integration Worker

---

## 33.7 Paralel Çalışma

Worker sayısı sistem yüküne göre artırılabilmelidir.

---

## 33.8 İzlenebilirlik

Her görev için;

- oluşturulma zamanı,
- başlama zamanı,
- bitiş zamanı,
- süre,
- durum,
- hata mesajı

saklanmalıdır.

---

## 33.9 Performans

Uzun süren işlemler HTTP isteğini bloke etmemelidir.

---

## 33.10 Güvenilirlik

Worker çökmesi durumunda görev kaybolmamalıdır.

---

## Business Rules

### BR-493

Uzun süren işlemler Background Worker üzerinden çalıştırılmalıdır.

### BR-494

Scheduler yalnızca görev planlamasından sorumlu olmalıdır.

### BR-495

Worker'lar stateless tasarlanmalıdır.

### BR-496

Tüm görevler merkezi log sistemine yazılmalıdır.

### BR-497

Görev başarısızlıkları yeniden işlenebilir olmalıdır.

### BR-498

Worker sayısı yatay ölçeklenebilir olmalıdır.

---

## Architecture Decision (ADR-076)

Antrenova görev yürütme altyapısı; Scheduler, Queue ve stateless Background Worker mimarisi üzerine kurulacaktır.

---

# ✅ Bölüm 33.1 TAMAMLANDI

## Sonraki Dosya

**33.2 – Job Queue, Retry Policy ve Cron Engine**
