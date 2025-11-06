---
sidebar_position: 1
---

# Top-up Callback

Ini adalah contoh `POST` request body yang akan dikirim KHOINS ke URL Anda ketika status **Top-up Saldo** Anda selesai diproses.

:::warning Perhatikan Strukturnya
Perhatikan bahwa `message` berisi _string_ yang di dalamnya adalah JSON lain. Anda mungkin perlu melakukan _parse_ JSON dua kali.
:::

---

## Top-up Bank Transfer

Callback ini dikirim setelah transfer nominal unik Anda terdeteksi.

### Respon Sukses

```json title="success"
{
  "memberid": "{{memberid}}",
  "amount": "{{amount}}",
  "message": "{\"memberid\":\"{{memberid}}\",\"amount\":{{amount}},\"status\":\"Success\",\"message\":\"Tiket Member {{memberid}} dengan jumlah {{amount}} SUKSES. Saldo: 112.493#@17/10 10:32:54\"}"
}
```

### Respon Failed

```json title="failed"
{
  "memberid": "{{memberid}}",
  "amount": "{{amount}}",
  "message": "{\"memberid\":\"{{memberid}}\",\"amount\":{{amounr}},\"status\":\"Expired\",\"message\":\"Tiket Member {{memberid}} dengan jumlah {{amount}} Expired. ket: Ticket expired\"}"
}
```

---

## Top-up VA/QRis

Callback ini dikirim setelah transfer nominal unik Anda terdeteksi.

### Respon Sukses

```json title="success"
{
  "memberid": "goodlink_apps",
  "amount": 10000,
  "message": "{\"memberid\":\"goodlink_apps\",\"amount\":10000,\"status\":\"Success\",\"message\":\"Topup Payment Gateway Method vabni Member goodlink_apps dengan jumlah 10.000 SUKSES. Saldo: 14.956#@29/08 10:32:16\"}",
  "trxid": 9
}
```

### Respon Failed

```json title="failed"
{
  "memberid": "{{memberid}}",
  "amount": "{{amount}}",
  "message": "{\"memberid\":\"{{memberid}}\",\"status\":\"Dibatalkan\",\"message\":\"Topup Payment Gateway Method QRIS_BI Member {{memberid}} dengan jumlah {{amount}} Dibatalkan. ket: Tiket Dibatalkan\"}"
}
```
