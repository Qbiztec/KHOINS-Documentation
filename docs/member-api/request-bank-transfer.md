---
sidebar_position: 4
---

# Request Top-up (Bank Transfer)

Endpoint ini digunakan untuk membuat "tiket" top-up saldo via transfer bank manual (BCA).

## GET `/ticket`

### Query Parameters

| Parameter    | Tipe   | Deskripsi                    |
| :----------- | :----- | :--------------------------- |
| `memberid`   | String | ID/Username KHOINS Anda.     |
| `memberpass` | String | Password KHOINS Anda.        |
| `memberpin`  | String | PIN KHOINS Anda.             |
| `amount`     | String | Jumlah Top-up. Cth: `10000`. |

---

## Contoh Request

```http
http://182.23.3.230:11602/ticket?memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}&amount=10000
```

### Respon Sukses

```json title="success"
{
  "memberid": "{{memberid}}",
  "amount": "10000",
  "status": "Pending",
  "message": "Tiket Member {{memberid}} dengan jumlah 10.000 PENDING. ket: Silahkan transfer Rp. 10.123 (harus sama) sebelum 2024-09-23 15:51:30 ke : BCA 2711966937 a/n Global Bisnis Technologi"
}
```

### Respon Gagal

```json title="failed"
{
  "memberid": "{{memberid}}",
  "amount": "10000",
  "status": "Gagal",
  "message": "Tiket Member {{memberid}} dengan jumlah 10.000 GAGAL. ket: memberid tidak boleh kosong"
}
```
