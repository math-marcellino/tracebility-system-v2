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
    console.log(distributorData);
    console.log(RPHData);
    return (
        <div className='flex flex-col h-screen items-center justify-center gap-16'>
            <h1 className='font-extrabold text-5xl'>Trace</h1>
            <div className="flex flex-row items-center justify-center gap-x-16">
                <HotelInfoCard setHotelData={setHotelData} />
                <DistributorInfoCard
                    setDistributorData={setDistributorData}
                    distributorBatchID={hotelData?.[0]}
                />
                <RPHInfoCard
                    setRPHData={setRPHData}
                    RPHBatchID={distributorData?.[0]}
                />
            </div>
        </div>
    );
};

export default TracePageContainer;
