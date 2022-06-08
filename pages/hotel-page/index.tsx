import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import Navigation from '../../uikit/Navigation';
import HotelPageContainer from '../../modules/HotelPage/HotelPageContainer';
import { useUserContext } from '../../modules/UserContext';
import NoAccessPage from '../../uikit/NoAccessPage';

const HotelPage: NextPage = () => {
    const { role } = useUserContext();
    return (
        <>
            {role === 'Hotel' ? (
                <>
                    <Navigation />
                    <PageMetadata page="Hotel Page" />
                    <HotelPageContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </>
    );
};

export default HotelPage;
