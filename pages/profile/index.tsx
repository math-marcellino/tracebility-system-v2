import type { NextPage } from 'next';
import { useUserContext } from '../../modules/UserContext';
import Navigation from '../../uikit/Navigation';
import PageMetadata from '../../uikit/PageMetadata';
import NoAccessPage from '../../uikit/NoAccessPage';
import ProfilePageContainer from '../../modules/ProfilePage/ProfilePageContainer';

const Profile: NextPage = () => {
    const { role } = useUserContext();
    return (
        <>
            {role ? (
                <>
                    <Navigation />
                    <PageMetadata page="Profile" />
                    <ProfilePageContainer />
                </>
            ) : (
                <NoAccessPage />
            )}
        </>
    );
};

export default Profile;
