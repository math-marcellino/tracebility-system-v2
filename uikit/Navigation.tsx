import type { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUserContext } from '../modules/UserContext';
import { useReadLocalStorage, useLocalStorage } from 'usehooks-ts';
import { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';

type NavigationProps = {};

const Navigation: FunctionComponent<NavigationProps> = ({}) => {
    const router = useRouter();
    const { namaLengkap, role, deleteUserData } = useUserContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [, deleteToken] = useLocalStorage('token', '');
    const jwt = useReadLocalStorage('token');

    useEffect(() => {
        if (jwt) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [jwt]);

    return (
        <div className="flex flex-row items-center py-6 px-16 justify-between">
            <div className="flex flex-row items-center gap-8">
                <Link href="/">
                    <p className="font-extrabold text-2xl text-center">
                        Traceability <br /> System
                    </p>
                </Link>
                <Link href="/">
                    <a className="text-base">Home</a>
                </Link>
                {role === 'RPH' && (
                    <>
                        <Link href="/rph/tambah-pemotongan">
                            <a className="text-base">Tambah Data Pemotongan</a>
                        </Link>
                        <Link href="/rph/tambah-produk">
                            <a className="text-base">Tambah Data Produk RPH</a>
                        </Link>
                    </>
                )}
                {role === 'Distributor' && (
                    <Link href="/distributor/tambah-produk">
                        <a className="text-base">Tambah Data Produk Distributor</a>
                    </Link>
                )}
                {role === 'Hotel' && (
                    <Link href="/hotel/tambah-makanan">
                        <a className="text-base">Tambah Data Makanan</a>
                    </Link>
                )}
            </div>

            {isLoggedIn ? (
                <Menu>
                    <div className="flex justify-end">
                        <Menu.Button className="flex items-center gap-2">
                            Welcome {namaLengkap}! | {role}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute bg-slate-200 px-4 py-3 mt-8 w-fit text-gray-900 flex flex-col gap-2 rounded-lg">
                            {/* Profile */}
                            <Menu.Item>
                                <button
                                    onClick={() => {
                                        router.push('/profile');
                                    }}
                                    className="flex gap-2 items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    Profile
                                </button>
                            </Menu.Item>
                            {/* Profile */}
                            <Menu.Item>
                                <button
                                    onClick={() => {
                                        deleteToken('');
                                        deleteUserData();
                                        router.push('/');
                                    }}
                                    className="flex gap-2 items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    Logout
                                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Menu>
            ) : (
                <Link href="/login">
                    <a className="bg-gray-700 px-4 py-2 rounded-md">Login</a>
                </Link>
            )}
        </div>
    );
};

export default Navigation;
