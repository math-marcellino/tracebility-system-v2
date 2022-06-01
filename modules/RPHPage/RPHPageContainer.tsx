import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type RPHPageContainerProps = {};

const RPHPageContainer: FunctionComponent<RPHPageContainerProps> = ({}) => {
    const [rphInfo, setRphInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const handleInput = async () => {
        try {
            console.log(rphInfo)
        } catch(err) {
            console.log(err);
        }
    };
    return( 
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]">
                <p className="text-3xl font-bold">
                    Input Data RPH
                </p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                    <select 
                        name="jenisKelamin" 
                        id="jenisKelamin"
                        className='text-gray-900 rounded-md px-2 py-2'
                        onChange={(e) =>
                            setRphInfo({
                                ...rphInfo,
                                [e.target.id]: e.target.value,
                            })
                        }
                    >
                        <option value="Jantan">Jantan</option>
                        <option value="Betina">Betina</option>
                    </select>
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="tanggalPemotongan">Tanggal Pemotongan</label>
                    <input
                        type="date"
                        name="tanggalPemotongan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setRphInfo({
                                ...rphInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="statusPemotongan">Status Pemotongan</label>
                    <input
                        type="text"
                        name="statusPemotongan"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setRphInfo({
                                ...rphInfo,
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
                            setRphInfo({
                                ...rphInfo,
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

export default RPHPageContainer;