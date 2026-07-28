# Attendance Modülü Kuralları

## Amaç

Günlük yoklama modülü, randevuların gerçekleşme durumunu yönetir ve paket kullanımını güvenli biçimde günceller.

## Temel Durumlar

- İşlem bekliyor
- Geldi
- Gelmedi
- İptal

## Kurallar

1. Yoklama yalnızca ilgili işletmenin randevuları için alınabilir.
2. Gelecek tarihli randevularda yoklama butonları gösterilmemelidir.
3. `Geldi` işlemi randevuyu tamamlandı durumuna getirmelidir.
4. `Geldi` seçildiğinde paket kullanım hakkı yalnızca bir kez artırılmalıdır.
5. Aynı randevuya ikinci kez `Geldi` işlemi uygulanırsa yeniden seans düşülmemelidir.
6. `Gelmedi` durumunda seans düşme kuralı paket veya işletme ayarından gelmelidir.
7. `İptal` durumunda iptal nedeni ve işlemi yapan kullanıcı kaydedilmelidir.
8. Yoklama değiştirilecekse önceki paket hareketi güvenli biçimde geri alınmalıdır.
9. Paket kullanım hareketleri doğrudan sayaç değişikliği yerine hareket kaydıyla izlenmelidir.
10. Toplu yoklama işlemleri desteklenmelidir.
11. Toplu işlemde başarısız kayıtlar ayrı ayrı bildirilmelidir.
12. Yoklama geçmişi silinmemeli, değişiklik geçmişi tutulmalıdır.
13. Aynı saatteki grup randevuları birlikte gösterilebilmelidir.
14. Mobil görünümde işlemler kolay dokunulabilir büyüklükte olmalıdır.

## Günlük Liste

- Tarihe göre filtre
- Saate göre gruplama
- Üye adı
- Branş
- Eğitmen
- Paket
- Kalan seans
- Randevu durumu
- Yoklama işlemi
