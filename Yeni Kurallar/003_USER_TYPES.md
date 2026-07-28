# 003_USER_TYPES.md

# ANTRENOVA
## User Types

Belge Kodu: AR-003
Versiyon: 1.0.0
Durum: Approved

---

# 1. Amaç

Bu belge sistemdeki tüm kullanıcı tiplerini ve sorumluluklarını tanımlar.

---

# 2. Kullanıcı Tipleri

## 2.1 Süper Yönetici
- Sistemin tamamını yönetir.
- Tüm işletmeleri görüntüler.
- Sistem ayarlarını yönetir.

## 2.2 İşletme Sahibi
- Kendi işletmesini yönetir.
- Şube açabilir.
- Kullanıcı ve roller oluşturabilir.

## 2.3 İşletme Yöneticisi
- Günlük operasyonları yönetir.
- Raporları görüntüler.
- Personeli yönetebilir.

## 2.4 Resepsiyon Görevlisi
- Üye kayıtları
- Paket satışları
- Randevular
- Tahsilatlar

## 2.5 Eğitmen
- Derslerini yönetir.
- Öğrencilerini görüntüler.
- Yoklama alır.
- Performans kayıtlarını işler.

## 2.6 Öğrenci (Üye)
- Paketlerini görüntüler.
- Randevu oluşturur.
- Ödemelerini takip eder.

## 2.7 Veli
- Bağlı öğrencileri görüntüler.
- Ödeme ve devam durumunu izler.

## 2.8 Muhasebe Personeli
- Finans kayıtlarını yönetir.
- Tahsilat ve raporları görüntüler.

---

# 3. Temel Kurallar

- Roller RBAC sistemine bağlıdır.
- Bir kullanıcı birden fazla role sahip olabilir.
- Aynı kullanıcı farklı işletmelerde farklı roller alabilir.
- Yetkiler işletme ve gerektiğinde şube bazında sınırlandırılır.
- Varsayılan roller özelleştirilebilir.

---

# 4. Kabul Kriterleri

Bu belge tüm kullanıcı tipleri için referans dokümandır.

END OF DOCUMENT
