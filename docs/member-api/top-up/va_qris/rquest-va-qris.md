---
sidebar_position: 2
---

# Request VA & QRIS {#requestVA}

Endpoint ini digunakan untuk membuat permintaan top-up menggunakan metode _payment gateway_ seperti Virtual Account (VA) atau QRIS.

:::tip
Panggil endpoint [Get Metode Top-up](va_qris/supported-topup-method.md) untuk melihat metode apa saja (misal `VA_BNI`, `QRIS`) yang aktif untuk akun Anda.
:::

## `GET` /payment-gateway

### Query Parameters

| Parameter     | Tipe   | Deskripsi                                                              |
| :------------ | :----- | :--------------------------------------------------------------------- |
| `memberid`    | String | ID/Username KHOINS Anda.                                               |
| `memberpass`  | String | Password KHOINS Anda.                                                  |
| `memberpin`   | String | PIN KHOINS Anda.                                                       |
| `method`      | String | Metode pembayaran. Cth: `VA_BNI`, `QRIS`. (Lihat `Get Metode Top-up`). |
| `amount`      | String | Jumlah Top-up. Cth: `10000`.                                           |
| `description` | String | Deskripsi top-up (WAJIB). Cth: `topup qris`.                           |

---

## Contoh Request Virtual Account

```http
http://182.23.3.230:11602/payment-gateway?memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}&method=VA_BNI&amount=10000&description=saya%20mau%20topup%20pakai%20va
```

### Respon Sukses

```json title="Success Response (VA_BNI)"
{
  "memberid": "{{memberid}}",
  "amount": "10000",
  "status": "Pending",
  "message": "Topup Payment Gateway Method VA_BNI Member {{memberid}} dengan jumlah 10000 PENDING.",
  "data": {
    "amount": 10000,
    "final_amount": 12500,
    "admin": 2500,
    "expired_at": "2025-08-30 10:30:12",
    "payment_url": "{{payment_url}}",
    "data": "{{va_payment_data}}"
  }
}
```

:::info
`{{payment_url}}`: akan berisi link untuk pembayarannya

`{{va_payment_data}}`: akan berisi nomor Virtual Accountnya
:::

---

## Contoh Request QRis

```http
http://182.23.3.230:11602/payment-gateway?memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}&method=QRIS&amount=10000&description=saya%20mau%20topup%20pakai%20qris
```

### Respon Sukses

```json title="Success Response (QRis)"
{
  "memberid": "{{memberid}}",
  "amount": "10000",
  "status": "Pending",
  "message": "Topup Payment Gateway Method QRIS Member {{memberid}} dengan jumlah 10000 PENDING.",
  "data": {
    "amount": 10000,
    "final_amount": 9930,
    "admin": 69.99999999999999,
    "expired_at": "2025-08-30 10:33:10",
    "payment_url": "{{payment_url}}",
    "data": "{{qris_payment_data}}"
  }
}
```

:::info
`{{payment_url}}`: akan berisi link untuk menampilkan Barcode pembayaran
:::

