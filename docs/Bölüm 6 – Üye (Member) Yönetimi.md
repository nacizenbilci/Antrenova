BÖLÜM 6
Üye (Member) Yönetimi

Not: Bu bölüm, Antrenova'nın en kritik modülüdür. Üye sistemi; paket, randevu, ödeme, devam takibi, raporlama, RFID, bildirim ve yapay zekâ modüllerinin merkezinde yer alır.

6.1 Amaç

Üye modülünün amacı;

üyelerin yaşam döngüsünü yönetmek,
üyelik süreçlerini standartlaştırmak,
geçmişi eksiksiz korumak,
finansal ve operasyonel süreçlerle entegre çalışmaktır.

Üye yalnızca "isim ve telefon" bilgisinden oluşan bir kayıt değildir.

Her üye, işletmeyle olan tüm ilişkisinin dijital geçmişidir.

6.2 Member Tanımı

Member;

işletmeden hizmet alan gerçek kişidir.

Üye;

aktif olabilir,
geçmişte hizmet almış olabilir,
gelecekte tekrar kayıt olabilir.

Hiçbir zaman geçmişi silinmez.

6.3 Temel İlke

Bir kişi sistemde yalnızca bir kez oluşturulur.

Aynı kişi ikinci kez kayıt edilmez.

Üye tekrar gelirse;

eski kaydı yeniden aktif edilir.

Yeni kayıt açılmaz.

Bu yaklaşım raporların doğruluğunu korur.

6.4 Member Kimliği

Her üyenin değişmeyen UUID değeri vardır.

id
(UUID)

Bu değer;

paketlerde
ödemelerde
randevularda
devam kayıtlarında
raporlarda

referans olarak kullanılır.

6.5 Üye Yaşam Döngüsü
Potansiyel

↓

Kayıt

↓

Aktif

↓

Pasif

↓

Donduruldu

↓

Tekrar Aktif

↓

Arşiv

↓

Kalıcı Silme (İstisnai)
6.6 Üye Durumları

Her üyenin yalnızca bir aktif durumu bulunur.

Prospect

Henüz kayıt olmamıştır.

Satış sürecindedir.

Active

Sistemi aktif kullanmaktadır.

Frozen

Üyeliği geçici olarak durdurulmuştur.

Passive

Paketi bitmiştir.

Devam etmiyordur.

Archived

İşletme ile ilişkisi sona ermiştir.

Geçmiş korunur.

Deleted

Yasal gereklilik dışında kullanılmaması önerilir.

6.7 Üye Oluşturma

Yeni üye oluşturulurken minimum bilgiler:

Ad
Soyad
Telefon

zorunludur.

İsteğe bağlı bilgiler:

E-posta
TC Kimlik No
Doğum Tarihi
Cinsiyet
Adres
Meslek
Acil Durum Kişisi

Eksik bilgiler daha sonra tamamlanabilir.

6.8 Benzersizlik Kontrolü

Yeni kayıt oluşturulmadan önce sistem aşağıdaki alanlarda kontrol yapar.

Telefon
E-posta
TC Kimlik No

Eşleşme bulunursa kullanıcı uyarılır.

Örneğin:

"Bu telefon numarasına sahip bir üye zaten mevcut. Mevcut üyeyi açmak ister misiniz?"

6.9 Üye Numarası

UUID dışında kullanıcı dostu bir üye kodu oluşturulur.

Örneğin:

M-2026-000154

Bu kod;

makbuzlarda,
raporlarda,
yazdırmalarda

gösterilebilir.

6.10 Fotoğraf

Her üyenin profil fotoğrafı olabilir.

Desteklenen kullanım alanları:

Profil
Yoklama
Randevu
RFID
Mobil

Fotoğraf değiştirilse bile eski fotoğraf gerekirse arşivlenebilir.

6.11 Veli Sistemi

18 yaş altındaki üyeler için veli kaydı zorunlu olabilir.

Bir veli;

birden fazla üyeye bağlanabilir.

