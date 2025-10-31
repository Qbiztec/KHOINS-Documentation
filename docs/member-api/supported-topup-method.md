---
sidebar_position: 3
---

# Get Metode Top-up

Endpoint ini digunakan untuk melihat metode top-up (payment gateway) apa saja yang didukung oleh akun Anda.

## `GET` /payment-gateway/method

### Query Parameters

| Parameter    | Tipe   | Deskripsi                |
| :----------- | :----- | :----------------------- |
| `memberid`   | String | ID/Username KHOINS Anda. |
| `memberpass` | String | Password KHOINS Anda.    |
| `memberpin`  | String | PIN KHOINS Anda.         |

---

## Contoh Request

```http
http://182.23.3.230:11602/payment-gateway/method?memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}
```

### Respon Sukses

```json title="success"
{
  {
    "memberid": "{{memberid}}",
    "data": {
        "Finpay Code": [],
        "Virtual Account": [
            {
                "label": "BNI VA",
                "method": "VA_BNI"
            },
            {
                "label": "BRI VA",
                "method": "VA_BRI"
            },
            {
                "label": "BCA VA",
                "method": "VA_BCA"
            }
        ],
        "E-Money": [],
        "QRIS": [
            {
                "label": "QRIS",
                "method": "QRIS"
            }
        ],
        "Kartu Kredit": [],
        "Paylater": []
    },
    "status": "Success",
    "message": "Payment Gateway SUKSES."
}
}
```
