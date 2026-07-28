BÖLÜM 15
Yapay Zekâ (AI) ve Akıllı Otomasyon Sistemi

Not: Yapay zekâ, Antrenova'da mevcut iş kurallarının yerine geçen bir karar verici değil; kullanıcıya öneriler sunan, tekrar eden işleri otomatikleştiren ve karar alma süreçlerini hızlandıran akıllı bir yardımcı olarak tasarlanacaktır. Nihai karar her zaman yetkili kullanıcıya ait olacaktır.

15.1 Amaç

AI sisteminin amacı;

işletmenin verilerini analiz etmek,
karar desteği sağlamak,
manuel işlemleri azaltmak,
müşteri deneyimini geliştirmek,
operasyonel verimliliği artırmaktır.
15.2 AI Felsefesi

Antrenova'da AI;

iş kurallarını değiştirmez.

AI;

iş kurallarını kullanarak öneriler üretir.

Data

↓

Business Rules

↓

AI Analysis

↓

Suggestion

↓

User Decision
15.3 AI Katmanı

Yapay zekâ;

uygulamanın içine gömülü değildir.

Bağımsız servis olarak çalışır.

Application

↓

AI Gateway

↓

AI Providers

↓

LLM

Bu sayede farklı modeller kolayca değiştirilebilir.

15.4 AI Gateway

Tüm AI istekleri;

tek servis üzerinden geçmelidir.

Görevleri;

Model seçimi
Prompt yönetimi
Güvenlik filtreleri
Loglama
Maliyet takibi
Yanıt standartlaştırma
15.5 Model Bağımsızlığı

Antrenova;

tek bir modele bağımlı olmamalıdır.

Desteklenebilecek örnek sağlayıcılar;

OpenAI
Anthropic
Google
Azure OpenAI
Yerel (Self-hosted) modeller

Yeni sağlayıcı eklemek mevcut modülleri değiştirmemelidir.

15.6 AI Agent Kavramı

Her AI görevi;

ayrı bir Agent tarafından yürütülebilir.

Örneğin;

Reception Agent
Sales Agent
Finance Agent
Trainer Assistant
Marketing Agent
Reporting Agent

Agent'lar birbirinden bağımsız geliştirilmelidir.

15.7 Context Engine

AI;

yalnızca gerekli verilere erişmelidir.

Örneğin;

User Request

↓

Permission Check

↓

Context Builder

↓

AI

Gereksiz veriler modele gönderilmemelidir.

15.8 Prompt Yönetimi

Prompt'lar;

uygulama kodunun içine gömülmemelidir.

Her prompt;

sürümlendirilmeli,
test edilebilmeli,
merkezi olarak yönetilebilmelidir.
15.9 AI Belleği (Memory)

AI;

uzun süreli kullanıcı tercihlerini destekleyebilir.

Örneğin;

Tercih edilen rapor biçimi
Dil seçimi
İletişim tonu

Ancak hassas bilgiler yalnızca gerekli olduğu ölçüde kullanılmalıdır.

15.10 Doğal Dil ile İşlem

Kullanıcı;

komut yerine doğal dil kullanabilir.

Örneğin;

"Bugün saat 18:00'e Ahmet için PT randevusu oluştur."
"Borcu en yüksek 10 üyeyi göster."
"Bu ay en çok gelir getiren eğitmen kim?"

AI;

bu isteği sistem işlemlerine dönüştürür.

15.11 Akıllı Arama

AI;

yalnızca anahtar kelimeyle değil;

anlam üzerinden arama yapabilir.

Örneğin;

"Son zamanlarda hiç gelmeyen üyeler"

gibi ifadeler uygun filtrelere dönüştürülebilir.

15.12 Akıllı Randevu Planlama

AI;

aşağıdaki kriterleri analiz ederek öneri sunabilir.

Eğitmen uygunluğu
Salon doluluğu
Üyenin alışkanlıkları
Trafik saatleri
Geçmiş iptaller

Sonuç;

en uygun saat önerisi olur.

15.13 Satış Asistanı

AI;

satış personeline öneriler verebilir.

Örneğin;

Paket yükseltme fırsatı
Yenileme zamanı
Kampanya önerisi
İndirim önerisi
15.14 Tahsilat Asistanı

AI;

borç tahsilatı için önceliklendirme yapabilir.

