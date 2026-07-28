BÖLÜM 10 (DEVAM)
Finans ve Ödeme Yönetimi – Kasa, Borç ve Muhasebe Kuralları

Not: Bu bölüm, Antrenova'nın finans altyapısını spor salonu otomasyonundan kurumsal ERP seviyesine taşıyan kuralları içerir. Amaç yalnızca tahsilat yapmak değil; tüm finansal hareketlerin denetlenebilir, raporlanabilir ve muhasebe sistemleriyle entegre çalışmasını sağlamaktır.

10.22 Kasa (Cash Register)

Her işletmede bir veya birden fazla kasa bulunabilir.

Örnekler;

Ana Kasa
Resepsiyon Kasası
Cafe Kasası
Shop Kasası
Etkinlik Kasası

Her kasa bağımsız bakiye tutar.

10.23 Kasa Türleri

Desteklenen kasa türleri;

Nakit Kasa
Banka Hesabı
POS Hesabı
Sanal POS
Dijital Cüzdan

İşletme yeni finans hesapları oluşturabilir.

10.24 Gün Açılışı

İşletme isterse her vardiyada kasa açılışı yapılmasını zorunlu kılabilir.

Örneğin;

08:45

Kasayı Aç

↓

Başlangıç Nakit

2.500 TL

Bu değer gün sonunda karşılaştırılır.

10.25 Gün Kapanışı

Vardiya sonunda;

beklenen bakiye,
gerçek bakiye,
fark,
açıklama

kaydedilir.

Kapanış yapılmadan yeni vardiya başlatılamaz.

10.26 Kasa Hareketleri

Kasada gerçekleşen tüm işlemler kayıt altına alınır.

Örneğin;

Tahsilat
İade
Nakit Çıkışı
Nakit Girişi
Bankaya Para Aktarma
Bankadan Para Çekme

Hiçbir hareket silinmez.

10.27 Kasa Transferi

İki kasa arasında transfer yapılabilir.

Örneğin;

Ana Kasa

↓

5.000 TL

↓

Banka Hesabı

Transfer;

çift taraflı kayıt oluşturmalıdır.

10.28 Banka Hesapları

İşletme;

birden fazla banka hesabı tanımlayabilir.

Örneğin;

Ziraat
Halkbank
Garanti BBVA
İş Bankası

Her hesap ayrı raporlanır.

10.29 POS Terminalleri

Her POS cihazı ayrı tanımlanabilir.

Örneğin;

Garanti POS

↓

Resepsiyon

veya

Ziraat POS

↓

Cafe

Komisyon oranları POS bazında tanımlanabilir.

10.30 Kart Komisyonu

İşletme aşağıdaki seçeneklerden birini belirleyebilir.

Komisyon işletmeye ait
Komisyon üyeye yansıtılır
İşleme göre değişir

Bu özellik mevcut finans ayarlarıyla uyumlu çalışmalıdır.

10.31 Borç Yaşlandırma (Aging)

Borçlar yaşlarına göre sınıflandırılır.

Örneğin;

Süre	Durum
0–30 Gün	Normal
31–60 Gün	Dikkat
61–90 Gün	Risk
90+ Gün	Kritik

Bu sınıflandırma tahsilat ekibi için kullanılır.

10.32 Gecikme Faizi

İşletme isterse;

vadesi geçen borçlara

otomatik faiz uygulayabilir.

Faiz;

günlük,
aylık,
sabit

olarak tanımlanabilir.

10.33 Otomatik Hatırlatma

Borç yaklaşınca;

otomatik bildirim gönderilebilir.

Örneğin;

7 gün önce
Vade günü
3 gün gecikince
15 gün gecikince

Kanallar;

WhatsApp
SMS
E-posta
Push Bildirimi
10.34 Gelir Kategorileri

Gelirler kategorilere ayrılabilir.

Örneğin;

Paket Satışı
PT Satışı
Ürün Satışı
Cafe Geliri
Etkinlik Geliri
Diğer
10.35 Gider Yönetimi

Antrenova yalnızca gelirleri değil;

giderleri de takip edebilir.

Örneğin;

Kira
Maaş
Elektrik
Su
Doğalgaz
Reklam
Temizlik
Vergi
10.36 Gider Onayı

