import type { FunctionComponent } from 'react';
import RPHTable from './components/RPHTable';
import DistributorTable from './components/DistributorTable';
import HotelTable from './components/HotelTable';

type HomePageContainerProps = {};

const HomePageContainer: FunctionComponent<HomePageContainerProps> = ({}) => {
    return (
        <div>
            {/* <RPHTable/> */}
            {/* <DistributorTable/> */}
            <HotelTable/>
        </div>
    );
};

export default HomePageContainer;
