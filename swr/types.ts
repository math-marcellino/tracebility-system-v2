import type { ethers } from 'ethers';

export type TraceRequest = {
    provider: ethers.providers.BaseProvider;
    type?: 'pemotongan' | 'produkRPH' | 'produkDistributor' | 'makanan';
};

export type TracePemotonganResult = {
    ID_Pemotongan: string;
    ID_RPH: string;
    jenis_kelamin: string;
    tanggal_pemotongan: string;
    status_kehalalan: string;
    date: string;
};

export type TraceProdukRPHResult = {
    ID_ProdukRPH: string;
    ID_Pemotongan: string;
    nama: string;
    status_kehalalan: string;
    date: string;
};

export type TraceProdukDistributorResult = {
    ID_ProdukDistributor: string;
    ID_Distributor: string;
    ID_ProdukRPH: string;
    nama: string;
    durasi_penyimpanan: number;
    cara_penyimpanan: string;
    status_kehalalan: string;
    date: string;
};

export type TraceMakananResult = {
    ID_Makanan: string;
    ID_Hotel: string;
    ID_ProdukDistributor: string;
    nama: string;
    tanggal_pengolahan: string;
    cara_pengolahan: string;
    status_kehalalan: string;
    date: string;
};
