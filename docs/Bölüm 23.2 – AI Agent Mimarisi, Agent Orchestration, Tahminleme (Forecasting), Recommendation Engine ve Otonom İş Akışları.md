BÖLÜM 23 (DEVAM)
AI Agent Mimarisi, Agent Orchestration, Tahminleme (Forecasting), Recommendation Engine ve Otonom İş Akışları

Not: Antrenova'daki AI yalnızca soru cevaplayan bir model olmayacaktır. Uzun vadede platform; hedefleri anlayan, araçları kullanan, görev planlayan, sonuçları değerlendiren ve kontrollü şekilde aksiyon alabilen akıllı AI Agent'lara sahip olacaktır.

23.29 AI Agent Yaklaşımı

Her AI işlemi;

tek bir Prompt çalıştırmak zorunda değildir.

Bazı işlemler;

birden fazla adım içerebilir.

Goal

↓

Plan

↓

Execute

↓

Review

↓

Result
23.30 Agent Nedir?

Agent;

hedefe ulaşmak için;

düşünebilen,
plan yapabilen,
araç kullanabilen,
sonucu değerlendirebilen

AI bileşenidir.

23.31 Agent Rolleri

İlk sürümlerde aşağıdaki uzman Agent'lar tanımlanabilir.

Finance Agent
CRM Agent
Sales Agent
Trainer Agent
Marketing Agent
Analytics Agent
Operations Agent
Support Agent

Her Agent;

yalnızca kendi uzmanlık alanında çalışmalıdır.

23.32 Agent Orchestrator

Birden fazla Agent gerektiğinde;

Orchestrator süreci yönetmelidir.

User Request

↓

AI Orchestrator

↓

Finance Agent

CRM Agent

Analytics Agent

↓

Combined Response
23.33 Tool Calling

Agent;

yalnızca metin üretmemelidir.

Yetkisi varsa;

araçları kullanabilir.

Örneğin;

SQL Sorgusu
Dashboard Analizi
PDF Oluşturma
Bildirim Gönderme
Takvim Kontrolü
23.34 Tool Registry

Kullanılabilecek araçlar;

merkezi kayıt sisteminde tutulmalıdır.

Tool Registry

↓

Finance Tool

↓

Reporting Tool

↓

CRM Tool

↓

Notification Tool
23.35 Tool Permission

Her Agent;

her aracı kullanmamalıdır.

Örneğin;

Finance Agent;

CRM verisini değiştirememelidir.

Tool erişimi;

yetki politikalarına bağlı olmalıdır.

23.36 Planlama (Planning)

Karmaşık görevlerde;

önce plan oluşturulmalıdır.

Goal

↓

Tasks

↓

Priority

↓

Execution
23.37 Task Decomposition

Büyük görevler;

küçük görevlere ayrılmalıdır.

Örneğin;

"Aylık Finans Analizi"

↓

Gelir Analizi

↓

Gider Analizi

↓

Borç Analizi

↓

Tahmin

↓

Rapor

23.38 Agent Memory

Agent;

görev süresince gerekli çalışma belleğini kullanabilir.

Bu bellek;

kalıcı kullanıcı hafızası değildir.

Görev tamamlandığında temizlenebilir.

23.39 Long Running Tasks

Bazı AI işlemleri;

dakikalar sürebilir.

Bu işlemler;

arka plan görevleri olarak yürütülmelidir.

23.40 Human Approval

AI;

yüksek etkili işlemleri;

kendiliğinden gerçekleştirmemelidir.

Örneğin;

Toplu fiyat değişikliği
Üye silme
Finansal kayıt düzeltme
Yetki değişikliği

kullanıcı onayı gerektirmelidir.

23.41 Recommendation Engine

Platform;

öneriler üretebilmelidir.

Örneğin;

Paket önerisi
Kampanya önerisi
Eğitmen önerisi
Ders saati önerisi
Fiyat önerisi
23.42 Forecasting Engine

AI;

geleceği tahmin etmeye yardımcı olabilir.

Örneğin;

Gelir Tahmini
Nakit Akışı
Paket Yenileme Oranı
Üye Kaybı
Doluluk Oranı

Tahminler;

olasılık temelli değerlendirilmelidir.

23.43 Churn Prediction

Sistem;

ayrılma riski bulunan üyeleri belirleyebilir.

Örnek göstergeler;

Devamsızlık
Ödeme Gecikmesi
Azalan Aktivite
Paket Yenilememe Eğilimi
23.44 Opportunity Detection

AI;

iş fırsatlarını tespit edebilir.

