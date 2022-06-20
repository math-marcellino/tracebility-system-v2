import { FunctionComponent, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

type ProfilePageContainerProps = {};

interface IEditData {
    namaLengkap: string;
    sertifikatHalal: string;
}

const ProfilePageContainer: FunctionComponent<ProfilePageContainerProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [punyaSertif, setPunyaSertif] = useState(true);
    const [edit, setEdit] = useState(false);
    const { username, namaLengkap, role, sertifikatHalal } = useUserContext();
    const { register, handleSubmit } = useForm<IEditData>();

    const editProfile = (data: IEditData) => {
        setIsLoading(true);
        axios
            .put(`https://tracebility-project.herokuapp.com/api/user/updateUsers/${username}`, {
                nama_lengkap: data.namaLengkap,
                sertifikatHalal: data.sertifikatHalal,
            })
            .then((res) => {
                console.log(res);
                toast.success('Edit profile success!');
                setEdit(false);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error('Edit Profile Failed!');
                setIsLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto border p-4 rounded-xl">
            <h1 className="text-4xl font-extrabold pb-6">{edit ? 'Edit Profile' : 'Profile'}</h1>
            {!edit && (
                <div className="w-full text-xl space-y-4">
                    <div className="flex space-x-4 items-center">
                        <p className="w-2/5 text-right">Username: </p>
                        <p className="bg-gray-400 py-1 px-2 rounded-lg w-full h-fit">{username}</p>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <p className="w-2/5 text-right">Name: </p>
                        <p className="bg-gray-400 py-1 px-2 rounded-lg w-full h-fit">
                            {namaLengkap}
                        </p>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <p className="w-2/5 text-right">Role: </p>
                        <p className="bg-gray-400 py-1 px-2 rounded-lg w-full h-fit">{role}</p>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <p className="w-2/5 text-right">Sertifikat Halal: </p>
                        <p className="bg-gray-400 py-1 px-2 rounded-lg w-full h-fit">
                            {sertifikatHalal}
                        </p>
                    </div>
                    <button
                        onClick={() => setEdit(true)}
                        className="bg-gray-800 hover:bg-gray-700 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl"
                    >
                        Edit
                    </button>
                </div>
            )}
            {edit && (
                <form
                    onSubmit={handleSubmit(editProfile)}
                    className="flex flex-col space-y-6 w-full"
                >
                    <div className="flex flex-col space-y-1 w-full">
                        <label>Name</label>
                        <input
                            type="text"
                            className="text-gray-900 rounded-md px-2 py-1.5"
                            defaultValue={namaLengkap}
                            {...register('namaLengkap', { required: true })}
                        />
                    </div>
                    {role === 'RPH' && (
                        <>
                            <div className="flex space-x-6 items-center">
                                <div className="space-x-2">
                                    <input
                                        onChange={() => setPunyaSertif(true)}
                                        type="radio"
                                        name="sertif_halal"
                                        defaultChecked
                                    />
                                    <label>Punya Sertifikat Halal</label>
                                </div>
                                <div className="space-x-2">
                                    <input
                                        onChange={() => setPunyaSertif(false)}
                                        type="radio"
                                        name="sertif_halal"
                                    />
                                    <label>Tidak Punya Sertifikat Halal</label>
                                </div>
                            </div>
                            {punyaSertif && (
                                <div className="flex flex-col space-y-1 w-full">
                                    <label>Sertifikat Halal</label>
                                    <input
                                        type="text"
                                        className="text-gray-900 rounded-md px-2 py-1.5"
                                        defaultValue={sertifikatHalal}
                                        {...register('sertifikatHalal', { required: true })}
                                    />
                                </div>
                            )}
                            {!punyaSertif && (
                                <div className="flex flex-col space-y-1 w-full text-center">
                                    <h1 className="text-lg font-semibold">Syarat RPH</h1>
                                    <ul>
                                        <li>1. Alat penyembelihan harus tajam</li>
                                        <li>2. Menyebutkan nama Allah/Bismillah</li>
                                        <li>3. Memotong pada bagian tenggorokan</li>
                                        <li>4. Penyembelih adalah seorang Muslim</li>
                                    </ul>
                                    <div className="space-x-2">
                                        <input
                                            type="radio"
                                            {...register('sertifikatHalal', { required: true })}
                                            value="Tidak ada, tetapi telah memenuhi persyaratan RPH"
                                        />
                                        <label>
                                            {namaLengkap} telah memenuhi syarat RPH di atas
                                        </label>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {role !== 'RPH' && (
                        <div className="flex flex-col space-y-1 w-full">
                            <label>Sertifikat Halal</label>
                            <input
                                type="text"
                                className="text-gray-900 rounded-md px-2 py-1.5"
                                defaultValue={sertifikatHalal}
                                {...register('sertifikatHalal', { required: true })}
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-700 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl"
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
                </form>
            )}
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

export default ProfilePageContainer;
