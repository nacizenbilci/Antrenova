BÖLÜM 17 (DEVAM)
Mobil Performans, Cihaz Yönetimi ve Kurumsal Mobil Altyapı

Not: Mobil uygulama yalnızca telefonda çalışan bir istemci değildir. Kurumsal seviyede cihaz yönetimi, sürüm kontrolü, güvenlik, performans ve operasyonel izlenebilirlik sağlayan bir mobil platform olarak tasarlanacaktır.

17.22 Cihaz Kayıt Sistemi

Her giriş yapan mobil cihaz;

benzersiz bir cihaz kaydı oluşturmalıdır.

Device ID

↓

Platform

↓

App Version

↓

OS Version

↓

Registered At

Her cihaz kullanıcı hesabından bağımsız izlenebilmelidir.

17.23 Cihaz Envanteri

Kullanıcı;

hesabına bağlı tüm cihazları görebilmelidir.

Örneğin;

iPhone 16 Pro
Samsung Galaxy S26
iPad Pro
Web Browser

Her cihazın;

son giriş tarihi,
son senkronizasyonu,
aktif durumu

görülebilmelidir.

17.24 Çoklu Cihaz Desteği

Bir kullanıcı;

aynı anda farklı cihazlardan çalışabilir.

Örneğin;

Telefon

↓

Tablet

↓

Web

↓

Desktop

Tüm cihazlar senkron çalışmalıdır.

17.25 Uzaktan Oturum Sonlandırma

Yönetici veya kullanıcı;

belirli bir cihazın oturumunu kapatabilir.

Cihaz

↓

Logout

↓

Token Revoke

↓

Sync Stop
17.26 Çalıntı Cihaz Senaryosu

Cihaz kaybolursa;

kullanıcı;

oturumu kapatabilir,
cihazı engelleyebilir,
tokenları iptal edebilir.

Bir sonraki bağlantıda;

uygulama erişimi sonlandırılır.

17.27 Uygulama Sürüm Yönetimi

Her istemci;

uygulama sürümünü sunucuya bildirir.

Örneğin;

2.3.1

Sunucu;

minimum desteklenen sürümü kontrol edebilir.

17.28 Zorunlu Güncelleme

Kritik güvenlik durumlarında;

eski sürümler engellenebilir.

Minimum Version

↓

Current Version

↓

Update Required
17.29 Soft Update

Kritik olmayan güncellemelerde;

kullanıcıya yalnızca öneri gösterilir.

"Şimdi Güncelle"

veya

"Daha Sonra"

17.30 Crash Reporting

Beklenmeyen uygulama hataları;

otomatik raporlanmalıdır.

Toplanabilecek bilgiler;

Hata Türü
Stack Trace
App Version
Device Model
OS Version

Kişisel veri içermemelidir.

17.31 Performans İzleme

Mobil performans sürekli ölçülmelidir.

Örneğin;

Açılış Süresi
API Süresi
Sync Süresi
Bellek Kullanımı
FPS
17.32 Ağ Kalitesi Analizi

Mobil uygulama;

bağlantı kalitesini algılayabilir.

Offline

↓

2G

↓

3G

↓

4G

↓

5G

↓

Wi-Fi

Düşük bağlantıda;

veri kullanımı optimize edilebilir.

17.33 Veri Sıkıştırma

Mobil API;

gerektiğinde sıkıştırılmış veri kullanabilir.

Bu;

özellikle düşük hızlı bağlantılarda avantaj sağlar.

17.34 Akıllı Senkronizasyon

Zayıf bağlantıda;

öncelikli veriler senkronize edilir.

Örneğin;

Yoklama
Ödemeler
Randevular
Raporlar
17.35 Offline Şifreleme

Yerel veriler;

cihaz üzerinde şifrelenmiş saklanmalıdır.

Şifreleme;

işletim sisteminin güvenli depolama altyapısından yararlanmalıdır.

17.36 Kiosk Modu

Tablet;

resepsiyon cihazı olarak kullanılabilir.

Kiosk modunda;

uygulamadan çıkış engellenebilir,
yalnızca belirli ekranlar kullanılabilir.
17.37 Kurumsal Cihaz Yönetimi (MDM)

Gelecekte;

kurumsal cihaz yönetim sistemleriyle uyum sağlanabilir.

Örneğin;

cihaz politikaları,
uzaktan silme,
zorunlu PIN,
kurumsal profil.
17.38 Wearable Hazırlığı

İleride;

giyilebilir cihaz desteği eklenebilir.

Örneğin;

Apple Watch
Wear OS

Desteklenebilecek özellikler;

Randevu Bildirimleri
Yoklama
Hızlı Onaylar
17.39 Widget ve Live Activities

Mobil platformlar desteklediğinde;

ana ekran widget'ları kullanılabilir.

Örneğin;

Bugünkü Randevular
Günlük Gelir
Bekleyen Tahsilatlar

Canlı etkinlikler (Live Activities) gibi platform özellikleri, desteklenen işletim sistemlerinde değerlendirilebilir.

17.40 Mobil Analitik

Mobil kullanım ölçülebilmelidir.

Örneğin;

Günlük Aktif Kullanıcı
En Çok Kullanılan Ekran
Ortalama Oturum Süresi
Çökme Oranı
Push Açılma Oranı

Analitik toplama işlemleri kullanıcı gizliliği ve yürürlükteki mevzuat gözetilerek yapılmalıdır.

17.41 Business Rules
BR-201

Her mobil cihaz benzersiz Device ID ile kayıt altına alınmalıdır.

BR-202

Kayıp veya çalıntı cihazların oturumları uzaktan sonlandırılabilmelidir.

BR-203

Kritik güvenlik güncellemelerinde minimum uygulama sürümü zorunlu tutulabilmelidir.

BR-204

Offline veriler cihaz üzerinde güvenli şekilde saklanmalıdır.

BR-205

Mobil performans metrikleri düzenli olarak izlenmeli ve raporlanmalıdır.

BR-206

Crash raporları kişisel veri içermeyecek şekilde anonimleştirilmelidir.

BR-207

Kiosk modu yalnızca yetkilendirilmiş kurumsal cihazlarda etkinleştirilebilmelidir.

BR-208

Mobil analitik verileri kullanıcı gizliliği ve yasal yükümlülükler gözetilerek toplanmalıdır.

Architecture Decision (ADR-028)

Mobil platform; Device Registry, Sync Engine, Offline Storage, Crash Reporter, Performance Monitor, Update Manager ve Push Service bileşenlerinden oluşacaktır. Her bileşen bağımsız olarak geliştirilecek ve platforma yeni mobil özellikler eklenirken mevcut mimari bozulmadan genişletilebilecektir.

✅ BÖLÜM 17 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın mobil altyapısı;

Offline-First mimarisi,
güvenli senkronizasyon,
cihaz yönetimi,
uzaktan oturum kapatma,
sürüm kontrolü,
crash reporting,
performans izleme,
kiosk modu,
kurumsal mobil yönetim hazırlığı,
giyilebilir cihaz desteği,
mobil analitik

gibi kurumsal mobil platformlarda beklenen tüm temel yetenekleri kapsayacak şekilde tanımlanmıştır.