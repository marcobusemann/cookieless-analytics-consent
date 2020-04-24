import Cookies, { CookieOptions } from "./Cookies";

export interface FakeCookie {
    value: any;
    options: CookieOptions;
}

export class FakeCookies implements Cookies {
    constructor(
        private cookies: Record<string, FakeCookie> = {}
    ) {}

    get(name: string) {
        return this.cookies[name] ? this.cookies[name].value : null;
    }

    set(name: string, value: any, options: CookieOptions) {
        this.cookies[name] = {
            value,
            options
        };
    }
}

export class FakeSingleCookie implements Cookies {

    private cookies: FakeCookies;

    constructor(
        private name: string,
        private value: any,
        private options?: CookieOptions,
    ) {
        const data: Record<string, FakeCookie> = {};
        data[name] = {
            value,
            options: options || {
                maxAgeInDays: 365
            }
        };
        this.cookies = new FakeCookies(data);
    }

    get(name: string) {
        return this.cookies.get(name);
    }

    set(name: string, value: any, options: CookieOptions) {
        this.cookies.set(name, value, options);
    }
}

export class NoCookies implements Cookies {

    private cookies: FakeCookies = new FakeCookies();

    get(name: string) {
        return this.cookies.get(name);
    }

    set(name: string, value: any, options: CookieOptions) {
        this.cookies.set(name, value, options);
    }
}
