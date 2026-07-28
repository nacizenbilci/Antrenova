# process-notification-queue.ts Kuralları

## Sorumluluk

Bekleyen bildirim işlerini güvenli biçimde işler.

## Kurallar

1. Yalnızca zamanı gelmiş ve bekleyen işler alınmalıdır.
2. Aynı iş iki worker tarafından eşzamanlı işlenmemelidir.
3. Başarısız işlerde kontrollü yeniden deneme uygulanmalıdır.
4. Maksimum deneme sayısı aşılırsa kalıcı hata durumuna geçmelidir.
5. Her deneme zamanı ve hata bilgisi kaydedilmelidir.
6. Başarılı iş tekrar gönderilmemelidir.
7. Batch boyutu ve işlem süresi sınırlandırılmalıdır.
