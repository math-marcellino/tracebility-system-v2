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
import { useRouter } from 'next/router';
import { TraceMakananResult } from '../../../swr/types';
import CardPlaceholder from './CardPlaceholder';

type DataMakananCardProps = {
    setIdProdukDistributor: Dispatch<SetStateAction<string | undefined>>;
};

const DataMakananCard: FunctionComponent<DataMakananCardProps> = ({
    setIdProdukDistributor,
}) => {
    const router = useRouter();
    const { id } = router.query;
    const provider = useProvider();
    const [data, setData] = useState<TraceMakananResult>();

    const contract = new ethers.Contract(contractAddress, jsonABI, provider);

    useEffect(() => {
        if (id) {
            contract
                .MakananBatch(id)
                .then((res: TraceMakananResult) => {
                    setData(res);
                    setIdProdukDistributor(res.ID_ProdukDistributor);
                })
                .catch((err: Error) => console.log(err));
        }
    }, [id]);
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <h1 className="text-xl font-bold">Data Makanan</h1>
                    <table className="w-full border-collapse border table-auto">
                        <tbody>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    ID Hotel
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.ID_Hotel}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Nama Makanan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.nama}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Cara Pengolahan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.cara_pengolahan}
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">
                                    Tanggal Pengolahan
                                </td>
                                <td className="border py-1 px-2">
                                    {data?.tanggal_pengolahan}
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
                                    {data?.ID_ProdukDistributor}
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

export default DataMakananCard;
