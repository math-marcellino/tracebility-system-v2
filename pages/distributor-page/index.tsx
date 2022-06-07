import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import DistributorpageContainer from '../../modules/DistributorPage/DistributorPageContainer';

const DistributorPage: NextPage = () => {
    return (
        <>
            <PageMetadata page="Distributor Page" />
            <DistributorpageContainer />
        </>
    );
};

export default DistributorPage;
