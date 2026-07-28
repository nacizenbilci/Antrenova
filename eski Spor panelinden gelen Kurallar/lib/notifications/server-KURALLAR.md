# notifications/server.ts Kuralları

## Sorumluluk

Bildirim ayarları, kuralları ve sunucu tarafı veri erişim fonksiyonlarını sağlar.

## Kurallar

1. Yalnızca sunucu tarafında kullanılmalıdır.
2. İşletme erişimi doğrulanmalıdır.
3. Service role kullanılıyorsa fonksiyon içinde sıkı filtre uygulanmalıdır.
4. Varsayılan bildirim kuralları güvenli biçimde oluşturulabilmelidir.
5. Veri erişim hataları standartlaştırılmalıdır.
6. Gizli sağlayıcı bilgileri istemciye döndürülmemelidir.
