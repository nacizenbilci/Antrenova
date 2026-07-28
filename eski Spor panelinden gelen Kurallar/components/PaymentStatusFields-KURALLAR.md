# PaymentStatusFields.tsx Kuralları

## Sorumluluk

Ödeme durumu, tahsilat, borç veya ilgili durum alanlarını form içinde yönetir.

## Kurallar

1. Durum seçenekleri merkezi enum'dan gelmelidir.
2. Finansal durum otomatik hesaplanan değerle çelişmemelidir.
3. Kullanıcı elle değiştiriyorsa özel yetki ve gerekçe istenmelidir.
4. İade/iptal durumu normal ödeme durumundan ayrılmalıdır.
5. Hatalı kombinasyonlar istemci ve sunucuda engellenmelidir.
