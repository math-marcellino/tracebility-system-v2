import type { FunctionComponent } from 'react';
import type { Result } from 'ethers/lib/utils';
import { useState } from 'react';
import HotelInfoCard from './components/HotelInfoCard';
import DistributorInfoCard from './components/DistributorInfoCard';
import RPHInfoCard from './components/RPHInfoCard';

type TracePageContainerProps = {};

const TracePageContainer: FunctionComponent<TracePageContainerProps> = ({}) => {
    const [hotelData, setHotelData] = useState<Result | undefined>();
    const [distributorData, setDistributorData] = useState<
        Result | undefined
    >();
    const [RPHData, setRPHData] = useState<Result | undefined>();
    console.log(hotelData);
    return (
        <div className="flex flex-col h-screen items-center justify-center gap-16">
            <h1 className="font-extrabold text-5xl">Trace</h1>
            {hotelData?.[0] === '' ? (
                <div className="bg-gray-800 rounded-xl py-5 px-16">
                    <h1 className="text-3xl font-bold">Data not found!</h1>
                </div>
            ) : (
                <div className="flex flex-row items-center justify-center gap-x-8">
                    <HotelInfoCard setHotelData={setHotelData} />
                    <p className="text-6xl">&rarr;</p>
                    <DistributorInfoCard
                        setDistributorData={setDistributorData}
                        distributorBatchID={hotelData?.[0]}
                    />
                    <p className="text-6xl">&rarr;</p>
                    <RPHInfoCard
                        setRPHData={setRPHData}
                        RPHBatchID={distributorData?.[0]}
                    />
                </div>
            )}
        </div>
    );
};

export default TracePageContainer;
