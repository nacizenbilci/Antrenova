# Payments Modülü Kuralları

## Amaç

Ödeme, borç, makbuz, ödeme yöntemi ve finansal hareketlerin güvenli ve izlenebilir biçimde yönetilmesini sağlar.

## Ödeme Yöntemleri

- Nakit
- Kart
- Havale/EFT
- Online

Havale ve EFT kullanıcı arayüzünde tek yöntem olarak gösterilmelidir.

## Ödeme Alma

1. Üye seçilmelidir.
2. Ödeme yapılabilecek borç veya satış kalemi bulunmalıdır.
3. Ödeme tutarı sıfırdan büyük olmalıdır.
4. Kısmi ödeme işletme ayarına göre desteklenmelidir.
5. Fazla ödeme işletme ayarına göre engellenmeli veya bakiye olarak işlenmelidir.
6. Ödeme tek bir pakete zorunlu bağlanmamalıdır.
7. Bir ödeme birden fazla borç kalemine dağıtılabilmelidir.
8. Finansal kayıtlar transaction içinde oluşturulmalıdır.
9. Mükerrer gönderim ikinci kez ödeme oluşturmamalıdır.
10. Ödeme alan kullanıcı kaydedilmelidir.
11. İptal veya iade işlemi orijinal ödemeyle ilişkilendirilmelidir.
12. Finansal kayıt fiziksel olarak silinmemelidir.

## Makbuz

1. Otomatik makbuz ayarı açıksa ödeme sonrası makbuz oluşturulmalıdır.
2. Makbuz numarası benzersiz olmalıdır.
3. İşletme logosu, alt bilgi ve imza ayarları kullanılmalıdır.
4. Makbuz hem masaüstünde hem mobilde düzgün görünmelidir.
5. Yazdırma ve PDF görünümü tek sayfaya sığacak biçimde hazırlanmalıdır.
6. Yazdırmada menü, buton ve gereksiz boşluklar görünmemelidir.
7. Makbuzdaki ödeme yöntemi kullanıcı dostu adla gösterilmelidir.
8. Makbuz geçmiş ödeme anındaki verileri korumalıdır.
9. Sonradan değişen ayarlar eski makbuzu bozmamalıdır.

## Finans KPI'ları

- Genel ciro
- Tahsilat
- Kalan borç
- Bu ay
- Bugün
- Ödeme yöntemi dağılımı
- Borçlu üyeler
- Son ödemeler
