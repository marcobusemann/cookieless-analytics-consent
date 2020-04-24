import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Analytics from "./Analytics";
import { NoCookies, FakeSingleCookie, FakeCookies, FakeCookie } from "./domain/FakeCookies";
import { NotABrowserEnvironmentError } from "./infrastructure/BrowserCookies";

const COOKIE_NAME = "a";
const INNER_DUMMY_ID = "inner-component";

const InnerDummy = () => (
    <div data-testid={INNER_DUMMY_ID}></div>
);

describe("<Analytics />", () => {

    test("should use a default cookie name and half a year for max-age", async () => {
        const cookiesData: Record<string, FakeCookie> = {};

        render(
            <Analytics cookies={new FakeCookies(cookiesData)} onIncludeAnalytics={jest.fn()}>
                {(onAccept) => {
                    onAccept();
                    return <></>;
                }}
            </Analytics>
        );

        expect(Object.keys(cookiesData).length).toBe(1);
        const halfOfYear = 6*30;
        expect(cookiesData[Object.keys(cookiesData)[0]].options.maxAgeInDays).toBe(halfOfYear);
    });

    test("should, without the cookie being set, render its child component to show the user consent", async () => {
        const cookies = new NoCookies();

        const { queryByTestId } = render(
            <Analytics cookies={cookies} cookieName={COOKIE_NAME} onIncludeAnalytics={jest.fn()}>
                {() => <InnerDummy />}
            </Analytics>
        );

        const innerComponent = queryByTestId(INNER_DUMMY_ID);

        expect(innerComponent).not.toBeNull();
    });

    test("should not show the user consent if the cookie exists (value 0)", async () => {
        const cookies = new FakeSingleCookie(COOKIE_NAME, 0);

        const { queryByTestId } = render(
            <Analytics cookies={cookies} cookieName={COOKIE_NAME} onIncludeAnalytics={jest.fn()}>
                {() => <InnerDummy />}
            </Analytics>
        );

        const innerComponent = queryByTestId(INNER_DUMMY_ID);
        expect(innerComponent).toBeNull();
    });

    test("should not show the user consent if the cookie exists (value 1)", async () => {
        const cookies = new FakeSingleCookie(COOKIE_NAME, 1);

        const { queryByTestId } = render(
            <Analytics cookies={cookies} cookieName={COOKIE_NAME} onIncludeAnalytics={jest.fn()}>
                {() => <InnerDummy />}
            </Analytics>
        );

        const innerComponent = queryByTestId(INNER_DUMMY_ID);
        expect(innerComponent).toBeNull();
    });

    test("should set a cookie on accept to 1", async () => {
        const cookiesData: Record<string, FakeCookie> = {};

        render(
            <Analytics cookies={new FakeCookies(cookiesData)} cookieName={COOKIE_NAME} onIncludeAnalytics={jest.fn()}>
                {(onAccept) => {
                    onAccept();
                    return (<></>);
                }}
            </Analytics>
        );

        expect(cookiesData[COOKIE_NAME].value).toBe(1);
    });

    test("should hide the consent after accepting", async () => {
        const { queryByTestId } = render(
            <Analytics cookies={new FakeCookies()} onIncludeAnalytics={jest.fn()}>
                {(onAccept) => {
                    onAccept();
                    return <InnerDummy />;
                }}
            </Analytics>
        );

        const innerComponent = queryByTestId(INNER_DUMMY_ID);
        expect(innerComponent).toBeNull();
    });

    test("should set a cookie on reject to 0", async () => {
        const cookiesData: Record<string, FakeCookie> = {};

        render(
            <Analytics cookies={new FakeCookies(cookiesData)} cookieName={COOKIE_NAME} onIncludeAnalytics={jest.fn()}>
                {(_, onReject) => {
                    onReject();
                    return (<></>);
                }}
            </Analytics>
        );

        expect(cookiesData[COOKIE_NAME].value).toBe(0);
    });

    test("should hide the consent after rejecting", async () => {
        const { queryByTestId } = render(
            <Analytics cookies={new FakeCookies()} onIncludeAnalytics={jest.fn()}>
                {(_, onReject) => {
                    onReject();
                    return <InnerDummy />;
                }}
            </Analytics>
        );

        const innerComponent = queryByTestId(INNER_DUMMY_ID);
        expect(innerComponent).toBeNull();
    });

    test("should initiate including analytics if the cookie has been accepted before", async () => {
        const cookies = new FakeSingleCookie(COOKIE_NAME, 1);
        const includeAnalytics = jest.fn();

        render(
            <Analytics cookies={cookies} cookieName={COOKIE_NAME} onIncludeAnalytics={includeAnalytics}>
                {() => <InnerDummy />}
            </Analytics>
        );

        expect(includeAnalytics).toBeCalled();
    });

    test("should not initiate including analytics if the cookie has been rejected before", async () => {
        const cookies = new FakeSingleCookie(COOKIE_NAME, 0);
        const includeAnalytics = jest.fn();

        render(
            <Analytics cookies={cookies} cookieName={COOKIE_NAME} onIncludeAnalytics={includeAnalytics}>
                {() => <InnerDummy />}
            </Analytics>
        );

        expect(includeAnalytics).not.toBeCalled();
    });

    test("should initiate including analytics if the consent has been accepted", async () => {
        const includeAnalytics = jest.fn();

        const { findByTestId } = render(
            <Analytics cookies={new NoCookies()} cookieName={COOKIE_NAME} onIncludeAnalytics={includeAnalytics}>
                {(onAccept) => {
                    return <button data-testid={INNER_DUMMY_ID} onClick={onAccept}></button>;
                }}
            </Analytics>
        );

        const button = await findByTestId(INNER_DUMMY_ID);
        fireEvent.click(button);

        expect(includeAnalytics).toBeCalled();
    });

    test("should NOT including analytics if the consent has been rejected", async () => {
        const includeAnalytics = jest.fn();

        const { findByTestId } = render(
            <Analytics cookies={new NoCookies()} cookieName={COOKIE_NAME} onIncludeAnalytics={includeAnalytics}>
                {(_, onReject) => {
                    return <button data-testid={INNER_DUMMY_ID} onClick={onReject}></button>;
                }}
            </Analytics>
        );

        const button = await findByTestId(INNER_DUMMY_ID);
        fireEvent.click(button);

        expect(includeAnalytics).not.toBeCalled();
    });

    test("should by default use browser cookies", async () => {
        const h = () => render(
            <Analytics onIncludeAnalytics={jest.fn()}>
                {() => <InnerDummy />}
            </Analytics>
        );

        spyOn(console, 'error');
        expect(h).toThrow(NotABrowserEnvironmentError);
    });
});