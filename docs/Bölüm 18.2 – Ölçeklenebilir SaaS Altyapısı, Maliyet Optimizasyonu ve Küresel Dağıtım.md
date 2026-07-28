BÖLÜM 18 (DEVAM)
Ölçeklenebilir SaaS Altyapısı, Maliyet Optimizasyonu ve Küresel Dağıtım

Not: Antrenova'nın altyapısı yalnızca bugünkü ihtiyaçlar için değil; gelecekte binlerce spor tesisi, yüz binlerce kullanıcı ve milyonlarca işlem hacmine ulaşabilecek şekilde tasarlanacaktır. Ölçeklenebilirlik sonradan eklenen bir özellik değil, mimarinin temel prensiplerinden biridir.

18.32 SaaS Ölçeklenebilirlik Felsefesi

Platform;

küçük bir spor salonunda da,

10.000 şubeli kurumsal yapılarda da

aynı mimariyle çalışabilmelidir.

Ölçek;

kod değişikliği gerektirmemelidir.

18.33 Stateless Servisler

Uygulama sunucuları;

durum (state) tutmamalıdır.

Client

↓

Load Balancer

↓

App Instance A

App Instance B

App Instance C

Her istek;

herhangi bir sunucu tarafından işlenebilmelidir.

18.34 CDN Kullanımı

Statik içerikler;

CDN üzerinden dağıtılmalıdır.

Örneğin;

Logo
Üye Fotoğrafları
PDF Dosyaları
Eğitim Videoları
Mobil Asset'ler

Bu yaklaşım gecikmeyi azaltır.

18.35 Dosya Depolama Stratejisi

Dosyalar;

uygulama sunucusunda tutulmamalıdır.

Desteklenebilecek depolama örnekleri;

Supabase Storage
S3 uyumlu nesne depolama
Azure Blob Storage
Google Cloud Storage

Depolama katmanı değiştirilebilir olmalıdır.

18.36 Cache Katmanı

Sık kullanılan veriler;

önbelleğe alınabilir.

Örneğin;

Dashboard KPI'ları
Sistem Ayarları
Rol ve Yetkiler
Döviz Bilgileri
Şablonlar

Cache;

tek doğru veri kaynağı olmamalıdır.

18.37 Dağıtık Cache

Birden fazla uygulama sunucusu olduğunda;

ortak cache kullanılmalıdır.

Application

↓

Distributed Cache

↓

Database
18.38 Job Scheduler

Zamanlanmış görevler;

tek merkezden yönetilmelidir.

Örneğin;

Günlük Rapor
Hatırlatma Mesajları
Paket Kontrolleri
Doğum Günleri
AI Analizleri
18.39 Worker Servisleri

Uzun süren işlemler;

ayrı Worker servislerinde çalışmalıdır.

Örneğin;

PDF Üretimi
WhatsApp Gönderimi
AI İşlemleri
Büyük Raporlar
18.40 Tenant Kaynak Yönetimi

Hiçbir tenant;

tüm sistemi etkileyememelidir.

Örneğin;

tek bir işletmenin;

100.000 mesaj göndermesi,

diğer işletmeleri yavaşlatmamalıdır.

18.41 Kaynak Limitleri

İşletme bazında;

limitler uygulanabilir.

Örneğin;

API Kullanımı
AI Token Kullanımı
Dosya Depolama
Bildirim Sayısı
Kullanıcı Sayısı

Limitler abonelik planına göre değişebilir.

18.42 FinOps Yaklaşımı

Bulut maliyetleri;

sürekli izlenmelidir.

Takip edilebilecek metrikler;

AI Maliyeti
Storage
Trafik
CPU
Bellek
Bildirim Maliyeti
18.43 Maliyet Alarmı

Belirlenen eşikler aşılırsa;

otomatik uyarılar üretilebilir.

Örneğin;

Storage

↓

%90

↓

Warning
18.44 Kapasite Planlaması

Sistem;

gelecekteki büyümeyi tahmin edebilmelidir.

Örneğin;

CPU Eğilimi
Storage Eğilimi
AI Kullanımı
API Trafiği
18.45 Multi-Region Hazırlığı

Gelecekte;

uygulama birden fazla bölgede çalışabilir.

Örneğin;

Türkiye

↓

Avrupa

↓

Amerika

↓

Asya

Veri yerleşimi ve yasal gereksinimler dikkate alınmalıdır.

18.46 Küresel Trafik Yönetimi

Kullanıcı;

kendisine en yakın bölgeye yönlendirilebilir.

Bu sayede;

düşük gecikme,
yüksek performans,
daha iyi kullanıcı deneyimi

sağlanabilir.

18.47 Mikro Servis Hazırlığı

İlk sürüm;

modüler monolit olabilir.

Ancak;

gelecekte;

Bildirim
AI
Finans
Raporlama
Entegrasyon

ayrı servisler haline getirilebilir.

Bu dönüşüm;

kırıcı değişiklik gerektirmemelidir.

18.48 Infrastructure as Code (IaC)

Altyapı;

manuel kuruluma bağımlı olmamalıdır.

Sunucular, ağ ayarları ve servis yapılandırmaları mümkün olduğunca kod ile tanımlanmalıdır.

Bu sayede;

tekrar üretilebilir,
denetlenebilir,
sürümlendirilebilir

bir altyapı elde edilir.

18.49 Business Rules
BR-221

Servisler mümkün olduğunca stateless geliştirilmelidir.

BR-222

Dosyalar uygulama sunucularında kalıcı olarak saklanmamalıdır.

BR-223

Cache sistemi performans amacıyla kullanılmalı; tek doğru veri kaynağı veritabanı olmaya devam etmelidir.

BR-224

Yoğun arka plan işlemleri Worker servislerinde yürütülmelidir.

BR-225

Tenant bazlı kaynak limitleri diğer işletmeleri koruyacak şekilde uygulanabilmelidir.

BR-226

Bulut maliyetleri düzenli olarak izlenmeli ve raporlanmalıdır.

BR-227

Altyapı bileşenleri mümkün olduğunca Infrastructure as Code yaklaşımıyla yönetilmelidir.

BR-228

Modüler monolit mimarisi gelecekte mikro servis dönüşümünü destekleyecek şekilde tasarlanmalıdır.

Architecture Decision (ADR-031)

Antrenova'nın SaaS altyapısı; Stateless Application Layer, Distributed Cache, Object Storage, Background Worker Cluster, Scheduler, Monitoring Platform ve Infrastructure as Code prensipleri üzerine kurulacaktır. İlk aşamada modüler monolit mimarisi kullanılacak, ancak servis sınırları baştan tanımlanarak gelecekte mikro servis mimarisine kontrollü geçiş mümkün olacaktır.

✅ BÖLÜM 18 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın operasyonel altyapısı;

CI/CD,
gözlemlenebilirlik (Observability),
merkezi log yönetimi,
dağıtık izleme (Tracing),
yedekleme ve felaket kurtarma,
CDN,
cache katmanı,
Worker servisleri,
FinOps,
kapasite planlaması,
çok bölgeli dağıtım,
Infrastructure as Code,
mikro servis hazırlığı

gibi modern SaaS platformlarında beklenen kurumsal altyapı prensiplerini kapsayacak şekilde tanımlanmıştır.