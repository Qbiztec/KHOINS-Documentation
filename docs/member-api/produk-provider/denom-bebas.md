# DENOM BEBAS

Denom bebas berarti nilai nominal (denominasi) yang bisa diisi tidak terbatas pada pilihan tertentu, melainkan bebas ditentukan sendiri oleh pengguna, biasanya dalam batas minimum dan maksimum.

:::danger Peringatan!!!
Response **Failed** bersifat **general** dan berlaku untuk seluruh jenis request Cek Produk & Provider. Cek [lebih lanjut](./intro.md#failed)
:::

**Contoh Request**

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["BCAB"],
  "providers": ["BANKB"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 256,
      "code": "BCAB",
      "name": "BCA Bifast",
      "desc": "",
      "postpaid": 2,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 1,
      "free_denom": 1,
      "minimum_qty": 1000,
      "maximum_qty": 100000000,
      "product_type": "BANK",
      "active": 1,
      "price": 1000,
      "fee": 1500,
      "provider": {
        "id": 21,
        "code": "BANKB",
        "name": "BANK BIFAST",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "1,2,3,4,5,6,7,8,9,0",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```

---