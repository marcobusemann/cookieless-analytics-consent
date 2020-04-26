<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/cookieless-analytics-consent">
    <img alt="" src="https://img.shields.io/npm/v/cookieless-analytics-consent.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/zeit/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/cookieless-analytics-consent.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

## Intro

This library tries to provide general purpose components to include an analytics consent in your website. If the user accepts this consent, eg. google analytics will be included to track page-views.
The structure of the components is designed for exchangeability. 

Actually there are only three components available:

- ```NextJsGaPageviews``` - Google Analytics integration for NextJs with storage none and ip anonymisation to track pageviews.
- ```CookieGuard``` - Cookie guard to remember whether a user has accepted or rejected a consent.
- ```SimpleConsent``` - A simple small ui component with a title, text and a reject and accept button. Its displayed by default on the bottom right.

## Getting Started

```
npm i --save cookieless-analytics-consent
```

## Documentation

Have a look at the example!

```
<NextJsGaPageviews analyticsId="YOUR_ID">
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
```

If you want your own ui component, then just replace ```SimpleConsent``` with another one.