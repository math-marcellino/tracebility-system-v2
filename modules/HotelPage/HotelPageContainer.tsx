import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useProvider } from 'wagmi'
import { jsonABI, contractAddress, privateKey } from '../../ABI/contractABI'
import { ethers } from 'ethers';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type HotelPageContainerProps = {};

const HotelPageContainer: FunctionComponent<HotelPageContainerProps> = ({}) => {
    const [hotelInfo, setHotelInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    
    const provider = useProvider()
    const walletSigner = new ethers.Wallet(privateKey, provider)
    const useContract = new ethers.Contract(contractAddress, jsonABI, walletSigner)

    const handleInput = async () => {
        setIsLoading(true)
        try {
            const {
                durasiPenyimpanan,
                caraPenyimpanan,
                statusPenyimpanan,
                tanggalPengolahan,
                caraPengolahan,
                sertifHalal
            }: any = hotelInfo
            const tx = await useContract.step3(
                1,
                durasiPenyimpanan,
                caraPenyimpanan,
                statusPenyimpanan,
                tanggalPengolahan,
                caraPengolahan,
                sertifHalal,
                "William Chandra"
            )
            console.log(tx)
            await tx.wait()
            setIsLoading(false)
            toast.success(`Transaction is sucessfully submitted!`)
        } catch(err) {
            setIsLoading(false)
            console.log(err);
            toast.error(`${err}`)
        }
    };
    return( 
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]">
                <p className="text-3xl font-bold">
                    Input Data Hotel
                </p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="durasiPenyimpanan">Durasi Penyimpanan</label>
                    <input
                        type="text"
                        name="durasiPenyimpanan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="caraPenyimpanan">Cara Penyimpanan</label>
                    <input
                        type="text"
                        name="caraPenyimpanan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="statusPenyimpanan">Status Penyimpanan</label>
                    <input
                        type="text"
                        name="statusPenyimpanan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="tanggalPengolahan">Tanggal Pengolahan</label>
                    <input
                        type="date"
                        name="tanggalPengolahan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="caraPengolahan">cara Pengolahan</label>
                    <input
                        type="text"
                        name="caraPengolahan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="sertifHalal">Sertifikat Halal</label>
                    <input
                        type="text"
                        name="sertifHalal"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setHotelInfo({
                                ...hotelInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <button 
                    onClick={handleInput}
                    className="bg-gray-900 hover:bg-gray-800 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl"
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
            </div>
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
                style={{width: "350px"}}
            />
        </div>
  )
};

export default HotelPageContainer;