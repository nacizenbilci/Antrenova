# Unauthorized Modülü Kuralları

## Amaç

Kimliği doğrulanmış fakat istenen sayfa veya işlem için yetkisi bulunmayan kullanıcıyı güvenli ve anlaşılır biçimde bilgilendirir.

## Kurallar

1. Kullanıcıya teknik hata veya stack trace gösterilmemelidir.
2. Sayfanın varlığına ilişkin gereksiz hassas bilgi verilmemelidir.
3. Kullanıcının neden erişemediği sade bir dille belirtilmelidir.
4. Güvenli geri dönüş bağlantısı sunulmalıdır.
5. Ana sayfaya veya kullanıcının yetkili olduğu başlangıç ekranına yönlendirme bulunmalıdır.
6. Yetkisiz erişim denemesi güvenlik loguna yazılmalıdır.
7. Sadece menüyü gizlemek yetkilendirme sayılmamalıdır.
8. Sayfa, API ve veritabanı seviyesinde erişim ayrıca engellenmelidir.
9. Oturumu olmayan kullanıcı unauthorized yerine login sayfasına yönlendirilmelidir.
10. Yanlış işletme verisine erişim denemeleri ayrıca kayıt altına alınmalıdır.
