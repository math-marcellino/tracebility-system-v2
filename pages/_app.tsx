import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextWrapper } from '../modules/UserContext';
import { providers } from 'ethers'
import { createClient, WagmiConfig } from 'wagmi'

function MyApp({ Component, pageProps }: AppProps) {
    const mumbaiProvider = new providers.JsonRpcProvider('https://speedy-nodes-nyc.moralis.io/0f6aa643f70545beebc8e4f9/polygon/mumbai', 80001)
    const client = createClient({
        autoConnect: true,
        provider(){
            return mumbaiProvider
        }
    })
    return (
        <UserContextWrapper>
            <WagmiConfig client={client}>
                <Component {...pageProps} />
            </WagmiConfig>
        </UserContextWrapper>
    );
}

export default MyApp;
