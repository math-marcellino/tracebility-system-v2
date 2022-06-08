import type { FunctionComponent } from 'react';
import Link from 'next/link';

type NoAccessPageProps = {};

const NoAccessPage: FunctionComponent<NoAccessPageProps> = ({}) => {
    return (
        <div className="flex flex-col gap-8 h-screen items-center justify-center">
            <h1 className="font-bold text-5xl">
                You don't have access to this page!!
            </h1>
            <Link href="/">
                <a className="py-2 px-4 bg-gray-700 rounded-xl">
                    Back to Homepage &rarr;
                </a>
            </Link>
        </div>
    );
};

export default NoAccessPage;
