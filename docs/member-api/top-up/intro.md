# Pengenalan Top-up Saldo

Top-up adalah proses penambahan saldo deposit ke akun KHOINS Anda. Saldo ini nantinya akan digunakan untuk melakukan transaksi API.

KHOINS API menyediakan dua mekanisme utama untuk top-up saldo:

### 1. Transfer Bank (Tiket Manual)

Mekanisme ini menggunakan sistem **"tiket"**. Anda me-request top-up dengan nominal tertentu, dan sistem akan membalas dengan nominal unik. contoh penerapan [klik disini!](./request-bank-transfer.md#requestBank)

**Endpoint:** `GET` /ticket

:::info
Anda harus mentransfer **sesuai nominal unik** tersebut ke rekening bank yang ditentukan supaya top-up berhasil
:::

### 2. Payment Gateway (VA & QRIS)

Mekanisme ini menggunakan payment gateway modern yang otomatis. Anda me-request top-up dengan memilih metode spesifik (seperti BNI VA atau QRIS), dan sistem akan memberikan detail pembayaran yang bisa langsung dibayar. contoh penerapan [klik disini!](va_qris/rquest-va-qris.md)

- **Endpoint:** `GET` /payment-gateway

### Alur Kerja Top-up

Alur kerja yang direkomendasikan untuk top-up adalah:

1.  **(Khusus Payment Gateway)** Panggil endpoint [Get Metode Top-up](va_qris/supported-topup-method.md) untuk melihat metode apa saja (misal `VA_BNI`, `QRIS`) yang aktif untuk akun Anda.
2.  Pilih salah satu metode:
    - Jika memilih Bank Transfer, panggil [Request Top-up (Bank Transfer)](./request-bank-transfer).
    - Jika memilih VA/QRIS, panggil [Request Top-up (VA & QRIS)](va_qris/rquest-va-qris.md).
3.  Dapatkan detail pembayaran dari respon (Nomor VA, string QRIS, atau Nominal Unik).
4.  Lakukan pembayaran sesuai instruksi.
5.  Tunggu [Callback Top-up](../../callback/contoh-callback-topup) masuk ke server Anda, atau cek saldo Anda secara berkala menggunakan [Cek Saldo](../../callback/topup-callback.md).

:::info Status Konfirmasi Top-up
Semua permintaan Top-up (Bank Transfer dan Payment Gateway) bersifat *asynchronous*. Status akhir pembayaran (`Success`, `Expired`, atau `Gagal`) akan dikirimkan melalui *callback*.

Silakan merujuk ke [Contoh Callback Top-up](../../callback/topup-callback.md) untuk format respon final.
:::
