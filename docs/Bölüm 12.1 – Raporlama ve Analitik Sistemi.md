BÖLÜM 12
Raporlama ve Analitik Sistemi

Not: Raporlama modülü yalnızca geçmiş verileri listeleyen bir ekran değildir. Antrenova'da raporlama; operasyonel karar alma, finansal analiz, üye davranışı, eğitmen performansı ve yapay zekâ destekli tahminlerin beslendiği merkezi Business Intelligence (BI) katmanıdır.

12.1 Amaç

Raporlama sisteminin amacı;

işletmenin mevcut durumunu göstermek,
yöneticilere doğru karar aldırmak,
eğilimleri analiz etmek,
operasyonel sorunları erken tespit etmek,
geleceğe yönelik tahminler üretmektir.
12.2 Raporlama Felsefesi

Her veri;

önce işlem (Transaction)

↓

olay (Event)

↓

analitik veri (Analytics)

↓

rapor (Report)

↓

dashboard

↓

AI

akışını takip eder.

Rapor ekranları doğrudan operasyon tablolarını sorgulamamalıdır.

12.3 Dashboard ve Rapor Ayrımı

Dashboard;

anlık durumu gösterir.

Rapor;

geçmiş verileri analiz eder.

Örneğin;

Dashboard:

Bugünkü Tahsilat

Rapor:

Son 12 Ay Tahsilat Eğrisi
12.4 KPI Motoru

KPI (Key Performance Indicator) sistemi;

tek merkezden hesaplanmalıdır.

Örneğin;

Aktif Üye
Bugünkü Randevu
Tahsilat
Devam Oranı
Paket Yenileme

Hiçbir KPI farklı sayfalarda farklı hesaplanmamalıdır.

12.5 KPI Tanımı

Her KPI aşağıdaki alanlara sahip olmalıdır.

id

code

title

description

formula

refresh_interval

unit

category

is_active

İleride kullanıcılar kendi KPI'larını oluşturabilir.

12.6 Gerçek Zamanlı KPI

Bazı KPI'lar;

anlık güncellenir.

Örneğin;

İçerideki Üye Sayısı
Bugünkü Tahsilat
Aktif Dersler
Bekleyen Yoklama
12.7 Periyodik KPI

Bazı hesaplamalar;

arka planda belirli aralıklarla yapılabilir.

Örneğin;

Haftalık Eğilim
Aylık Ortalama
Yıllık Karşılaştırma
12.8 Üye Raporları

Üye bazında aşağıdaki bilgiler raporlanabilir.

Devam Oranı
Son Geliş Tarihi
Kullanılan Seans
Kalan Seans
Ortalama Harcama
Paket Sayısı
Toplam Ödeme
Toplam Borç
12.9 Eğitmen Raporları

Her eğitmen için;

Toplam Ders
Tamamlanan Ders
No Show
Ortalama Katılım
Günlük Yoğunluk
Haftalık Performans
Ortalama Ders Süresi

hesaplanabilir.

12.10 Şube Raporları

Şube bazında;

Üye Sayısı
Gelir
Gider
Devam
Eğitmen Performansı
Salon Doluluğu

karşılaştırılabilir.

12.11 Finans Raporları

Finans modülü aşağıdaki raporları üretmelidir.

Günlük Tahsilat
Aylık Ciro
Gelir Dağılımı
Borç Listesi
Geciken Tahsilatlar
KDV Analizi
Nakit Akışı
POS Dağılımı
12.12 Paket Raporları

Paket bazında;

En Çok Satılan Paket
En Karlı Paket
Bitmek Üzere Olanlar
Ortalama Kullanım Süresi
Yenileme Oranı

hesaplanabilir.

12.13 Randevu Raporları
Günlük Randevu
Haftalık Yoğunluk
İptal Oranı
Ortalama Ders Süresi
Salon Kullanımı
Saat Bazlı Yoğunluk
12.14 Attendance Raporları

Attendance modülünden;

Devam Oranı
No Show
Geç Gelenler
Erken Ayrılanlar
Ortalama Kalış Süresi

üretilir.

12.15 CRM Raporları

Bildirim sistemi için;

Gönderim Sayısı
Teslim Oranı
Okunma Oranı
Kampanya Başarısı
Kanal Bazlı Performans

raporlanabilir.

12.16 Filtreleme Sistemi

Tüm raporlar ortak filtre yapısını kullanmalıdır.

Desteklenen filtreler;

Tarih
Şube
Eğitmen
Üye
Paket
Salon
Hizmet
Etiket
Durum
12.17 Karşılaştırmalı Analiz

Yönetici;

iki dönemi karşılaştırabilir.

Örneğin;

Ocak 2027

↓

Ocak 2026

veya

Bu Ay

↓

Geçen Ay
12.18 Grafik Motoru

Grafikler ortak bileşenlerle oluşturulmalıdır.

Desteklenen grafik türleri;

Çizgi
Sütun
Alan
Pasta
Donut
Heatmap
Funnel
Gauge
12.19 Dışa Aktarma

Her rapor;

aşağıdaki formatlarda dışa aktarılabilir.

PDF
Excel
CSV

İleride JSON ve API çıktıları da desteklenebilir.

12.20 Zamanlanmış Raporlar

Yönetici;

belirli raporları otomatik alabilir.

Örneğin;

Her Pazartesi

↓

09:00

↓

Haftalık Yönetim Raporu
12.21 Business Rules
BR-115

Tüm KPI hesaplamaları merkezi KPI Motoru üzerinden yapılmalıdır.

BR-116

Dashboard ve rapor ekranları aynı hesaplama kurallarını kullanmalıdır.

BR-117

Hiçbir rapor fiziksel olarak silinmiş verilere dayanmamalıdır; yalnızca geçerli ve arşivlenmiş kayıtlar kullanılmalıdır.

BR-118

Tüm raporlar tarih, işletme ve şube filtrelerini desteklemelidir.

BR-119

Dışa aktarılan raporlar oluşturuldukları andaki veriyi temsil etmeli ve sonradan değişmemelidir.

BR-120

Gerçek zamanlı KPI'lar ile toplu hesaplanan KPI'ların güncellenme stratejileri ayrı tanımlanmalıdır.

Architecture Decision (ADR-016)

Raporlama katmanı, operasyonel veritabanından mantıksal olarak ayrıştırılmış bir Analytics Layer üzerinden çalışacaktır. Bu katman; ortak KPI hesaplamalarını, performans optimizasyonunu ve gelecekteki veri ambarı (Data Warehouse) veya BI araçları entegrasyonlarını destekleyecek şekilde tasarlanacaktır.

✅ BÖLÜM 12 (1. KISIM) TAMAMLANDI
Sonraki bölüm

Bölüm 12.2 – Gelişmiş Business Intelligence ve Yapay Zekâ Analitiği

Bu bölümde;

özel rapor tasarlayıcı,
sürükle-bırak rapor oluşturucu,
veri ambarı (Data Warehouse) mimarisi,
veri küpleri (OLAP),
cohort analizleri,
churn (üye kaybı) tahmini,
LTV (Customer Lifetime Value),
RFM analizi,
AI destekli anomali tespiti,
doğal dil ile rapor sorgulama ("Bu ay en çok gelir getiren eğitmen kim?"),
tahmine dayalı dashboard'lar

kurumsal Business Intelligence seviyesinde ayrıntılı olarak tanımlanacaktır. Bu bölüm, Antrenova'nın gelecekte veri odaklı karar destek platformuna dönüşmesini sağlayacak mimariyi oluşturacaktır.