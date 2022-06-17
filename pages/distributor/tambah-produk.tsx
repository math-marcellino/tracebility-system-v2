import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import Navigation from '../../uikit/Navigation';
import ProdukContainer from '../../modules/DistributorPage/ProdukContainer';
import { useUserContext } from '../../modules/UserContext';
import NoAccessPage from '../../uikit/NoAccessPage';

const DistributorPage: NextPage = () => {
    const { role } = useUserContext();
    return (
        <>
            {role === 'Distributor' ? (
                <>
                    <Navigation />
                    <PageMetadata page="Distributor Page" />
                    <ProdukContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </>
    );
};

export default DistributorPage;
