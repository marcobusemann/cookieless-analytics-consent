import React, { useState, useEffect } from 'react';
import Cookies from './domain/Cookies';
import { BrowserCookies } from './infrastructure/BrowserCookies';

export default ({
    children,
    cookieName = '_cacAccepted',
    cookieMaxAgeInDays,
    cookies,
    onIncludeAnalytics,
}: {
    children: (onAccept: () => void, onReject: () => void) => any;
    cookieName?: string;
    cookieMaxAgeInDays?: number;
    cookies?: Cookies;
    onIncludeAnalytics: () => void;
}) => {
    const myCookieMaxAgeInDays = cookieMaxAgeInDays || 6*30;
    const myCookies = cookies || new BrowserCookies();

    const [cookieExists, setCookieExists] = useState<boolean>(true);

    useEffect(() => {
        const cookie = myCookies.get(cookieName);
        const exists = cookie !== null && cookie !== undefined;
        setCookieExists(exists)

        if (cookie == 1)
            onIncludeAnalytics();
    }, []);

    const onAccept = () => {
        myCookies.set(cookieName, 1, {
            maxAgeInDays: myCookieMaxAgeInDays,
        });
        setCookieExists(true);
        onIncludeAnalytics();
    }

    const onReject = () => {
        myCookies.set(cookieName, 0, {
            maxAgeInDays: myCookieMaxAgeInDays,
        });
        setCookieExists(true);
    }

    return cookieExists ? (<></>) : children(onAccept, onReject);
}
