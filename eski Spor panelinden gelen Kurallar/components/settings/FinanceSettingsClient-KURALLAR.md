# FinanceSettingsClient.tsx Kuralları

## Sorumluluk

Ödeme yöntemleri, kısmi/fazla ödeme, kart, online ödeme, fatura ve makbuz ayarlarını yönetir.

## Kurallar

1. Ödeme yöntemleri: Nakit, Kart, Havale/EFT ve Online olmalıdır.
2. Havale ve EFT arayüzde tek seçenek olarak gösterilmelidir.
3. Kapalı bir yönteme ait alt alanlar devre dışı bırakılmalıdır.
4. Komisyon oranı, KDV oranı ve minimum tutarlar sayısal olarak doğrulanmalıdır.
5. Otomatik makbuz ayarı makbuz üretim süreciyle uyumlu olmalıdır.
6. Logo, footer ve imza önizlemesi desteklenmelidir.
7. Ayarlar işletme bazında kaydedilmelidir.
8. Kaydetme işlemi sunucu tarafında yeniden doğrulanmalıdır.
