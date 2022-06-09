import type { FunctionComponent } from 'react';
import Head from 'next/head';

type PageMetadataProps = {
    page: string;
};

const PageMetadata: FunctionComponent<PageMetadataProps> = ({ page }) => {
    return (
        <>
            <Head>
                <title>{page} | Traceability System</title>
                <meta
                    name="description"
                    content="Halal Traceabiliy System by Universitas Multimedia Nusantara"
                />
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://tracebility-system-v2.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={`${page} | Traceability System`}
                />
                <meta
                    property="og:description"
                    content="Halal Traceabiliy System by Universitas Multimedia Nusantara"
                />
                <meta
                    property="og:image"
                    content="https://tracebility-system-v2.vercel.app/images/og-banner.png"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="localhost:3000" />
                <meta property="twitter:url" content="https://tracebility-system-v2.vercel.app/" />
                <meta
                    name="twitter:title"
                    content={`${page} | Traceability System`}
                />
                <meta
                    name="twitter:description"
                    content="Halal Traceabiliy System by Universitas Multimedia Nusantara"
                />
                <meta
                    name="twitter:image"
                    content="https://tracebility-system-v2.vercel.app/images/og-banner.png"
                />
            </Head>
        </>
    );
};

export default PageMetadata;
