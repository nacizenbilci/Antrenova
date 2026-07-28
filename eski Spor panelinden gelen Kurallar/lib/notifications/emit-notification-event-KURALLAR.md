# emit-notification-event.ts Kuralları

## Sorumluluk

Sistem içindeki bir iş olayını bildirim olayına dönüştürür.

## Kurallar

1. Yalnızca tanımlı `event_key` kabul edilmelidir.
2. Olay verisi ilgili tipe uygun olmalıdır.
3. `business_id` sunucu bağlamından doğrulanmalıdır.
4. Olay doğrudan sağlayıcıya gönderilmemeli; engine veya queue katmanına aktarılmalıdır.
5. Aynı iş olayı mükerrer tetiklenirse idempotency uygulanmalıdır.
6. Bildirim hatası ana iş işlemini gereksiz yere geri almamalıdır.
