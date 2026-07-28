# Geliştirme ve Yayın Kuralları

## Çalışma ortamı

Proje klasörü:

```text
D:\Projeler\arzena
```

VS Code Terminal komutları:

```bash
cd D:\Projeler\arzena
npm.cmd run dev
npm.cmd run build
```

## GitHub yükleme

```bash
git status
git add .
git commit -m "Açıklayıcı değişiklik mesajı"
git push
```

## Kurallar

1. Üretime göndermeden önce build alınmalıdır.
2. TypeScript hataları kapatılmadan Vercel'e gönderilmemelidir.
3. Gizli anahtarlar repoya eklenmemelidir.
4. Veritabanı migration dosyaları sürüm kontrolüne alınmalıdır.
5. Her büyük modül değişikliğinde dokümantasyon güncellenmelidir.
