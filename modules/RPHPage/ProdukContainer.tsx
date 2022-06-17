import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useProvider, etherscanBlockExplorers } from 'wagmi';
import { jsonABI, contractAddress, privateKey } from '../../ABI/contractABI';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

type ProdukContainerProps = {};

interface IDataProduk {
    _ID_Pemotongan: string;
    _nama: string;
    _statusKehalalan: string;
}

const ProdukContainer: FunctionComponent<ProdukContainerProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [txHash, setTxHash] = useState('');
    const { register, handleSubmit } = useForm<IDataProduk>();

    const provider = useProvider();
    const walletSigner = new ethers.Wallet(privateKey, provider);
    const ContractInstance = new ethers.Contract(
        contractAddress,
        jsonABI,
        walletSigner
    );

    const sendTransaction: SubmitHandler<IDataProduk> = async (data) => {
        setIsLoading(true);
        try {
            const tx = await ContractInstance.setDataProdukRPH(
                data._ID_Pemotongan,
                data._nama,
                data._statusKehalalan
            );
            setTxHash(tx.hash);
            console.log(tx);
            await tx.wait();
            setIsLoading(false);
            toast.success(`Transaction is sucessfully submitted!`);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
            toast.error(
                'Transaction failed, please check the console in your browser!'
            );
        }
    };
    return (
        <div className="flex h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit(sendTransaction)}
                className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]"
            >
                <p className="text-3xl font-bold">Tambah Data Produk RPH</p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="a">ID Pemotongan</label>
                    <input
                        type="text"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        {...register('_ID_Pemotongan', { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="tanggalPemotongan">Nama Produk</label>
                    <input
                        type="text"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        {...register('_nama', { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="statusKehalalan">Status Kehalalan</label>
                    <select
                        className="text-gray-900 rounded-md px-2 py-2"
                        {...register('_statusKehalalan', { required: true })}
                    >
                        <option value="Halal">Halal</option>
                        <option value="Tidak Halal">Tidak Halal</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <p className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Processing...
                        </p>
                    ) : (
                        <p>Submit</p>
                    )}
                </button>
                {txHash && (
                    <span>
                        You can check the transaction{' '}
                        <a
                            href={`${etherscanBlockExplorers.polygonMumbai.url}/tx/${txHash}`}
                            className="underline text-blue-500"
                        >
                            here
                        </a>
                    </span>
                )}
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: '350px' }}
            />
        </div>
    );
};

export default ProdukContainer;
