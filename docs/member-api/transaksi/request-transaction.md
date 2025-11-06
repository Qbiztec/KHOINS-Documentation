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

### Contoh Request (Prabayar)

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

seperti yang dijelaskan pada [halaman sebelumnya](./intro.md#alurAsync), untuk hasil respon Asychronus adalah **Pending**. Server KHOINS akan mengirimkan POST request berisi JSON ini ke URL [Callback]() Anda setelah transaksi selesai diproses.

### Contoh Callback

:::info
ID Transaksi Anda ada di dalam field **refid**.
:::

```json title="callback success"
{
  "refid": "{{trxid}}",
  "message": "{\"tujuan\":\"{{tujuan}}\",\"trxid\":\"{{trxid}},\"status\":\"Success\",\"message\":\"R#{{trxid}} [18134]>>>Transaksi \"{{kodeproduk}} ke \"{{tujuan}}\" Harga:93.955 SUKSES. SN: {{sn}}. Saldo: 1.449.645.223#@24/03 20:38:08\"}"
}
```
