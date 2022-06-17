import useSWR from 'swr';
import { ethers, Event } from 'ethers';
import { jsonABI, contractAddress } from '../ABI/contractABI';

export type TraceProdukDistributorRequest = {
    provider: ethers.providers.BaseProvider;
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

const TraceProdukDistributorFetcher = (
    args: TraceProdukDistributorRequest
): Promise<Array<Event>> => {
    const traceabilityContract = new ethers.Contract(
        contractAddress,
        jsonABI,
        args.provider
    );

    const filter = traceabilityContract.filters.TraceProdukDistributor();
    const data = traceabilityContract.queryFilter(filter);

    return data;
};

export function useTraceProdukDistributor(req: TraceProdukDistributorRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
        },
        TraceProdukDistributorFetcher
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
                durasi_penyimpanan: item.args?.durasi_penyimpanan,
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
