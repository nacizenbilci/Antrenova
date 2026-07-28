BÖLÜM 8
Randevu (Appointment) Yönetimi

Not: Randevu modülü, Antrenova'nın operasyonel merkezidir. Paket, eğitmen, salon, devam, bildirim, finans, RFID ve yapay zekâ modülleri bu sistemle doğrudan bağlantılıdır. Bu bölüm, sistemdeki mevcut merkezi kural motorunun (Appointment Rule Engine) temel referans dokümanıdır.

8.1 Amaç

Randevu sistemi;

üyelerin planlanmasını,
eğitmen takvimlerini,
salon kullanımını,
kapasite yönetimini,
seans takibini,
otomatik planlamayı

tek merkezden yönetir.

8.2 Temel Tanım

Bir randevu;

belirli bir tarih ve saatte,

belirli bir hizmet için,

belirli bir üyenin,

belirli bir eğitmenle yaptığı planlanmış rezervasyondur.

8.3 Appointment Kimliği

Her randevunun benzersiz UUID değeri vardır.

İlişkili alanlar:

id
business_id
branch_id
member_id
package_id
trainer_id
service_id
hall_id
8.4 Randevu Yaşam Döngüsü
Taslak

↓

Planlandı

↓

Onaylandı

↓

Hatırlatma Gönderildi

↓

Check-in

↓

Tamamlandı

↓

Yoklama İşlendi

↓

Arşiv

Alternatif akışlar;

Planlandı

↓

İptal

veya

Planlandı

↓

Gelmedi (No Show)
8.5 Randevu Durumları

Desteklenen durumlar:

Draft
Scheduled
Confirmed
Checked In
Completed
Cancelled
No Show
Rescheduled

Durumlar işletmenin iş akışına göre özelleştirilebilir, ancak temel anlamları korunmalıdır.

8.6 Temel Bilgiler

Bir randevuda aşağıdaki bilgiler bulunabilir.

Tarih
Başlangıç Saati
Bitiş Saati
Süre
Eğitmen
Salon
Hizmet
Paket
Şube
Açıklama
Not
8.7 Randevu Oluşturma

Yeni randevu oluşturulurken sistem aşağıdaki kontrolleri sırasıyla çalıştırmalıdır.

Kullanıcı yetkisi
İşletme doğrulaması
Şube doğrulaması
Üye aktif mi?
Paket uygun mu?
Eğitmen uygun mu?
Salon uygun mu?
Çalışma saati uygun mu?
Tatil günü mü?
Kapasite uygun mu?
Çakışma var mı?

Kontroller başarısız olursa randevu oluşturulamaz.

8.8 Merkezi Kural Motoru

Randevu sistemi tek bir merkezi doğrulama motoru üzerinden çalışmalıdır.

Örneğin;

validateAppointmentDate()

↓

validateWorkingHours()

↓

validateLunchBreak()

↓

validateClosedDate()

↓

validateTrainerConflict()

↓

validateHallCapacity()

↓

validatePackageRequirement()

↓

calculateAppointmentEndTime()

Yeni kurallar ileride bu zincire kolayca eklenebilmelidir.

8.9 Çalışma Saatleri

İşletme;

her gün için farklı çalışma saatleri tanımlayabilir.

Örneğin;

Pazartesi

08:00–22:00

Cumartesi

09:00–18:00

Pazar

Kapalı

Bu bilgiler Randevu Ayarları modülünden yönetilir.

8.10 Öğle Arası

İşletme isterse;

öğle arası tanımlayabilir.

Örneğin;

12:30–13:30

Bu saatler arasında yeni randevu oluşturulamaz.

8.11 Resmi Tatiller

İşletme;

kapalı olduğu özel günleri tanımlayabilir.

Örneğin;

Bayram
Yılbaşı
Bakım Günü
Personel Eğitimi

Bu tarihlerde sistem otomatik olarak rezervasyonu engelleyebilir.

8.12 Randevu Süresi

Her hizmetin varsayılan süresi vardır.

Örneğin;

Fitness PT → 60 dk
EMS → 20 dk
Pilates → 50 dk
Tenis → 90 dk

Kullanıcı isterse yetkisine bağlı olarak süreyi değiştirebilir.

8.13 Eğitmen Çakışması

Bir eğitmen;

aynı anda iki farklı randevuda bulunamaz.

Sistem zaman çakışmasını saniye hassasiyetinde kontrol etmelidir.

8.14 Salon Çakışması

Salon kapasitesi;

tek kişi

veya

çok kişi

olabilir.

Salon doluysa sistem yeni rezervasyona izin vermez.

8.15 Üye Çakışması

Bir üye;

aynı saatlerde iki farklı randevuya sahip olamaz.

Bu kontrol zorunludur.

8.16 Paket Kontrolü

Randevu oluşturulmadan önce;

üyenin aktif ve uygun paketi kontrol edilir.

Aşağıdaki durumlarda sistem uyarı verir:

Paket yok
Süresi dolmuş
Seansı bitmiş
Dondurulmuş
Şubede geçerli değil
8.17 Randevu Düzenleme

Randevu taşındığında;

tüm doğrulamalar yeniden çalıştırılır.

Hiçbir düzenleme kontrolsüz kaydedilemez.

8.18 Tekrarlayan Randevular

İşletme aşağıdaki tekrar tiplerini oluşturabilir.

Her gün
Her hafta
Her 2 hafta
Her ay

Tekrarlayan randevular birbirinden bağımsız kayıtlar olarak oluşturulur.

8.19 Otomatik Randevu

Paket satışından sonra;

işletme ayarına göre

otomatik randevular oluşturulabilir.

Oluşturulan randevular gerektiğinde manuel olarak değiştirilebilir.

8.20 Bekleme Listesi

Doluluk nedeniyle randevu oluşturulamıyorsa;

üye bekleme listesine alınabilir.

Boşluk oluştuğunda sistem ilgili kullanıcıyı bilgilendirebilir.

8.21 Business Rules
BR-059

Hiçbir randevu merkezi kural motoru çalıştırılmadan oluşturulamaz.

BR-060

Aynı eğitmen aynı zaman aralığında iki aktif randevuya sahip olamaz.

BR-061

Aynı üye aynı zaman aralığında iki aktif randevuya sahip olamaz.

BR-062

Paket uygunluğu doğrulanmadan randevu oluşturulamaz.

BR-063

Randevu güncellendiğinde tüm uygunluk kontrolleri yeniden çalıştırılmalıdır.

BR-064

Tekrarlayan randevular tek bir kayıt değil, birbirinden bağımsız randevu kayıtları olarak saklanmalıdır.

Architecture Decision (ADR-008)

Randevu sistemi yalnızca takvim ekranından ibaret değildir. Merkezi bir Rule Engine tarafından yönetilen operasyonel bir modüldür. Yeni kurallar (örneğin AI destekli öneriler, eğitmen izinleri, bakım saatleri veya dinamik kapasite yönetimi) mevcut mimariyi değiştirmeden aynı doğrulama zincirine eklenebilmelidir.