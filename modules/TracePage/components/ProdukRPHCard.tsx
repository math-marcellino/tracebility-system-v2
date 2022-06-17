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
import { TraceProdukRPHResult } from '../../../swr/types';
import CardPlaceholder from './CardPlaceholder';

type ProdukRPHCardProps = {
    id: string | undefined;
    setIdPemotongan: Dispatch<SetStateAction<string | undefined>>;
};

const ProdukRPHCard: FunctionComponent<ProdukRPHCardProps> = ({
    id,
    setIdPemotongan,
}) => {
    const provider = useProvider();
    const [data, setData] = useState<TraceProdukRPHResult>();

    const contract = new ethers.Contract(contractAddress, jsonABI, provider);

    useEffect(() => {
        if (id) {
            contract
                .ProdukRPHBatch(id)
                .then((res: TraceProdukRPHResult) => {
                    setData(res);
                    setIdPemotongan(res.ID_Pemotongan);
                })
                .catch((err: Error) => console.log(err));
        }
    }, [id]);
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <h1 className="text-xl font-bold">Data Produk RPH</h1>
                    <table className="w-full border-collapse border table-auto">
                        <tbody>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Nama Produk
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.nama}
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
                            <tr className="bg-gray-200 text-gray-900">
                                <td className="border py-1 px-2 font-semibold">
                                    ID Pemotongan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.ID_Pemotongan}
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

export default ProdukRPHCard;
