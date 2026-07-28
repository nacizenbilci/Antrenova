BÖLÜM 15 (DEVAM)
Gelişmiş AI Agent Ekosistemi ve Otonom İş Akışları

Not: Bu bölüm, Antrenova'nın yalnızca LLM kullanan bir yazılım değil; farklı görevleri yerine getiren uzman AI Agent'lardan oluşan, birbirleriyle koordineli çalışan kurumsal bir yapay zekâ platformu olmasını hedefler.

15.22 Multi-Agent Mimarisi

Tek bir büyük AI yerine;

birden fazla uzman Agent kullanılmalıdır.

                AI Gateway
                     │
     ┌───────────────┼───────────────┐
     │               │               │
Sales Agent    Finance Agent   CRM Agent
     │               │               │
Trainer Agent Reporting Agent Notification Agent

Her Agent yalnızca kendi uzmanlık alanında çalışmalıdır.

15.23 Agent Registry

Sistemde bulunan tüm Agent'lar;

merkezi kayıt sisteminde tutulmalıdır.

Örnek;

Agent ID

Agent Name

Version

Capabilities

Status

Owner

Yeni Agent eklemek sistem mimarisini değiştirmemelidir.

15.24 Capability (Yetenek) Sistemi

Her Agent;

yapabileceği işleri tanımlar.

Örneğin;

Sales Agent

Paket öner
Kampanya oluştur
Yenileme analizi

Finance Agent

Tahsilat analizi
Borç raporu
Nakit akışı
15.25 Agent Discovery

AI Gateway;

hangi Agent'ın kullanılacağını otomatik seçebilir.

Kullanıcı Sorusu

↓

Intent Detection

↓

Capability Match

↓

Agent
15.26 Agent'lar Arası İletişim

Agent'lar;

birbirini doğrudan çağırmamalıdır.

Her iletişim;

Gateway üzerinden yapılmalıdır.

Finance Agent

↓

Gateway

↓

Reporting Agent

Bu yaklaşım bağımlılığı azaltır.

15.27 Task Planner

Karmaşık istekler;

küçük görevlere ayrılır.

Örneğin;

"Borçlu üyeleri analiz et ve uygun olanlara kampanya hazırla."

↓

Task Planner

↓

Borç analizi

↓

Segment oluştur

↓

Kampanya öner

↓

Bildirim taslağı oluştur
15.28 Workflow Engine

AI;

çok adımlı süreçleri yönetebilir.

Görev

↓

Analiz

↓

Karar

↓

Taslak

↓

Kullanıcı Onayı

↓

İşlem
15.29 Human-in-the-Loop

AI;

kritik işlemleri

kendisi tamamlamamalıdır.

Örneğin;

Fiyat değişikliği
Üyelik iptali
Ödeme iadesi
Toplu mesaj gönderimi

önce kullanıcı onayı ister.

15.30 Tool Calling

AI;

yalnızca konuşmaz.

Araç kullanabilir.

Örneğin;

Takvim Servisi
WhatsApp
Rapor Servisi
CRM
PDF Servisi
E-posta

Her araç ayrı izin gerektirir.

15.31 AI İşlem Günlüğü

AI tarafından yapılan her işlem kayıt altına alınmalıdır.

Kaydedilecek bilgiler;

Agent
Model
Prompt Sürümü
Kullanılan Araçlar
Sonuç
Süre
Maliyet
15.32 Prompt Versioning

Prompt değişiklikleri;

kod güncellemesi gerektirmemelidir.

Her Prompt;

Version

Author

Created Date

Status

alanlarına sahip olmalıdır.

15.33 Prompt Test Ortamı

Yeni Prompt;

canlı sisteme geçmeden önce test edilmelidir.

Karşılaştırılabilecek ölçütler;

Doğruluk
Maliyet
Süre
Kullanıcı Memnuniyeti
15.34 Model Routing

Her görev için;

aynı model kullanılmak zorunda değildir.

