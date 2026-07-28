BÖLÜM 11 (DEVAM)
Bildirim ve İletişim Sistemi – Gelişmiş CRM ve Omnichannel Mimarisi

Not: Bu bölüm, Antrenova'nın bildirim altyapısını yalnızca mesaj gönderen bir sistem olmaktan çıkarıp tam kapsamlı bir CRM iletişim platformuna dönüştürür. Tüm iletişim geçmişi, kampanyalar, otomasyonlar ve müşteri etkileşimleri tek merkezden yönetilir.

11.22 Omnichannel İletişim

Antrenova;

aynı mesajı farklı kanallardan yönetebilir.

Örneğin;

Randevu Hatırlatma

↓

WhatsApp

↓

Gönderilemedi

↓

SMS

↓

Başarılı

↓

Mail

Gönderme

İşletme;

öncelik sırası belirleyebilir.

11.23 Kanal Öncelikleri

Her olay için kanal önceliği tanımlanabilir.

Örneğin;

1

WhatsApp

↓

2

Push

↓

3

SMS

↓

4

Mail

İlk başarılı kanal sonrasında diğerleri iptal edilebilir.

11.24 WhatsApp Business Platform

Antrenova yalnızca resmi Meta API altyapısını destekler.

Desteklenen mimari;

Meta Cloud API
Embedded Signup
Official Business Account
Official Templates

Resmî olmayan çözümler desteklenmez.

11.25 Embedded Signup

İşletme;

Antrenova panelinden çıkmadan;

Meta hesabını bağlayabilir.

Süreç;

Antrenova

↓

Meta Login

↓

Business Verification

↓

Phone Connection

↓

Webhook

↓

Ready
11.26 WhatsApp Business App Coexistence

İşletme;

aynı telefon numarasını;

hem

WhatsApp Business App

hem de

Cloud API

ile kullanabilir.

Bu yapı desteklenmelidir.

11.27 Şablon Yönetimi

WhatsApp şablonları;

Meta ile senkronize edilir.

Her şablon için;

Dil
Kategori
Durum
Son Güncelleme

saklanır.

11.28 Kampanyalar

İşletme;

manuel kampanyalar oluşturabilir.

Örneğin;

Yeni Paket
Yaz Kampanyası
İndirim
Yeni Şube
Etkinlik
11.29 Segment Yönetimi

Mesajlar;

her üyeye gönderilmez.

Segment seçilir.

Örneğin;

Aktif Üyeler
Pasif Üyeler
Borçlular
Doğum Günü
Son 30 Gün Gelmeyenler
Pilates Üyeleri
11.30 Dinamik Segmentler

Segmentler;

otomatik güncellenebilir.

Örneğin;

Borcu

>

2.000 TL

↓

Otomatik Liste
11.31 Otomatik Kampanyalar (Drip)

Belirli olaylardan sonra;

otomatik mesaj serileri çalışabilir.

Örneğin;

Yeni Üye

↓

1 Gün

↓

Hoş Geldiniz

↓

7 Gün

↓

İlk Deneyim

↓

30 Gün

↓

Memnuniyet
11.32 Doğum Günü Otomasyonu

Üyenin doğum günü geldiğinde;

otomatik;

WhatsApp
SMS
Mail

gönderilebilir.

Kupon da eklenebilir.

11.33 Paket Yenileme Kampanyası

Paket bitimine;

15

10

7

3

1 gün kala

otomatik teklifler gönderilebilir.

11.34 AI Mesaj Önerileri

Yapay zekâ;

üyenin geçmiş davranışına göre;

mesaj tonu önerebilir.

Örneğin;

Resmî
Samimi
Motivasyon
Satış Odaklı
11.35 AI Gönderim Zamanı

AI;

üyenin mesajları en çok hangi saatlerde okuduğunu analiz ederek;

en uygun gönderim saatini önerebilir.

11.36 A/B Testleri

Bir kampanya;

iki farklı mesaj ile test edilebilir.

Örneğin;

Mesaj A

↓

%50

↓

Mesaj B

↓

%50

Sonuçlara göre;

en başarılı şablon önerilir.

11.37 Opt-in

Üye;

hangi kanallardan mesaj almak istediğini belirleyebilir.

Örneğin;

WhatsApp ✔

SMS ✖

Mail ✔

Push ✔
11.38 Opt-out

Üye;

istediği zaman;

kanallardan çıkabilir.

Bu tercih geçmişe dönük değiştirilmez.

11.39 KVKK / GDPR Uyumluluğu

İletişim izinleri;

ayrı kayıt olarak saklanmalıdır.

Saklanacak bilgiler;

İzin Tarihi
Kanal
IP
Kullanıcı
Onay Metni Versiyonu
11.40 Webhook Yönetimi

Sağlayıcılardan gelen;

Delivered
Read
Failed
Template Updated

olayları webhook ile alınır.

Webhook tekrarları güvenli şekilde yönetilmelidir.

11.41 Bildirim KPI'ları

Dashboard;

aşağıdaki metrikleri göstermelidir.

Gönderim Sayısı
Teslim Oranı
Okunma Oranı
Başarısızlık
Ortalama Gönderim Süresi
Kanal Başarı Oranı
11.42 CRM İletişim Geçmişi

Üye kartında;

tüm iletişim geçmişi görüntülenebilir.

Örneğin;

WhatsApp

↓

Teslim Edildi

↓

Okundu

↓

14:53

Aynı ekranda;

SMS

Mail

Push

kayıtları da bulunur.

11.43 Business Rules
BR-107

Tüm iletişim izinleri üye bazında ayrı ayrı yönetilmelidir.

BR-108

WhatsApp entegrasyonunda yalnızca resmi Meta Business Platform desteklenmelidir.

BR-109

Kampanyalar yalnızca ilgili segmentlerdeki üyelere gönderilmelidir.

BR-110

Webhook ile gelen teslimat olayları mevcut bildirim kayıtlarını güncellemelidir.

BR-111

Opt-out yapan üyeye ilgili kanaldan yeniden mesaj gönderilemez.

BR-112

A/B testleri farklı mesaj içeriklerini aynı kampanya altında bağımsız analiz etmelidir.

BR-113

AI önerileri kullanıcı yerine otomatik karar vermemeli; yalnızca öneri sunmalıdır.

BR-114

Bildirim geçmişi denetim amacıyla saklanmalı ve fiziksel olarak silinmemelidir.

Architecture Decision (ADR-015)

Bildirim sistemi; Omnichannel CRM Platformu olarak tasarlanacaktır. Tüm iletişim kanalları ortak bir olay, şablon, kuyruk ve analiz altyapısını paylaşacaktır. Sağlayıcılar birbirinden bağımsız olacak; Meta, SMS veya e-posta servislerinin değiştirilmesi iş kurallarını etkilemeyecektir. Böylece Antrenova, gelecekte yeni iletişim kanallarını minimum geliştirme maliyetiyle sisteme ekleyebilecektir.

✅ BÖLÜM 11 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın iletişim altyapısı;

Resmî WhatsApp Business Platform,
SMS,
E-posta,
Push Bildirimleri,
Omnichannel iletişim,
Segmentasyon,
Kampanya yönetimi,
AI destekli mesaj önerileri,
KVKK/GDPR uyumluluğu,
Teslimat analitiği

gibi kurumsal CRM gereksinimlerini kapsayacak şekilde tanımlanmıştır.