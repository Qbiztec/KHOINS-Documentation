---
sidebar_position: 2
---

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

## Request (Cek 1 Provider)

Mendapatkan semua produk dari provider

**Contoh: `TH` (Three Reguler).**

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
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
      "id": 795,
      "code": "TH5",
      "name": "Three Reguler 5.000",
      "active": 1,
      "price": 6500,
      "provider": {
        "id": 4,
        "code": "TH",
        "name": "Three Reguler"
      }
    },
    {
      "id": 796,
      "code": "TH10",
      "name": "Three Reguler 10.000",
      "active": 1,
      "price": 11500,
      "provider": {
        "id": 4,
        "code": "TH",
        "name": "Three Reguler"
      }
    }
    // ... dan produk Three lainnya
  ]
}
```

---

## DENOM BEBAS

cek 1 produk Remittance

**Contoh: Bi-Fast**

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

## PRABAYAR

Prabayar adalah sistem pembayaran di mana pengguna harus membayar atau mengisi saldo terlebih dahulu sebelum menggunakan layanan.

### Pulsa

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

### Token Listrik

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

## PASCABAYAR

Pascabayar adalah sistem pembayaran di mana pengguna menggunakan layanan terlebih dahulu, baru membayar di akhir periode

### PLN Nontaglis
### PLN Pascabayar
### PDAM
### BPJS Kesehatan
### BPJS Ketenagakerjaan
### PGN
### Pertangas
### Indihome
