# supabase.ts Kuralları

## Sorumluluk

Tarayıcı tarafında kullanılacak sınırlı Supabase istemcisini oluşturur.

## Kurallar

1. Yalnızca public anon anahtarı kullanılmalıdır.
2. Service role hiçbir koşulda eklenmemelidir.
3. İstemci üzerinden yapılan sorgular RLS ile korunmalıdır.
4. Kritik finans ve yetki işlemleri doğrudan tarayıcıdan yapılmamalıdır.
5. Tekrarlı istemci oluşturma önlenmelidir.
