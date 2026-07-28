BÖLÜM 17
Mobil Uygulama, Offline Çalışma ve Senkronizasyon Mimarisi

Not: Antrenova'nın mobil uygulaması, web panelinin küçültülmüş bir kopyası olmayacaktır. Mobil uygulama; saha kullanımı, hızlı erişim, çevrimdışı çalışma ve anlık bildirimler üzerine tasarlanmış, bağımsız bir kullanıcı deneyimi sunacaktır. İnternet bağlantısı olmasa bile temel işlemler güvenli şekilde sürdürülebilmelidir.

17.1 Amaç

Mobil mimarinin amacı;

her yerden erişim sağlamak,
internet kesintilerinden etkilenmemek,
hızlı kullanıcı deneyimi sunmak,
çevrimdışı çalışabilmek,
cihaz özelliklerinden yararlanabilmektir.
17.2 Mobile First Yaklaşımı

Yeni geliştirilecek her özellik;

önce mobil kullanım senaryosu düşünülerek tasarlanmalıdır.

Ardından;

tablet

↓

web

↓

desktop

uyarlanmalıdır.

17.3 Platform Desteği

Antrenova;

aşağıdaki platformları desteklemelidir.

Web
Android
iOS
Tablet
PWA

Her platform aynı iş kurallarını kullanmalıdır.

17.4 Ortak İş Mantığı

Mobil uygulama;

ayrı iş kuralları yazmamalıdır.

Web

↓

API

↓

Business Layer

↓

Database

↑

Mobile

İş kuralları merkezi katmanda çalışmalıdır.

17.5 Offline First

Mobil uygulama;

internet varmış gibi çalışmalıdır.

Bağlantı yoksa;

işlemler yerel olarak saklanır.

Bağlantı geldiğinde;

senkronize edilir.

17.6 Yerel Veri Deposu

Mobil cihazda;

gerekli veriler güvenli şekilde saklanabilir.

Örneğin;

Profil
Takvim
Son Üyeler
Randevular
Paketler

Hassas veriler mümkün olduğunca sınırlandırılmalıdır.

17.7 Senkronizasyon Motoru

Mobil uygulama;

arka planda senkronizasyon yapmalıdır.

Offline

↓

Queue

↓

Sync Engine

↓

API
17.8 Senkronizasyon Türleri

Desteklenebilecek yöntemler;

Manuel
Otomatik
Arka Plan
Açılışta
Belirli Aralıklarla

İşletme gerekli durumlarda manuel senkronizasyon başlatabilir.

17.9 Conflict (Çakışma) Yönetimi

Aynı kayıt;

iki cihazdan değiştirilebilir.

Örneğin;

Tablet

↓

Member

↑

Telefon

Bu durumda;

Conflict Resolver devreye girmelidir.

17.10 Çakışma Stratejileri

Desteklenebilecek stratejiler;

Son değişiklik kazanır
Sunucu önceliklidir
Kullanıcı seçer
Alan bazlı birleştirme

Her veri türü için farklı strateji tanımlanabilir.

17.11 Offline Queue

Gönderilemeyen işlemler;

yerel kuyruğa alınmalıdır.

Örneğin;

Ödeme
Yoklama
Randevu
Not

Bağlantı geldiğinde;

otomatik gönderilir.

17.12 Senkronizasyon Durumu

Her kayıt;

senkronizasyon durumuna sahip olabilir.

Bekliyor
Gönderildi
Çakıştı
Başarısız
Tamamlandı
17.13 Delta Sync

Tüm veriler;

her seferinde yeniden indirilmemelidir.

Yalnızca değişen kayıtlar alınmalıdır.

Bu yaklaşım;

performansı artırır.

17.14 Arka Plan Senkronizasyonu

Uygulama kapalı olsa bile;

uygun platform izinleri kapsamında belirli işlemler arka planda sürdürülebilir.

Örneğin;

Bildirim hazırlığı
Veri güncellemesi
Senkronizasyon

Platformun enerji ve arka plan çalışma kuralları dikkate alınmalıdır.

17.15 Push Notification

Mobil uygulama;

Push Notification desteklemelidir.

Örneğin;

Yeni Randevu
Ödeme
Hatırlatma
Paket Bitişi
Kampanya

Bildirim tercihleri kullanıcı tarafından yönetilebilmelidir.

17.16 Biyometrik Giriş

Desteklenebilecek yöntemler;

Face ID
Touch ID
Parmak İzi

Biyometrik doğrulama, cihazın güvenlik altyapısı üzerinden kullanılmalıdır.

17.17 Mobil Güvenlik

Mobil uygulama;

Güvenli Token Saklama
Sertifika Doğrulama
Ekran Kilidi
Güvenli Depolama

gibi güvenlik önlemlerini desteklemelidir.

17.18 Kamera Entegrasyonu

Mobil uygulama;

kamerayı kullanabilir.

Örneğin;

Üye Fotoğrafı
Evrak Tarama
QR Kod
Barkod
17.19 QR ve Barkod

QR;

şu amaçlarla kullanılabilir.

Üye Girişi
Paket Kontrolü
Belge Doğrulama
Etkinlik Katılımı
17.20 Cihaz Özellikleri

Mobil uygulama;

gerektiğinde cihaz özelliklerini kullanabilir.

Örneğin;

Kamera
Konum
NFC
Bluetooth
Bildirim Servisleri

Her izin kullanıcı onayıyla alınmalıdır.

17.21 Business Rules
BR-195

Mobil uygulama web uygulamasından bağımsız iş kuralları içermemelidir.

BR-196

Offline işlemler veri kaybına neden olmadan senkronize edilmelidir.

BR-197

Çakışma çözümü veri türüne göre yapılandırılabilir olmalıdır.

BR-198

Yerel cihazda yalnızca gerekli veriler saklanmalıdır.

BR-199

Mobil cihazda saklanan hassas veriler güvenli depolama mekanizmaları kullanılarak korunmalıdır.

BR-200

Push bildirimleri kullanıcı tercihleri ve izinleri doğrultusunda gönderilmelidir.

Architecture Decision (ADR-027)

Mobil mimari Offline-First yaklaşımını benimseyecektir. Yerel veri deposu, senkronizasyon motoru, conflict resolver ve arka plan görev yöneticisi birbirinden bağımsız bileşenler olarak tasarlanacaktır. Böylece internet bağlantısının zayıf olduğu veya kesildiği durumlarda dahi temel operasyonlar kesintiye uğramadan sürdürülebilecektir.

✅ BÖLÜM 17 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 17.2 – Mobil Performans, Cihaz Yönetimi ve Kurumsal Mobil Altyapı

Bu bölümde;

cihaz kayıt sistemi,
çoklu cihaz yönetimi,
uzaktan oturum kapatma,
uygulama sürüm yönetimi,
zorunlu güncelleme politikaları,
crash reporting,
performans izleme,
offline veri şifreleme,
batarya optimizasyonu,
kurumsal cihaz (MDM) hazırlığı,
kiosk modu,
Apple Watch / Wear OS hazırlığı,
widget ve canlı etkinlik (Live Activities) desteği,
mobil analitik ve kullanım istatistikleri

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın mobil ekosistemini uzun yıllar sürdürülebilir, güvenli ve yüksek performanslı hale getirecek mimariyi oluşturacaktır.