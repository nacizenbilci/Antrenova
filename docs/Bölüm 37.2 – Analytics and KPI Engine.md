# Bölüm 37.2 – Analytics and KPI Engine

**Dosya:** `37.2_ANALYTICS_AND_KPI_ENGINE.md`

---

# ANRENOVA MASTER HANDBOOK v1.0

> Analytics Engine, sistem genelindeki verileri anlamlı KPI'lara dönüştürerek operasyonel ve stratejik karar süreçlerini destekler.

## 37.11 Analytics Engine

Merkezi analiz motoru tüm modüllerden veri toplamalıdır.

Veri kaynakları:
- Üyeler
- Paketler
- Randevular
- Ödemeler
- CRM
- Bildirimler

## 37.12 KPI Hesaplama

KPI'lar merkezi servis üzerinden hesaplanmalıdır.

Örnek KPI'lar:
- Aktif Üye Oranı
- Paket Yenileme Oranı
- Ortalama Gelir
- Eğitmen Doluluk Oranı
- Devamsızlık Oranı
- Tahsilat Başarısı

## 37.13 Trend Analizi

Sistem günlük, haftalık, aylık ve yıllık trendleri gösterebilmelidir.

## 37.14 Karşılaştırmalar

Karşılaştırmalar;
- Şube
- Eğitmen
- Tarih
- Paket Türü
- Kampanya

bazında yapılabilmelidir.

## 37.15 Tahminleme

Geleceğe yönelik gelir, üye artışı ve kapasite tahminleri desteklenmelidir.

## 37.16 Gerçek Zamanlı Analiz

Önemli KPI'lar gerçek zamanlı güncellenebilmelidir.

## 37.17 Veri Kalitesi

Eksik veya tutarsız veriler analiz dışında işaretlenmelidir.

## 37.18 Yetkilendirme

Analytics ekranları rol bazlı erişime sahip olmalıdır.

## 37.19 Performans

Yoğun analiz işlemleri arka planda çalıştırılmalıdır.

## 37.20 İzlenebilirlik

KPI hesaplama sürümleri ve değişiklikleri kayıt altına alınmalıdır.

---

## Business Rules

### BR-571
KPI hesaplamaları tek merkezden yapılmalıdır.

### BR-572
Tüm analizler Business ID bazında ayrıştırılmalıdır.

### BR-573
Trend analizleri tarih filtrelerini desteklemelidir.

### BR-574
Tahmin modelleri geçmiş verilerle beslenmelidir.

### BR-575
Gerçek zamanlı KPI'lar önbellekle optimize edilmelidir.

### BR-576
Analytics erişimleri Audit Log'a yazılmalıdır.

---

## Architecture Decision (ADR-089)

Analytics Engine; merkezi KPI servisleri, tahminleme modeli ve ölçeklenebilir veri işleme mimarisi üzerine kurulacaktır.

---

# ✅ Bölüm 37.2 TAMAMLANDI

## Sonraki Dosya

**37.3_EXECUTIVE_DASHBOARDS_AND_DECISION_SUPPORT.md**
