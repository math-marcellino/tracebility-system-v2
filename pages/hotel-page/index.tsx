import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import HotelPageContainer from '../../modules/HotelPage/HotelPageContainer';

const HotelPage: NextPage = () => {
    return (
        <>
            <PageMetadata page="Hotel Page" />
            <HotelPageContainer />
        </>
    );
};

export default HotelPage;
