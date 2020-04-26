import React, { useEffect } from 'react';
import { Router } from 'next/router';
import ReactGA from 'react-ga';

export default ({
    children,
    analyticsId
}: {
    children: (includeAnalytics: () => void) => any;
    analyticsId: string;
}) => {

    const logPageview = (url: string) => {
        ReactGA.pageview(url);
    };

    const includeAnalytics = () => {
        ReactGA.initialize(analyticsId, {
            debug: process.env.NODE_ENV !== 'production',
            gaOptions: {
                storage: 'none'
            }
        });
        ReactGA.set({ anonymizeIp: true });

        logPageview(window.location.pathname);
        Router.events.on('routeChangeComplete', logPageview);
    };

    useEffect(() => {
        return () => {
            Router.events.off('routeChangeComplete', logPageview);
        };
    }, []);

    return (
        <>{children(includeAnalytics)}</>
    )
}