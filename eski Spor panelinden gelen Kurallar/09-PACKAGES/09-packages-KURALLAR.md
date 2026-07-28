# Packages Modülü Kuralları

## Amaç

Paket tanımları ile üyelerin satın aldığı paketleri birbirinden ayırarak seans, süre, eğitmen, randevu ve borç süreçlerini yönetir.

## Kavramsal Ayrım

- Paket şablonu: Satışa sunulan ürün
- Üye paketi / abonelik: Üyenin satın aldığı gerçek hak
- Paket kullanım hareketi: Seans düşme veya geri yükleme kaydı

## Paket Tanımı

1. Paket adı zorunludur.
2. Toplam seans sayısı tanımlanabilmelidir.
3. Geçerlilik süresi bulunmalıdır.
4. Branş ve eğitmen kısıtları desteklenmelidir.
5. Bireysel veya grup paketi türü seçilebilmelidir.
6. Fiyat bilgisi tutulmalıdır.
7. Paket aktif/pasif yapılabilmelidir.
8. Paket düzenlendiğinde geçmiş satışlar geriye dönük bozulmamalıdır.

## Üyeye Paket Atama

1. Üye seçilmelidir.
2. Başlangıç ve bitiş tarihleri doğrulanmalıdır.
3. Toplam seans sayısı sıfırdan büyük olmalıdır.
4. Ödenen, toplam ve kalan borç hesapları tutarlı olmalıdır.
5. Paket durumu aktif, beklemede, tamamlandı, iptal veya donduruldu olabilir.
6. Seans kullanımı hareket tablosundan izlenmelidir.
7. Paket bitişi yalnızca seans sayısına değil, süreye göre de belirlenmelidir.
8. Paket dondurma ve yeniden başlatma desteklenmelidir.
9. Paket yenileme geçmişi tutulmalıdır.

## Otomatik Randevu

1. Yeni pakette otomatik randevu oluşturma seçeneği bulunmalıdır.
2. Paket düzenleme ekranında otomatik randevuları güncelleme seçeneği aynı görsel ve işlevsel yapıda olmalıdır.
3. Günler ve saatler ayrı ayrı seçilebilmelidir.
4. Çalışma saati, eğitmen ve kapasite kuralları uygulanmalıdır.
5. Çakışan tarihler kullanıcıya listelenmelidir.
6. Mevcut yoklaması alınmış randevular otomatik olarak silinmemelidir.
7. Güncelleme öncesi kullanıcıya etkilenecek randevu sayısı gösterilmelidir.

## Paket KPI'ları

- Toplam
- Aktif
- Biten
- Seansı azalan
- Süresi yakında bitecek
- Borçlu
