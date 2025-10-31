---
sidebar_position: 1
---

# Selamat Datang di KHOINS API

Ini adalah dokumentasi KHOINS API untuk semua Member KHOINS sebagai Reseller.

:::danger Catatan Variabel
Jika Anda menemukan tanda kurung kurawal ganda dalam dokumentasi seperti contoh: `{{123}}`, hal itu merupakan variabel yang nilainya anda tentukan sendiri, **kurung kurawal tidak perlu dicantumkan.**
:::

## Autentikasi

- Setiap permintaan ke KHOINS API (kecuali callback) memerlukan kredensial unik Anda untuk mengidentifikasi akun Anda.
- Semua parameter autentikasi dikirim sebagai **Query Parameters** (untuk request `GET`) atau sebagai **JSON Body** (untuk request `POST`).

## Parameter Wajib

Parameter berikut wajib ada di hampir setiap request:

| Parameter | Tipe | Deskripsi |
| :--- | :--- | :--- |
| `memberid` | String | ID/Username KHOINS Anda. |
| `memberpass` | String | Password KHOINS Anda. |
| `memberpin` | String | PIN KHOINS Anda. |

**Contoh (Query Param di request `GET`):**
```http
?memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}
```

**Contoh (JSON Body di request `POST`):**
```json
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}"
}
```

## Base URL
Semua *endpoint* API yang didokumentasikan di sini menggunakan Base URL berikut:
```http
http://182.23.3.230:11602
```