Belirli tutarın üzerindeki giderler;

yönetici onayı gerektirebilir.

Örneğin;

50.000 TL

↓

Business Owner Onayı
10.37 Finansal Belgeler

Her finans hareketine;

Fatura
Makbuz
PDF
Fotoğraf
Dekont

eklenebilir.

Belgeler sürümlenebilir.

10.38 Online Ödeme Mutabakatı

Online ödeme sağlayıcısından gelen sonuçlar;

otomatik olarak eşleştirilir.

Örneğin;

İyzico

↓

Ödeme Başarılı

↓

Payment Confirmed

Eşleşmeyen işlemler manuel incelemeye alınır.

10.39 Banka Mutabakatı

İleride banka ekstresi içe aktarılabilir.

Sistem;

ödeme kayıtları ile

ekstreyi

otomatik eşleştirebilir.

Uyuşmayan kayıtlar raporlanır.

10.40 e-Fatura ve e-Arşiv

İleride;

resmî e-Fatura sağlayıcılarıyla entegrasyon desteklenecektir.

Örneğin;

e-Fatura
e-Arşiv
e-İrsaliye

Antrenova, belge üretimini yönetir ancak mali mühür ve resmî süreçler yetkili entegratör üzerinden yürütülür.

10.41 Muhasebe Entegrasyonu

Finans kayıtları;

muhasebe yazılımlarına aktarılabilir.

Örneğin;

Logo
Mikro
Zirve
Luca
Netsis

ve gelecekte desteklenecek diğer sistemler.

Aktarım mümkün olduğunca standart veri formatlarıyla yapılmalıdır.

10.42 Finans Dashboard'u

Dashboard aşağıdaki KPI'ları göstermelidir.

Günlük Tahsilat
Aylık Ciro
Bekleyen Borç
Tahsilat Oranı
Ortalama Paket Tutarı
Günlük Nakit Akışı
En Çok Satılan Paket
En Çok Gelir Getiren Şube
10.43 AI Finans Analizi

Yapay zekâ;

tahsil edilemeyen borç riskini,
nakit akışını,
satış eğilimlerini,
sezonluk gelir değişimlerini,
fiyat optimizasyonunu

analiz ederek öneriler sunabilir.

Bu öneriler karar destek amaçlıdır.

10.44 Finansal Denetim

Her finansal değişiklik için aşağıdaki bilgiler saklanmalıdır.

İşlemi yapan kullanıcı
Tarih
Saat
IP Adresi
Eski Değer
Yeni Değer
Açıklama

Bu kayıtlar silinemez.

10.45 Business Rules
BR-092

Kasa hareketleri fiziksel olarak silinemez.

BR-093

Her kasa transferi en az iki finans hareketi oluşturmalıdır (çıkış ve giriş).

BR-094

Borç yaşlandırması sistem tarafından otomatik hesaplanmalıdır.

BR-095

Online ödeme sonuçları doğrulanmadan ödeme kesinleşmiş sayılmamalıdır.

BR-096

Finansal belgeler ilgili ödeme veya gider kaydıyla ilişkilendirilmelidir.

BR-097

Muhasebe entegrasyonları, finansal kayıtları değiştirmemeli; yalnızca senkronize etmelidir.

BR-098

Tüm finansal raporlar işletme, şube ve tarih filtrelerini desteklemelidir.

BR-099

Gider kayıtları da gelir kayıtları gibi audit log kapsamında izlenmelidir.

BR-100

Hiçbir finansal kayıt doğrudan güncellenmemeli; düzeltme işlemleri yeni hareketler oluşturarak gerçekleştirilmelidir.

Architecture Decision (ADR-013)

Finans modülü, olay tabanlı ve değiştirilemez kayıt (immutable ledger) mantığı üzerine kurulacaktır. Ödeme, iade, transfer, gider ve tahsilat gibi her finansal olay bağımsız bir kayıt üretir. Bu yapı sayesinde;

muhasebe entegrasyonları,
denetim süreçleri,
gelir analizleri,
AI tahminleri,
finansal raporlar

aynı güvenilir veri kaynağı üzerinden çalışacaktır.