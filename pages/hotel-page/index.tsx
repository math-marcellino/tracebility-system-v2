import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import Navigation from '../../uikit/Navigation';
import HotelPageContainer from '../../modules/HotelPage/HotelPageContainer';

const HotelPage: NextPage = () => {
    return (
        <>
            <Navigation />
            <PageMetadata page="Hotel Page" />
            <HotelPageContainer />
        </>
    );
};

export default HotelPage;
