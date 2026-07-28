BÖLÜM 12 (DEVAM)
Business Intelligence (BI) ve Yapay Zekâ Destekli Analitik

Not: Bu bölüm, Antrenova'nın yalnızca rapor üreten bir yazılım değil; verileri analiz eden, tahminlerde bulunan ve yöneticilere karar desteği sağlayan akıllı bir yönetim platformuna dönüşmesini hedefler.

12.22 Business Intelligence Katmanı

BI katmanı;

operasyonel sistem ile yönetim raporları arasında yer alır.

Operasyon

↓

Analytics Layer

↓

Business Intelligence

↓

Dashboard

↓

AI

Bu katman, karmaşık raporların üretim sistemini yavaşlatmasını önler.

12.23 Analytics Veri Modeli

Analitik amaçlı veriler;

operasyon tablolarından bağımsız olarak hazırlanabilir.

Örneğin;

Günlük Üye Özeti
Günlük Finans Özeti
Günlük Attendance Özeti
Günlük Satış Özeti

Bu özet tablolar rapor performansını artırır.

12.24 Veri Ambarı (Data Warehouse)

İlerleyen sürümlerde;

Antrenova,

ayrı bir veri ambarına bağlanabilecek şekilde tasarlanmalıdır.

Desteklenebilecek platformlar;

PostgreSQL Analytics
BigQuery
Snowflake
Azure Synapse
Amazon Redshift
12.25 OLAP Yaklaşımı

Büyük işletmeler için;

çok boyutlu analiz yapılabilir.

Boyut örnekleri;

Tarih
Şube
Eğitmen
Paket
Hizmet
Üye Segmenti

Bu yapı saniyeler içinde karmaşık analizler üretmeyi sağlar.

12.26 Özel Rapor Tasarlayıcı

Yetkili kullanıcılar;

kod yazmadan kendi raporlarını oluşturabilir.

Seçilebilecek alanlar;

Üyeler
Paketler
Ödemeler
Randevular
Attendance
Eğitmenler
Şubeler
12.27 Sürükle-Bırak Rapor

Kullanıcı;

alanları sürükleyerek rapor hazırlayabilir.

Örneğin;

Şube

+

Ay

+

Gelir

↓

Grafik
12.28 Hazır Rapor Şablonları

Sistem;

hazır raporlar sunmalıdır.

Örneğin;

Gün Sonu Raporu
Haftalık Yönetici Özeti
Finans Özeti
Eğitmen Performansı
Üye Analizi
12.29 Cohort Analizi

Üyeler;

kayıt oldukları döneme göre analiz edilir.

Örneğin;

Ocak Üyeleri

↓

3 Ay Sonra

↓

%82 Aktif

Bu analiz üye sadakatini ölçer.

12.30 Churn (Üye Kaybı) Analizi

Sistem;

üyenin ayrılma riskini hesaplayabilir.

Değerlendirilebilecek göstergeler;

Devam sıklığı
Son geliş tarihi
Borç durumu
Paket yenileme geçmişi
Bildirim etkileşimi

Her risk puanı açıklanabilir olmalıdır.

12.31 Lifetime Value (LTV)

Her üyenin;

işletmeye sağladığı toplam ekonomik değer hesaplanabilir.

Örneğin;

Toplam Harcama

↓

18.450 TL

Bu metrik pazarlama ve sadakat çalışmalarında kullanılabilir.

12.32 RFM Analizi

Üyeler;

üç kritere göre puanlanabilir.

Recency (Son ziyaret)
Frequency (Ziyaret sıklığı)
Monetary (Toplam harcama)

Sonuç;

üyelerin segmentlere ayrılmasını sağlar.

12.33 Segment Performansı

Karşılaştırılabilecek örnek segmentler;

Yeni Üyeler
Sadık Üyeler
Riskli Üyeler
Pasif Üyeler
Premium Üyeler

Her segmentin finansal ve operasyonel katkısı ölçülür.

12.34 Yapay Zekâ İçgörüleri

AI;

ham verileri yorumlayarak öneriler oluşturabilir.

Örnekler;

"Salı akşamları doluluk %95'e ulaşıyor."
"Pilates paketlerinde yenileme oranı diğer paketlerden yüksek."
"Son iki ayda iptal oranı arttı."

