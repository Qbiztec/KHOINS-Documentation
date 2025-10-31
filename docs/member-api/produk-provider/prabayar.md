# PRABAYAR

Prabayar adalah sistem pembayaran di mana pengguna harus membayar atau mengisi saldo terlebih dahulu sebelum menggunakan layanan.

KHOINS menawarkan beberapa item Pascabayar :

- [**Pulsa**](#pulsa) 
- [**Token Listrik**](#token) 
### Pulsa {#pulsa}

Cek **satu** produk pulsa prabayar. Respons akan sama untuk semua produk pulsa.

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["TH50"],
  "providers": ["TH"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 802,
      "code": "TH50",
      "name": "Three Reguler 50.000",
      "desc": "",
      "postpaid": 0,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 50,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PULSA",
      "active": 1,
      "price": 49665,
      "fee": 0,
      "provider": {
        "id": 4,
        "code": "TH",
        "name": "Three Reguler",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0898,0899,0895,0896,0897",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 0
    }
  ]
}
```

### Token Listrik {#token}

Cek **satu** produk Token prabayar.

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["PLT20"],
  "providers": ["PLT"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 1251,
      "code": "PLT20",
      "name": "PLN PRABAYAR 20.000",
      "desc": "",
      "postpaid": 2,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 20,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 21078,
      "fee": 21078,
      "provider": {
        "id": 82,
        "code": "PLT",
        "name": "PLN Token",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0,1,2,3,4,5,6,7,8,9",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 0
    }
  ]
}
```

---
