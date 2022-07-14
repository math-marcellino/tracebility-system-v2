import useSWR from 'swr';
import { ethers, Event } from 'ethers';
import {
    TraceRequest,
    TracePemotonganResult,
    TraceProdukRPHResult,
    TraceProdukDistributorResult,
    TraceMakananResult,
} from './types';
import { jsonABI, contractAddress } from '../ABI/contractABI';

const TraceFetcher = (args: TraceRequest): Promise<Array<Event>> => {
    const traceabilityContract = new ethers.Contract(contractAddress, jsonABI, args.provider);

    let filter = traceabilityContract.filters.TracePemotongan();
    switch (args.type) {
        case 'pemotongan':
            filter = traceabilityContract.filters.TracePemotongan();
            break;
        case 'produkRPH':
            filter = traceabilityContract.filters.TraceProdukRPH();
            break;
        case 'produkDistributor':
            filter = traceabilityContract.filters.TraceProdukDistributor();
            break;
        case 'makanan':
            filter = traceabilityContract.filters.TraceMakanan();
            break;
    }
    const data = traceabilityContract.queryFilter(filter, 11023000);

    return data;
};

export function useTracePemotongan(req: TraceRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
            type: 'pemotongan',
        },
        TraceFetcher
    );

    const result: Array<TracePemotonganResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.date.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TracePemotonganResult = {
                ID_Pemotongan: item.args?.ID_Pemotongan,
                ID_RPH: item.args?.ID_RPH,
                jenis_kelamin: item.args?.jenis_kelamin,
                tanggal_pemotongan: item.args?.tanggal_pemotongan,
                status_kehalalan: item.args?.status_kehalalan,
                date: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}

export function useTraceProdukRPH(req: TraceRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
            type: 'produkRPH',
        },
        TraceFetcher
    );

    const result: Array<TraceProdukRPHResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.date.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceProdukRPHResult = {
                ID_ProdukRPH: item.args?.ID_ProdukRPH,
                ID_Pemotongan: item.args?.ID_Pemotongan,
                nama: item.args?.nama,
                status_kehalalan: item.args?.status_kehalalan,
                date: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}

export function useTraceProdukDistributor(req: TraceRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
            type: 'produkDistributor',
        },
        TraceFetcher
    );

    const result: Array<TraceProdukDistributorResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.date.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceProdukDistributorResult = {
                ID_ProdukDistributor: item.args?.ID_ProdukDistributor,
                ID_Distributor: item.args?.ID_Distributor,
                ID_ProdukRPH: item.args?.ID_ProdukRPH,
                nama: item.args?.nama,
                durasi_penyimpanan: item.args?.durasi_penyimpanan.toNumber(),
                cara_penyimpanan: item.args?.cara_penyimpanan,
                status_kehalalan: item.args?.status_kehalalan,
                date: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}

export function useTraceMakanan(req: TraceRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
            type: 'makanan',
        },
        TraceFetcher
    );

    const result: Array<TraceMakananResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.date.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceMakananResult = {
                ID_Makanan: item.args?.ID_Makanan,
                ID_Hotel: item.args?.ID_Hotel,
                ID_ProdukDistributor: item.args?.ID_ProdukDistributor,
                nama: item.args?.nama,
                tanggal_pengolahan: item.args?.tanggal_pengolahan,
                cara_pengolahan: item.args?.cara_pengolahan,
                status_kehalalan: item.args?.status_kehalalan,
                date: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}