Örneğin;

İşlem	Model Stratejisi
Kısa özet	Hız odaklı
Finans analizi	Doğruluk odaklı
Rapor üretimi	Geniş bağlam destekli
Çeviri	Dil odaklı

Model seçimi merkezi kurallarla yapılmalıdır.

15.35 AI Maliyet Yönetimi

Her AI isteği;

maliyet açısından izlenmelidir.

Ölçülebilecek metrikler;

Token Kullanımı
Ortalama Maliyet
İşlem Süresi
Model Bazlı Harcama
İşletme Bazlı Kullanım
15.36 AI Cache

Tekrarlanan sorular;

yeniden modele gönderilmeyebilir.

Request

↓

Cache

↓

Response

Bu sayede;

hız artar,
maliyet azalır.
15.37 AI Guardrails

AI;

belirlenen sınırların dışına çıkmamalıdır.

Örneğin;

Yetkisiz veri paylaşımı
Hassas bilgi üretimi
İş kuralını ihlal eden öneriler
Gerçek olmayan finansal kayıt oluşturma

engellenmelidir.

15.38 AI Observability

AI sistemi;

izlenebilir olmalıdır.

Takip edilecek metrikler;

Başarı Oranı
Ortalama Yanıt Süresi
Model Hataları
Tool Hataları
İnsan Onayı Gerektiren İşlemler
15.39 Sürekli Öğrenme

AI;

kullanıcı geri bildirimlerinden öğrenebilir.

Örneğin;

👍 Faydalı

👎 Faydalı Değil

Bu geri bildirimler;

Prompt geliştirmede kullanılabilir.

Gerçek kullanıcı verileriyle model eğitimi yapılacaksa açık izin ve ilgili yasal gereklilikler gözetilmelidir.

15.40 AI Dashboard

Yönetici;

AI kullanımını takip edebilmelidir.

Kart örnekleri;

Bugünkü AI İstekleri
Toplam Token
Ortalama Süre
Ortalama Maliyet
En Çok Kullanılan Agent
Başarı Oranı
15.41 Business Rules
BR-167

Hiçbir Agent doğrudan başka bir Agent'ı çağırmamalıdır.

BR-168

Tüm AI işlemleri AI Gateway üzerinden geçmelidir.

BR-169

Kritik işlemler kullanıcı onayı olmadan tamamlanmamalıdır.

BR-170

Prompt değişiklikleri sürümlendirilmeli ve geri alınabilir olmalıdır.

BR-171

AI maliyetleri işletme bazında izlenebilmelidir.

BR-172

Tool Calling yalnızca ilgili yetkilere sahip kullanıcılar adına gerçekleştirilebilmelidir.

BR-173

AI Guardrails katmanı, iş kurallarına aykırı veya yetkisiz işlemleri engellemelidir.

BR-174

AI performansı; doğruluk, maliyet, hız ve kullanıcı memnuniyeti metrikleriyle düzenli olarak değerlendirilmelidir.

Architecture Decision (ADR-023)

Antrenova'nın yapay zekâ altyapısı AI Gateway, Agent Registry, Task Planner, Workflow Engine, Prompt Management, Model Router, Tool Layer ve Observability Platform bileşenlerinden oluşacaktır. Tüm Agent'lar gevşek bağlı (loosely coupled) olacak, ortak veri sözleşmeleri üzerinden iletişim kuracak ve yeni Agent'lar mevcut mimariyi değiştirmeden sisteme eklenebilecektir.

✅ BÖLÜM 15 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın AI mimarisi;

AI Gateway,
Multi-Agent Framework,
Task Planner,
Workflow Engine,
Human-in-the-Loop,
Tool Calling,
Prompt Yönetimi,
Model Routing,
AI Guardrails,
AI Observability,
AI Dashboard

gibi modern yapay zekâ platformlarında bulunan kurumsal yetenekleri kapsayacak şekilde tanımlanmıştır.