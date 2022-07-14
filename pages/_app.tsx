import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextWrapper } from '../modules/UserContext';
import { providers } from 'ethers';
import { chain, createClient, WagmiConfig } from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
    const rinkebyProvider = new providers.JsonRpcProvider(
        'https://rpc.ankr.com/eth_rinkeby',
        chain.rinkeby.id
    );
    const client = createClient({
        autoConnect: true,
        provider() {
            return rinkebyProvider;
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
