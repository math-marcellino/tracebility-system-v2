import type { NextPage } from 'next';
import Navigation from '../../uikit/Navigation';
import PageMetadata from '../../uikit/PageMetadata';
import { useUserContext } from '../../modules/UserContext';
import NoAccessPage from '../../uikit/NoAccessPage';
import ProdukContainer from '../../modules/RPHPage/ProdukContainer';

const TambahDataProduk: NextPage = () => {
    const { role } = useUserContext();
    return (
        <div>
            {role === 'RPH' ? (
                <>
                    <Navigation />
                    <PageMetadata page="Tambah Data Produk RPH" />
                    <ProdukContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </div>
    );
};

export default TambahDataProduk;
