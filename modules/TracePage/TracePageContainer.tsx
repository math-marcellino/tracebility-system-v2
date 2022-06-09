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
        <div className="flex flex-col 2xl:h-screen items-center justify-center gap-16">
            <h1 className="font-extrabold text-5xl 2xl:pt-0 pt-16">Trace</h1>
            {hotelData?.[0] === '' ? (
                <div className="bg-gray-800 rounded-xl py-5 px-16">
                    <h1 className="text-3xl font-bold">Data not found!</h1>
                </div>
            ) : (
                <div className="flex 2xl:flex-row flex-col items-center justify-center gap-8 2xl:px-12 p-4">
                    <HotelInfoCard setHotelData={setHotelData} />
                    <p className="text-6xl hidden 2xl:flex">&rarr;</p>
                    <p className="text-6xl 2xl:hidden">&darr;</p>
                    <DistributorInfoCard
                        setDistributorData={setDistributorData}
                        distributorBatchID={hotelData?.[0]}
                    />
                    <p className="text-6xl hidden 2xl:flex">&rarr;</p>
                    <p className="text-6xl 2xl:hidden">&darr;</p>
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
