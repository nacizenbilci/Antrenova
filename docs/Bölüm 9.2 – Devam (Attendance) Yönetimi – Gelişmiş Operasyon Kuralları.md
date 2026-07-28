BÖLÜM 9 (DEVAM)
Devam (Attendance) Yönetimi – Gelişmiş Operasyon Kuralları

Not: Bu bölüm, Attendance modülünü yalnızca "yoklama" ekranı olmaktan çıkarıp gerçek zamanlı operasyon merkezi haline getirir. RFID, QR, biyometri, turnike, AI ve IoT cihazları bu mimari üzerine bağlanacaktır.

9.24 Turnike Entegrasyonu

Turnike sistemi doğrudan Attendance modülü ile haberleşmelidir.

Akış:

RFID Kart

↓

Turnike

↓

Antrenova API

↓

Attendance

↓

Kapı Aç

Yetkisiz girişlerde turnike açılmaz.

9.25 Biyometrik Doğrulama

İleride aşağıdaki yöntemler desteklenebilir.

Parmak izi
Yüz tanıma
Avuç içi tanıma

Biyometrik veriler Antrenova veritabanında saklanmaz.

Sadece doğrulama sonucu saklanır.

9.26 Çevrimdışı (Offline) Çalışma

İnternet kesildiğinde;

RFID cihazı geçici olarak yerel kayıt tutabilir.

Bağlantı geldiğinde;

Attendance kayıtları otomatik senkronize edilir.

9.27 Senkronizasyon Kuralları

Offline kayıtlar yüklenirken;

tekrar eden kayıtlar,
zaman çakışmaları,
silinmiş üyeler

kontrol edilmelidir.

Çakışmalar otomatik çözülemiyorsa kullanıcı onayı istenir.

9.28 Çoklu Giriş / Çıkış

Bazı işletmelerde aynı gün içinde birden fazla giriş olabilir.

Örneğin;

08:30

Giriş

↓

10:00

Çıkış

↓

17:30

Tekrar Giriş

↓

19:00

Çıkış

Tüm hareketler ayrı saklanmalıdır.

9.29 Canlı Salon Doluluğu

Attendance kayıtlarından anlık doluluk hesaplanabilir.

Örneğin;

Fitness Salonu

48 / 60

(%80)

Dashboard bu bilgiyi gerçek zamanlı gösterebilir.

9.30 Canlı Şube Yoğunluğu

Şube bazında;

içerideki üye sayısı,
bekleyen randevular,
aktif dersler

hesaplanabilir.

Bu bilgi mobil uygulamada da kullanılabilir.

9.31 Giriş Sebebi

Attendance kaydına giriş amacı eklenebilir.

Örneğin;

Ders
Serbest Çalışma
PT
Ölçüm
Danışmanlık
Etkinlik

Bu bilgiler raporlamayı zenginleştirir.

9.32 Eğitmen Onayı

Bazı hizmetlerde;

Attendance tamamlanmadan önce eğitmen onayı istenebilir.

Örneğin;

PT dersi

↓

Eğitmen

↓

Tamamlandı Onayı

↓

Seans Düş

9.33 Otomatik Tamamlama

İşletme isterse;

ders bitiminden belirli süre sonra

Attendance otomatik tamamlanabilir.

Örneğin;

Ders

11:00

↓

11:10

Otomatik Tamamla
9.34 Şüpheli Attendance

Sistem aşağıdaki durumları işaretleyebilir.

Çok kısa ziyaret
Aynı anda iki şubede giriş
Sürekli geç giriş
Gece saatlerinde olağan dışı giriş

Bu kayıtlar yöneticinin incelemesine sunulur.

9.35 Attendance Olay Sistemi (Event Bus)

Attendance tamamlandığında aşağıdaki olaylar tetiklenebilir.

Attendance Completed

↓

Package Updated

↓

Notification Sent

↓

Dashboard Updated

↓

Reports Updated

↓

AI Analysis Queue

Hiçbir modül diğerine doğrudan bağımlı olmaz.

9.36 Otomatik Bildirimler

Attendance sonucuna göre;

otomatik olarak;

WhatsApp
SMS
E-posta
Mobil Bildirim

gönderilebilir.

Örneğin;

"Derse katıldığınız için teşekkür ederiz."

veya

"Bugünkü randevunuza katılamadınız."

9.37 AI Devamsızlık Tahmini

Yapay zekâ;

son katılım sıklığı,
iptaller,
ödeme durumu,
paket bitiş tarihi,
mevsimsel davranış

gibi verileri analiz ederek devamsızlık riskini hesaplayabilir.

9.38 AI Erken Uyarı

Örneğin;

Üye

↓

Son 45 günde

%70 daha az geldi

↓

Risk

Yüksek

↓

Satış Ekibini Bilgilendir

Bu sayede işletme üyeyi kaybetmeden önce aksiyon alabilir.

9.39 Attendance KPI'ları

Sistem aşağıdaki metrikleri hesaplamalıdır.

Üye Bazında
Devam Oranı
No Show Oranı
Ortalama Giriş Saati
Ortalama Kalış Süresi
Eğitmen Bazında
Katılım Oranı
Ders Tamamlama
Ortalama Grup Doluluğu
Şube Bazında
Günlük Giriş
Saatlik Yoğunluk
Zirve Saatler
İşletme Bazında
Toplam Attendance
Ortalama Devam
İptal Oranı
No Show Oranı
9.40 Attendance Dashboard

Dashboard üzerinde;

Anlık içerideki kişi sayısı
Bugünkü katılım
Bugünkü No Show
Bekleyen Yoklamalar
En yoğun saat
En yoğun eğitmen
En yoğun salon

gibi canlı KPI kartları gösterilebilir.

9.41 Business Rules
BR-079

Offline oluşturulan attendance kayıtları senkronizasyon sırasında doğrulanmadan sisteme işlenemez.

BR-080

Biyometrik doğrulama kullanılsa dahi biyometrik ham veriler Antrenova veritabanında saklanmamalıdır.

BR-081

Turnike yalnızca başarılı doğrulamadan sonra açılmalıdır.

BR-082

Attendance tamamlandığında olay sistemi (Event Bus) üzerinden ilgili modüllere bildirim gönderilmelidir.

BR-083

Şüpheli attendance kayıtları otomatik işaretlenmeli ancak doğrudan silinmemelidir.

BR-084

Canlı doluluk hesaplamaları attendance giriş ve çıkış olayları üzerinden gerçek zamanlı güncellenmelidir.

BR-085

Attendance kayıtları işletmenin yasal saklama politikalarına uygun süre boyunca korunmalıdır.

Architecture Decision (ADR-011)

Attendance modülü, gerçek zamanlı olay (real-time event) üreten bir çekirdek servis olarak tasarlanacaktır. RFID okuyucular, mobil uygulamalar, turnikeler ve gelecekte eklenecek IoT cihazları aynı olay altyapısını kullanacaktır. Böylece yeni cihaz entegrasyonları mevcut iş kurallarını değiştirmeden sisteme eklenebilecektir.