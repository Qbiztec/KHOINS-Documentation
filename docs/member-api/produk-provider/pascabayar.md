# PASCABAYAR

Pascabayar adalah sistem pembayaran di mana pengguna menggunakan layanan terlebih dahulu, baru membayar di akhir periode.

KHOINS menawarkan beberapa item Pascabayar :

- [**PLN  Nontaglis**](#nontaglis) 
- [**PLN Pascabaya**](#plnpasca) 
- [**PDAM**](#pdam)  (perusahaan Daerah Air Minum )
- [**BPJS Kesehatan**](#bpjsKes)
- [**BPJS Ketenagakerjaan**](#bpjsKet)
- [**PGN**](#pgn)(Perusahaan Gas Negara)
- [**Pertagas**](#pertagas)(pertamina Gas)
- [**Indihome**](#indihome)

:::danger Peringatan!!!
Response **Failed** bersifat **general** dan berlaku untuk seluruh jenis request Cek Produk & Produk. Cek [lebih lanjut](./intro.md#failed)
:::
### PLN Nontaglis {#nontaglis}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["PLNNONTAG"],
  "providers": ["PLNNONTAG"]
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

### PLN Pascabayar {#plnPasca}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["PLNGR25"],
  "providers": ["PASCA"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 3,
      "code": "PLNGR25",
      "name": "PLN Pasca Admin 2.500",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 25,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 1250,
      "fee": 1250,
      "provider": {
        "id": 1,
        "code": "PASCA",
        "name": "PLN Pascabayar",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0,1,2,3,4,5,6,7,8,9",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```

### PDAM {#pdam}

cek **satu** produk PDAM. Respon sama untuk seluruh daerah

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["WASBY"],
  "providers": ["PDAM JATIM"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 123,
      "code": "WASBY",
      "name": "PDAM Kota Surabaya (Jatim)",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 1,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 1734,
      "fee": 1266,
      "provider": {
        "id": 14,
        "code": "PDAM JATIM",
        "name": "JAWA TIMUR",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0,1,2,3,4,5,6,7,8,9",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 3000
    }
  ]
}
```

### BPJS Kesehatan {#bpjsKes}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["BPJSKES"],
  "providers": ["BPJS"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 17,
      "code": "BPJSKES",
      "name": "BPJS Kesehatan",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 0,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 1234,
      "fee": 1266,
      "provider": {
        "id": 454,
        "code": "BPJS",
        "name": "BPJS",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```

### BPJS Ketenagakerjaan {#bpjsKet}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["ASRBPJSTK"],
  "providers": ["BPJS"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 19,
      "code": "ASRBPJSTK",
      "name": "BPJS Ketenagakerjaan",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 0,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 1567,
      "fee": 933,
      "provider": {
        "id": 454,
        "code": "BPJS",
        "name": "BPJS",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```

### PGN {#pgn}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["PGN"],
  "providers": ["GASALAM"]
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

### Pertagas {#pertagas}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["GAS"],
  "providers": ["GASALAM"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 240,
      "code": "GAS",
      "name": "Pertagas (Pertamina Gas)",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 0,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 2500,
      "fee": 0,
      "provider": {
        "id": 20,
        "code": "GASALAM",
        "name": "GAS ALAM",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0,1,2,3,4,5,6,7,8,9",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```

### Indihome {#indihome}

```json title="Request Body"
{
  "memberid": "{{memberid}}",
  "memberpass": "{{memberpass}}",
  "memberpin": "{{memberpin}}",
  "codes": ["TELKOM25"],
  "providers": ["JASTEL"]
}
```

#### Respon Sukses

```json title="success"
{
  "status": "Success",
  "message": "Sukses mengambil product",
  "data": [
    {
      "id": 10,
      "code": "TELKOM25",
      "name": "Telkom / Indihome 2.500",
      "desc": "",
      "postpaid": 1,
      "is_inkaso": 0,
      "is_facturer": 0,
      "is_kyc": 0,
      "is_promo": 0,
      "point": 0,
      "nominal": 25,
      "free_denom": 0,
      "minimum_qty": 1,
      "maximum_qty": 1,
      "product_type": "PPOB",
      "active": 1,
      "price": 1300,
      "fee": 1200,
      "provider": {
        "id": 7,
        "code": "JASTEL",
        "name": "Telkom & Indihome",
        "problem": 0,
        "empty": 0,
        "destination_prefixes": "0,1,2,3,4,5,6,7,8,9",
        "is_kyc": 0
      },
      "problem": 0,
      "empty": 0,
      "admin": 2500
    }
  ]
}
```