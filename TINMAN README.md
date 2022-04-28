
## Change proxy setting
## 2 Changes currently needed
### First change / create proxy configuration.

## Changes for tinman 
### 1.environment.ts
```angularjs

}
export const environment = {
        production: true,
    apiEndPoint: 'http://localhost:8080/web/api/coreapi',
    fileUploadURL: 'http://localhost:8080/web/dta/dms/',
};
```
To

```angularjs

    export const environment = {
        production: true,
        apiEndPoint: 'https://app.tinman-asia.com'
    };
```

```
### 2.environment.prod.ts
```js
    export const environment = {
        production: true,
        apiEndPoint: 'http://localhost:8080/web/api/coreapi',
        fileUploadURL: 'http://localhost:8080/web/dta/dms/',
    };

```
To
```js
    export const environment = {
    production: true,
    apiEndPoint: 'https://app.tinman-asia.com'
    };
```
#### No apiEndPoint and fileUploadURL is needed for Tinman as nothing gets uploaded.


### 3. proxy.conf.json

```json
{
  "/koneqtv2-core/web": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug"
  }
}
```
To
```json

    {
        "/api": {
            "target": "http://app.tinman-asia.com",
            "secure": false,
            "logLevel": "debug"
        }
    }
```



--------------
#Older stuff not used anymore but for interest sake
/*
URL that contains "/api/coreapi" will be swaped
Use this config if you want to test angular app with local server.
{
  "/koneqtv2-tinman/web": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug"
  }
}
*/
```


Also, change api url from environment.
Environment.ts file will be
### Change / Create api url from environment.

**src/environments/environment.ts**
```
export const environment = {
  production: false,
  apiEndPoint: 'http://localhost:4200',
  liveURL: 'http://angular.koneqt.com',
  documentURL: 'http://crm.koneqt.com/dta/dms/'
  // Change this url if you want to test with local server
  // apiEndPoint: 'http://localhost:4200/koneqtv2-core/web'
};
```

**src/environments/environment.prod.ts**
```
export const environment = {
  production: true,
  apiEndPoint: 'https://crm.koneqt.com',
  liveURL: 'http://angular.koneqt.com',
  documentURL: 'http://crm.koneqt.com/dta/dms/'
};
```

## Deployment

### 1. Build production

To build Angular production app, run `ng build`.
It will generate app in `dist/koneqt` folder.

### 2. Add rewrite rule for Angular routing

Detailed [Guide](https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml)

Apache: add a rewrite rule to the `.htaccess` file.

```
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html
```

Examples [here](https://angular.io/guide/deployment#fallback-configuration-examples)

### 3. Copy app to sever
