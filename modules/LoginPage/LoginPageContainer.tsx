import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

type LoginPageContainerProps = {};

const LoginPageContainer: FunctionComponent<LoginPageContainerProps> = ({}) => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            router.push('/');
        }
    }, []);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const result = await axios.post(
                'http://localhost:8080/api/user/acc/signIn',
                userInfo
            );
            localStorage.setItem('token', result.data.token);
            setTimeout(() => {
                setIsLoading(false);
                router.push('/');
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]">
                <p className="text-3xl underline font-bold">
                    Stakeholder Login
                </p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setUserInfo({
                                ...userInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                        onChange={(e) =>
                            setUserInfo({
                                ...userInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <button
                    onClick={handleLogin}
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
            </div>
        </div>
    );
};

export default LoginPageContainer;
