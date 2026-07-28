# API Modülü Kuralları

## Amaç

API; yönetim paneli, mobil uygulama, RFID cihazları ve gelecekteki entegrasyonların tek iş kuralı kaynağıdır.

## Genel Kurallar

1. Kritik iş kuralları sayfa bileşenlerine dağılmamalıdır.
2. Web, mobil ve cihaz istekleri aynı merkezi kuralları kullanmalıdır.
3. Her istek kimlik doğrulamasından geçmelidir.
4. Her işlemde kullanıcı, rol, işletme ve gerekiyorsa şube yetkisi kontrol edilmelidir.
5. İstek verileri şema ile doğrulanmalıdır.
6. Hatalar standart hata kodu ve kullanıcı mesajı ile dönmelidir.
7. API hiçbir zaman veritabanı teknik hata detayını son kullanıcıya göstermemelidir.
8. Finansal ve operasyonel kritik işlemler transaction içinde yürütülmelidir.
9. Tekrar gönderilen aynı istek, mükerrer ödeme veya mükerrer randevu oluşturmamalıdır.
10. Liste uçları sayfalama, filtreleme ve sıralamayı desteklemelidir.
11. Büyük raporlar senkron istek içinde hesaplanmamalı, gerektiğinde arka plan görevi olarak çalışmalıdır.
12. API sürümlendirilmelidir. Örnek: `/api/v1`.
13. Tüm kritik istekler audit log ile ilişkilendirilebilmelidir.
14. `service_role` veya benzeri yüksek yetkili anahtarlar istemciye gönderilmemelidir.

## Standart Yanıt Yapısı

Başarılı yanıt:

```json
{
  "success": true,
  "data": {},
  "message": null
}
```

Hatalı yanıt:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "APPOINTMENT_TRAINER_CONFLICT",
    "message": "Seçilen eğitmenin bu saatte başka bir randevusu var."
  }
}
```

## Loglama

- Kullanıcı kimliği
- İşletme kimliği
- İşlem türü
- Kaynak modül
- İstek zamanı
- Sonuç
- Hata kodu
- İlgili kayıt kimliği
