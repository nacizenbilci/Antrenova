# access-control.ts Kuralları

## Sorumluluk

Rol, izin ve kaynak erişim kontrollerini merkezi olarak yönetir.

## Kurallar

1. Menü, sayfa ve API aynı izin anahtarlarını kullanmalıdır.
2. Kullanıcı işletme üyeliği doğrulanmalıdır.
3. Varsayılan davranış izin vermek değil reddetmek olmalıdır.
4. Yönetici rolü bile işletme sınırını aşmamalıdır.
5. İzin kontrolleri test edilebilir saf fonksiyonlar halinde düzenlenmelidir.
6. Yetkisiz erişim güvenlik loguna aktarılabilmelidir.
