# Request Transaksi

Endpoint ini adalah endpoint utama untuk **semua** jenis transaksi. Alur respon akan berbeda tergantung `kodeproduk` yang digunakan.

## `GET` /

### Query Parameters

| Parameter    | Tipe   | Deskripsi                                                |
| :----------- | :----- | :------------------------------------------------------- |
| `tujuan`     | String | ID Customer tujuan (No. HP, ID Pelanggan, No. Rekening). |
| `trxid`      | String | ID Transaksi/Referensi unik dari sisi Anda.              |
| `kodeproduk` | String | Kode produk. (Lihat `Cek Produk` & `Konsep INQ/PAY`).    |
| `memberid`   | String | ID/Username KHOINS Anda.                                 |
| `memberpass` | String | Password KHOINS Anda.                                    |
| `memberpin`  | String | PIN KHOINS Anda.                                         |

---

## 1. Asynchronous

Request ini digunakan untuk melakukan transaksi Asynchronous, khususnya produk **prabayar**

### Contoh Request

```http
http://182.23.3.230:11602?tujuan={{tujuan}}&trxid={{trxid}}&kodeproduk={{kodeproduk}}&memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}
```

#### Respon Pending

```json title="pending"
{
  "tujuan": "{{tujuan}}",
  "trxid": "{{trxid}}",
  "status": "Pending",
  "message": "R#{{trxid}} Transaksi {{kodeproduk}} ke {{kodeproduk}} PENDING. ket: Transaksi sedang diproses"
}
```

seperti yang dijelaskan pada [halaman sebelumnya](./intro.md#alurAsync), untuk hasil respon Asychronus adalah **Pending**. Server KHOINS akan mengirimkan POST request berisi JSON ini ke URL [Callback](/docs/callback/transaction-callback.md) Anda setelah transaksi selesai diproses.

:::tip Alur Transaksi Prabayar
Hasil akhir transaksi ini dikirim melalui **callback**. Lihat detailnya di [Pengenalan Callback KHOINS](/docs/callback/transaction-callback.md).
:::

---

## 2. synchronous

Request ini digunakan untuk melakukan transaksi **Synchronus**. Respon yang didapat adalah respon final.

Untuk alur _synchronous_ (Pascabayar & Denom Bebas), terdapat dua jenis _request_ yang wajib dibedakan: **`INQ` (Inquiry)** dan **`PAY` (Payment)**. Masing-masing memiliki kegunaan dan format respon yang berbeda. Untuk penjelasan konsep yang lebih mendalam, silakan baca [Konsep Transaksi (INQ & PAY)](./intro.md#konsepInqVsPay).

### Contoh Request Inquiry

```http
http://182.23.3.230:11602?tujuan=1234567890&trxid=abc-inq-1&kodeproduk=INQBCAB&memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}
```

#### Respon Success

```json title="success"
{
  "tujuan": "{{tujuan}}",
  "trxid": "{{trxid}}",
  "status": "Success",
  "message": "R#{{trxid}} [133]>>>Transaksi INQ{{kodeproduk}} ke {{tujuan}} Harga:0 SUKSES. SN: NAMA:{{pemilikrekening}}/NOREK:{{tujuan}}/BANK:{{namabank}}/LAYANAN: BIFAST. Saldo: -9.858.221#@21/09 15:12:10"
}
```

---

### Contoh Request Payment

```http
http://182.23.3.230:11602?tujuan=1234567890&trxid=abc-inq-1&kodeproduk=PAYBCAB&memberid={{memberid}}&memberpass={{memberpass}}&memberpin={{memberpin}}
```

#### Respon Success

```json title="success"
{
  "tujuan": "{{tujuan}}",
  "trxid": "{{trxid}}",
  "status": "Success",
  "message": "R#{{trxid}} [134]>>>Transaksi PAY{{kodeproduk}} ke {{tujuan}} Harga:100.550 SUKSES. SN: 1120012068123/NAMA:{{pemilikrekening}}/QTY:100000/BANK TUJUAN:{{namabank}}/ADMIN:2500/REFF:20240921BBBAIDJA010O9965780056/PENGIRIM:VERITRA SENTOSA INTERNATIONAL/LAYANAN:BIFAST. Saldo: -9.958.771#@21/09 15:12:27"
}
```

---

### Respon Failed

```json title="failed"
{
  "tujuan": "{{tujuan}}",
  "trxid": "{{trxid}}",
  "status": "Gagal",
  "message": "R#{{trxid}} Transaksi PAY{{kodeproduk}} ke {{tujuan}} GAGAL. ket: Rekening tidak ditemukan"
}
```
