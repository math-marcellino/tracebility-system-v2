import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextWrapper } from '../modules/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserContextWrapper>
            <Component {...pageProps} />
        </UserContextWrapper>
    );
}

export default MyApp;
