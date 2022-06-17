import {
    FunctionComponent,
    SetStateAction,
    useEffect,
    useState,
    Dispatch,
} from 'react';
import { ethers } from 'ethers';
import { useProvider } from 'wagmi';
import { jsonABI, contractAddress } from '../../../ABI/contractABI';
import { TracePemotonganResult } from '../../../swr/types';
import CardPlaceholder from './CardPlaceholder';

type PemotonganCardProps = {
    id: string | undefined;
};

const PemotonganCard: FunctionComponent<PemotonganCardProps> = ({
    id,
}) => {
    const provider = useProvider();
    const [data, setData] = useState<TracePemotonganResult>();

    const contract = new ethers.Contract(contractAddress, jsonABI, provider);

    useEffect(() => {
        if (id) {
            contract
                .PemotonganBatch(id)
                .then((res: TracePemotonganResult) => {
                    setData(res);
                })
                .catch((err: Error) => console.log(err));
        }
    }, [id]);
    console.log(data);
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <h1 className="text-xl font-bold">Data Pemotongan</h1>
                    <table className="w-full border-collapse border table-auto">
                        <tbody>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    ID RPH
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.ID_RPH}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Jenis Kelamin Sapi
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.jenis_kelamin}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Status Kehalalan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.status_kehalalan}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <CardPlaceholder />
            )}
        </>
    );
};

export default PemotonganCard;
