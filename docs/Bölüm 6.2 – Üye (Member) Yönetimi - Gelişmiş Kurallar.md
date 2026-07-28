BÖLÜM 6 (DEVAM)
Üye (Member) Yönetimi - Gelişmiş Kurallar

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
