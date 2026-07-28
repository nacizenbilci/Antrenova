# Access Modülü Kuralları

## Amaç

Access modülü; RFID kart, RFID bileklik, QR kod veya benzeri kimlik araçlarıyla üye ve personel giriş-çıkışlarını yönetir.

## Temel Kurallar

1. Her erişim kartı veya bileklik yalnızca bir aktif kişiye atanmalıdır.
2. Aynı kimlik aracı aynı anda iki farklı üyeye atanamaz.
3. Pasif, iptal edilmiş, kayıp veya süresi dolmuş kartlarla giriş yapılamaz.
4. Üyenin aktif üyeliği veya geçerli erişim hakkı yoksa geçiş reddedilir.
5. Geçiş kontrolü yapılırken işletme ve şube bilgisi doğrulanmalıdır.
6. Bir şubeye ait kart başka şubede yalnızca açıkça izin verilmişse çalışmalıdır.
7. Her okutma işlemi başarılı veya başarısız fark etmeksizin kayıt altına alınmalıdır.
8. Kayıtta cihaz, kapı, tarih, saat, kişi, sonuç ve ret nedeni bulunmalıdır.
9. Aynı kartın birkaç saniye içinde tekrar okutulması çift kayıt olarak değerlendirilmemelidir.
10. İnternet kesintisinde cihazın kontrollü çevrimdışı çalışma planı bulunmalıdır.
11. İnternet geri geldiğinde çevrimdışı kayıtlar merkezi sisteme senkronize edilmelidir.
12. Cihazlar ayrı kimlik ve güvenli anahtarla doğrulanmalıdır.
13. Cihaz anahtarları mobil uygulama veya tarayıcıya açık şekilde yazılmamalıdır.
14. Personel girişleri ve üye girişleri ayrı raporlanabilmelidir.
15. Giriş ve çıkış kayıtlarından tesiste geçirilen süre hesaplanabilmelidir.

## Üye Detayına Yansıyan Veriler

- Son giriş tarihi
- Son çıkış tarihi
- Toplam ziyaret sayısı
- Seçilen tarih aralığında tesiste geçirilen toplam süre
- Ortalama ziyaret süresi
- En sık giriş yaptığı gün ve saat
- Başarısız geçiş sayısı
- Son kullanılan kart veya bileklik

## Güvenlik

- Yetkisiz kullanıcı kart atayamaz.
- Kart iptali ve yeniden atama işlemleri loglanmalıdır.
- Erişim geçmişi normal kullanıcı tarafından silinemez.
- Manuel kapı açma işlemi ayrıca audit log içine yazılmalıdır.
