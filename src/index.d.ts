export interface JsCookiesOptions {
    expires?: Number | Date;
    path?: String;
    domain?: String;
    secure?: Boolean;
}
declare const cookieStorageService: {
    get: (key: String) => any;
    set: (key: String, data: any, options: JsCookiesOptions) => void;
    remove: (key: String, options: JsCookiesOptions) => void;
};
declare const localStorageService: {
    get: (key: String) => any;
    set: (key: String, data: any) => void;
    remove: (key: String) => void;
    clear: () => void;
};
declare const sessionStorageService: {
    set: (key: String, data: any) => void;
    get: (key: String) => any;
    remove: (key: String) => void;
    clear: () => void;
};
export { cookieStorageService, localStorageService, sessionStorageService };
