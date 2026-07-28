# appointment-settings-server.ts Kuralları

## Sorumluluk

Randevu ayarlarını sunucu tarafında yükler, normalleştirir ve kaydeder.

## Kurallar

1. İşletme kimliği oturumdan doğrulanmalıdır.
2. Eksik kayıtlar varsayılan ayarlarla tamamlanmalıdır.
3. Kaydetme öncesi saat aralıkları ve sayısal değerler doğrulanmalıdır.
4. İstemciye yalnızca gerekli alanlar döndürülmelidir.
5. Ayar değişiklikleri audit log içine yazılmalıdır.
6. Service role kullanımı sıkı işletme filtresiyle sınırlandırılmalıdır.
