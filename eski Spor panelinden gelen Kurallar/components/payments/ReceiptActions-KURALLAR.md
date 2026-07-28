# ReceiptActions.tsx Kuralları

## Sorumluluk

Makbuz sayfasındaki yazdırma, PDF alma ve güvenli geri dönüş işlemlerini yönetir.

## Kurallar

1. Yazdırma işlemi yalnızca tarayıcı ortamında çalışmalıdır.
2. Yazdırma sırasında menü, işlem butonları ve gereksiz alanlar gizlenmelidir.
3. Makbuz tek sayfaya sığacak yazdırma CSS kurallarını kullanmalıdır.
4. Butona art arda basılması mükerrer işlem oluşturmamalıdır.
5. PDF davranışı destekleniyorsa çıktı makbuzdaki görünen verilerle aynı olmalıdır.
6. Bileşen makbuz verisini değiştirmemeli; yalnızca aksiyon sunmalıdır.
7. Mobilde butonlar tam genişlik veya kolay dokunulabilir ölçüde olmalıdır.
8. Yazdırma desteği olmayan ortamda anlaşılır uyarı gösterilmelidir.
