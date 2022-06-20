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
![image](https://user-images.githubusercontent.com/79161142/174567195-d5052cb5-bcaf-4d1c-a1c9-87cc1d1363b4.png)
- Pada setiap tabel, terdapat data berupa ID aktor yang ditampilkan dengan bentuk tombol yang jika ditekan, akan menampilkan informasi detail dari ID aktor tersebut.
![image](https://user-images.githubusercontent.com/79161142/174566917-e3e7492f-b33e-4868-a826-ce38b3d9bf8c.png)
![image](https://user-images.githubusercontent.com/79161142/174566985-37a55895-17a9-4b66-9639-bb5a61e734a8.png)
- Aktor dapat melakukan login menggunakan akun yang telah dibuatkan oleh admin (list akun dapat dilihat pada bagian `Resource`).
![image](https://user-images.githubusercontent.com/81855912/172973471-bdfa9369-c37e-492e-b2ac-770bdf54b2a3.png)
- Setelah melakukan login, aktor akan mendapatkan akses untuk menambahkan data sesuai dengan peran mereka.

| Role  | Akses |
| ------------- | ------------- |
| RPH | Tambah Data Pemotongan, Tambah Data Produk RPH |
| Distributor | Tambah Data ProdukDistributor |
| Hotel | Tammbah Data Makanan |

- Untuk menggunakan akses tersebut, aktor dapat menekan tombol baru yang muncul pada navigation bar
![image](https://user-images.githubusercontent.com/79161142/174563662-f360b8be-9788-4749-bb3c-9e5f57b99b50.png)
![image](https://user-images.githubusercontent.com/79161142/174564633-42890ab8-9cb6-4719-8206-a9d381a2057c.png)
![image](https://user-images.githubusercontent.com/79161142/174564931-001c9685-5eb6-4dcb-82c5-8f7a93e4d1de.png)
![image](https://user-images.githubusercontent.com/79161142/174567459-0f209da3-f8aa-452b-9851-343e4bf615b4.png)
![image](https://user-images.githubusercontent.com/79161142/174568486-9d3078d6-cd3e-427d-8f99-1ae85e200469.png)
![image](https://user-images.githubusercontent.com/79161142/174571628-06a2db1c-ef4a-42f2-961c-d0c8098a79e1.png)
![image](https://user-images.githubusercontent.com/79161142/174571552-a76f678d-e78d-4edd-ba0d-59ba247cd7ea.png)


- Data yang dimasukkan oleh para aktor akan disimpan ke dalam blockchain melalui smart contract

### 2. Konsummen
- Konsumen pada kasus ini diasumsikan sebagai pelanggan pada restoran di dalam hotel. 
- Setiap harinya, restoran pada hotel akan membuat sebuah QR Code untuk setiap makanan yang disajikan pada hari tersebut. 
- QR Code tersebut akan ditampilkan pada restoran, lalu para pelanggan dapat melakukan _scan_ pada QR Code tersebut untuk menelusuri asal usul makanan yang disajikan.
- Contoh QR Code yang dapat di-_scan_
<img src="https://user-images.githubusercontent.com/81855912/172974690-dd50ae9b-bdcd-479f-b906-c24cc9f8eea6.png" width="500">

- Hasil scan QR Code

![image](https://user-images.githubusercontent.com/79161142/174572684-c5a24d45-85b1-48a7-9222-c85eb130bc34.png)
![image](https://user-images.githubusercontent.com/79161142/174572828-d873d73d-5361-4894-83fd-94681690c7ca.png)

- Data yang dilihat oleh konsumen didapatkan dari blockchain melalui smart contract

## Resource
### List Akun Stakeholder
| Username  | Password | Role |
| ------------- | ------------- | ------------- |
| rph01  | 12345 | RPH |
| distributor1  | 12345 | Distributor |
| hotel01  | 12345 | Hotel |
