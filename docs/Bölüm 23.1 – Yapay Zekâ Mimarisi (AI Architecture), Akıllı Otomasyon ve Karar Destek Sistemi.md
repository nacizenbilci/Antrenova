BÖLÜM 23
Yapay Zekâ Mimarisi (AI Architecture), Akıllı Otomasyon ve Karar Destek Sistemi

Not: Antrenova'da yapay zekâ yalnızca soru-cevap yapan bir chatbot olmayacaktır. AI; işletme süreçlerini analiz eden, öneriler sunan, tahmin yapan, otomasyon başlatan ve yöneticilere karar desteği sağlayan platformun temel katmanlarından biri olacaktır.

23.1 Amaç

AI mimarisinin amacı;

işletme verilerini anlamlandırmak,
karar desteği sunmak,
tekrar eden işleri otomatikleştirmek,
tahminleme yapmak,
kullanıcı deneyimini geliştirmektir.
23.2 AI-First Yaklaşımı

Yeni geliştirilecek her modül;

AI ile nasıl güçlendirilebileceği açısından değerlendirilmelidir.

Ancak;

AI,

iş kurallarının yerine geçmez.

İş kurallarını destekler.

23.3 AI Katman Mimarisi

Platform;

ayrı bir AI katmanına sahip olmalıdır.

Presentation

↓

Application

↓

AI Layer

↓

LLM

↓

Knowledge Base
23.4 AI Kullanım Alanları

Yapay zekâ;

başlangıçta aşağıdaki alanlarda kullanılabilir.

Dashboard Analizi
Üye Analizi
Paket Tahmini
Finans Analizi
Rapor Özeti
Bildirim İçeriği
CRM
Destek Sistemi
23.5 LLM Soyutlama Katmanı

AI katmanı;

tek modele bağımlı olmamalıdır.

Desteklenebilecek sağlayıcılar;

OpenAI
Anthropic
Google Gemini
Azure OpenAI
Yerel (Local) Modeller

Model değişimi;

uygulama kodunu etkilememelidir.

23.6 AI Provider Adapter

Her sağlayıcı;

ortak arayüzü uygulamalıdır.

AI Interface

↓

OpenAI

Anthropic

Gemini

Azure
23.7 Prompt Engineering Standartları

Prompt'lar;

rastgele oluşturulmamalıdır.

Her Prompt;

amacı,
bağlamı,
çıktı formatı,
güvenlik kuralları

ile tanımlanmalıdır.

23.8 Prompt Template Sistemi

Prompt'lar;

şablon olarak saklanmalıdır.

Örneğin;

Financial Analysis

↓

Member Summary

↓

Trainer Recommendation

↓

Marketing Suggestion
23.9 Structured Output

AI çıktıları;

mümkün olduğunca yapılandırılmış formatta alınmalıdır.

Örneğin;

{
  "summary": "...",
  "riskLevel": "medium",
  "recommendations": []
}

Serbest metin yalnızca gerektiğinde kullanılmalıdır.

23.10 AI Context Builder

Modele gönderilecek bağlam;

tek noktada hazırlanmalıdır.

Context;

işletme,
kullanıcı,
yetki,
tarih,
filtre,
ilgili kayıtlar

gibi bilgilerden oluşabilir.

23.11 Token Yönetimi

Modele gereksiz bilgi gönderilmemelidir.

Context;

minimum token ile

maksimum anlam taşımalıdır.

23.12 Model Seçimi

Her görev;

aynı modeli kullanmak zorunda değildir.

Örneğin;

Basit sınıflandırma
Metin özeti
Finans analizi
AI Agent

için farklı modeller tercih edilebilir.

23.13 Fallback Mekanizması

Bir AI sağlayıcısı kullanılamazsa;

alternatif sağlayıcıya geçiş yapılabilir.

OpenAI

↓

Unavailable

↓

Gemini

↓

Continue
23.14 Timeout Yönetimi

AI işlemleri;

sonsuz beklememelidir.

Belirlenen süre aşılırsa;

işlem güvenli şekilde sonlandırılmalı veya kullanıcıya uygun geri bildirim verilmelidir.

23.15 Retry Politikası

Geçici hatalarda;

kontrollü yeniden deneme uygulanabilir.

Sonsuz döngü oluşturulmamalıdır.

23.16 AI Cache

Aynı istek;

kısa süre içerisinde tekrar çalıştırılacaksa;

önbellek kullanılabilir.

Request

↓

Cache

↓

LLM
23.17 Business Rules
BR-295

AI sağlayıcıları ortak bir soyutlama katmanı üzerinden kullanılmalıdır.

BR-296

Prompt'lar merkezi şablon sistemi ile yönetilmelidir.

BR-297

AI çıktıları mümkün olduğunca yapılandırılmış formatta alınmalıdır.

BR-298

AI istekleri gereksiz token tüketimine neden olmamalıdır.

BR-299

