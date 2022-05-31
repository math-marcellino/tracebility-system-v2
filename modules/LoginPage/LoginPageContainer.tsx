import type { FunctionComponent } from 'react';

type LoginPageContainerProps = {};

const LoginPageContainer: FunctionComponent<LoginPageContainerProps> = ({}) => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <form className="bg-gray-700 flex flex-col items-center justify-center px-8 py-6 rounded-xl shadow-xl text-lg gap-6 min-w-[450px]">
                <p className='text-3xl underline font-bold'>Stakeholder Login</p>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                    />
                </div>
                <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="text-gray-900 rounded-md px-2 py-1.5"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 active:scale-90 transition ease-in-out w-full p-2.5 rounded-xl"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPageContainer;
