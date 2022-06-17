import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import Navigation from '../../uikit/Navigation';
import MakananContainer from '../../modules/HotelPage/MakananContainer';
import { useUserContext } from '../../modules/UserContext';
import NoAccessPage from '../../uikit/NoAccessPage';

const TambahMakanan: NextPage = () => {
    const { role } = useUserContext();
    return (
        <>
            {role === 'Hotel' ? (
                <>
                    <Navigation />
                    <PageMetadata page="Tambah Data Makanan" />
                    <MakananContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </>
    );
};

export default TambahMakanan;
