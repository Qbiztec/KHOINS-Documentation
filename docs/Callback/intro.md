# Pengenalan Callback KHOINS

Callback adalah mekanisme di mana server KHOINS mengirimkan laporan status **final** (`Success` atau `Gagal`) ke server Anda.

Ini adalah bagian **paling penting** untuk memproses:
1.  Semua transaksi **Asynchronous**.
2.  Semua status **Top-up Saldo**.

---

### Apa Maksud "Endpoint" Callback?

Di dokumentasi KHOINS (dari Postman), Anda melihat endpoint seperti:

```
{{your_base_url}}/api/your-own-callback-report-handler
```
:::danger
Ini **BUKAN** endpoint yang Anda panggil. Ini adalah **CONTOH** "alamat" atau **URL di server ANDA** yang harus Anda siapkan.
:::

**Alurnya:**
1.  Anda membuat sebuah endpoint (misal: `https://api.reseller-anda.com/laporan/khoins`) di server Anda yang siap menerima `POST` request.
2.  Anda mendaftarkan URL tersebut ke KHOINS.
3.  Setiap kali ada transaksi Prabayar atau Top-up yang selesai, server KHOINS akan mengirimkan `POST` request (berisi JSON) ke URL tersebut.

---

### Alur Kerja Callback

Seperti yang dijelaskan di [Konsep Transaksi](../member-api/transaksi/intro.md), transaksi Prabayar bersifat *Asynchronous*.

1.  **Request Anda:** Anda memanggil `GET /` dengan `kodeproduk=TH10` dan `trxid=abc-123`.
2.  **Respon Langsung:** Anda menerima `{"status": "Pending", ...}`. Sistem Anda menandai `abc-123` sebagai "Pending".
3.  **Proses KHOINS:** KHOINS memproses pulsa.
4.  **Callback KHOINS:** 5 detik kemudian, KHOINS mengirim `POST` ke URL Anda (`https://api.reseller-anda.com/laporan/khoins`).
5.  **Body Callback:** Isi `POST` tersebut adalah JSON:
    ```json
    {
      "refid": "abc-123",
      "message": "{\"status\":\"Success\",\"message\":\"R#abc-123... SUKSES. SN: 12345...\"}"
    }
    ```
6.  **Tugas Server Anda:** Server Anda menerima ini, membaca `refid`, dan memperbarui status `trxid` `abc-123` di database Anda menjadi "Success".

---

### Yang Harus Diperhatikan

Berdasarkan koleksi Postman, Callback KHOINS memiliki struktur yang unik:

* **`refid` atau `trxid`:** Ini adalah ID unik transaksi Anda yang dikirim kembali. Gunakan ini untuk mencocokkan data di database Anda.
* **`message`:** Ini adalah bagian yang paling *tricky*. Field `message` **berisi JSON lain di dalam String**.

Server Anda perlu melakukan "parse" dua kali:
1.  Parse JSON utama untuk mendapatkan `refid` dan `message`.
2.  Ambil nilai dari `message`, lalu **parse lagi sebagai JSON** untuk mendapatkan status final (`Success`/`Gagal`) dan pesan SN di dalamnya.