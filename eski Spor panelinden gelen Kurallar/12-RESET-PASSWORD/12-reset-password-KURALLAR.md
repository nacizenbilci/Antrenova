# Reset Password Modülü Kuralları

## Amaç

Geçerli sıfırlama bağlantısına sahip kullanıcının yeni parola belirlemesini sağlar.

## Kurallar

1. Sıfırlama tokenı doğrulanmalıdır.
2. Süresi dolmuş veya kullanılmış token kabul edilmemelidir.
3. Yeni parola ve tekrar alanı eşleşmelidir.
4. Parola minimum güvenlik koşullarını sağlamalıdır.
5. Eski parolanın tekrar kullanılmasını engelleme politikası desteklenmelidir.
6. Başarılı sıfırlama sonrası token geçersiz hale gelmelidir.
7. Gerekirse mevcut aktif oturumlar sonlandırılmalıdır.
8. İşlem güvenlik loguna yazılmalıdır.
9. Kullanıcıya başarı mesajı gösterilip giriş sayfasına yönlendirilmelidir.
10. Teknik token veya auth hatası son kullanıcıya ham biçimde gösterilmemelidir.
