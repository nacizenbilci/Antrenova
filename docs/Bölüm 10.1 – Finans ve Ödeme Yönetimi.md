BÖLÜM 10
Finans ve Ödeme Yönetimi

Not: Finans modülü, Antrenova'nın ticari güvenilirliğini sağlayan çekirdek modüldür. Bir paketin satışı, ödemenin alınması, borcun oluşması, makbuzun kesilmesi, raporların oluşturulması ve gelecekteki ERP entegrasyonları bu mimari üzerine kurulacaktır.

10.1 Amaç

Finans modülünün amacı;

gelirleri yönetmek,
tahsilatları takip etmek,
borçları kontrol etmek,
finansal kayıtları denetlenebilir şekilde saklamak,
muhasebe süreçlerini desteklemektir.

Bu modül hiçbir zaman yalnızca "ödeme alma ekranı" olarak düşünülmemelidir.

10.2 Finans Felsefesi

Antrenova'da;

satış, tahsilat ve borç farklı kavramlardır.

Örneğin;

Paket Satışı

↓

1.000 TL

↓

300 TL Tahsilat

↓

700 TL Borç

Bu üç kayıt birbirinden bağımsız olarak izlenir.

10.3 Temel Finans Nesneleri

Finans modülü aşağıdaki temel nesnelerden oluşur.

Satış
Borç
Tahsilat
İade
Makbuz
Fatura
Kasa Hareketi
Finans Hareketi

Her biri ayrı kayıt olarak tutulmalıdır.

10.4 Finans Yaşam Döngüsü
Satış

↓

Borç Oluştu

↓

Tahsilat

↓

Makbuz

↓

Muhasebe

↓

Rapor

↓

Arşiv
10.5 Ödeme (Payment) Tanımı

Payment;

üyeden alınan gerçek tahsilattır.

Ödeme;

nakit
kart
havale
online

gibi yöntemlerle yapılabilir.

10.6 Borç (Receivable)

Borç;

üyenin henüz ödemediği tutardır.

Borç;

ödeme alınmasa bile satış sırasında oluşabilir.

10.7 Finans Hareketi Kimliği

Her finans hareketi benzersiz UUID ile tutulur.

id
business_id
branch_id
member_id
package_id
receipt_id
invoice_id
10.8 Çoklu Ödeme

Bir satış;

birden fazla ödeme ile kapatılabilir.

Örneğin;

1.500 TL

↓

500 TL Nakit

↓

500 TL Kart

↓

500 TL Havale

Her ödeme ayrı kayıt olarak saklanır.

10.9 Taksitli Tahsilat

İşletme;

ödeme planı oluşturabilir.

Örneğin;

6.000 TL

↓

6 Taksit

↓

1.000 TL

Her taksit;

vade tarihi,
ödeme tarihi,
durumu

ile birlikte izlenir.

10.10 Ödeme Durumları

Desteklenen temel durumlar;

Bekliyor
Kısmi Ödendi
Tamamlandı
Gecikti
İptal
İade Edildi
10.11 Ödeme Yöntemleri

Varsayılan ödeme yöntemleri;

Nakit
Kredi Kartı
Banka Kartı
Havale / EFT
Online Ödeme
Hediye Çeki
Puan Kullanımı

İşletme yeni yöntemler tanımlayabilir.

10.12 Kısmi Tahsilat

Üye;

borcun tamamını ödemek zorunda değildir.

Örneğin;

Borç

4.000 TL

↓

Tahsilat

1.000 TL

↓

Kalan

3.000 TL

Sistem kalan borcu otomatik hesaplar.

10.13 Fazla Tahsilat

Yanlışlıkla fazla ödeme alınabilir.

Örneğin;

Borç

800 TL

↓

Tahsilat

1.000 TL

İşletme ayarına göre;

kredi bakiyesi oluşabilir,
iade yapılabilir,
uyarı verilebilir.
10.14 İade İşlemi

İade;

tam

veya

kısmi olabilir.

İade edilen tutar;

orijinal ödeme ile ilişkilendirilmelidir.

Yeni negatif ödeme oluşturulmaz.

İade kaydı oluşturulur.

10.15 Makbuz

Her tahsilat sonrası;

işletme ayarına göre

otomatik makbuz üretilebilir.

Makbuz;

değiştirilemez.

Yeni sürüm oluşturulabilir.

10.16 Makbuz Numarası

Makbuz numarası;

işletme bazında benzersiz olmalıdır.

Örneğin;

RCP-2027-0000154
10.17 Fatura

İşletme isterse;

ödeme sırasında

fatura oluşturabilir.

Fatura;

makbuzdan bağımsızdır.

Her ikisi de aynı satışa bağlı olabilir.

10.18 Vergi

KDV;

işletme ayarlarından yönetilir.

Desteklenen senaryolar;

KDV Dahil
KDV Hariç
KDV Yok

Bu yaklaşım mevcut finans ayarlarınla uyumludur.

10.19 Para Birimi

Her ödeme;

işlem sırasında kullanılan para birimini saklar.

Örneğin;

TRY
EUR
USD
GBP

Geçmiş kayıtlar sonradan kur değişse bile değiştirilmez.

10.20 Döviz Kuru

Çoklu para birimi kullanılan işletmelerde;

işlem anındaki döviz kuru saklanabilir.

Bu sayede geçmiş raporlar doğru hesaplanır.

10.21 Business Rules
BR-086

Satış, borç ve tahsilat birbirinden bağımsız finansal kayıtlar olarak tutulmalıdır.

BR-087

Bir satış için birden fazla tahsilat yapılabilmelidir.

BR-088

Kısmi tahsilatlarda kalan borç sistem tarafından otomatik hesaplanmalıdır.

BR-089

İade işlemleri orijinal ödeme kaydıyla ilişkilendirilmelidir.

BR-090

Makbuz oluşturulduktan sonra içerik doğrudan değiştirilemez; düzeltmeler yeni kayıtlarla yapılmalıdır.

BR-091

Her finansal işlem oluşturulduğu andaki para birimi ve kur bilgisiyle birlikte saklanmalıdır.

Architecture Decision (ADR-012)

Finans modülü çift kayıt mantığına (immutable financial records) uygun olarak tasarlanacaktır. Finansal kayıtlar sonradan değiştirilmeyecek; gerektiğinde düzeltme, iptal veya iade gibi yeni hareketler oluşturularak muhasebe izi korunacaktır. Bu yaklaşım, denetlenebilirlik (auditability), muhasebe entegrasyonu ve yasal gereklilikler açısından kritik öneme sahiptir.