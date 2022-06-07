import type { NextPage } from 'next';
import Navigation from '../uikit/Navigation';
import PageMetadata from '../uikit/PageMetadata';
import HomePageContainer from '../modules/HomePage/HomePageContainer';

const Home: NextPage = () => {
    return (
        <div>
            <Navigation />
            <PageMetadata page="Home" />
            <HomePageContainer />
        </div>
    );
};

export default Home;
