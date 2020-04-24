export interface CookieOptions {
    maxAgeInDays: number;
}

export default interface Cookies {
    get(name: string): any;
    set(name: string, value: any, options: CookieOptions);
}