Örneğin;

Anne

↓

Ali

Ayşe

Mehmet

Veli iletişim bilgileri üyeden bağımsız tutulur.

6.12 Sağlık Bilgileri

İşletme isterse aşağıdaki bilgileri saklayabilir.

Kronik Hastalık
Alerji
Ameliyat Geçmişi
Doktor Notu
Kullanılan İlaçlar
Egzersiz Kısıtlamaları

Bu alanlara erişim yetki ile sınırlandırılır.

6.13 Acil Durum Bilgileri

Üyeye ait;

Yakın Adı
Yakınlık Derecesi
Telefon

saklanabilir.

Bu bilgiler yalnızca yetkili personel tarafından görüntülenebilir.

6.14 Ölçümler (Body Measurements)

Üyenin zaman içerisindeki ölçümleri saklanabilir.

Örneğin;

Boy
Kilo
Yağ Oranı
Kas Oranı
BMI
Bel
Kalça
Omuz
Göğüs
Kol
Bacak

Hiçbir ölçüm güncellenmez.

Yeni ölçüm eklenir.

Böylece geçmiş korunur.

6.15 Not Sistemi

Üyeye sınırsız not eklenebilir.

Not türleri:

Genel
Sağlık
Satış
Eğitmen
Finans
Uyarı

Her not;

oluşturan kullanıcı ve tarih bilgisiyle saklanır.

6.16 Belgeler

Üyeye aşağıdaki belgeler bağlanabilir.

Sözleşmeler
KVKK Onayı
Sağlık Beyanı
Fotoğraflar
PDF Dosyaları
Kimlik Kopyası (isteğe bağlı)

Belgeler sürümlenebilir.

6.17 RFID İlişkisi

Bir üyeye;

aynı anda yalnızca bir aktif RFID kart atanabilir.

Kart değiştirildiğinde;

eski kart geçmişte kalır.

Silinmez.

6.18 QR Kimliği

Her üyeye benzersiz QR kimliği üretilebilir.

QR;

giriş,
yoklama,
doğrulama

işlemlerinde kullanılabilir.

6.19 Paket İlişkisi

Bir üyenin;

aynı anda

birden fazla aktif paketi olabilir.

Örneğin;

Fitness Paketi
Pilates Paketi

eş zamanlı kullanılabilir.

Ancak aynı hizmet için çakışan kurallar Paket modülünde tanımlanır.

6.20 Randevu İlişkisi

Üye;

geçmişte aldığı bütün randevuları görebilmelidir.

Hiçbir randevu silinmez.

İptal edilen randevular da geçmişte kalır.

6.21 Ödeme Geçmişi

Üyenin tüm finansal hareketleri tek ekranda görüntülenebilir.

Tahsilatlar
İadeler
Borçlar
İndirimler
Makbuzlar

Bu kayıtlar değiştirilemez; gerektiğinde düzeltme hareketleri oluşturulur.

6.22 Business Rules
BR-031

Bir kişi sistemde yalnızca bir kez kayıt edilir.

BR-032

Telefon numarası aynı olan yeni üye oluşturulmadan önce sistem mevcut kayıtları kontrol etmelidir.

BR-033

Üyenin geçmiş randevuları, ödemeleri ve paketleri hiçbir zaman silinmez.

BR-034

Ölçüm kayıtları güncellenmez; her değişiklik yeni bir ölçüm kaydı olarak eklenir.

BR-035

Bir üyeye aynı anda yalnızca bir aktif RFID kart atanabilir.

BR-036

18 yaş altındaki üyeler için işletme ayarına bağlı olarak veli bilgisi zorunlu hale getirilebilir.

Architecture Decision (ADR-004)

Üye kaydı, kişinin kendisini temsil eder; paket, ödeme, randevu ve devam bilgileri ise bu kişiye bağlı işlemlerdir. Bu nedenle üyenin temel kaydı mümkün olduğunca sade tutulacak; işlem geçmişi ayrı tablolar üzerinden ilişkilendirilecektir. Bu yaklaşım performansı artırır, veri tekrarını azaltır ve gelecekte CRM özelliklerinin eklenmesini kolaylaştırır.

