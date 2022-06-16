import type { NextPage } from 'next';
import Navigation from '../../uikit/Navigation';
import PageMetadata from '../../uikit/PageMetadata';
import PemotonganContainer from '../../modules/RPHPage/PemotonganContainer';
import NoAccessPage from '../../uikit/NoAccessPage';
import { useUserContext } from '../../modules/UserContext';

const TambahDataPemotongan: NextPage = () => {
    const { role } = useUserContext();
    return (
        <div>
            {role === 'RPH' ? (
                <>
                    <Navigation />
                    <PageMetadata page="Tambah Data Pemotongan" />
                    <PemotonganContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </div>
    );
};

export default TambahDataPemotongan;
