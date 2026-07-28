# template-renderer.ts Kuralları

## Sorumluluk

Bildirim şablonlarındaki değişkenleri güvenli metne dönüştürür.

## Kurallar

1. `{{variable}}` ve destekleniyorsa `{variable}` biçimleri kontrollü işlenmelidir.
2. Yalnızca izin verilen değişkenler render edilmelidir.
3. `null` ve `undefined` güvenli biçimde boş metne çevrilmelidir.
4. Sayı ve boolean değerler tutarlı metne dönüştürülmelidir.
5. Bilinmeyen değişken sessizce hassas veri açığa çıkarmamalıdır.
6. Regex global kullanımında `lastIndex` kaynaklı yan etki olmamalıdır.
7. Şablon render işlemi HTML enjeksiyonuna açık olmamalıdır.