Bu yorumlar yalnızca öneri niteliğindedir.

12.35 Anomali Tespiti

Sistem;

olağan dışı durumları belirleyebilir.

Örneğin;

Beklenmeyen gelir düşüşü
Ani iptal artışı
Eğitmen performansında olağan dışı değişim
Aynı gün çok sayıda iade

Bu kayıtlar yöneticiye bildirilir.

12.36 Tahmine Dayalı Analitik

AI;

geleceğe yönelik tahminlerde bulunabilir.

Örneğin;

Önümüzdeki ay beklenen gelir
Paket yenileme olasılığı
Tahsilat tahmini
Beklenen üye kaybı
Yoğunluk tahmini

Tahminlerin yanında güven aralığı da gösterilebilir.

12.37 Doğal Dil ile Raporlama

Yönetici;

rapor yazmak yerine soru sorabilir.

Örnekler;

"Bu ay en çok gelir getiren eğitmen kim?"
"Geçen aya göre gelir neden düştü?"
"Son 90 günde hiç gelmeyen üyeleri göster."

Sistem bu soruları uygun raporlara dönüştürür.

12.38 Karar Destek Merkezi

AI;

yalnızca veri göstermemeli;

aksiyon önerileri de sunmalıdır.

Örneğin;

Riskli üyeleri arayın.
Bu hafta paket yenileme kampanyası başlatın.
Salı 19:00 için ek grup dersi açın.
Tahsilat hatırlatmalarını bugün gönderin.

Karar her zaman kullanıcıya aittir.

12.39 Yönetici Özeti

Her sabah;

işletme sahibine otomatik özet hazırlanabilir.

İçerik;

Dünkü Tahsilat
Bugünkü Randevular
Kritik Borçlar
Paket Bitenler
Devamsız Üyeler
AI Önerileri
12.40 Executive Dashboard

Üst yönetim ekranı;

tek bakışta işletmenin durumunu göstermelidir.

Önerilen kartlar;

Toplam Aktif Üye
Bugünkü Gelir
Bu Ayki Ciro
Tahsilat Oranı
Ortalama Devam
Üye Kayıp Riski
Nakit Akışı
En Yoğun Şube
12.41 Business Rules
BR-121

Analitik raporlar operasyonel işlemleri yavaşlatmamalıdır.

BR-122

AI tarafından üretilen tahminler, kullanılan veri dönemini ve güven seviyesini göstermelidir.

BR-123

Doğal dil sorguları yalnızca kullanıcının yetkili olduğu veriler üzerinde çalışmalıdır.

BR-124

Hazır KPI tanımları merkezi KPI Motoru tarafından yönetilmelidir.

BR-125

Özel rapor tasarlayıcı ile oluşturulan raporlar sürümlendirilmeli ve paylaşılabilir olmalıdır.

BR-126

Anomali tespitleri otomatik olarak kritik alarm oluşturabilir ancak finansal veya operasyonel kayıtları kendiliğinden değiştiremez.

BR-127

AI önerileri hiçbir zaman otomatik finansal işlem, üyelik iptali veya fiyat değişikliği gerçekleştirmemelidir.

BR-128

Yönetici özetleri işletmenin zaman dilimine göre planlanmalı ve yalnızca yetkili kullanıcılara gönderilmelidir.

Architecture Decision (ADR-017)

Business Intelligence katmanı; operasyonel sistemden ayrıştırılmış, ölçeklenebilir ve yapay zekâ ile entegre çalışacak şekilde tasarlanacaktır. KPI Motoru, Analytics Layer, veri ambarı ve AI servisleri ortak veri sözleşmeleri (data contracts) üzerinden iletişim kuracak; böylece raporlar, tahmin modelleri ve gelecekte eklenecek analiz servisleri aynı güvenilir veri kaynağını kullanacaktır.

✅ BÖLÜM 12 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın analitik altyapısı;

KPI Motoru,
Business Intelligence,
Analytics Layer,
Özel Rapor Tasarlayıcı,
Veri Ambarı,
AI İçgörüleri,
Tahmine Dayalı Analitik,
Doğal Dil ile Raporlama,
Executive Dashboard

gibi kurumsal BI platformlarında bulunan temel yetenekleri kapsayacak şekilde tanımlanmıştır.