Örneğin;

Önce aranması gereken üyeler
Ödeme ihtimali yüksek üyeler
Riskli borçlar
15.15 Eğitmen Asistanı

Eğitmenlere;

günlük program özeti,
eksik katılım uyarıları,
yaklaşan paket bitişleri,
öğrencilerin gelişim durumu

öneri olarak sunulabilir.

15.16 Yönetici Asistanı

İşletme sahibi için;

her sabah özet hazırlanabilir.

Örneğin;

Dün 42 kişi giriş yaptı.
Gelir geçen haftaya göre %8 arttı.
12 üyenin paketi bu hafta bitiyor.
5 üye yüksek ayrılma riski taşıyor.
15.17 AI Destekli Bildirimler

AI;

bildirim içeriklerini kişiselleştirebilir.

Örneğin;

aynı mesaj;

yeni üyeye,
sadık üyeye,
uzun süredir gelmeyen üyeye

farklı tonlarda önerilebilir.

15.18 AI Destekli Rapor Yorumlama

AI;

grafikleri açıklayabilir.

Örneğin;

"Son üç ayda akşam saatlerindeki doluluk düzenli olarak arttı. Mevcut eğitmen kapasitesi korunursa iki ay içinde ek seans ihtiyacı oluşabilir."

Bu yorumlar açıklayıcıdır; otomatik karar değildir.

15.19 AI Görevleri (Task Engine)

AI;

arka planda belirli görevleri çalıştırabilir.

Örneğin;

Riskli üyeleri analiz et
Haftalık özet hazırla
Kampanya öner
Tahsilat listesi oluştur

Görevler zamanlanabilir.

15.20 Model Context Protocol (MCP) Hazırlığı

AI servisleri;

gelecekte Model Context Protocol (MCP) benzeri standartlarla uyumlu çalışabilecek şekilde tasarlanmalıdır.

Bu sayede;

belge servisleri,
rapor servisleri,
finans servisleri,
harici araçlar

standart bir bağlam (context) modeli üzerinden AI ile iletişim kurabilir.

15.21 Business Rules
BR-159

AI hiçbir zaman iş kurallarını değiştiremez.

BR-160

AI tarafından verilen öneriler ile sistem tarafından gerçekleştirilen işlemler birbirinden ayrılmalıdır.

BR-161

AI yalnızca kullanıcının erişim yetkisine sahip olduğu verileri kullanmalıdır.

BR-162

Prompt'lar merkezi olarak yönetilmeli ve sürümlendirilmelidir.

BR-163

AI modeli değiştirildiğinde uygulamanın iş kuralları etkilenmemelidir.

BR-164

Doğal dil komutları, çalıştırılmadan önce yetki ve doğrulama süreçlerinden geçmelidir.

BR-165

AI tarafından oluşturulan içerikler gerektiğinde kullanıcı tarafından düzenlenebilir olmalıdır.

BR-166

AI analizleri, kullanılan veri kapsamını ve oluşturulma zamanını gösterebilmelidir.

Architecture Decision (ADR-022)

Yapay zekâ altyapısı, AI Gateway, Agent Framework, Context Engine, Prompt Management ve Model Adapter katmanlarından oluşacaktır. Bu mimari sayesinde Antrenova tek bir yapay zekâ sağlayıcısına bağımlı kalmayacak; yeni modeller, yeni agent'lar ve yeni araç entegrasyonları mevcut sistemi yeniden yazmadan eklenebilecektir.

✅ BÖLÜM 15 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 15.2 – Gelişmiş AI Agent Ekosistemi ve Otonom İş Akışları

Bu bölümde;

çok ajanlı (Multi-Agent) mimari,
agent'lar arası iletişim,
görev planlayıcı (Task Planner),
araç kullanımı (Tool Calling),
insan onaylı otomasyon (Human-in-the-Loop),
AI Workflow Engine,
maliyet optimizasyonu,
model seçim stratejileri,
AI gözlemlenebilirliği (observability),
güvenlik sınırları (AI Guardrails),
prompt testleri,
AI performans KPI'ları

kurumsal ölçekte ayrıntılı olarak tanımlanacaktır. Bu bölüm, Antrenova'nın gelecekte tam anlamıyla AI-first bir işletme yönetim platformu haline gelmesini sağlayacak mimariyi oluşturacaktır.