BÖLÜM 5
Kullanıcılar, Roller ve Yetkilendirme (RBAC)
5.1 Amaç

Antrenova'nın güvenlik modeli Role Based Access Control (RBAC) üzerine kuruludur.

Hiçbir kullanıcı doğrudan tüm yetkilere sahip değildir.

Kullanıcının sistemde yapabileceği her işlem;

rolü,
izinleri,
işletmesi,
şubesi

tarafından belirlenir.

Yetkilendirme yalnızca kullanıcı deneyimi için değil, veri güvenliği için de uygulanır.

5.2 Temel Güvenlik İlkesi

Sistemin varsayılan yaklaşımı:

İzin verilmediyse erişim yoktur.

Yeni oluşturulan hiçbir kullanıcı varsayılan olarak yönetici yetkisi alamaz.

5.3 Yetki Hiyerarşisi
Platform Super Admin
        │
Platform Support
        │
Business Owner
        │
Business Admin
        │
Branch Manager
        │
Reception
        │
Trainer
        │
Finance
        │
Read Only

Bu hiyerarşi yalnızca genel seviyeyi gösterir.

Gerçek yetkilendirme izin bazlı yapılır.

5.4 Kullanıcı (User)

Kullanıcı;

sisteme giriş yapabilen kişidir.

Bir kullanıcı;

işletme sahibi olabilir
resepsiyon görevlisi olabilir
eğitmen olabilir
muhasebeci olabilir
danışman olabilir

Kullanıcı ile Üye (Member) kavramı birbirinden tamamen ayrıdır.

5.5 Member ≠ User

Bir üye sisteme giriş yapmak zorunda değildir.

Bir kullanıcı ise mutlaka giriş yapar.

Örnek

Ali

↓

Member

↓

Spor yapıyor

↓

Sisteme giriş yapmıyor
Ayşe

↓

Reception

↓

User

↓

Sisteme giriş yapıyor
5.6 Kullanıcı Yaşam Döngüsü
Oluşturuldu

↓

Davet Gönderildi

↓

Şifre Oluşturdu

↓

İlk Giriş

↓

Aktif

↓

Pasif

↓

Arşiv

↓

Silindi
5.7 Kullanıcı Durumları

Her kullanıcı yalnızca bir durumda bulunabilir.

Pending

Henüz daveti kabul etmemiştir.

Active

Normal kullanımdadır.

Suspended

Geçici olarak giriş engellenmiştir.

Archived

Çalışan ayrılmıştır.

Veriler korunur.

5.8 Davet Sistemi

Yeni kullanıcı oluşturulunca;

hesap doğrudan aktif olmaz.

Önce davet gönderilir.

Kullanıcı;

e-posta
veya SMS

üzerinden daveti kabul eder.

Şifresini oluşturur.

Daha sonra sisteme giriş yapar.

5.9 Aynı Kullanıcı

Bir kullanıcı;

birden fazla işletmede görev alabilir.

Örneğin;

Ahmet

↓

Business A

↓

Trainer

↓

Business B

↓

Consultant

Bu durumda;

her işletmedeki rolü farklı olabilir.

5.10 Business Owner

Business Owner;

işletmenin en yüksek yetkili kullanıcısıdır.

Yetkileri;

kullanıcı ekleme
rol oluşturma
finans
ayarlar
dashboard
raporlar

tam yetkilidir.

Platform ayarlarına erişemez.

5.11 Business Admin

Business Owner tarafından atanır.

İşletmeyi yönetebilir.

Ancak;

işletme sahibini silemez.

Lisans değiştiremez.

Platform ayarlarına erişemez.

5.12 Branch Manager

Yalnızca kendi şubesini yönetebilir.

Başka şubenin;

üyelerini
finansını
raporlarını

göremez.

5.13 Trainer

Eğitmen;

üyelerin kişisel bilgilerine sınırlı erişebilir.

Görebilir;

program
randevu
devam durumu
performans notları

Göremez;

finans
maaş
işletme ayarları
kullanıcı yönetimi
5.14 Reception

Resepsiyon;

üyeleri yönetebilir.

Ödeme alabilir.

Randevu oluşturabilir.

Ancak;

rol oluşturamaz.

Finans raporlarını göremez.

5.15 Finance

Muhasebe kullanıcısı;

ödeme,

fatura,

makbuz,

rapor

işlemlerini yönetebilir.

Üye silme yetkisi yoktur.

5.16 Read Only

Sadece görüntüleme yapabilir.

