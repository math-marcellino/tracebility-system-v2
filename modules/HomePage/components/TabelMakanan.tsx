import { FunctionComponent, useState } from 'react';
import { useProvider } from 'wagmi';
import { useTraceMakanan } from '../../../swr/useTrace';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'

type TabelMakananProps = {};

interface userData{
    username: string;
    nama_lengkap: string;
    password: string;
    sertifikatHalal: string;
    role: string;
}

const TabelMakanan: FunctionComponent<TabelMakananProps> = ({}) => {
    const provider = useProvider();
    const dataMakanan = useTraceMakanan({ provider });
    const [user, setUser] = useState<userData>()
    const [isOpen, setIsOpen] = useState(false)

    function closeModal(){
        setIsOpen(false)
    }

    function openModal(){
        setIsOpen(true)
    }
    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'ID_Makanan',
            label: 'ID Makanan',
        },
        {
            name: 'nama',
            label: 'Nama Produk RPH',
        },
        {
            name: 'date',
            label: 'Date',
        },
        {
            name: 'ID_Hotel',
            label: 'ID Hotel',
            options: {
                customBodyRender: (data) => {
                    const getData = async (ID_Hotel:string) => {
                        const result = await axios.get(
                            `https://tracebility-project.herokuapp.com/api/user/getSpecific/${ID_Hotel}`
                        )
                        setUser(result.data[0])
                    }
                    return(
                        <div>
                            <button
                                type="button"
                                onClick={()=>{
                                    getData(data)
                                    openModal()
                                }}
                                className="bg-gray-700 px-4 py-2 rounded-md text-white"
                            >
                                {data}
                            </button>
                            <Transition appear show={isOpen}>
                                <Dialog as="div" onClose={closeModal}>
                                    <Transition.Child
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25 z-[200]"/>
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
                                                <p className='text-black'>
                                                    Username: {user?.username}
                                                </p>
                                                <p className='text-black'>
                                                    Nama: {user?.nama_lengkap}
                                                </p>
                                                <p className='text-black'>
                                                    Sertifikat Halal: {user?.sertifikatHalal}
                                                </p>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
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
                        </div>
                    )
                }
            }
        },
        {
            name: 'ID_ProdukDistributor',
            label: 'ID Produk Distributor',
        },
        {
            name: 'tanggal_pengolahan',
            label: 'Tangan Pengolahan',
        },
        {
            name: 'cara_pengolahan',
            label: 'Cara Pengolahan',
        },
        {
            name: 'status_kehalalan',
            label: 'Status Kehalalan',
        },
    ];

    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title="Data Makanan"
                columns={columnsDistributor}
                data={dataMakanan.data}
                options={{
                    rowsPerPage: 10,
                    selectableRows: 'none',
                    elevation: 1,
                    textLabels: {
                        body: {
                            noMatch: dataMakanan.isLoading ? (
                                <p className="animate-pulse text-xl">
                                    Loading data...
                                </p>
                            ) : (
                                'Sorry, there is no matching data to display'
                            ),
                        },
                    },
                }}
            />
        </div>
    );
};

export default TabelMakanan;
