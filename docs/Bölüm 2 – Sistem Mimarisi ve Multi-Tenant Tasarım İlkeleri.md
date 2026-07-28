BÖLÜM 2
Sistem Mimarisi ve Multi-Tenant Tasarım İlkeleri
2.1 Mimari Yaklaşım

Antrenova, modern SaaS (Software as a Service) prensiplerine göre geliştirilen, Cloud Native, API First ve Multi-Tenant mimariye sahip bir platformdur.

Sistemin temel amacı;

yüksek performans,
düşük bakım maliyeti,
kolay geliştirme,
kolay ölçeklenme,
yüksek güvenlik

sağlamaktır.

Her mimari karar bu hedefleri desteklemek zorundadır.

2.2 Mimari Katmanlar

Antrenova aşağıdaki katmanlardan oluşur.

Kullanıcı

↓

Web

↓

Mobile

↓

API

↓

Business Layer

↓

Database

↓

Storage

↓

External Services

Hiçbir katman diğer katmanın sorumluluğunu üstlenmez.

2.3 Teknoloji Kararı

Platform aşağıdaki teknoloji yapısını kullanır.

Frontend

Next.js
React
TypeScript
TailwindCSS

Backend

Next.js Server Actions
Route Handlers

Veritabanı

Supabase PostgreSQL

Authentication

Supabase Auth

Storage

Supabase Storage

Hosting

Vercel

Bu teknolojiler değiştirilmeden önce mimari değerlendirme yapılmalıdır.

2.4 Multi-Tenant Felsefesi

Antrenova tek işletme için geliştirilmez.

Her zaman;

onlarca
yüzlerce
binlerce

işletmenin aynı altyapıyı kullanacağı varsayılır.

Bu nedenle sistemde hiçbir veri "global" kabul edilmez.

Her veri mutlaka bir işletmeye aittir.

2.5 Tenant Tanımı

Tenant = İşletme

Bir tenant;

spor salonu olabilir
pilates stüdyosu olabilir
tenis kulübü olabilir
yüzme okulu olabilir

Sistemin tamamında tenant kavramı "Business" olarak temsil edilir.

2.6 business_id

Antrenova'nın en önemli alanı:

business_id

Bu alan;

sistemdeki verinin sahibini belirtir.

Örnek

Üye

↓

business_id

↓

Demo Spor Salonu

Başka bir işletme bu üyeyi göremez.

2.7 business_id Kuralı

Aşağıdaki tablolar business_id içerir.

Members
Trainers
Packages
Appointments
Attendance
Payments
Invoices
Receipts
Notification Rules
Finance Settings
Forms
Contracts
RFID Cards
Reports
Dashboard Settings
User Roles
Permissions
Branches

İşletmeye ait bütün tablolar business_id taşımak zorundadır.

2.8 branch_id

Antrenova tek şubeli işletmeleri de destekler.

Ancak mimari her zaman çok şubeli düşünülür.

Bu nedenle gerekli tablolarda branch_id bulunacaktır.

Şube kullanılmıyorsa NULL olabilir.

2.9 Gelecek Uyumluluğu

Bugün tek şube kullanan bir işletme;

yarın ikinci şubesini açtığında

hiçbir tablo değiştirilmeden sisteme devam edebilmelidir.

2.10 Veri İzolasyonu

Bir işletmenin verisi;

başka işletme tarafından

hiçbir koşulda görüntülenemez.

Bu kural;

SQL
API
Frontend
Mobile
Export
Report

için geçerlidir.

2.11 Yetki Katmanları

Sistemde üç temel yetki bulunur.

Platform

↓

Business

↓

Branch

Platform yöneticisi;

bütün tenantları görebilir.

Business yöneticisi;

yalnızca kendi işletmesini görebilir.

Branch yöneticisi;

yalnızca kendi şubesini görebilir.

2.12 Veri Sahipliği

Her kayıt bir sahibine aittir.

Örneğin

Bir ödeme;

işletmeye
üyeye
pakete

