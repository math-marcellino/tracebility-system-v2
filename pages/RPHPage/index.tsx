import type { NextPage } from 'next';
import RPHPageContainer from '../../modules/RPHPage/RPHPageContainer';
import Navigation from '../../uikit/Navigation';

const RPHPage: NextPage = () => {
    return (
        <>
            <Navigation />
            <RPHPageContainer />
        </>
    );
};

export default RPHPage;
