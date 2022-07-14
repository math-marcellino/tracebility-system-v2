import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextWrapper } from '../modules/UserContext';
import { providers } from 'ethers';
import { createClient, WagmiConfig } from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
    const mumbaiProvider = new providers.JsonRpcProvider(
        'https://polygon-mumbai.g.alchemy.com/v2/7M-r3OYHfkI_B9WYcpEvJ4_LRT_O2iPu',
        80001
    );
    const client = createClient({
        autoConnect: true,
        provider() {
            return mumbaiProvider;
        },
    });
    return (
        <UserContextWrapper>
            <WagmiConfig client={client}>
                <Component {...pageProps} />
            </WagmiConfig>
        </UserContextWrapper>
    );
}

export default MyApp;
