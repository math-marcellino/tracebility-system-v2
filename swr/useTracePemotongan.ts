import useSWR from 'swr';
import { ethers, Event } from 'ethers';
import { jsonABI, contractAddress } from '../ABI/contractABI';

export type TracePemotonganRequest = {
    provider: ethers.providers.BaseProvider;
};

export type TracePemotonganResult = {
    ID_Pemotongan: string;
    ID_RPH: string;
    jenis_kelamin: string;
    tanggal_pemotongan: string;
    status_kehalalan: string;
    date: string;
};

const TraceEventsFetcher = (
    args: TracePemotonganRequest
): Promise<Array<Event>> => {
    const traceabilityContract = new ethers.Contract(
        contractAddress,
        jsonABI,
        args.provider
    );

    const filter = traceabilityContract.filters.TracePemotongan();
    const data = traceabilityContract.queryFilter(filter);

    return data;
};

export function useTracePemotongan(req: TracePemotonganRequest) {
    const { data, error } = useSWR<Array<Event>, Error>(
        {
            provider: req.provider,
        },
        TraceEventsFetcher
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
