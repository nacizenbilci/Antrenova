# ANTRENOVA — Proje Vizyonu

**Belge Kodu:** ANR-FND-000  
**Sürüm:** 1.0.0  
**Durum:** Onaylı  
**Sınıf:** Değiştirilemez Temel Belge  
**Son Güncelleme:** 26.07.2026

---

## 1. Belgenin Amacı

Bu belge, Antrenova'nın uzun vadeli ürün vizyonunu, varlık nedenini ve tüm teknik ile operasyonel kararların dayanacağı temel ilkeleri tanımlar.

Bu belgeye aykırı ürün, tasarım, veri tabanı, API, güvenlik veya iş kuralı kararı alınamaz.

---

## 2. Proje Tanımı

**Proje adı:** Antrenova

**Proje açıklaması:**  
Antrenova, spor salonlarının tüm operasyonlarını tek platform üzerinden dijital olarak yönetmesini sağlayan yeni nesil spor salonu yönetim sistemidir.

---

## 3. Ürün Vizyonu

Antrenova yalnızca bir spor salonu takip yazılımı değildir.

Antrenova'nın uzun vadeli vizyonu; spor salonları, spor akademileri, stüdyolar, kulüpler ve çok şubeli spor işletmeleri için güvenilir, ölçeklenebilir ve bütünleşik bir dijital işletim platformu olmaktır.

Platform aşağıdaki işletme türlerini destekleyebilecek esneklikte tasarlanacaktır:

- Fitness salonları
- Pilates ve reformer stüdyoları
- Yüzme kulüpleri
- Tenis akademileri
- Dövüş sporları merkezleri
- Dans okulları
- Yoga stüdyoları
- Cimnastik ve çocuk spor merkezleri
- CrossFit ve fonksiyonel antrenman merkezleri
- Çok şubeli spor zincirleri
- Franchise yapıları

---

## 4. Ana Amaç

Antrenova'nın ana amacı, spor işletmelerinin günlük operasyonlarını tek merkezde toplamak ve aşağıdaki alanlarda ölçülebilir iyileşme sağlamaktır:

- Operasyonel hız
- Veri doğruluğu
- Tahsilat takibi
- Randevu ve ders planlama
- Üye bağlılığı
- Personel verimliliği
- Şube kontrolü
- Yönetim raporlaması
- Güvenlik
- Ölçeklenebilirlik

---

## 5. Ürün Felsefesi

### 5.1 Mobil Öncelikli

Antrenova'nın ilk ürünü iOS ve Android üzerinde çalışan mobil uygulamadır.

### 5.2 Basit Kullanım

Kullanıcılar uzun eğitim süreçlerine ihtiyaç duymadan temel işlemleri gerçekleştirebilmelidir.

### 5.3 Hızlı İşlem

Sık kullanılan işlemler mümkün olan en az adımda tamamlanmalıdır.

### 5.4 Güvenli Veri Yönetimi

İşletmelerin verileri birbirinden kesin şekilde ayrılmalıdır.

### 5.5 Ölçeklenebilirlik

Sistem başlangıçta 500 öğrenci, 20 eğitmen ve 5 işletmeyi; ileride en az 10.000 öğrenci, 250 eğitmen ve 100 işletmeyi destekleyecek şekilde tasarlanmalıdır.

### 5.6 Modülerlik

Yeni modüller mevcut sistemi bozmayacak şekilde eklenebilmelidir.

### 5.7 API Öncelikli Mimari

Mobil, web ve gelecekteki diğer istemciler aynı servis katmanını kullanmalıdır.

---

## 6. Değiştirilemez Temel İlkeler

1. Sistem Multi-Tenant olacaktır.
2. Her işletmenin verisi kesin olarak izole edilecektir.
3. İşletmeler birden fazla şubeye sahip olabilecektir.
4. Şubeler birden fazla salon veya hizmet alanı içerebilecektir.
5. Spor branşları sabit kodlanmayacaktır.
6. Rol tabanlı yetkilendirme kullanılacaktır.
7. Mobil uygulama ilk ürün olacaktır.
8. iOS ve Android tek kod tabanından geliştirilecektir.
9. React Native CLI kullanılacaktır.
10. Expo kullanılmayacaktır.
11. PostgreSQL kullanılacaktır.
12. Tüm istemciler ortak API katmanını kullanacaktır.
13. Kritik işlemler denetim kaydına alınacaktır.
14. Hazır şablon kodları temel alınmayacaktır.
15. Arayüz Antrenova'ya özel tasarlanacaktır.

---

## 7. Hedef Kullanıcılar

- Süper Yönetici
- İşletme Sahibi
- İşletme Yöneticisi
- Resepsiyon Görevlisi
- Eğitmen
- Öğrenci
- Veli
- Muhasebe Personeli

---

## 8. Başarı Kriterleri

Antrenova başarılı kabul edilmek için:

- Mobilde hızlı çalışmalı
- Büyük veri hacminde performans kaybetmemeli
- İşletmeler arası veri karışmasına izin vermemeli
- Kullanıcı rollerini doğru uygulamalı
- Yeni modüllere açık olmalı
- Kolay öğrenilmeli
- Günlük operasyonları azaltmalı
- Yönetilebilir ve sürdürülebilir olmalıdır

---

## 9. Yasaklanan Yaklaşımlar

- Tek işletmeye özel sabit mimari
- Şube desteği sonradan eklenecekmiş gibi tasarım
- Sabit spor branşları
- Arayüzde gizleyip API'de yetki kontrolü yapmamak
- Hazır tema koduna bağımlı ürün geliştirmek
- Kritik kayıtları fiziksel olarak silmek
- Ölçek testleri yapılmadan canlıya çıkmak

---

## 10. Kabul Kriterleri

Bu belge:

- Tüm ekip tarafından kabul edilmelidir.
- Mimari kararların ana referansı olmalıdır.
- Alt belgelerle çelişmemelidir.
- Değişiklik gerektirdiğinde resmi revizyon sürecine tabi olmalıdır.

---

## 11. Revizyon Geçmişi

| Sürüm | Tarih | Açıklama |
|---|---|---|
| 1.0.0 | 26.07.2026 | İlk onaylı sürüm |
