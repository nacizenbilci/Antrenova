# CreateUserForm.tsx Kuralları

## Sorumluluk

İşletmeye yeni kullanıcı ekleme, rol ve şube erişimi atama formudur.

## Kurallar

1. E-posta zorunlu ve normalize edilmiş olmalıdır.
2. Kullanıcı rolü açıkça seçilmelidir.
3. Rol ve izinler işletme bağlamında atanmalıdır.
4. Kullanıcı oluşturma yetkisi ayrıca kontrol edilmelidir.
5. Aynı e-posta için mükerrer üyelik güvenli ele alınmalıdır.
6. Geçici parola kullanılacaksa güvenli biçimde iletilmelidir.
7. `service_role` istemciye gönderilmemelidir.
8. Başarılı oluşturma sonrası kullanıcı listesi yenilenmelidir.
