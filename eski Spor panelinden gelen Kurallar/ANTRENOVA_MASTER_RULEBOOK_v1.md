# ANTRENOVA_MASTER_RULEBOOK_v1

> **Sürüm:** 1.0\
> **Durum:** Taslak (Living Document)

------------------------------------------------------------------------

# 1. Dokümanın Amacı

Bu doküman ANTRENOVA projesinin tek resmi referansıdır.

Bu belge;

-   İş kurallarını
-   Yazılım mimarisini
-   Kod standartlarını
-   Veritabanı kurallarını
-   API standartlarını
-   Mobil uygulama kurallarını
-   Güvenlik politikalarını
-   UI/UX standartlarını
-   Test senaryolarını
-   Gelecek yol haritasını

tek yerde toplar.

**Kural:** Önce bu doküman güncellenir, sonra kod yazılır.

------------------------------------------------------------------------

# 2. Proje Vizyonu

ANTRENOVA;

**"Spor salonları ve antrenman yönetimini yeni nesil teknolojiyle
buluşturan dijital yönetim platformudur."**

İlk hedef:

-   500 öğrenci
-   30 eğitmen
-   5 spor salonu

Uzun vadeli hedef:

-   10.000+ öğrenci
-   250+ eğitmen
-   100+ spor salonu

------------------------------------------------------------------------

# 3. Temel İlkeler

1.  Kod değil, iş kuralları merkezdedir.
2.  Tek doğruluk kaynağı bu dokümandır.
3.  Her modül bağımsız geliştirilebilir olmalıdır.
4.  Çok işletmeli mimari zorunludur.
5.  Mobil uygulama birinci önceliktir.
6.  Web paneli aynı servis katmanını kullanmalıdır.
7.  Performans ve ölçeklenebilirlik her tasarım kararında dikkate
    alınmalıdır.

------------------------------------------------------------------------

# 4. Mimari

## Katmanlar

-   Mobile App
-   Web Admin
-   API
-   Domain / Business Rules
-   Database
-   Notification Queue
-   Background Jobs

İş kuralları UI içinde kopyalanmayacaktır.

------------------------------------------------------------------------

# 5. Ana Modüller

1.  Authentication
2.  Dashboard
3.  Members
4.  Trainers
5.  Packages
6.  Appointments
7.  Attendance
8.  Calendar
9.  Payments
10. Finance
11. Receipts
12. Notifications
13. Reports
14. RFID Access
15. Settings
16. Roles & Permissions

Her modül aşağıdaki başlıklara sahip olacaktır:

-   Amaç
-   Veri Modeli
-   İş Kuralları
-   API
-   Validasyon
-   Yetkilendirme
-   Bildirim
-   Audit Log
-   Test Senaryoları
-   Edge Case
-   Gelecek Geliştirmeler

------------------------------------------------------------------------

# 6. Genel Kod Standartları

-   TypeScript Strict Mode
-   Ortak tipler
-   any kullanılmamalı
-   Tek sorumluluk ilkesi
-   Merkezi hata kodları
-   Transaction gerektiren işlemler açık tanımlanmalı

------------------------------------------------------------------------

# 7. Güvenlik

-   İşletme izolasyonu
-   Rol tabanlı yetkilendirme
-   API doğrulaması
-   RLS
-   Audit Log
-   Hassas verilerin maskelenmesi

------------------------------------------------------------------------

# 8. Veritabanı Standartları

Her tabloda mümkün olduğunca:

-   id
-   business_id
-   created_at
-   updated_at

Kritik hareketlerde ayrıca:

-   created_by
-   updated_by

------------------------------------------------------------------------

# 9. UI / UX

-   Mobil öncelikli
-   Responsive
-   Erişilebilirlik
-   Tutarlı ikonlar
-   Ortak renk sistemi
-   Boş durum ekranları
-   Loading ve hata durumları

------------------------------------------------------------------------

# 10. Performans

-   Sayfalama
-   Lazy loading
-   Queue sistemi
-   Cache
-   Optimize sorgular
-   Index kullanımı

------------------------------------------------------------------------

# 11. Bildirim Sistemi

Kanallar:

-   WhatsApp
-   SMS
-   Email
-   Push Notification

Olaylar:

-   Yeni üye
-   Paket
-   Ödeme
-   Randevu
-   Hatırlatma
-   RFID
-   Sistem

------------------------------------------------------------------------

# 12. RFID

-   Kart
-   Bileklik
-   Turnike
-   Giriş
-   Çıkış
-   Süre hesaplama
-   Offline çalışma
-   Senkronizasyon

------------------------------------------------------------------------

# 13. Test

-   Unit Test
-   Integration Test
-   API Test
-   UI Test
-   Performance Test

------------------------------------------------------------------------

# 14. Gelecek Modüller

-   AI Koç
-   Egzersiz Planları
-   Beslenme
-   Vücut Analizi
-   Wearable Entegrasyonu
-   Çok şubeli raporlar
-   Franchise yönetimi

------------------------------------------------------------------------

# 15. Doküman Politikası

Bu belge yaşayan bir dokümandır.

Her yeni özellik için:

1.  Önce bu belge güncellenir.
2.  İş kuralları yazılır.
3.  Teknik tasarım hazırlanır.
4.  Veritabanı güncellenir.
5.  API geliştirilir.
6.  Mobil/Web arayüzü geliştirilir.
7.  Test edilir.
8.  Yayınlanır.

------------------------------------------------------------------------

# Sonraki Bölümler (v1.1+)

Bu sürüm iskelet niteliğindedir.

Sonraki sürümlerde yaklaşık şu bölümler ayrıntılı olarak eklenecektir:

-   Üyeler (100+ sayfa)
-   Paketler (100+ sayfa)
-   Randevular (150+ sayfa)
-   Yoklama
-   Ödemeler
-   Raporlar
-   Bildirim Sistemi
-   RFID
-   API Standardı
-   Veritabanı Şeması
-   ER Diyagramları
-   Sequence Diagramları
-   UI Design System
-   Mobil Design System
-   Coding Standards
-   Deployment
-   Disaster Recovery
-   Backup Strategy
-   Monitoring
-   DevOps
-   CI/CD
