# supabase-server.ts Kuralları

## Sorumluluk

Sunucu bileşeni ve server action için kullanıcı oturumuna bağlı Supabase istemcisi üretir.

## Kurallar

1. Cookie okuma/yazma Next.js sunucu ortamıyla uyumlu olmalıdır.
2. Kullanıcı oturumu RLS üzerinden korunmalıdır.
3. İstemci her istek bağlamında güvenli oluşturulmalıdır.
4. Service role ile karıştırılmamalıdır.
5. Auth yenileme hataları kontrollü ele alınmalıdır.
