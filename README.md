# js-storage-service

a wrapper for localstorage、sessionstorage and cookie, provides simply and indentical api

## Installation

If you use npm for client package management, you can install js-storage-service with:

`npm install js-storage-service --save`

or with yarn:

`yarn add js-storage-service`

And import js-storage-service into your code with something like:

`import JStorage from 'js-storage-service';`

#### TypeScript

js-storage-service provides a `types` file for usage with TypeScript; importing is simply the same as above.

## Usage

```js
import { cookieStorageService, sessionStorageService, localStorageService } from 'js-storage-service';

cookieStorageService.set('name', { foo: 'bar' });
cookieStorageService.get('name'); // { foo: 'bar' }
cookieStorageService.remove('name');

sessionStorageService.set('name', { foo: 'bar' });
sessionStorageService.get('name'); // { foo: 'bar' }
sessionStorageService.remove('name');
sessionStorageService.clear();

localStorageService.set('name', { foo: 'bar' });
localStorageService.get('name'); // { foo: 'bar' }
localStorageService.remove('name');
localStorageService.clear();
```

js-storage-service `set(key: String, value: any)` could presist any data to storage, with `JSON.stringify`.

and, `get(key: String)` also will get correct data with `JSON.parse`.

`cookieStorageService` using `js-cookie` as bottom service, so you can use it as same as `js-cookie`. such as:

```js
cookieStorageService.set('name', 'value', { expires: 7, path: '' });
```

Delete a cookie valid to the path of the current page, would like this:

```
cookieStorageService.set('name', 'value', { path: '' });

cookieStorageService.remove('name'); // fail!

cookieStorageService.remove('name', { path: '' }); // removed!
```

More detail info see [`js-cookie`](git://github.com/js-cookie/js-cookie.git).

## License

MIT Liaoct
