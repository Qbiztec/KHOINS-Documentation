---
sidebar_position: 1
---

# Cek Saldo member

Endpoint ini digunakan untuk mendapatkan informasi saldo deposit member.

## `GET` /balance

### Query Parameters

| Parameter   | Tipe   | Deskripsi                |
| :---------- | :----- | :----------------------- |
| `memberid`  | String | ID/Username KHOINS Anda. |
| `memberpin` | String | PIN KHOINS Anda.         |

---

## Contoh Request

```http
http://182.23.3.230:11602/balance?memberid={{memberid}}&memberpin={{memberpin}}
```

### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Yth. {{namamember}}, ID {{memberid}}. Saldo Rp. 10.000 Limit Rp. 0 Dlm proses 5 Pakai hari ini Rp. 300.000 Komisi Rp. 30.000 Jml TRX 123",
  "balance": 10000,
  "limit": 0,
  "commission": 30000,
  "trx_count": 123,
  "in_progress": 5,
  "spent_today": 300000
}
```

### Respon Gagal

```json title="failed"
{
  "status": "Gagal",
  "message": "Balance dengan Member {{memberid}} GAGAL. ket: memberpin tidak boleh kosong",
  "balance": "",
  "limit": "",
  "commission": "",
  "trx_count": "",
  "in_progress": "",
  "spent_today": ""
}
```