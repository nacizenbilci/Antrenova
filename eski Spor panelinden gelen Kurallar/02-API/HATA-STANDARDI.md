# Hata Standardı

Başarılı yanıt:

```json
{"success":true,"data":{},"message":null}
```

Hatalı yanıt:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "APPOINTMENT_TRAINER_CONFLICT",
    "message": "Seçilen eğitmenin bu saatte başka bir randevusu var."
  }
}
```

Ham veritabanı hatası kullanıcıya gösterilmemelidir.
