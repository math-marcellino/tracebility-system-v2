import useSWR from 'swr';
import { ethers, Event } from 'ethers';
import { jsonABI, contractAddress } from '../ABI/contractABI';

export type TraceEventsRequest = {
    provider: ethers.providers.BaseProvider;
    actor?: 'rph' | 'distributor' | 'hotel';
};

export type TraceRPHResult = {
    batchID: number;
    jenisKelamin: string;
    tanggalPemotongan: string;
    statusPemotongan: string;
    verifier: string;
    sertifikatHalal: string;
    timestamp: string;
};

export type TraceDistributorResult = {
    batchID: number;
    durasiPenyimpanan: number;
    caraPenyimpanan: string;
    statusPenyimpanan: string;
    verifier: string;
    sertifikatHalal: string;
    timestamp: string;
};

export type TraceHotelResult = {
    batchID: number;
    tanggalPengolahan: string;
    caraPengolahan: string;
    verifier: string;
    sertifikatHalal: string;
    timestamp: string;
};

const TraceEventsFetcher = (
    args: TraceEventsRequest
): Promise<Array<Event>> => {
    const tracebilityContract = new ethers.Contract(
        contractAddress,
        jsonABI,
        args.provider
    );

    // Create Filter for querying events from smart contract
    let filter = tracebilityContract.filters.RPHTrace();

    switch (args.actor) {
        case 'rph':
            filter = tracebilityContract.filters.RPHTrace();
            break;
        case 'distributor':
            filter = tracebilityContract.filters.DistributorTrace();
            break;
        case 'hotel':
            filter = tracebilityContract.filters.HotelTrace();
            break;
    }

    // Query events from smart contract (currently displayed on console.log)
    const eventsData = tracebilityContract.queryFilter(filter);

    return eventsData;
};

export function useTraceRPH(req: TraceEventsRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            contractAddress: contractAddress,
            actor: 'rph',
            provider: req.provider,
        },
        TraceEventsFetcher
    );

    const result: Array<TraceRPHResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.time.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceRPHResult = {
                batchID: item.args?.batchID.toNumber(),
                jenisKelamin: item.args?.jenis_kelamin,
                tanggalPemotongan: item.args?.tanggal_pemotongan,
                statusPemotongan: item.args?.status_pemotongan,
                verifier: item.args?.verifier,
                sertifikatHalal: item.args?.sertifHalal,
                timestamp: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}

export function useTraceDistributor(req: TraceEventsRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            contractAddress: contractAddress,
            actor: 'distributor',
            provider: req.provider,
        },
        TraceEventsFetcher
    );

    const result: Array<TraceDistributorResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.time.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceDistributorResult = {
                batchID: item.args?.batchID.toNumber(),
                durasiPenyimpanan: item.args?.durasi_penyimpanan.toNumber(),
                caraPenyimpanan: item.args?.cara_penyimpanan,
                statusPenyimpanan: item.args?.status_penyimpanan,
                verifier: item.args?.verifier,
                sertifikatHalal: item.args?.sertifHalal,
                timestamp: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}

export function useTraceHotel(req: TraceEventsRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            contractAddress: contractAddress,
            actor: 'hotel',
            provider: req.provider,
        },
        TraceEventsFetcher
    );

    const result: Array<TraceHotelResult> =
        data! &&
        data?.map((item) => {
            const date = new Date(item.args?.time.toNumber() * 1000);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                minute: 'numeric',
            }).format(date);
            const event: TraceHotelResult = {
                batchID: item.args?.batchID.toNumber(),
                tanggalPengolahan: item.args?.tanggal_pengolahan,
                caraPengolahan: item.args?.cara_pengolahan,
                verifier: item.args?.verifier,
                sertifikatHalal: item.args?.sertifHalal,
                timestamp: formattedDate,
            };
            return event;
        });

    return {
        data: result,
        isLoading: !data && !error,
        error: error,
    };
}
