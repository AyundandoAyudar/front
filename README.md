# Ayudando Ayudar Front

Project to schedule the medicaments for people infected or damaged by COVID-19

## Install

Run `npm ci` to install the actual packages, also uo can run `npm install` to update some packages

## Config firebase

You will copy the secure file of configuration firebase in src/environments/environment.ts, to allow run the services of firebase when you are running the project locally.

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    databaseURL: 'databaseURL',
    projectId: 'projectId',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId',
    measurementId: 'measurementId',
  },
};
```

if you want avoid track this file you can run to disable track
`git update-index --assume-unchanged ./src/environments/environment.ts`
or to enable again
`git update-index --no-assume-unchanged ./src/environments/environment.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component pages/screen-name/component-name` to generate a new component ex: `ng generate component pages/login/loginScreen`.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` ex: `ng generate service shared/services/auth`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
