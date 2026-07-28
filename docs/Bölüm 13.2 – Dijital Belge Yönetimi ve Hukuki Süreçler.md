BÖLÜM 13 (DEVAM)
Dijital Belge Yönetimi ve Hukuki Süreçler

Not: Bu bölüm, Antrenova'nın belge altyapısını yalnızca spor salonları için değil; gelecekte ERP, CRM ve kurumsal insan kaynakları süreçlerini de destekleyecek seviyeye taşımaktadır.

13.22 Belge Onay İş Akışları (Workflow)

Her belge;

tek adımda onaylanmak zorunda değildir.

Örneğin;

Belge Oluştur

↓

Resepsiyon

↓

Şube Müdürü

↓

İşletme Sahibi

↓

Onaylandı

İş akışları işletme tarafından özelleştirilebilir.

13.23 Dinamik Onay Kuralları

Belgenin türüne göre farklı onay süreçleri tanımlanabilir.

Örneğin;

Üyelik sözleşmesi → Resepsiyon
Personel sözleşmesi → İK + Yönetici
Tedarikçi sözleşmesi → Yönetici + Muhasebe
Büyük satın alma → Yönetim Kurulu
13.24 Elektronik İmza (e-İmza)

Gelecekte desteklenebilecek entegrasyonlar;

e-İmza
Mobil İmza
Uzaktan Kimlik Doğrulama

Bu entegrasyonlar ülkelere göre değişebilir.

Antrenova;

altyapıyı hazır tutmalıdır.

13.25 Dijital İmza ile Elektronik İmza Ayrımı

Sistem iki kavramı birbirinden ayırmalıdır.

Dijital İmza

Tablet
Dokunmatik ekran
Parmak
Kalem

Elektronik İmza

Sertifika
Resmî doğrulama
Hukuki altyapı

Bu iki yöntem aynı belge üzerinde kullanılabilir.

13.26 QR ile Belge Doğrulama

Her PDF'nin benzersiz doğrulama kodu bulunabilir.

PDF

↓

QR

↓

Belge Doğrulama Sayfası

↓

Geçerli

QR yalnızca doğrulama amacıyla kullanılır.

13.27 Belge Paylaşımı

Belgeler;

E-posta
WhatsApp
Güvenli Link
PDF İndir

şeklinde paylaşılabilir.

Paylaşım kayıt altına alınmalıdır.

13.28 Güvenli Belge Bağlantıları

Paylaşım linkleri;

tek kullanımlık,
süreli,
şifre korumalı

olabilir.

Örneğin;

Link

↓

48 Saat

↓

Süresi Doldu
13.29 Belge Geçerlilik Süresi

Bazı belgelerin süreleri olabilir.

Örneğin;

Sağlık Raporu
Doktor Onayı
Eğitmen Sertifikası

Süre dolunca sistem uyarı üretir.

13.30 Otomatik Yenileme

Belge süresi dolmadan önce;

otomatik hatırlatma gönderilebilir.

Örneğin;

30 gün önce
15 gün önce
7 gün önce
13.31 Personel Belgeleri

Çalışanlar için;

İş Sözleşmesi
Gizlilik Sözleşmesi
KVKK
Sertifikalar
Eğitim Belgeleri

saklanabilir.

13.32 Eğitmen Sertifikaları

Her eğitmenin;

federasyon belgeleri,
antrenörlük belgeleri,
ilk yardım sertifikaları

ayrı yönetilebilir.

Son kullanma tarihi izlenebilir.

13.33 Tedarikçi Belgeleri

Tedarikçiler için;

sözleşmeler,
teklif dosyaları,
teknik şartnameler,
garanti belgeleri

saklanabilir.

13.34 Belge Kategorileri

Belgeler kategorilere ayrılmalıdır.

Örneğin;

Hukuki
Finansal
Üyelik
Sağlık
Personel
Satın Alma
Teknik
13.35 Belge Etiketleri

Belgeler;

etiketlenebilir.

Örneğin;

Acil
Gizli
Süresi Dolacak
İmzalanmadı
13.36 Arama Motoru

Belge arama;

yalnızca dosya adına göre yapılmamalıdır.

Aranabilecek alanlar;

Üye
Tarih
Belge Türü
Belge No
İçerik
Etiket
13.37 Saklama Politikaları

Her belge türü için;

saklama süresi tanımlanabilir.

Örneğin;

Belge Türü	Süre
Üyelik Sözleşmesi	10 Yıl
Makbuz	Yasal Süre
Sağlık Formu	İşletme Politikası

Bu süreler ülkelere göre değişebilir.

13.38 Belge İmha Politikası

Saklama süresi dolan belgeler;

otomatik silinmez.

Yönetici onayı gerekir.

İmha işlemi audit kaydı oluşturur.

13.39 Bilgi Güvenliği

Belge sistemi;

aşağıdaki güvenlik prensiplerine uygun tasarlanmalıdır.

Yetkilendirme
Şifreleme
Audit Log
Versiyonlama
Erişim Takibi
Güvenli Paylaşım
13.40 ISO 27001 Uyumluluğu

Belge yönetim sistemi;

ISO 27001 yaklaşımına uygun şekilde;

erişim kontrolü,
kayıt yönetimi,
değişiklik yönetimi,
izlenebilirlik

prensiplerini desteklemelidir.

Bu, sertifika garantisi anlamına gelmez; mimarinin standartlara uyumlu tasarlanmasını ifade eder.

13.41 Business Rules
BR-137

Belge onay iş akışları işletme tarafından özelleştirilebilmelidir.

BR-138

Elektronik imza desteği eklendiğinde mevcut dijital imza kayıtlarıyla geriye dönük uyumluluk korunmalıdır.

BR-139

QR doğrulama yalnızca belgenin geçerliliğini göstermeli, yetkisiz kişilere belge içeriğini ifşa etmemelidir.

BR-140

Süresi dolan belgeler otomatik olarak "yenilenmesi gerekiyor" durumuna alınabilir ancak otomatik silinmemelidir.

BR-141

Belge paylaşım bağlantıları süreli ve gerektiğinde iptal edilebilir olmalıdır.

BR-142

Belge erişimleri, indirmeleri ve paylaşımları ayrı audit kayıtları oluşturmalıdır.

BR-143

Saklama süresi dolan belgeler yalnızca yetkili kullanıcı onayıyla imha edilebilmelidir.

BR-144

Belge yönetimi modülü; üyeler, personeller, tedarikçiler ve işletmeye ait tüm belge türlerini ortak mimariyle yönetebilmelidir.

Architecture Decision (ADR-019)

Belge yönetim sistemi; Workflow Engine, Version Manager, Signature Service, Document Archive, Search Index ve Retention Policy Engine bileşenlerinden oluşacaktır. Bu servisler birbirinden bağımsız çalışacak ve gelecekte e-İmza sağlayıcıları, kurumsal arşiv sistemleri ve farklı ülkelerdeki hukuki gereksinimlerle entegre olabilecek şekilde tasarlanacaktır.

✅ BÖLÜM 13 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın belge altyapısı;

dijital belge üretimi,
sürüm yönetimi,
çok adımlı onay süreçleri,
dijital ve elektronik imza,
QR doğrulama,
güvenli paylaşım,
belge arşivleme,
saklama ve imha politikaları,
bilgi güvenliği prensipleri

gibi kurumsal Document Management System (DMS) yeteneklerini kapsayacak şekilde tanımlanmıştır.