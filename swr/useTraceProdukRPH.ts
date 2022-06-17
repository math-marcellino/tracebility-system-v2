import useSWR from 'swr';
import { ethers, Event } from 'ethers';
import { jsonABI, contractAddress } from '../ABI/contractABI';

export type TraceProdukRPHRequest = {
    provider: ethers.providers.BaseProvider;
};

export type TraceProdukRPHResult = {
    ID_ProdukRPH: string;
    ID_Pemotongan: string;
    nama: string;
    status_kehalalan: string;
    date: string;
};

const TraceProdukRPHFetcher = (
    args: TraceProdukRPHRequest
): Promise<Array<Event>> => {
    const traceabilityContract = new ethers.Contract(
        contractAddress,
        jsonABI,
        args.provider
    );

    const filter = traceabilityContract.filters.TraceProdukRPH();
    const data = traceabilityContract.queryFilter(filter);

    return data;
};

export function useTraceProdukRPH(req: TraceProdukRPHRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
        },
        TraceProdukRPHFetcher
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
