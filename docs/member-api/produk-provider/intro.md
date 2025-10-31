# Cek Produk & Provider

Endpoint ini digunakan untuk mengecek ketersediaan dan detail produk berdasarkan kode produk atau kode provider.

## `POST` /api/product

### Request Body

| Parameter    | Tipe           | Deskripsi                                         |
| :----------- | :------------- | :------------------------------------------------ |
| `memberid`   | String         | ID/Username KHOINS Anda.                          |
| `memberpass` | String         | Password KHOINS Anda.                             |
| `memberpin`  | String         | PIN KHOINS Anda.                                  |
| `codes`      | Array (String) | (Opsional) Daftar kode produk yang ingin dicek.   |
| `providers`  | Array (String) | (Opsional) Daftar kode provider yang ingin dicek. |

:::tip

- Untuk mendapatkan **semua produk** dari satu provider, isi `providers` dan kosongkan `codes`.
- Untuk mendapatkan **detail produk spesifik**, isi `codes` dan `providers`.
  :::

---

## FAILED {#failed}
Jika request tidak menemukan `data`, response tetap mengembalikan status Success dengan data kosong (`[]`).


```json title="Respond Failed"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": []
}
```
:::danger Peringatan!!!
Response **Failed** bersifat **general** dan berlaku untuk seluruh jenis request Cek Produk & provider.
:::
