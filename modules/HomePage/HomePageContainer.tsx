import { FunctionComponent, useState } from 'react';
import RPHTable from './components/RPHTable';
import DistributorTable from './components/DistributorTable';
import HotelTable from './components/HotelTable';

type HomePageContainerProps = {};

const HomePageContainer: FunctionComponent<HomePageContainerProps> = ({}) => {
    const [table, setTable] = useState('RPH');
    return (
        <div className="space-y-3">
            <div className="px-16 space-x-4">
                <button
                    className={`border rounded-md w-24 py-1 ${
                        table === 'RPH' && 'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable('RPH');
                    }}
                >
                    RPH
                </button>
                <button
                    className={`border rounded-md w-24 py-1 ${
                        table === 'Distributor' && 'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable('Distributor');
                    }}
                >
                    Distributor
                </button>
                <button
                    className={`border rounded-md w-24 py-1 ${
                        table === 'Hotel' && 'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable('Hotel');
                    }}
                >
                    Hotel
                </button>
            </div>
            <div className="">
                {table === 'RPH' && <RPHTable />}
                {table === 'Distributor' && <DistributorTable />}
                {table === 'Hotel' && <HotelTable />}
            </div>
        </div>
    );
};

export default HomePageContainer;
