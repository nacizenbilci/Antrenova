# appointment-rules.ts Kuralları

## Sorumluluk

Merkezi randevu kural motorunu çalıştırır.

## Zorunlu kontroller

- Tarih doğrulama
- Çalışma saatleri
- Öğle arası
- Kapalı tarih
- Eğitmen çakışması
- Salon kapasitesi
- Paket zorunluluğu
- Randevu bitiş saati
- Sonraki uygun başlangıç

## Kurallar

1. Fonksiyonlar tek tek test edilebilir olmalıdır.
2. Kural sonuçları standart hata kodu döndürmelidir.
3. Yeni ve düzenleme akışı aynı kuralları kullanmalıdır.
4. İşletme ayarları tek seferde yüklenip bağlama aktarılmalıdır.
5. Tarih/saat hesaplarında işletme saat dilimi dikkate alınmalıdır.
