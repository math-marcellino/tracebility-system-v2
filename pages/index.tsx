import type { NextPage } from 'next';
import Navigation from '../uikit/Navigation';

const Home: NextPage = () => {
    return (
        <div>
            <Navigation isLoggedIn={false}/>
        </div>
    );
};

export default Home;
