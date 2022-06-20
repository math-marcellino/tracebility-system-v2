import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LoginPageContainerProps = {};

interface IUserInfo {
    username: string;
    password: string;
}

const LoginPageContainer: FunctionComponent<LoginPageContainerProps> = ({}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [, setLocalStorage] = useLocalStorage('token', '');
    const jwt = useReadLocalStorage('token');
    const { register, handleSubmit } = useForm<IUserInfo>();

    useEffect(() => {
        if (jwt) {
            router.push('/');
        }
    }, []);

    const handleLogin: SubmitHandler<IUserInfo> = async (data) => {
        setIsLoading(true);
        try {
            const result = await axios.post(
                'https://tracebility-project.herokuapp.com/api/user/acc/signIn',
                {
                    username: data.username,
                    password: data.password,
                }
            );
            setLocalStorage(result.data.token);
            setIsLoading(false);
            router.push('/');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
                console.log(error);
            }
            setIsLoading(false);
        }
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]"
            >
                <p className="text-3xl underline font-bold">
                    Stakeholder Login
                </p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        {...register('username', { required: true })}
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        {...register('password', { required: true })}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
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
                        <p>Login</p>
                    )}
                </button>
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

export default LoginPageContainer;
