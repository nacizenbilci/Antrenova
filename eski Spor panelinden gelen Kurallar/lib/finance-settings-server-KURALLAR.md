# finance-settings-server.ts Kuralları

## Sorumluluk

Finans ayarlarını sunucudan yükler ve güvenli biçimde kaydeder.

## Kurallar

1. İşletme yetkisi doğrulanmalıdır.
2. KDV, komisyon ve minimum tutar alanları sınırlandırılmalıdır.
3. Havale/EFT tek mantıksal yöntem olarak normalize edilmelidir.
4. Logo ve imza URL'leri güvenli doğrulanmalıdır.
5. Eksik kayıtta varsayılan ayarlar kullanılmalıdır.
6. Değişiklikler loglanmalıdır.
