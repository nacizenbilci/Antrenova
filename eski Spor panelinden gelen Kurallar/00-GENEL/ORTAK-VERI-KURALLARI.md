# Ortak Veri Kuralları

1. Kayıtlar benzersiz kimlik kullanmalıdır.
2. İşletmeye ait tablolarda veri sahipliği açık olmalıdır.
3. Kritik tablolarda `created_at`, `updated_at` alanları bulunmalıdır.
4. Kritik değişikliklerde işlemi yapan kullanıcı kaydedilmelidir.
5. Fiziksel silme yerine durum değişikliği veya arşivleme tercih edilmelidir.
6. Para alanlarında kayan nokta yerine kesin sayısal tip kullanılmalıdır.
7. Tarih ve saat alanları UTC saklanıp işletme saat diliminde gösterilmelidir.
8. Telefon ve e-posta normalize edilmelidir.
9. Enum değerleri merkezi tanımlanmalıdır.
10. Geçmişe ait finansal ve operasyonel veriler sonradan değişen ayarlardan etkilenmemelidir.
