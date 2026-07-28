# Login Modülü Kuralları

## Amaç

Kullanıcının güvenli biçimde sisteme giriş yapmasını ve doğru işletme-yetki bağlamının kurulmasını sağlar.

## Kurallar

1. E-posta ve parola zorunludur.
2. E-posta normalize edilmelidir.
3. Hatalı girişte kullanıcıya teknik hata gösterilmemelidir.
4. Hesap veya parola hatasında hesap varlığı açık edilmemelidir.
5. Başarısız giriş denemeleri kayıt altına alınmalıdır.
6. Çok sayıda hatalı denemede geçici sınır uygulanmalıdır.
7. Başarılı girişten sonra profil, rol, izin ve `business_id` bilgileri güvenli biçimde yüklenmelidir.
8. Kullanıcının aktif işletme üyeliği yoksa uygulama içine alınmamalıdır.
9. Pasif veya askıya alınmış kullanıcı giriş yapamamalıdır.
10. Yetki bilgileri yalnızca tarayıcı çerezine güvenerek belirlenmemelidir.
11. Kullanıcı doğru başlangıç sayfasına yönlendirilmelidir.
12. Oturum süresi ve yenileme kuralları tanımlı olmalıdır.
13. Çıkış işleminde kullanıcıya ait rol, izin ve işletme bağlamı temizlenmelidir.
14. `forgot-password` ve `reset-password` yolları girişsiz erişilebilir olmalıdır.
