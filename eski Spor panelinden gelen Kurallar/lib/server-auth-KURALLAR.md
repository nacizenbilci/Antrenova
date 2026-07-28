# server-auth.ts Kuralları

## Sorumluluk

Sunucu bileşenleri ve server action'lar için oturum, kullanıcı ve işletme bağlamını doğrular.

## Kurallar

1. Supabase oturumu sunucuda okunmalıdır.
2. Kullanıcı profili ve aktif işletme üyeliği doğrulanmalıdır.
3. Rol ve izinler güvenilir kaynaktan yüklenmelidir.
4. Yetkisiz kullanıcı uygun sayfaya yönlendirilmelidir.
5. İstemci çerezindeki `businessId` tek başına kabul edilmemelidir.
6. Fonksiyonlar korunan işlemlerde ortak giriş noktası olmalıdır.
