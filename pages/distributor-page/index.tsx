import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import Navigation from '../../uikit/Navigation';
import DistributorpageContainer from '../../modules/DistributorPage/DistributorPageContainer';

const DistributorPage: NextPage = () => {
    return (
        <>
            <Navigation />
            <PageMetadata page="Distributor Page" />
            <DistributorpageContainer />
        </>
    );
};

export default DistributorPage;
