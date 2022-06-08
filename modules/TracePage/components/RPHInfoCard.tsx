import type { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useContractRead } from 'wagmi';
import type { Result } from 'ethers/lib/utils';
import { jsonABI, contractAddress } from '../../../ABI/contractABI';

type RPHInfoCardProps = {
    RPHBatchID: string | undefined;
    setRPHData: Dispatch<SetStateAction<Result | undefined>>;
};

const RPHInfoCard: FunctionComponent<RPHInfoCardProps> = ({ setRPHData, RPHBatchID }) => {
    const { data, isLoading } = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: jsonABI,
        },
        'RPHBatch',
        {
            args: RPHBatchID,
            onSuccess: (data) => setRPHData(data),
        }
    );
    return (
        <div className="flex flex-col bg-gray-800 py-4 px-10 rounded-xl w-fit h-fit">
            <h1 className="font-bold text-xl underline pb-4 text-center">
                Data Pemotongan (RPH)
            </h1>
            <div className="space-y-4">
                <div className="flex gap-2">
                    <label className="font-semibold">RPHBatchID:</label>
                    <p>{RPHBatchID}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Jenis Kelamin Sapi:</label>
                    <p>{data?.[0]}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Tanggal Pemotongan:</label>
                    <p>{data?.[1]}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Status Pemotongan:</label>
                    <p>{data?.[2]}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Sertifikat Halal:</label>
                    <p>{data?.[4]}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Pemverifikasi:</label>
                    <p>{data?.[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default RPHInfoCard;
