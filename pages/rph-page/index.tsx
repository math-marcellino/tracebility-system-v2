import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import RPHPageContainer from '../../modules/RPHPage/RPHPageContainer';
import Navigation from '../../uikit/Navigation';

const RPHPage: NextPage = () => {
    return (
        <>
            <Navigation />
            <PageMetadata page="RPH Page" />
            <RPHPageContainer />
        </>
    );
};

export default RPHPage;
