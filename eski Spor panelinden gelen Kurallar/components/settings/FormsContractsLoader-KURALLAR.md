# FormsContractsLoader.tsx Kuralları

## Sorumluluk

Form ve sözleşme verilerini sunucudan güvenli şekilde yükleyip istemci bileşenine aktarır.

## Kurallar

1. İşletme kimliği oturumdan alınmalıdır.
2. İstemciden gelen `business_id` tek başına güvenilmemelidir.
3. Yetki kontrolü veri yüklemeden önce yapılmalıdır.
4. Eksik ayarlarda güvenli boş liste dönmelidir.
5. Sunucu hatası kullanıcı dostu bir duruma dönüştürülmelidir.
6. Gizli veya hassas alanlar istemciye gereksiz gönderilmemelidir.
