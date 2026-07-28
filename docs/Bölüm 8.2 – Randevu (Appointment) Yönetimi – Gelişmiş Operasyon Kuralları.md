BÖLÜM 8 (DEVAM)
Randevu (Appointment) Yönetimi – Gelişmiş Operasyon Kuralları

Not: Bu bölüm, spor salonlarının günlük operasyonlarında karşılaşılan gerçek senaryolar esas alınarak hazırlanmıştır. Amaç yalnızca randevu oluşturmak değil; işletmenin günlük işleyişini otomatik ve güvenli şekilde yönetmektir.

8.22 Check-in

Check-in;

üyenin tesise geldiğini doğrulayan işlemdir.

Check-in aşağıdaki yöntemlerle yapılabilir.

Manuel
RFID Kart
RFID Bileklik
QR Kod
Mobil Uygulama
Turnike
Resepsiyon

Check-in zamanı değiştirilemez.

Sadece düzeltilmesi gerekiyorsa yeni audit kaydı oluşturulur.

8.23 Check-out

Bazı işletmeler için çıkış zamanı da önemlidir.

Örneğin;

Fitness
Coworking
Havuz
SPA

Check-out kaydedildiğinde;

tesiste geçirilen süre hesaplanabilir.

8.24 Erken Giriş

İşletme ayarıyla;

randevudan önce belirli süre giriş yapılmasına izin verilebilir.

Örneğin;

Randevu

10:00

↓

09:45

Giriş Serbest
8.25 Geç Giriş

İşletme aşağıdaki seçeneklerden birini belirleyebilir.

Kabul Et
Uyarı Ver
Eğitmene Sor
Otomatik İptal

Örneğin;

15 dakika geciken üye için sistem otomatik işlem başlatabilir.

8.26 Geç Kalma Politikası

İşletme;

şube bazında farklı kurallar tanımlayabilir.

Örneğin;

Pilates

↓

10 dakika

Fitness PT

↓

15 dakika

EMS

↓

5 dakika

8.27 Yoklama Durumu

Her randevu sonunda aşağıdaki durumlardan biri seçilir.

Geldi
Gelmedi
İptal
Geç Katıldı
Erken Ayrıldı

Her durum farklı iş kurallarını tetikler.

8.28 Seans Düşme Motoru

Yoklama sonucuna göre;

paketten seans düşülüp düşülmeyeceği belirlenir.

Örneğin;

Durum	Seans
Geldi	Düş
Geç Katıldı	İşletme Ayarı
Gelmedi	İşletme Ayarı
İptal	İşletme Ayarı
Erken Ayrıldı	İşletme Ayarı

Bu mantık kod içerisine gömülmez.

Tamamı ayarlar üzerinden yönetilir.

8.29 Grup Dersleri

Bir randevu;

birden fazla üyeye ait olabilir.

Örneğin;

Pilates Grup

↓

20 Kişi

Her üyenin yoklaması bağımsız tutulur.

8.30 Grup Kapasitesi

Grup derslerinde;

Minimum Katılımcı

ve

Maksimum Katılımcı

tanımlanabilir.

Örneğin;

Minimum

3

↓

Maksimum

12

Minimum sayı sağlanmazsa sistem eğitmene uyarı verebilir.

8.31 Çoklu Eğitmen

Bazı derslerde birden fazla eğitmen görev alabilir.

Örneğin;

Yüzme Kampı

↓

Antrenör A

+

Antrenör B

Ana eğitmen ve yardımcı eğitmen rolleri ayrı tutulmalıdır.

8.32 Salon Rezervasyonu

Her salonun;

kapasitesi,
ekipman durumu,
kullanım saatleri

ayrı yönetilir.

Salon bakımda ise rezervasyon yapılamaz.

8.33 Ekipman Rezervasyonu

İleride;

özel ekipmanlar da rezerve edilebilir.

Örneğin;

Reformer No:5
EMS Cihazı
Kort 2
Simülatör

Ekipman çakışmaları da kontrol edilir.

8.34 Online Rezervasyon

Üye;

mobil uygulamadan

veya

web portalından

uygun saatleri görebilir.

Sadece uygun zamanlar gösterilir.

8.35 Eğitmen Onayı

Bazı işletmeler;

online rezervasyonu doğrudan kabul eder.

Bazıları ise;

önce eğitmen onayı ister.

Bu davranış ayarlanabilir olmalıdır.

8.36 İptal Politikası

İşletme;

farklı iptal kuralları tanımlayabilir.

Örneğin;

24 saat önce ücretsiz
12 saat önce %50
Son 2 saat seans düş

Tamamı ayarlanabilir olmalıdır.

8.37 Bekleme Listesi Otomasyonu

Bir randevu iptal edilirse;

bekleme listesindeki ilk uygun üyeye teklif gönderilebilir.

Üye belirlenen süre içinde kabul etmezse;

sıradaki üyeye geçilir.

8.38 Akıllı Takvim

Takvim;

çakışmaları,

boşlukları,

eğitmen yoğunluğunu,

salon doluluğunu

renklerle gösterebilir.

Bu ekran işletmenin günlük operasyon merkezi olacaktır.

8.39 Yapay Zekâ Destekli Planlama

AI aşağıdaki önerileri sunabilir.

En uygun boş saat
Eğitmen iş yükü dengesi
Üyenin en sık geldiği saat
İptal olasılığı yüksek rezervasyon
Yoğunluk tahmini

Bu öneriler yalnızca karar destek amaçlıdır.

8.40 Randevu Zaman Tüneli

Her randevunun geçmişi saklanır.

Örneğin;

09:15

Randevu oluşturuldu

↓

09:20

Saat değiştirildi

↓

09:35

WhatsApp gönderildi

↓

09:50

Check-in

↓

10:52

Tamamlandı

Hiçbir olay geçmişten silinmez.

8.41 Business Rules
BR-065

Check-in zamanı sistem tarafından oluşturulmalı ve sonradan doğrudan değiştirilememelidir.

BR-066

Grup derslerinde her üyenin yoklama durumu bağımsız tutulmalıdır.

BR-067

Salon veya ekipman bakım durumundayken rezervasyon oluşturulamaz.

BR-068

Bekleme listesi sırası işletme tarafından manuel değiştirilmediği sürece korunmalıdır.

BR-069

Online rezervasyon yalnızca işletmenin tanımladığı uygun zaman aralıklarında yapılabilir.

BR-070

İptal politikaları kod içinde sabit olmamalı; işletme ayarları üzerinden yönetilmelidir.

BR-071

Randevu üzerinde yapılan tüm önemli değişiklikler zaman tüneline ve audit kayıtlarına eklenmelidir.

Architecture Decision (ADR-009)

Randevu modülü; takvim, yoklama, bildirim, RFID, QR, AI, paket ve ödeme modüllerinden bağımsız geliştirilecek, ancak olay tabanlı (event-driven) mimari ile bu modüller arasında iletişim kuracaktır.

Örneğin;

Randevu oluşturuldu → Bildirim Motoru
Check-in yapıldı → Yoklama Modülü
Yoklama tamamlandı → Paket Modülü
Paket güncellendi → Dashboard ve Raporlar
İptal edildi → Bekleme Listesi Motoru

Bu sayede modüller birbirine doğrudan bağımlı olmayacak, ölçeklenebilir ve test edilebilir bir yapı korunacaktır.