aittir.

Sahipsiz kayıt oluşmasına izin verilmez.

2.13 Soft Delete Politikası

Veriler doğrudan silinmez.

Önce

deleted_at

alanı doldurulur.

Kullanıcı isterse geri alabilir.

Kalıcı silme yalnızca belirli işlemlerle yapılabilir.

2.14 Audit Log

Kritik işlemler kayıt altına alınır.

Örneğin;

Üye silindi.

↓

Kim sildi?

↓

Ne zaman sildi?

↓

Eski değer neydi?

↓

Yeni değer ne?

↓

IP adresi

↓

Tarayıcı

↓

Kullanıcı

kayıt edilir.

2.15 API First Yaklaşımı

Bütün iş kuralları yalnızca frontend'de bulunamaz.

İş kuralları Business Layer'da uygulanır.

Web,

Mobil,

API

aynı kuralları kullanır.

2.16 Tek Sorumluluk İlkesi

Bir modül yalnızca kendi işini yapmalıdır.

Örneğin;

Appointment modülü;

ödeme hesaplamaz.

Finance modülü;

randevu planlamaz.

Notification modülü;

paket süresi hesaplamaz.

Her modül yalnızca kendi sorumluluğundan sorumludur.

2.17 Modüller Arası İletişim

Modüller doğrudan birbirlerinin veritabanını değiştirmez.

Örnek

Yanlış

Appointment

↓

Payment tablosunu değiştiriyor

Doğru

Appointment

↓

Event

↓

Finance

↓

Payment

Bu yaklaşım bağımlılığı azaltır.

2.18 Event Driven Yaklaşımı

Sistemde kritik işlemler event üretir.

Örneğin

MemberCreated

PackagePurchased

AppointmentCreated

AppointmentCancelled

AttendanceMarked

PaymentReceived

PackageExpired

MemberArchived

Bu event'ler;

Bildirim,

Rapor,

AI,

Dashboard

tarafından kullanılabilir.

2.19 Kimlik Üretimi

Tüm ana kayıtlar UUID kullanır.

Örnek

id

UUID

Artan integer kullanılmaz.

2.20 Kodlama Prensibi

Kod okunabilir olmalıdır.

Kısa olması önemli değildir.

Anlaşılır olması önemlidir.

Bir geliştirici;

6 ay sonra

kendi kodunu rahat okuyabilmelidir.

2.21 Teknik Borç Politikası

Geçici çözümler kalıcı hale getirilmez.

TODO bırakılıyorsa;

neden bırakıldığı açıklanmalıdır.

2.22 Bağımlılık Yönetimi

Harici paket eklenmeden önce;

gerçekten gerekli mi?
sürdürülebilir mi?
lisansı uygun mu?
bakım görüyor mu?

incelenir.

2.23 Hata Yönetimi

Sistem;

ham hata mesajı göstermez.

Kullanıcıya;

anlaşılır,

yönlendirici,

çözüm odaklı

mesajlar gösterilir.

2.24 Ölçeklenebilirlik Hedefi

Mimari en az aşağıdaki yükü desteklemelidir.

1000 işletme
5000 şube
250.000 aktif üye
20 milyon randevu
milyonlarca ödeme kaydı
milyonlarca bildirim

Hiçbir mimari karar yalnızca bugünkü kullanıcı sayısına göre alınamaz.

2.25 Business Rule
BR-005

Sistemde işletmeye ait hiçbir kayıt business_id olmadan oluşturulamaz.

BR-006

İşletmeler birbirlerinin verilerini hiçbir API üzerinden göremez.

BR-007

Yeni geliştirilen her tablo Multi-Tenant mimariye uygun olmak zorundadır.

BR-008

Hiçbir geliştirici business_id filtresi olmadan sorgu yazamaz.

BR-009

Her kritik işlem audit log üretmek zorundadır.

BR-010

Her yeni modül bağımsız geliştirilebilir ve bağımsız test edilebilir olmalıdır.