6.23 Üyelik Dondurma

Üyelik dondurma, üyenin paketini iptal etmeden belirli bir süre boyunca kullanımını durdurmasını sağlar.

Dondurma işlemi;

sağlık problemi
askerlik
seyahat
hamilelik
sakatlık
işletme kararı

gibi nedenlerle uygulanabilir.

6.24 Dondurma Kuralları

Her işletme aşağıdaki ayarları belirleyebilir.

Dondurma aktif mi?
En fazla kaç gün?
En fazla kaç kez?
Ücretli mi?
Ücretsiz mi?
Yönetici onayı gerekiyor mu?

Bu ayarlar Paket Ayarları modülünden yönetilir.

6.25 Dondurma Sürecinde

Dondurulan üyede;

✔ Yeni seans kullanılamaz.

✔ Yeni randevu oluşturulamaz.

✔ RFID girişi engellenebilir.

✔ QR girişi engellenebilir.

✔ Otomatik hatırlatmalar durdurulabilir.

Ancak;

üyenin geçmiş verileri görünmeye devam eder.

6.26 Dondurma Bitişi

Dondurma süresi dolunca sistem;

üyeyi otomatik aktif hale getirebilir.

veya

yönetici onayı bekleyebilir.

Bu davranış işletme ayarından belirlenebilir.

6.27 Paket Yenileme

Paket biten üye silinmez.

Durumu;

Passive

olarak güncellenir.

Yeni paket satın alındığında;

aynı üye tekrar Active olur.

Yeni kayıt oluşturulmaz.

6.28 Pasif Üyeler

Pasif üyeler;

raporlarda görünmeye devam eder.

İstenirse filtrelenebilir.

Pasif üyeler;

yeniden kayıt olabilir.

6.29 Arşivleme

Uzun süre işlem görmeyen üyeler arşivlenebilir.

Arşivlenen üyeler;

normal listelerde görünmez.

Ancak;

raporlarda bulunabilir.

6.30 Kalıcı Silme

Kalıcı silme;

normal kullanım senaryosu değildir.

Yalnızca;

KVKK
GDPR
yasal zorunluluk

durumlarında kullanılmalıdır.

Silinen üyenin;

kişisel bilgileri kaldırılır.

Ancak;

anonim finansal kayıtlar

yasal gereklilik kapsamında korunabilir.

6.31 Yinelenen Kayıt Birleştirme (Merge)

İşletmeler zamanla aynı kişiyi yanlışlıkla ikinci kez oluşturabilir.

Bu durumda;

Merge Member

işlemi uygulanır.

6.32 Merge İşlemi

Birleştirme sırasında;

A Üyesi

↓

B Üyesi

↓

Tek Üye

haline gelir.

Aşağıdaki kayıtlar taşınır.

Paketler
Ödemeler
Randevular
Devamlar
Ölçümler
Notlar
Belgeler
RFID geçmişi

Eski kayıt silinmez.

Birleştirildi olarak işaretlenir.

6.33 Kara Liste

İşletme isterse;

üyeyi kara listeye alabilir.

Sebepler;

Şiddet
Dolandırıcılık
Sürekli ödeme problemi
İşletme kurallarına aykırılık
6.34 Kara Liste Davranışı

Kara listedeki üye;

yeni paket alamaz,
yeni randevu oluşturamaz,
RFID kullanamaz.

Ancak;

geçmiş kayıtları korunur.

6.35 Referans Sistemi

Üye;

başka bir üyeyi davet edebilir.

Sistem;

hangi üyeyi

kimin getirdiğini

takip edebilir.

Bu bilgi;

kampanyalarda kullanılabilir.

6.36 Sadakat Sistemi

İleride;

puan sistemi desteklenecektir.

Örneğin;

100 puan

↓

1 ücretsiz seans

veya

İndirim.

