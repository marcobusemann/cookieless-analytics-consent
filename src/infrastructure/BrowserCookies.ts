import Cookies, { CookieOptions } from "../domain/Cookies";
import JsCookie from 'js-cookie';

export class NotABrowserEnvironmentError {};

export class BrowserCookies implements Cookies {
    get(name: string) {
        if (typeof document === 'undefined' || !document.cookie)
            throw new NotABrowserEnvironmentError();
        return JsCookie.get(name);
    }
    set(name: string, value: any, options: CookieOptions) {
        JsCookie.set(name, value, {
            expires: options.maxAgeInDays,
        });
    }
}
