import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import RPHPageContainer from '../../modules/RPHPage/RPHPageContainer';
import Navigation from '../../uikit/Navigation';
import { useUserContext } from '../../modules/UserContext';
import NoAccessPage from '../../uikit/NoAccessPage';

const RPHPage: NextPage = () => {
    const { role } = useUserContext();
    return (
        <>
            {role === 'RPH' ? (
                <>
                    <Navigation />
                    <PageMetadata page="RPH Page" />
                    <RPHPageContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </>
    );
};

export default RPHPage;
