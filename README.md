# Halal Traceability System (Penelitian MBKM)

## Contributor
1. Matthew Marcellino (00000036291)
2. William Chandra (00000034995)

## Link Website:
### https://tracebility-system-v2.vercel.app/

## Description
Aplikasi berbasis website ini bertujuan untuk memberikan fungsionalitas _traceability_ atau ketelusuran pada rantai pasok yang dilakukan pada daerah wisata halal di provinsi Banten, Indonesia. Dalam proses rantai pasok ini, diasumsikan terdapat 3 buah aktor, yaitu:
1. Rumah Potong Hewan (RPH)
2. Distributor
3. Hotel

Pada aplikasi ini, para aktor dapat saling berkoordinasi dengan cara memasukkan data terkait pemotongan, penyimpanan, dan pengolahan sesuai dengan peran mereka masing-masing.

## Cara Penggunaan
### 1. Aktor
- Aktor mengunjungi website pada link yang tertera pada bagian `Link Website`
- Pada halaman utama, terdapat sebuah tabel yang berisi data-data pemotongan, penyimpanan, dan pengolahan. Seluruh data tersebut dapat dilihat secara publik dan tidak memerlukan _login_ terlebih dahulu.
![image](https://user-images.githubusercontent.com/81855912/172972830-1fedf540-380e-4d8d-9432-a08917d8a40d.png)
- Aktor dapat melakukan login menggunakan akun yang telah dibuatkan oleh admin (list akun dapat dilihat pada bagian `Resource`).
![image](https://user-images.githubusercontent.com/81855912/172973471-bdfa9369-c37e-492e-b2ac-770bdf54b2a3.png)
- Setelah melakukan login, aktor akan mendapatkan akses untuk menambahkan data sesuai dengan peran mereka.

| Role  | Akses |
| ------------- | ------------- |
| RPH | Tambah Data Pemotongan |
| Distributor | Tambah Data Penyimpanan |
| Hotel | Tammbah Data Pengolahan |

- Untuk menggunakan akses tersebut, aktor dapat menekan tombol baru yang muncul pada navigation bar
![image](https://user-images.githubusercontent.com/81855912/172974055-d5580453-f258-4d6d-a8de-07fd8932b917.png)
![image](https://user-images.githubusercontent.com/81855912/172974145-a48c5cc4-c7cc-44d4-a353-1d2051c14b3e.png)
![image](https://user-images.githubusercontent.com/81855912/172974216-194f3d53-1a67-43ca-b732-4253506e94db.png)

- Data yang dimasukkan oleh para aktor akan disimpan ke dalam blockchain melalui smart contract

### 2. Konsummen
- Konsumen pada kasus ini diasumsikan sebagai pelanggan pada restoran di dalam hotel. 
- Setiap harinya, restoran pada hotel akan membuat sebuah QR Code untuk setiap makanan yang disajikan pada hari tersebut. 
- QR Code tersebut akan ditampilkan pada restoran, lalu para pelanggan dapat melakukan _scan_ pada QR Code tersebut untuk menelusuri asal usul makanan yang disajikan.
- Contoh QR Code yang dapat di-_scan_
<img src="https://user-images.githubusercontent.com/81855912/172974690-dd50ae9b-bdcd-479f-b906-c24cc9f8eea6.png" width="500">

- Hasil scan QR Code
![image](https://user-images.githubusercontent.com/81855912/172975166-97a12367-1fb8-4667-b02f-10771810723e.png)

- Data yang dilihat oleh konsumen didapatkan dari blockchain melalui smart contract

## Resource
### List Akun Stakeholder
| Username  | Password | Role |
| ------------- | ------------- | ------------- |
| willy07  | 12345 | RPH |
| math08  | 12345 | Distributor |
| hotel09  | 12345 | Hotel |
