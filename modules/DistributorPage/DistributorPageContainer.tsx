import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type DistributorPageContainerProps = {};

const DistributorPageContainer: FunctionComponent<DistributorPageContainerProps> = ({}) => {
    const [distributorInfo, setDistributorInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const handleInput = async () => {
        try {
            console.log(distributorInfo)
        } catch(err) {
            console.log(err);
        }
    };
    return( 
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]">
                <p className="text-3xl font-bold">
                    Input Data Distributor
                </p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="tanggalPengiriman">Tanggal Pengiriman</label>
                    <input
                        type="date"
                        name="tanggalPengiriman"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setDistributorInfo({
                                ...distributorInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="statusPengiriman">Status Pengiriman</label>
                    <input
                        type="text"
                        name="statusPengiriman"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setDistributorInfo({
                                ...distributorInfo,
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
                            setDistributorInfo({
                                ...distributorInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <button 
                    onClick={handleInput}
                    className="bg-gray-900 hover:bg-gray-800 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl">
                    <p>Submit</p>
                </button>
            </div>
        </div>
  )
};

export default DistributorPageContainer;