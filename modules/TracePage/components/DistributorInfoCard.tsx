import type { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { useContractRead } from 'wagmi';
import type { Result } from 'ethers/lib/utils';
import CardPlaceholder from './CardPlaceholder';
import { jsonABI, contractAddress } from '../../../ABI/contractABI';

type DistributorInfoCardProps = {
    distributorBatchID: string | undefined;
    setDistributorData: Dispatch<SetStateAction<Result | undefined>>;
};

const DistributorInfoCard: FunctionComponent<DistributorInfoCardProps> = ({
    setDistributorData,
    distributorBatchID,
}) => {
    const { data } = useContractRead(
        {
            addressOrName: contractAddress,
            contractInterface: jsonABI,
        },
        'DistributorBatch',
        {
            args: distributorBatchID,
            onSuccess: (data) => setDistributorData(data),
        }
    );
    return (
        <>
            {typeof data === 'undefined' ? (
                <CardPlaceholder />
            ) : (
                <div className="flex flex-col bg-gray-800 py-4 px-10 rounded-xl w-fit h-fit">
                    <h1 className="font-bold text-xl underline pb-4 text-center">
                        Data Penyimpanan (Distributor)
                    </h1>
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                DistributorBatchID:
                            </label>
                            <p>{distributorBatchID}</p>
                        </div>
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                Durasi Penyimpanan:
                            </label>
                            <p>{data?.[1].toNumber()} Hari</p>
                        </div>
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                Cara Penyimpanan:
                            </label>
                            <p>{data?.[2]}</p>
                        </div>
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                Status Penyimpanan:
                            </label>
                            <p>{data?.[3]}</p>
                        </div>
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                Sertifikat Halal:
                            </label>
                            <p>{data?.[5]}</p>
                        </div>
                        <div className="flex gap-2">
                            <label className="font-semibold" htmlFor="">
                                Pemverifikasi:
                            </label>
                            <p>{data?.[4]}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DistributorInfoCard;
