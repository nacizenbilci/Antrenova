# Appointments Modülü Kuralları

## Amaç

Randevu modülü; bireysel ve grup seanslarının güvenli, çakışmasız ve paket kurallarına uygun biçimde planlanmasını sağlar.

## Randevu Oluşturma

1. Randevu oluşturulmadan önce işletme doğrulanmalıdır.
2. Üye seçimi zorunlu olmalıdır.
3. Seçilen üyeye ait uygun ve aktif paketler listelenmelidir.
4. Aktif üyesi olmayan işletmede kullanıcıya anlaşılır uyarı gösterilmelidir.
5. Seçilen paket randevu tarihini kapsamalıdır.
6. Paket seans hakkı bitmişse randevu oluşturulmamalıdır.
7. Paket randevu için zorunluysa paketsiz kayıt engellenmelidir.
8. Deneme dersi veya ücretsiz randevu yalnızca yetkili kullanıcı tarafından paketsiz açılabilmelidir.
9. Randevu tarihi geçmişte olamaz; yetkili geçmiş kayıt senaryosu ayrıca tanımlanmalıdır.
10. Randevu işletmenin çalışma saatleri içinde olmalıdır.
11. Öğle arası veya kapalı saatlerde randevu oluşturulmamalıdır.
12. Kapalı gün ve özel tatil günleri kontrol edilmelidir.
13. Eğitmenin çalışma programı kontrol edilmelidir.
14. Eğitmenin izinli olduğu saatlerde randevu oluşturulmamalıdır.
15. Eğitmen çakışması engellenmelidir.
16. Üyenin aynı saatte başka randevusu varsa uyarı veya engel uygulanmalıdır.
17. Salon veya alan kapasitesi aşılmamalıdır.
18. Randevu bitiş saati başlangıç ve süreye göre merkezi olarak hesaplanmalıdır.
19. Tekrarlayan randevularda bütün tarihler oluşturulmadan önce doğrulanmalıdır.
20. Kısmi başarısızlıkta kullanıcıya hangi tarihlerde sorun olduğu gösterilmelidir.

## Randevu Durumları

- planlandı
- tamamlandı / geldi
- gelmedi
- iptal edildi
- ertelendi
- beklemede

Durumlar rastgele metin olarak değil merkezi enum olarak kullanılmalıdır.

## Düzenleme

1. Randevu düzenleme ekranı mevcut verileri eksiksiz yüklemelidir.
2. `business_id` uyuşmazlığında kayıt gösterilmemelidir.
3. Eğitmen, tarih, saat, paket veya üye değişirse bütün kurallar tekrar çalışmalıdır.
4. Düzenleme geçmişi tutulmalıdır.
5. Tamamlanmış randevu yalnızca özel yetkiyle değiştirilebilmelidir.
6. Yoklaması alınmış randevunun paket etkisi dikkate alınmadan silinmemelidir.

## İptal

1. İptal nedeni seçilmelidir.
2. İptali yapan kişi kaydedilmelidir.
3. İptal zamanı kaydedilmelidir.
4. Paket seansı düşülüp düşülmeyeceği işletme ayarına göre belirlenmelidir.
5. Geç iptal kuralı desteklenmelidir.
6. İptal sonrası üyeye bildirim gönderilmelidir.
7. İptal edilen randevu normal listeden kaybolmamalı; durumuyla görünmelidir.

## Bildirim

- Randevu oluşturuldu
- Randevu güncellendi
- Randevu iptal edildi
- Randevu hatırlatma
- Eğitmen değişti
- Saat değişti

Bildirim işleri kullanıcı ekranını bekletmeden kuyruğa aktarılmalıdır.
