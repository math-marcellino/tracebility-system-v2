import type { FunctionComponent } from 'react';
import RPHTable from './components/RPHTable';

type HomePageContainerProps = {};

const HomePageContainer: FunctionComponent<HomePageContainerProps> = ({}) => {
    return (
        <div>
            <RPHTable />
        </div>
    );
};

export default HomePageContainer;
