# NeNe Seans — Ayrıntılı Kural Dokümantasyonu

Bu dokümantasyon, mevcut NeNe Seans projesinde bugüne kadar belirlenmiş iş kurallarını modül, ekran, işlem ve teknik sorumluluk bazında ayırır.

## Kullanım amacı

- Yeni sistem sıfırdan yazılırken resmi referans olmak
- Web, mobil, API ve veritabanında aynı davranışı korumak
- Kuralların kod içine dağılmasını engellemek
- Test senaryoları ve kabul kriterleri üretmek
- Çok işletmeli ve çok şubeli yapıya geçişi kolaylaştırmak

## Temel ilkeler

1. Her kritik işlem sunucu tarafında doğrulanmalıdır.
2. Her işletmeye ait veri güvenli biçimde ayrılmalıdır.
3. UI kontrolü tek başına yetkilendirme değildir.
4. Finans, paket, randevu, yoklama ve erişim hareketleri silinmeden iz bırakmalıdır.
5. Tarih-saat işlemleri işletmenin saat dilimine göre yürütülmelidir.
6. Mobil ve masaüstü aynı iş kurallarını kullanmalıdır.
7. Kullanıcıya teknik hata değil anlaşılır hata mesajı gösterilmelidir.
