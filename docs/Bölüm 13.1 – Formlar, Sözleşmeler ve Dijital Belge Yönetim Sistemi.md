BÖLÜM 13
Formlar, Sözleşmeler ve Dijital Belge Yönetim Sistemi

Not: Formlar modülü yalnızca PDF çıktısı oluşturan bir ekran değildir. Bu modül; üyelik sürecinin hukuki, operasyonel ve dijital tüm belgelerini yöneten merkezi Document Management System (DMS) olarak tasarlanacaktır.

13.1 Amaç

Belge yönetim sisteminin amacı;

üyelik belgelerini dijitalleştirmek,
hukuki süreçleri desteklemek,
imza süreçlerini yönetmek,
belge arşivini oluşturmak,
tüm belgelerin geçmişini güvenli şekilde saklamaktır.
13.2 Belge Felsefesi

Her belge;

oluşturulur,

↓

doldurulur,

↓

imzalanır,

↓

onaylanır,

↓

arşivlenir.

Belgeler hiçbir zaman doğrudan değiştirilmez.

Yeni sürüm oluşturulur.

13.3 Belge Türleri

Sistem varsayılan olarak aşağıdaki belge türlerini desteklemelidir.

Üyelik Sözleşmesi
KVKK Aydınlatma Metni
Açık Rıza Formu
Sağlık Beyanı
PAR-Q Formu
Veli İzin Belgesi
Gizlilik Sözleşmesi
Kişisel Antrenör Sözleşmesi
Hizmet Sözleşmesi
İptal Formu
Dondurma Talep Formu
Bilgilendirme Formu

İşletme yeni belge türleri oluşturabilir.

13.4 Belge Kimliği

Her belge;

benzersiz UUID ile tutulur.

id
business_id
branch_id
member_id
template_id
document_number
version
status
13.5 Belge Durumları

Desteklenen durumlar;

Taslak
Hazır
Bekliyor
İmzalandı
Onaylandı
İptal Edildi
Arşivlendi
13.6 Şablon Sistemi

Belgeler;

şablonlardan üretilir.

Şablon;

içerik ile belgeyi birbirinden ayırır.

Böylece;

aynı sözleşme farklı işletmelerde kullanılabilir.

13.7 Değişkenler

Belgelerde dinamik alanlar kullanılmalıdır.

Örneğin;

{{member_name}}

{{member_tc}}

{{birth_date}}

{{package_name}}

{{trainer_name}}

{{business_name}}

{{today}}

Belge oluşturulurken tüm değişkenler doldurulur.

13.8 Çoklu Dil

Her belge;

birden fazla dilde hazırlanabilir.

Örneğin;

Türkçe
İngilizce
İspanyolca
Almanca
Fransızca

Üyenin tercih ettiği dil otomatik kullanılabilir.

13.9 Önizleme

Belge;

imzalanmadan önce önizlenebilir.

Eksik bilgiler kullanıcıya gösterilir.

13.10 PDF Oluşturma

Her belge;

standart PDF olarak üretilebilir.

PDF;

oluşturulduğu andaki bilgilerle saklanır.

Sonradan değişmez.

13.11 Dijital İmza

İşletme;

tablet üzerinden dijital imza alabilir.

İmza;

belgeye iliştirilir.

Ham imza verisi;

ayrı saklanabilir.

13.12 Çoklu İmza

Bazı belgelerde;

birden fazla imza gerekebilir.

Örneğin;

Üye

↓

Veli

↓

Personel

Her imza bağımsız doğrulanmalıdır.

13.13 Veli Onayı

18 yaş altındaki üyelerde;

veli imzası zorunlu olabilir.

Bu kural işletme ayarlarından yönetilir.

13.14 Zorunlu Belgeler

İşletme;

üyelik oluşturulmadan önce

zorunlu belgeler tanımlayabilir.

Örneğin;

KVKK
Sağlık Beyanı
Üyelik Sözleşmesi

İmzalanmadan üyelik tamamlanmayabilir.

13.15 Sağlık Beyanı

Üye;

sağlık sorularını cevaplayabilir.

Örneğin;

Kalp rahatsızlığı
Tansiyon
Diyabet
Hamilelik
Ortopedik problem

Bu bilgiler ilgili gizlilik kurallarına uygun işlenmelidir.

13.16 PAR-Q Formu

Uluslararası spor salonlarında kullanılan

PAR-Q

formu desteklenmelidir.

Sonuç;

otomatik risk değerlendirmesinde kullanılabilir.

13.17 KVKK ve Açık Rıza

Her onay için;

Tarih
Saat
Kullanıcı
IP
Belge Versiyonu

saklanmalıdır.

13.18 Belge Sürümleri

Belge şablonu değişirse;

eski belgeler etkilenmez.

Örneğin;

v1

↓

v2

↓

v3

Üye;

hangi sürümü imzaladıysa;

o sürüm saklanır.

13.19 Belge Arşivi

Üyenin tüm belgeleri;

tek ekranda görüntülenebilir.

Örneğin;

Üyelik Sözleşmesi
Sağlık Formu
KVKK
Makbuzlar
Faturalar
13.20 Belge Yaşam Döngüsü
Şablon

↓

Belge

↓

PDF

↓

İmza

↓

Arşiv

↓

Rapor
13.21 Business Rules
BR-129

Belgeler doğrudan düzenlenemez; değişiklikler yeni sürüm oluşturarak yapılmalıdır.

BR-130

İmzalanmış PDF belgeleri sonradan değiştirilemez.

BR-131

Belge oluşturulurken kullanılan değişkenler oluşturma anındaki değerlerle doldurulmalı ve sonradan otomatik güncellenmemelidir.

BR-132

Zorunlu belgeler tamamlanmadan işletmenin belirlediği işlemler (örneğin üyelik aktivasyonu) gerçekleştirilememelidir.

BR-133

Her imza işlemi tarih, saat ve işlemi yapan kullanıcı bilgisiyle birlikte kayıt altına alınmalıdır.

BR-134

Belge şablonlarının yeni sürümleri geçmişte imzalanmış belgeleri etkilememelidir.

BR-135

Belge arşivi yalnızca yetkili kullanıcılar tarafından görüntülenebilmelidir.

BR-136

Belge erişimleri ve indirmeleri audit log kapsamında izlenmelidir.

Architecture Decision (ADR-018)

Belge yönetim sistemi; Template Engine, PDF Generator, Version Manager, Digital Signature Service ve Document Archive bileşenlerinden oluşacaktır. Şablonlar, oluşturulan belgeler ve arşivlenen PDF dosyaları birbirinden ayrılarak yönetilecek; böylece hukuki geçerlilik, sürüm kontrolü ve denetlenebilirlik korunacaktır.

✅ BÖLÜM 13 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 13.2 – Gelişmiş Dijital Belge ve Hukuki Süreç Yönetimi

Bu bölümde;

belge onay iş akışları (workflow),
elektronik imza (e-İmza) ve mobil imza entegrasyonları,
belge paylaşımı,
QR ile belge doğrulama,
belge geçerlilik süreleri,
otomatik yenileme süreçleri,
personel sözleşmeleri,
tedarikçi sözleşmeleri,
belge saklama politikaları,
hukuki denetim ve uyumluluk,
ISO 27001 ve bilgi güvenliği açısından belge yönetimi

kurumsal seviyede ayrıntılı olarak tanımlanacaktır. Bu yapı, mevcut Formlar & Sözleşmeler modülünü tam kapsamlı bir Document Management System (DMS) seviyesine taşıyacaktır.