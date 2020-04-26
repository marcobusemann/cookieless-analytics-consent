import Link from 'next/link';
import { CookieGuard, NextJsGaPageviews, SimpleConsent } from 'cookieless-analytics-consent';

import 'cookieless-analytics-consent/dist/SimpleConsent.css';

const Analytics = ({
    analyticsId
}: {
    analyticsId: string;
}) => {
    const Text = () => (
        <>
            We would like to use Google Analytics for statistical analysis of visitor numbers (cookies are not used for this purpose). By accepting this, you help us to improve our site and respond to your needs. More about the use of Google Analytics can be found <Link href="/data protection"><a>here</a></Link>'
        </>
    );

    return (
        <NextJsGaPageviews analyticsId={analyticsId}>
            {(includeAnalytics) => (
                <CookieGuard onIncludeAnalytics={includeAnalytics}>
                    {(onAccept, onReject) => (
                        <SimpleConsent onAccept={onAccept} onReject={onReject} content={{
                            title: 'Web analysis',
                            text: <Text />,
                            buttonRejectText: 'No thanks',
                            buttonAcceptText: 'Accept',
                        }} />
                    )}
                </CookieGuard>
            )}
        </NextJsGaPageviews>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics analyticsId={'UA-XXXXXXXX-X'} />
        </>
    )
}

export default MyApp