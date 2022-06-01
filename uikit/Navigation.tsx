import type { FunctionComponent } from 'react';
import { Menu } from '@headlessui/react';

type NavigationProps = {
    isLoggedIn: boolean;
};

const Navigation: FunctionComponent<NavigationProps> = ({ isLoggedIn }) => {
    return (
        <div className="flex flex-row items-center py-6 px-16 justify-between">
            <div className="flex flex-row items-center gap-8">
                <p className="font-extrabold text-2xl text-center">
                    Traceability <br /> System
                </p>
                <a href="" className="text-base">
                    Home
                </a>
                <a href="" className="text-base">
                    Dashboard
                </a>
            </div>

            {isLoggedIn ? (
                <Menu>
                    <div className='flex justify-end'>
                        <Menu.Button className="flex items-center gap-2">
                            Welcome Matthew! | RPH
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
                            <Menu.Item>
                                <a href="/">Account</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/" className="flex gap-2">
                                    Logout
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
                                </a>
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Menu>
            ) : (
                <button className="bg-gray-700 px-4 py-2 rounded-md">
                    Login
                </button>
            )}
        </div>
    );
};

export default Navigation;