Örneğin;

Yenilemeye uygun paketler
Çapraz satış fırsatları
Yeni PT önerileri
Grup dersi önerileri
23.45 KPI Intelligence

Dashboard;

yalnızca sayı göstermemelidir.

AI;

KPI değişimlerini yorumlayabilmelidir.

Örneğin;

"Bu ay tahsilat geçen aya göre %12 düştü. En büyük neden geciken paket yenilemeleri olabilir."

23.46 Business Rules
BR-307

Agent'lar yalnızca yetkili araçları kullanabilmelidir.

BR-308

Yüksek etkili işlemler kullanıcı onayı olmadan tamamlanmamalıdır.

BR-309

AI tahminleri kesin bilgi olarak sunulmamalıdır.

BR-310

Recommendation Engine işletmeye özel verilere göre çalışmalıdır.

BR-311

Forecast modelleri düzenli olarak doğrulanmalı ve güncellenmelidir.

BR-312

Agent çalışma belleği görev tamamlandıktan sonra temizlenmelidir.

Architecture Decision (ADR-045)

Antrenova'nın AI Agent mimarisi; Agent Orchestrator, Planner, Tool Registry, Permission Manager, Recommendation Engine ve Forecasting Engine bileşenlerinden oluşacaktır. AI Agent'lar kontrollü araç erişimiyle çalışacak, kritik işlemler için kullanıcı onayı gerektirecek ve platformun iş kurallarını ihlal etmeyecek şekilde tasarlanacaktır.

23.47 Otonom İş Akışları

Belirli kurallar gerçekleştiğinde;

AI öneri hazırlayabilir veya onay gerektiren iş akışları başlatabilir.

Örnekler;

Süresi dolacak paketler için yenileme önerisi
Borcu artan üyeler için hatırlatma taslağı
Düşen devam oranı için aksiyon önerisi
23.48 Çok Ajanlı İş Birliği (Multi-Agent Collaboration)

Karmaşık senaryolarda;

birden fazla Agent birlikte çalışabilir.

Operations Agent

↓

Analytics Agent

↓

Marketing Agent

↓

Combined Recommendation

Her Agent yalnızca kendi uzmanlık alanındaki çıktıyı üretmelidir.

23.49 AI Güven Skoru

AI çıktıları;

güven düzeyi ile birlikte sunulabilir.

Örneğin;

Confidence

High

Medium

Low

Düşük güven seviyesindeki öneriler kullanıcı tarafından daha dikkatli değerlendirilmelidir.

23.50 AI Öğrenme Döngüsü

AI performansı;

kullanıcı geri bildirimleri ve doğrulanmış sonuçlarla düzenli olarak değerlendirilmelidir.

Model davranışındaki değişiklikler izlenmeli ve gerektiğinde Prompt veya iş akışları güncellenmelidir.

23.51 Business Rules
BR-313

AI tarafından başlatılan tüm otomasyonlar izlenebilir ve denetlenebilir olmalıdır.

BR-314

Çok ajanlı senaryolarda görev paylaşımı açık şekilde tanımlanmalıdır.

BR-315

AI önerileri mümkün olduğunca güven seviyesi ile sunulmalıdır.

BR-316

AI performansı düzenli olarak ölçülmeli ve iyileştirilmelidir.

BR-317

AI tarafından oluşturulan öneriler kullanıcı kararını desteklemeli, nihai kararın yerini almamalıdır.

BR-318

AI otomasyonları gerektiğinde kullanıcı tarafından durdurulabilir veya iptal edilebilir olmalıdır.

Architecture Decision (ADR-046)

Antrenova'nın uzun vadeli AI vizyonu; çok ajanlı (Multi-Agent), araç kullanabilen (Tool-Enabled), açıklanabilir (Explainable), denetlenebilir (Auditable) ve insan onayını merkeze alan (Human-in-the-Loop) bir mimari olacaktır. AI, işletme süreçlerini hızlandıracak; ancak kritik kararların nihai sorumluluğu her zaman kullanıcıda kalacaktır.

✅ BÖLÜM 23 TAMAMLANDI

Bu bölümle birlikte Antrenova'nın yapay zekâ mimarisi;

AI katmanı,
LLM soyutlama,
Prompt yönetimi,
RAG,
Embedding,
Vektör veritabanı,
Semantic Search,
AI Agent mimarisi,
Tool Calling,
Forecasting,
Recommendation Engine,
Agent Orchestration,
Human-in-the-Loop

gibi modern AI platformlarının temel yapı taşlarını kapsayacak şekilde tanımlanmıştır.