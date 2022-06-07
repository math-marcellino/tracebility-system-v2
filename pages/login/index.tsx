import type { NextPage } from 'next';
import PageMetadata from '../../uikit/PageMetadata';
import LoginPageContainer from '../../modules/LoginPage/LoginPageContainer';

const Login: NextPage = () => {
    return (
        <>
            <PageMetadata page="Login" />
            <LoginPageContainer />
        </>
    );
};

export default Login;