Puan hareketleri silinmez.

6.37 Üye Etiketleri

Üyelere sınırsız etiket atanabilir.

Örneğin;

VIP
Kurumsal
Çocuk
Profesyonel Sporcu
Diyet Programı
Riskli
Premium

Etiketler raporlamada filtre olarak kullanılabilir.

6.38 Segmentasyon

Sistem üyeleri otomatik gruplandırabilir.

Örneğin;

Son 30 gündür gelmeyenler

↓

Risk Grubu

Son 1 yıldır aktif

↓

Sadık Üyeler

Borcu olanlar

↓

Finans Takibi

6.39 CRM Geçmişi

Üyeyle yapılan bütün iletişim tek yerde saklanabilir.

Örneğin;

WhatsApp
SMS
Mail
Telefon Görüşmesi
Notlar

Bu yapı ileride CRM modülünü oluşturacaktır.

6.40 Üye Zaman Tüneli (Timeline)

Her üyenin tek ekranda zaman tüneli bulunur.

Örneğin;

12.01.2027
Kayıt oluşturuldu

15.01.2027
Paket satın aldı

17.01.2027
İlk randevu

19.01.2027
Ödeme yaptı

24.01.2027
Ölçüm eklendi

28.01.2027
WhatsApp gönderildi

01.02.2027
Paket yenilendi

Bu ekran, üyenin tüm geçmişini kronolojik olarak gösterir.

6.41 Yapay Zekâ Analizleri

AI modülü ileride aşağıdaki analizleri yapabilir.

Ayrılma riski
Yenileme olasılığı
Devamsızlık tahmini
En uygun antrenman saati
Satın alma eğilimi
Ödeme gecikme tahmini

Bu analizler yalnızca öneri niteliğindedir.

Karar kullanıcıya aittir.

6.42 Veri Saklama Politikası

Üye geçmişi;

işletme tarafından silinmedikçe korunur.

Hiçbir finansal kayıt;

üye pasif oldu diye silinmez.

6.43 Performans Kuralları

Üye detay sayfası;

tek sorguyla yüklenmeye çalışılmamalıdır.

Büyük veriler;

sekmeli (lazy loading)

olarak yüklenmelidir.

Örneğin;

Randevular
Ödemeler
Belgeler
Ölçümler

ayrı sorgularla getirilebilir.

6.44 Güvenlik

Sağlık bilgileri;

normal kullanıcılar tarafından görülemez.

Yetki gerektirir.

Belgeler;

doğrudan URL ile erişilemez.

İmzalı (signed) bağlantılar kullanılmalıdır.

6.45 Business Rules
BR-037

Paket yenilemede yeni üye oluşturulamaz.

BR-038

Üye dondurma süresi paket süresine eklenmelidir.

BR-039

Merge işlemi geri alınabilir kayıt üretmelidir.

BR-040

Kara listedeki üyeye yeni hizmet satılamaz.

BR-041

Hiçbir finansal hareket merge işlemi sırasında kaybolamaz.

BR-042

Üyenin zaman tünelindeki olaylar kronolojik olarak değiştirilemez.

BR-043

Bir üye arşivlendiğinde ilişkili paket, ödeme ve randevu kayıtları korunmalıdır.

BR-044

Üye detay ekranı, yüksek veri hacminde dahi kabul edilebilir performansla çalışacak şekilde parçalı yükleme (lazy loading) prensibini uygulamalıdır.

Architecture Decision (ADR-005)

Üye modülü yalnızca kayıt ekranı değildir; Antrenova'nın merkezi CRM nesnesidir. Gelecekte eklenecek satış, pazarlama, sadakat, AI önerileri ve müşteri ilişkileri özellikleri aynı üye kaydı üzerinde çalışacaktır. Bu nedenle Member modeli gereksiz alanlarla şişirilmeyecek; genişleyen bilgiler (ölçümler, notlar, belgeler, zaman tüneli vb.) ayrı ilişkili tablolar üzerinden yönetilecektir.
