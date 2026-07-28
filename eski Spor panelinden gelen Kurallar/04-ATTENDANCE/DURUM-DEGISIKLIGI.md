# Durum Değişikliği

Örneğin `Geldi` durumundan `Gelmedi` durumuna geçerken:

1. Önceki seans hareketi geri alınır.
2. Yeni durumun seans kuralı uygulanır.
3. Her iki işlem aynı transaction içinde yapılır.
4. Değişiklik geçmişi kaydedilir.
