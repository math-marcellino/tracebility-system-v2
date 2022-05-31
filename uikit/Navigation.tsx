import type { FunctionComponent } from 'react';

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
                <div className='flex flex-row space-x-2'>
                    <p>Welcome, Matthew!</p>
                    <span>|</span>
                    <p>RPH</p>
                </div>
            ) : (
                <button className="bg-gray-700 px-4 py-2 rounded-md">
                    Login
                </button>
            )}
        </div>
    );
};

export default Navigation;
