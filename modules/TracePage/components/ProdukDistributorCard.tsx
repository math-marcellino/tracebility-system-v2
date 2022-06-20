import { FunctionComponent, SetStateAction, useEffect, useState, Dispatch } from 'react';
import { ethers } from 'ethers';
import { useProvider } from 'wagmi';
import { jsonABI, contractAddress } from '../../../ABI/contractABI';
import { TraceProdukDistributorResult } from '../../../swr/types';
import CardPlaceholder from './CardPlaceholder';
import axios from 'axios';
import { Transition, Dialog } from '@headlessui/react';

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
    const [isOpen, setIsOpen] = useState(false);
    const [distributorInfo, setDistributorInfo] = useState<{
        username: string;
        nama_lengkap: string;
        sertifikatHalal: string;
        role: string;
    }>();

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

    const getDistributorInfo = async (ID_Hotel: string) => {
        const result = await axios.get(
            `https://tracebility-project.herokuapp.com/api/user/getSpecific/${ID_Hotel}`
        );
        setDistributorInfo(result.data[0]);
    };
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl">
                    <h1 className="text-xl font-bold">Data Produk Distributor</h1>
                    <table className="w-full border-collapse border table-auto">
                        <tbody>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">ID Distributor</td>
                                <td className="border py-1 px-2">
                                    <p
                                        className="underline text-blue-400 cursor-pointer"
                                        onClick={() => {
                                            setIsOpen(true);
                                            getDistributorInfo(data?.ID_Distributor);
                                        }}
                                    >
                                        {data?.ID_Distributor}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">Nama Produk</td>
                                <td className="border py-1 px-2">{data?.nama}</td>
                            </tr>
                            <tr>
                                <td className="border py-1 px-2 font-semibold">Cara Penyimpanan</td>
                                <td className="border py-1 px-2">{data?.cara_penyimpanan}</td>
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
                                <td className="border py-1 px-2 font-semibold">Status Kehalalan</td>
                                <td className="border py-1 px-2">{data?.status_kehalalan}</td>
                            </tr>
                            <tr className="bg-gray-200 text-gray-900">
                                <td className="border py-1 px-2 font-semibold">
                                    ID Produk Distributor
                                </td>
                                <td className="border py-1 px-2">{data?.ID_ProdukRPH}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <CardPlaceholder />
            )}
            <Transition appear show={isOpen}>
                <Dialog as="div" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 z-[200]" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto z-[200]">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2 space-y-6">
                                        <p className="text-black">
                                            Username: {distributorInfo?.username}
                                        </p>
                                        <p className="text-black">
                                            Nama: {distributorInfo?.nama_lengkap}
                                        </p>
                                        <p className="text-black">
                                            Sertifikat Halal: {distributorInfo?.sertifikatHalal}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ProdukDistributorCard;
