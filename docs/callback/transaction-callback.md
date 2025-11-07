---
sidebar_position: 2
---

# Callback Transaksi

Ini adalah hasil akhir untuk transaksi **Asynchronous**. Server KHOINS akan mengirimkan POST request berisi JSON ini ke URL Callback Anda setelah transaksi selesai diproses.

:::info
ID Unik Anda Gunakan field refid untuk mencocokkan trxid yang Anda kirim saat request awal.
:::

---

## Transaksi Pulsa

Callback ini dikirim setelah transaksi dilakukan.

### Respon Sukses

```json title="success"
{
  "refid": "{{trxid}}",
  "message": "{\"tujuan\":\"{{tujuan}}\",\"trxid\":\"{{trxid}},\"status\":\"Success\",\"message\":\"R#{{trxid}} [18134]>>>Transaksi \"{{kodeproduk}} ke \"{{tujuan}}\" Harga:93.955 SUKSES. SN: {{sn}}. Saldo: 1.449.645.223#@24/03 20:38:08\"}"
}
```

### Respon Failed

```json title="failed"
{
  "refid": "{{trxid}}",
  "message": "{\"tujuan\":\"{{tujuan}}\",\"trxid\":\"{{trxid}}\",\"status\":\"Gagal\",\"message\":\"R#{{trxid}} Transaksi {{kodeproduk}} ke {{tujuan}} GAGAL. ket: Stok Kosong\"}"
}
```
