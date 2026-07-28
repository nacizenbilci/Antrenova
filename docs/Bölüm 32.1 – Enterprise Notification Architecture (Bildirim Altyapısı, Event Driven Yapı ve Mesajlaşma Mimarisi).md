# ANRENOVA MASTER HANDBOOK v1.0

# BÖLÜM 32

# Enterprise Notification Architecture (Bildirim Altyapısı, Event Driven Yapı ve Mesajlaşma Mimarisi)

> Enterprise seviyesindeki bir bildirim sistemi yalnızca mesaj gönderen bir yapı değildir. Bildirim altyapısı; olay (event) odaklı, ölçeklenebilir, izlenebilir ve çok kanallı bir iletişim katmanı olmalıdır.

---

## 32.1 Amaç

Bildirim mimarisinin amacı;

- doğru kişiye,
- doğru zamanda,
- doğru kanaldan,
- doğru içerikle

bildirim ulaştırmaktır.

---

## 32.2 Event Driven Architecture

Bildirimler doğrudan ekranlardan gönderilmemelidir.

Tüm bildirimler;

**Business Event → Notification Engine → Provider**

akışı üzerinden çalışmalıdır.

---

## 32.3 Notification Engine

Merkezi Notification Engine;

- olayları dinler,
- kuralları değerlendirir,
- uygun kanalı belirler,
- gönderimi başlatır.

---

## 32.4 Desteklenen Kanallar

Platform aşağıdaki kanalları desteklemelidir.

- WhatsApp
- SMS
- E-posta
- Mobil Push
- Web Bildirimi
- Sistem İçi Bildirim

---

## 32.5 Bildirim Şablonları

Tüm mesajlar şablon üzerinden oluşturulmalıdır.

Desteklenen değişken örnekleri:

- {{member_name}}
- {{package_name}}
- {{appointment_date}}
- {{trainer_name}}
- {{business_name}}

---

## 32.6 Bildirim Kuralları

Her olay için;

- aktif/pasif,
- kanal seçimi,
- gecikme süresi,
- tekrar politikası

tanımlanabilmelidir.

---

## 32.7 Kuyruk (Queue)

Bildirim gönderimleri doğrudan HTTP isteği içerisinde yapılmamalıdır.

Tüm işlemler kuyruk sistemine bırakılmalıdır.

---

## 32.8 Retry Mekanizması

Başarısız gönderimler;

- yeniden denenmeli,
- loglanmalı,
- belirli eşik sonrası hata durumuna alınmalıdır.

---

## 32.9 Öncelik

Bildirimler öncelik seviyesine sahip olmalıdır.

- Critical
- High
- Normal
- Low

---

## 32.10 İzlenebilirlik

Her bildirim için;

- oluşturulma,
- kuyruğa alınma,
- gönderim,
- teslim,
- hata

durumları izlenebilmelidir.

---

## Business Rules

### BR-481

Bildirimler yalnızca Notification Engine üzerinden gönderilmelidir.

### BR-482

Şablonlar merkezi olarak yönetilmelidir.

### BR-483

Bildirim sağlayıcıları değiştirilebilir olmalıdır.

### BR-484

Retry politikası kanal bazında tanımlanmalıdır.

### BR-485

Tüm bildirimler loglanmalıdır.

### BR-486

Bildirimler öncelik seviyesine göre işlenmelidir.

---

## Architecture Decision (ADR-074)

Antrenova bildirim mimarisi; Event Driven Architecture, Queue tabanlı gönderim ve Provider bağımsız Notification Engine üzerine kurulacaktır.

---

# ✅ BÖLÜM 32 (1. KISIM) TAMAMLANDI

## Devamında

- WhatsApp Business
- SMS Gateway
- SMTP
- Push Notification
- Notification Queue
- Template Engine
- Delivery Tracking
- Notification Analytics
