# Transaksi

## Konsep Transaksi API KHOINS

Ada dua alur transaksi (Synchronous dan Asynchronous) yang harus dipahami, serta konsep Inquiry/Payment.

---

## 1. Alur Kerja: Sync vs Async

API KHOINS memiliki dua alur respon yang berbeda tergantung jenis produk:

### A. Synchronous

Produk **_Synchorus_**:

- **PASCABAYAR** (PLN, PDAM, GAS)
- **DENOM BEBAS**

#### Alur Synchronus:

1.  **Request Anda:** Anda mengirim request `GET /` (dengan prefix `INQ...` atau `PAY...`).
2.  **Respon Final:** Server KHOINS akan memproses dan Anda akan **langsung** menerima respon akhir, baik itu `Success` atau `Failed`.

:::info
Untuk **produk Synchronus** terdapat perbedaan untuk melakukan transaksi. pelajari lebih lanjut tentang [konsep INQ vs PAY](#konsepInqVsPay)
:::

### B. Alur Asynchronous {#alurAsync}

Pproduk **_Asynchorus_**:

- **PRABAYAR** (Pulsa)

#### Alur Synchronus:

1.  **Request Anda:** Anda mengirim request `GET /`.
2.  **Respon Pending:** Server KHOINS akan **segera** merespon dengan status `Pending`. Ini HANYA konfirmasi bahwa request diterima.
3.  **Callback (Hasil Akhir):** Setelah transaksi selesai diproses (Sukses atau Gagal), server KHOINS akan mengirimkan **Callback** ke URL Anda dengan status final.

---

## 2. Konsep Inquiry (INQ) vs Payment (PAY) {#konsepInqVsPay}

Untuk produk **Synchronous**, Anda wajib menggunakan prefix `INQ` atau `PAY` pada `kodeproduk`.

- **Request `INQ`:** Digunakan untuk **mengecek tagihan** atau **memvalidasi data** (misalnya, cek nama pemilik rekening).
- **Request `PAY`:** Digunakan untuk **membayar tagihan** atau **mengeksekusi transfer** setelah Inquiry berhasil.

**Contoh:**
Misalkan `kodeproduk` untuk PERTAGAS adalah `GAS`.

- **Untuk Cek Tagihan (Sync):** Gunakan `kodeproduk=INQGAS`
- **Untuk Bayar Tagihan (Sync):** Gunakan `kodeproduk=PAYGAS`
