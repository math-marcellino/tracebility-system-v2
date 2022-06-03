import type { NextPage } from 'next';
import Navigation from '../uikit/Navigation';
import HomePageContainer from '../modules/HomePage/HomePageContainer';

const Home: NextPage = () => {
    return (
        <div>
            <Navigation />
            <HomePageContainer />
        </div>
    );
};

export default Home;
