# ANTRENOVA — Ürün Felsefesi

**Belge Kodu:** ANR-FND-001  
**Sürüm:** 1.0.0  
**Durum:** Onaylı

---

## 1. Amaç

Bu belge, Antrenova geliştirilirken ürün kararlarının hangi düşünce yapısıyla alınacağını tanımlar.

---

## 2. Temel Felsefe

Antrenova'nın temel yaklaşımı:

> Karmaşık spor işletmesi süreçlerini kullanıcıya basit, hızlı ve güvenilir bir deneyim olarak sunmaktır.

---

## 3. Ürün İlkeleri

### 3.1 Kullanıcıyı Yormama

- Gereksiz alan gösterilmez.
- Aynı bilgi tekrar istenmez.
- Sık kullanılan işlemler öne çıkarılır.
- Teknik terimler sadeleştirilir.

### 3.2 İş Akışına Uyum

Antrenova, işletmeleri yazılıma uydurmaya çalışmamalıdır. Yazılım, farklı işletme türlerinin gerçek iş akışlarına uyarlanabilir olmalıdır.

### 3.3 Hata Önleme

Sistem hatayı yalnızca bildirmemeli, mümkün olduğunda hata oluşmasını baştan engellemelidir.

Örnek:

- Çakışan randevu oluşturulmaması
- Yetkisiz işlemin başlamadan engellenmesi
- Eksik zorunlu alanların açık gösterilmesi
- Aynı tahsilatın iki kez kaydedilmemesi

### 3.4 Güven Veren Tasarım

Kullanıcı, yaptığı işlemin sonucunu açıkça görmelidir.

- Başarılı işlem bildirimi
- Hata nedeni
- Geri alınabilir işlemler
- Kritik işlemlerde doğrulama
- Veri kaybına karşı koruma

### 3.5 Tutarlılık

Aynı tür işlemler uygulamanın her yerinde aynı davranmalıdır.

- Aynı buton dili
- Aynı tarih biçimi
- Aynı para biçimi
- Aynı durum renkleri
- Aynı silme ve arşivleme mantığı

---

## 4. Ürün Kararlarında Öncelik Sırası

1. Veri güvenliği
2. Doğru iş kuralı
3. Kullanım kolaylığı
4. Performans
5. Görsel kalite
6. Yeni özellik hızı

Görsel kalite hiçbir zaman güvenlik veya doğruluk önüne geçemez.

---

## 5. Arayüz Yaklaşımı

- Arayüz sıfırdan tasarlanacaktır.
- Hazır tasarımlar yalnızca ilham amacıyla incelenecektir.
- Mobil kullanım birinci önceliktir.
- Tek elle kullanım desteklenmelidir.
- Kritik işlemler küçük dokunma alanlarına bırakılmamalıdır.
- Rol bazlı sadeleştirme uygulanmalıdır.

---

## 6. Ürün Geliştirme Yaklaşımı

- Önce kural
- Sonra kullanıcı akışı
- Sonra veri modeli
- Sonra tasarım
- En son kod

Kod, belirsiz bir iş kuralını çözmek için kullanılmayacaktır.

---

## 7. Kabul Kriterleri

Bir özellik yalnızca çalıştığı için tamamlanmış sayılmaz. Aşağıdaki koşulları sağlamalıdır:

- Doğru kullanıcıya gösterilmesi
- Doğru yetkiyle çalışması
- Mobil kullanımının rahat olması
- Hatalı durumda güvenli davranması
- Loglanması gereken işlemleri kaydetmesi
- Ölçek hedeflerine uygun olması
