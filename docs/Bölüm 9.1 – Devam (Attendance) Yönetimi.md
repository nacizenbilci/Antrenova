BÖLÜM 9
Devam (Attendance) Yönetimi

Not: Attendance (Devam) modülü, randevunun gerçekten gerçekleşip gerçekleşmediğini doğrulayan sistemdir. Bir randevu planlanabilir, ancak yalnızca attendance kaydı hizmetin fiilen verildiğini gösterir. Paket düşümü, performans analizleri ve finansal doğruluk bu modüle dayanır.

9.1 Amaç

Devam modülünün amacı;

üyenin gerçekten gelip gelmediğini doğrulamak,
paket kullanımını yönetmek,
eğitmen performansını ölçmek,
işletmenin operasyonel doğruluğunu sağlamaktır.

Attendance, yalnızca "geldi / gelmedi" bilgisinden ibaret değildir.

9.2 Attendance Tanımı

Attendance;

belirli bir randevunun gerçekleşme sonucudur.

Her attendance kaydı mutlaka bir randevuya bağlıdır.

Appointment

↓

Attendance
9.3 Attendance Kimliği

Her attendance kaydının benzersiz UUID değeri bulunur.

İlişkili alanlar:

id
business_id
branch_id
appointment_id
member_id
trainer_id
package_id
9.4 Attendance Yaşam Döngüsü
Bekliyor

↓

Check-in

↓

Devam Ediyor

↓

Tamamlandı

↓

Paket Güncellendi

↓

Arşiv

Alternatif akışlar:

Bekliyor

↓

Gelmedi

veya

Bekliyor

↓

İptal
9.5 Attendance Durumları

Desteklenen temel durumlar:

Pending
Checked In
Completed
No Show
Cancelled
Late
Left Early
9.6 Attendance Oluşturma

Attendance kaydı;

manuel oluşturulamaz.

Yalnızca aşağıdaki olaylardan biri sonucu oluşur.

Check-in
Eğitmen Onayı
Resepsiyon Onayı
RFID
QR
Mobil Check-in
9.7 Check-in Kaynağı

Her girişin nasıl yapıldığı kayıt altına alınmalıdır.

Örneğin;

Manual

RFID

QR

Mobile

Reception

API

Turnstile

Bu bilgi raporlamada kullanılacaktır.

9.8 RFID Girişi

RFID okutulduğunda sistem;

kartı doğrular,
üyeyi doğrular,
paketi doğrular,
randevuyu doğrular.

Hepsi uygunsa Attendance başlatılır.

9.9 QR Girişi

QR kod okutulduğunda;

tek kullanımlık doğrulama yapılabilir.

QR kodu belirli süre sonra geçersiz hale getirilebilir.

9.10 Manuel Yoklama

Eğitmen veya resepsiyon;

üyeyi manuel olarak "Geldi" işaretleyebilir.

Bu işlem audit kaydı oluşturur.

9.11 Toplu Yoklama

Grup derslerinde;

tek ekrandan tüm katılımcılar işaretlenebilir.

Örneğin;

✔ Geldi

✖ Gelmedi

⚠ Geç Geldi
9.12 Geç Gelen Üye

İşletme aşağıdaki seçeneklerden birini belirleyebilir.

Geldi kabul et
Geç geldi olarak işaretle
Derse alma
Eğitmen karar versin
9.13 Erken Ayrılan Üye

Üye;

ders bitmeden ayrılmış olabilir.

Bu bilgi ayrı tutulmalıdır.

İşletme isterse;

tam seans,

yarım seans

veya

hiç seans düşmeyebilir.

9.14 Attendance ve Paket İlişkisi

Attendance tamamlandıktan sonra;

paket güncelleme motoru çalışır.

Süreç:

Attendance

↓

Rule Engine

↓

Package Update

↓

Remaining Sessions

↓

Dashboard

↓

Reports
9.15 Attendance Geri Alma

Yanlışlıkla oluşturulan attendance kaydı geri alınabilir.

Ancak;

eski kayıt korunur,
yeni audit kaydı oluşturulur,
paket tekrar hesaplanır.
9.16 Aynı Gün Birden Fazla Giriş

İşletme isterse;

aynı gün birden fazla attendance kaydına izin verebilir.

Örneğin;

Sabah Pilates

↓

Akşam Fitness

Her ikisi de ayrı attendance olarak saklanır.

9.17 Attendance Süresi

Attendance kayıtlarında;

giriş saati,
çıkış saati,
toplam süre

hesaplanabilir.

Bu bilgi ileride AI analizlerinde kullanılacaktır.

9.18 Devam Oranı

Her üye için otomatik hesaplanır.

Örneğin;

Toplam Randevu

40

↓

Katıldığı

36

↓

Devam

%90
9.19 Devamsızlık Analizi

Sistem aşağıdaki analizleri yapabilir.

Üst üste gelmeme
Haftalık devam
Aylık devam
Eğitmen bazlı devam
Şube bazlı devam
9.20 Risk Analizi

Örneğin;

Son 30 Gün

↓

6 Randevu

↓

2 Katılım

↓

Risk

Yüksek

AI modülü bu üyeyi yenileme riski açısından işaretleyebilir.

9.21 Eğitmen Performansı

Attendance kayıtlarından;

katılım oranı,
iptal oranı,
no-show oranı,
ders tamamlama oranı

hesaplanabilir.

9.22 Şube Performansı

Şubeler karşılaştırılabilir.

Örneğin;

Devam oranı
Ortalama katılım
Günlük yoğunluk
Saat bazlı yoğunluk
9.23 Business Rules
BR-072

Attendance kaydı doğrudan oluşturulamaz; doğrulanmış bir giriş veya yetkili onayı sonucu oluşmalıdır.

BR-073

Attendance tamamlanmadan paket güncellemesi yapılmamalıdır.

BR-074

Attendance geri alındığında paket hakları otomatik olarak yeniden hesaplanmalıdır.

BR-075

RFID veya QR ile yapılan girişlerde kartın, üyenin ve paketin geçerliliği birlikte doğrulanmalıdır.

BR-076

Toplu yoklama işlemleri her üye için ayrı attendance kayıtları oluşturmalıdır.

BR-077

Attendance kayıtları fiziksel olarak silinmemeli, yalnızca iptal veya geri alma işlemleriyle geçmiş korunmalıdır.

BR-078

Attendance üzerinden hesaplanan devam oranları gerçek zamanlı olarak raporlara ve dashboard'a yansıtılmalıdır.

Architecture Decision (ADR-010)

Attendance modülü, Randevu ve Paket modülleri arasında köprü görevi görür. Paketten seans düşme işlemi doğrudan randevuya bağlı olmayacak; doğrulanmış attendance kaydına bağlı olacaktır. Bu yaklaşım yanlış seans düşümlerini önler, RFID/QR entegrasyonlarını kolaylaştırır ve gerçek katılım verisi üzerinden raporlama yapılmasını sağlar.