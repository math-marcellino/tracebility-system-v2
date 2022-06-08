import type { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useContractRead } from 'wagmi';
import type { Result } from 'ethers/lib/utils';
import { jsonABI, contractAddress } from '../../../ABI/contractABI';

type HotelInfoCardProps = {
    setHotelData: Dispatch<SetStateAction<Result | undefined>>;
};

const HotelInfoCard: FunctionComponent<HotelInfoCardProps> = ({ setHotelData }) => {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: jsonABI,
        },
        'HotelBatch',
        {
            args: id,
            onSuccess: (data) => setHotelData(data),
        }
    );
    return (
        <div className="flex flex-col bg-gray-800 py-4 px-10 rounded-xl w-fit h-fit">
            <h1 className="font-bold text-xl underline pb-4 text-center">
                Data Pengolahan (Hotel)
            </h1>
            <div className="space-y-4">
                <div className="flex gap-2">
                    <label className="font-semibold">HotelBatchID:</label>
                    <p>{id}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Tanggal Pengolahan:</label>
                    <p>{data?.[1]}</p>
                </div>
                <div className="flex gap-2">
                    <label className="font-semibold">Cara Pengolahan:</label>
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

export default HotelInfoCard;