Hiçbir kayıt oluşturamaz.

Hiçbir kayıt güncelleyemez.

Hiçbir kayıt silemez.

5.17 Özel Roller

İşletme isterse;

kendi rollerini oluşturabilir.

Örneğin;

Satış
Diyetisyen
Temizlik
Müdür
Operasyon
5.18 İzin Sistemi

Yetkiler rol üzerinden gelir.

Ancak;

gerekirse

tek kullanıcıya özel izin de verilebilir.

Örneğin;

Reception

↓

Normalde rapor göremez.

↓

Ali isimli kullanıcı

↓

Satış raporunu görebilir.

5.19 İzin Grupları

İzinler modül bazında ayrılır.

Örneğin;

Dashboard

↓

View

↓

Edit

↓

Export

Members

↓

View

↓

Create

↓

Edit

↓

Delete

↓

Archive

↓

Restore

Packages

↓

View

↓

Create

↓

Edit

↓

Delete

↓

Freeze

↓

Transfer

Appointments

↓

View

↓

Create

↓

Update

↓

Cancel

↓

Attendance

Payments

↓

View

↓

Receive

↓

Refund

↓

Delete

↓

Export

Reports

↓

View

↓

Export

↓

Print

Settings

↓

View

↓

Edit

5.20 Yetki Kontrolü

Her işlemde aşağıdaki sıra uygulanır.

Giriş Yapmış mı?

↓

Aktif mi?

↓

Business doğru mu?

↓

Branch doğru mu?

↓

Rol uygun mu?

↓

Permission uygun mu?

↓

İşlem yapılabilir.

Bu kontroller sunucu tarafında uygulanır.

5.21 Sunucu Tarafı Güvenliği

Frontend'de buton gizlemek yeterli değildir.

Sunucu tarafı da aynı kontrolü yapmak zorundadır.

Örneğin;

Kullanıcı URL değiştirerek

/settings/users

sayfasına ulaşmaya çalışırsa;

sunucu erişimi reddeder.

5.22 Audit

Yetki gerektiren bütün işlemler loglanır.

Örneğin;

Ali

↓

Üyeyi sildi

↓

Saat

↓

IP

↓

Tarayıcı

↓

Eski veri

↓

Yeni veri

5.23 İki Aşamalı Doğrulama (2FA)

İleride;

Business Owner,

Business Admin,

Platform Admin

için

iki aşamalı doğrulama desteklenecektir.

Bu özellik isteğe bağlı veya zorunlu olarak etkinleştirilebilir.

5.24 Oturum Yönetimi

Her oturum için;

cihaz bilgisi,
IP adresi,
tarayıcı,
son işlem zamanı

kaydedilebilir.

Kullanıcı aktif oturumlarını görüntüleyebilir ve istediğini sonlandırabilir.

5.25 Parola Politikası

Parolalar;

düz metin olarak saklanmaz,
geri döndürülemez,
güvenli algoritmalarla korunur.

Parola sıfırlama bağlantıları tek kullanımlıktır ve süre sınırlıdır.

5.26 Yetki Devri

Business Owner, belirli yetkilerini geçici olarak başka bir kullanıcıya devredebilir.

Örneğin;

izin döneminde bir Business Admin'e finans onay yetkisi verilebilir.

Bu yetki süreli olabilir ve süresi dolunca otomatik kaldırılır.

5.27 Business Rules
BR-025

Hiçbir kullanıcı doğrudan tüm yetkilere sahip olamaz; yetkiler rol ve izinler üzerinden yönetilir.

BR-026

Her sunucu işlemi kullanıcı yetkisini tekrar doğrulamak zorundadır.

BR-027

Frontend'de gizlenen bir işlem, sunucu tarafında da engellenmelidir.

BR-028

Business Owner dışında hiçbir kullanıcı işletmeyi silemez veya devredemez.

BR-029

Kullanıcı ile Üye kavramı birbirinden bağımsızdır ve aynı veri modeli olarak değerlendirilmez.

BR-030

Tüm kritik yetki değişiklikleri audit log'a kaydedilmelidir.

Architecture Decision (ADR-003)

Antrenova'da rol bazlı (RBAC) yapı temel alınacak, ancak gerektiğinde izin bazlı özelleştirme (permission override) desteklenecektir. Böylece sistem hem küçük işletmeler için kolay yönetilebilir olacak hem de büyük işletmelerin özel organizasyon yapılarına uyum sağlayabilecektir.