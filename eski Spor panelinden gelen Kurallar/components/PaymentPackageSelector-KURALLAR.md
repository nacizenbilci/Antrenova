# PaymentPackageSelector.tsx Kuralları

## Sorumluluk

Ödeme sırasında üyeye ait borçlu paket veya ödeme kalemlerini seçtirir.

## Kurallar

1. Üye seçilmeden veri yüklenmemelidir.
2. Yalnızca ödenebilir borç kalemleri listelenmelidir.
3. Paket adı, toplam borç, ödenen ve kalan tutar görünmelidir.
4. Birden fazla kaleme ödeme dağıtımı desteklenebilmelidir.
5. Seçim toplamı ödeme tutarıyla tutarlı olmalıdır.
6. Üye değiştiğinde eski seçimler temizlenmelidir.
7. Borç uygunluğu sunucuda tekrar kontrol edilmelidir.
