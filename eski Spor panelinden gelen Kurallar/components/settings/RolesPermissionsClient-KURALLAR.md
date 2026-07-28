# RolesPermissionsClient.tsx Kuralları

## Sorumluluk

Rol oluşturma, izin seçme ve rol-izin ilişkilerini yönetir.

## Kurallar

1. İzinler modül ve aksiyon bazında gruplanmalıdır.
2. Sistem için zorunlu yönetici rolü kontrolsüz silinmemelidir.
3. Kullanıcı kendi kritik yetkisini yanlışlıkla kaldıramamalı veya uyarılmalıdır.
4. Rol adı aynı işletmede benzersiz olmalıdır.
5. İzin değişiklikleri sunucuda tekrar doğrulanmalıdır.
6. Değişiklik audit log içine yazılmalıdır.
7. Menü görünürlüğü ile gerçek API yetkisi aynı izin kaynağını kullanmalıdır.
