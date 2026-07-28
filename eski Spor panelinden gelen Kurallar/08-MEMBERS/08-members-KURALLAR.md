# Members Modülü Kuralları

## Amaç

Üye kayıtlarının, iletişim bilgilerinin, paketlerinin, ödemelerinin, randevularının ve devam geçmişinin tek merkezden yönetilmesini sağlar.

## Üye Oluşturma

1. Ad soyad zorunludur.
2. Telefon numarası normalize edilmelidir.
3. Aynı işletmede mükerrer üye kontrolü yapılmalıdır.
4. Mükerrer kontrol yalnızca ada göre yapılmamalıdır; telefon, e-posta ve kimlik bilgileri dikkate alınmalıdır.
5. Üye mutlaka doğru `business_id` ile kaydedilmelidir.
6. Branş veya spor dalı seçimi desteklenmelidir.
7. Çocuk üyelerde veli bilgisi eklenebilmelidir.
8. Fotoğraf yükleme desteklenmelidir.
9. Fotoğraf depolama yolu işletme ve üye bazlı olmalıdır.
10. Üye aktif/pasif durumu tutulmalıdır.
11. Pasif üye silinmeden sistemde korunmalıdır.
12. Sağlık, acil durum ve özel not alanlarına erişim yetkiyle sınırlandırılmalıdır.

## Üye Listesi

- Ad soyad
- Branş
- Telefon
- Aktif paket
- Kalan seans
- Borç
- Durum
- İşlemler

## Filtreler

- Arama
- Aktif üyeler
- Pasif üyeler
- Branş
- Eğitmen
- Borçlu üyeler
- Paketi azalan üyeler

## Üye Detayı

Sekmeler:

- Genel bilgiler
- Paketler
- Ödemeler
- Randevular
- Yoklama / devam
- Ölçümler
- RFID giriş-çıkış
- Notlar

## Kurallar

1. Üye detayı yalnızca aynı işletme içinde açılmalıdır.
2. Üye silme yerine pasife alma tercih edilmelidir.
3. Finans ve randevu geçmişi olan üye fiziksel olarak silinmemelidir.
4. Üye güncellemeleri audit log içine yazılmalıdır.
5. Mobil ve masaüstünde üye adı görsel hiyerarşiyi bozmamalıdır.
6. Üye seçilen işlemlerde bağlı aktif paketler otomatik listelenmelidir.
