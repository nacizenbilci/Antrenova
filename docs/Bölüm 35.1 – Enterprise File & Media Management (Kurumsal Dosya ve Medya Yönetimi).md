# Bölüm 35.1 – Enterprise File & Media Management (Kurumsal Dosya ve Medya Yönetimi)

**Dosya:** `35.1_ENTERPRISE_FILE_AND_MEDIA_MANAGEMENT.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Enterprise yazılımlarda dosya yönetimi yalnızca yükleme ve indirme işlemlerinden ibaret değildir. Güvenlik, versiyonlama, erişim kontrolü, ölçeklenebilir depolama ve yaşam döngüsü yönetimi birlikte ele alınmalıdır.

---

## 35.1 Amaç

Dosya yönetim sisteminin amacı;

- güvenli depolama,
- yüksek performans,
- erişim kontrolü,
- versiyon yönetimi,
- uzun dönem arşivleme

sağlamaktır.

---

## 35.2 Desteklenen Dosya Türleri

Platform aşağıdaki içerikleri desteklemelidir.

- Görseller
- PDF
- Word
- Excel
- Video
- Ses
- ZIP
- CSV

---

## 35.3 Dosya Yaşam Döngüsü

Her dosya aşağıdaki yaşam döngüsünü takip etmelidir.

Yükleme

↓

Doğrulama

↓

Virüs Kontrolü

↓

Depolama

↓

Versiyonlama

↓

Arşiv

↓

Silme

---

## 35.4 Depolama Katmanı

Dosyalar uygulama sunucusunda değil, merkezi Object Storage üzerinde tutulmalıdır.

---

## 35.5 Metadata

Her dosya için aşağıdaki bilgiler saklanmalıdır.

- Dosya Adı
- MIME Type
- Boyut
- Oluşturan Kullanıcı
- Business ID
- Branch ID
- Hash
- Storage Path

---

## 35.6 Erişim Yetkisi

Dosya erişimi;

- Kullanıcı
- Rol
- İşletme
- Şube

bazında sınırlandırılmalıdır.

---

## 35.7 Dosya Önizleme

Desteklenen dosyalar tarayıcı üzerinde önizlenebilmelidir.

---

## 35.8 Güvenlik

Yüklenen tüm dosyalar güvenlik kontrollerinden geçirilmelidir.

---

## 35.9 Performans

Büyük dosyalar parçalı (chunked) yükleme yöntemini desteklemelidir.

---

## 35.10 Arşivleme

Uzun süre kullanılmayan dosyalar düşük maliyetli depolama alanına taşınabilmelidir.

---

## Business Rules

### BR-529

Tüm dosyalar merkezi depolama alanında saklanmalıdır.

### BR-530

Dosya erişimleri yetkilendirme kurallarına tabi olmalıdır.

### BR-531

Yüklenen dosyalar doğrulanmalıdır.

### BR-532

Hash değeri her dosya için saklanmalıdır.

### BR-533

Dosya yüklemeleri loglanmalıdır.

### BR-534

Chunk Upload büyük dosyalar için desteklenmelidir.

---

## Architecture Decision (ADR-082)

Antrenova dosya yönetimi; Object Storage, merkezi metadata yönetimi ve güvenli erişim prensipleri üzerine kurulacaktır.

---

# ✅ Bölüm 35.1 TAMAMLANDI

## Sonraki Dosya

**35.2 – Media Processing, Versioning ve Image Optimization**