AI sağlayıcısı değiştirildiğinde uygulama kodunda büyük değişiklik gerekmemelidir.

BR-300

Geçici AI hatalarında kontrollü Retry ve Fallback mekanizmaları uygulanabilmelidir.

Architecture Decision (ADR-043)

Antrenova'nın AI katmanı; Provider Adapter, Prompt Manager, Context Builder, Response Parser, Cache Layer ve Model Router bileşenlerinden oluşacaktır. AI sağlayıcıları birbirinin yerine kullanılabilecek şekilde soyutlanacak ve iş kuralları AI modellerine bağımlı olmayacaktır.

23.18 Retrieval-Augmented Generation (RAG)

AI;

yalnızca model bilgisine dayanarak cevap üretmemelidir.

Güncel ve işletmeye özel bilgiler gerektiğinde;

RAG yaklaşımı kullanılmalıdır.

User Question

↓

Retriever

↓

Knowledge Base

↓

LLM

↓

Answer
23.19 Knowledge Base

Bilgi tabanı;

AI'nın güvenilir kaynaklardan beslenmesini sağlar.

Örnek kaynaklar;

Sistem Dokümantasyonu
İş Kuralları
Yardım Merkezi
Eğitim İçerikleri
İşletmeye Özel Veriler
23.20 Embedding Mimarisi

Metinler;

vektör temsillerine dönüştürülebilir.

Embedding işlemleri;

arama ve anlamsal eşleştirme için kullanılmalıdır.

23.21 Vektör Veritabanı

Embedding verileri;

ayrı bir vektör indeksinde saklanmalıdır.

Bu katman;

anlamsal aramaları hızlandırır.

23.22 Semantic Search

AI;

yalnızca anahtar kelimeye göre değil,

anlama göre arama yapabilmelidir.

Örneğin;

"Kart borcu yüksek üyeler"

ile

"Borç riski bulunan üyeler"

benzer sonuçlar üretebilmelidir.

23.23 Context Ranking

Bilgi tabanından gelen sonuçlar;

önem derecesine göre sıralanmalıdır.

En alakalı bilgiler;

önce modele gönderilmelidir.

23.24 Prompt Guardrails

Prompt içerikleri;

güvenlik kurallarından geçirilmelidir.

Amaç;

Prompt Injection,
veri sızdırma,
yetki aşımı

risklerini azaltmaktır.

23.25 Response Validation

AI çıktıları;

kullanılmadan önce doğrulanmalıdır.

Örneğin;

JSON formatı,
zorunlu alanlar,
sayı aralıkları,
enum değerleri

kontrol edilmelidir.

23.26 Human-in-the-Loop

Kritik işlemler;

tam otomatik çalışmamalıdır.

Örneğin;

toplu fiyat güncelleme,
veri silme,
finansal kararlar

için kullanıcı onayı gerekebilir.

23.27 AI Açıklanabilirliği

AI önerileri;

mümkün olduğunca gerekçeleriyle sunulmalıdır.

Kullanıcı;

önerinin hangi verilere dayandığını anlayabilmelidir.

23.28 Business Rules
BR-301

İşletmeye özel bilgiler gerektiğinde RAG mimarisi kullanılmalıdır.

BR-302

Prompt Injection riskine karşı giriş ve bağlam doğrulamaları uygulanmalıdır.

BR-303

AI çıktıları kullanılmadan önce teknik doğrulamadan geçirilmelidir.

BR-304

Kritik işlemlerde kullanıcı onayı olmadan otomatik aksiyon alınmamalıdır.

BR-305

AI önerileri mümkün olduğunca açıklanabilir olmalıdır.

BR-306

Embedding ve vektör indeksleri gerektiğinde yeniden oluşturulabilir şekilde yönetilmelidir.

Architecture Decision (ADR-044)

Antrenova'nın bilgi tabanlı yapay zekâ mimarisi; RAG, Knowledge Base, Embedding Pipeline, Vector Index, Semantic Search, Prompt Guardrails ve Response Validation katmanları üzerine kurulacaktır. Model yalnızca gerektiğinde bilgi tabanından veri alacak, böylece doğruluk ve güncellik artırılacaktır.

✅ BÖLÜM 23 (1. KISIM) TAMAMLANDI
Sıradaki Bölüm

Bölüm 23.2 – AI Agent Mimarisi, Agent Orchestration, Tahminleme (Forecasting), Recommendation Engine ve Otonom İş Akışları

Bu bölümde;

AI Agent yapısı,
çok ajanlı mimari (Multi-Agent),
Agent Orchestrator,
Tool Calling,
görev planlama,
tahminleme motoru,
öneri motoru,
işletme KPI analizleri,
otomatik iş akışları,
AI destekli operasyon yönetimi

kurumsal ölçekte tanımlanacaktır. Bu bölüm, Antrenova'nın gelecekte gerçek anlamda AI-First SaaS Platformu haline gelmesini sağlayacak akıllı ajan mimarisini tanımlayacaktır.