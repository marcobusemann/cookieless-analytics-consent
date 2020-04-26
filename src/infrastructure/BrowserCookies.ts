import Cookies, { CookieOptions } from "../domain/Cookies";
import JsCookie from 'js-cookie';

export class BrowserCookies implements Cookies {
    get(name: string) {
        return JsCookie.get(name);
    }
    set(name: string, value: any, options: CookieOptions) {
        JsCookie.set(name, value, {
            expires: options.maxAgeInDays,
        });
    }
}
