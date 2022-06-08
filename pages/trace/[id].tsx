import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import TracePageContainer from '../../modules/TracePage/TracePageContainer';

const Trace: NextPage = () => {
    return (
        <div>
            <PageMetadata page="Trace" />
            <TracePageContainer />
        </div>
    );
};

export default Trace;
