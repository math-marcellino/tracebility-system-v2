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
import { TraceProdukDistributorResult } from '../../../swr/types';
import CardPlaceholder from './CardPlaceholder';

type ProdukDistributorCardProps = {
    id: string | undefined;
    setIdProdukRPH: Dispatch<SetStateAction<string | undefined>>;
};

const ProdukDistributorCard: FunctionComponent<ProdukDistributorCardProps> = ({
    id,
    setIdProdukRPH,
}) => {
    const provider = useProvider();
    const [data, setData] = useState<TraceProdukDistributorResult>();

    const contract = new ethers.Contract(contractAddress, jsonABI, provider);

    useEffect(() => {
        if (id) {
            contract
                .ProdukDistributorBatch(id)
                .then((res: any) => {
                    setData({
                        ...res,
                        durasi_penyimpanan: res.durasi_penyimpanan.toNumber(),
                    });
                    setIdProdukRPH(res.ID_ProdukRPH);
                })
                .catch((err: Error) => console.log(err));
        }
    }, [id]);
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <h1 className="text-xl font-bold">
                        Data Produk Distributor
                    </h1>
                    <table className="w-full border-collapse border table-auto">
                        <tbody>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    ID Distributor
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.ID_Distributor}
                                </td>
                            </tr>
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
                                    Cara Penyimpanan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.cara_penyimpanan}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Durasi Penyimpanan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.durasi_penyimpanan} Hari
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
                                    ID Produk Distributor
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.ID_ProdukRPH}
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

export default ProdukDistributorCard;
