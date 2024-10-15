# Casinobuddy Web UI

Made as a simple [React](https://react.dev) SPA without SSR. Tests are in [Jest](https://jestjs.io). The output of this repository is the web client for Casinobuddy as static assets.


## Setup

1. Install **one** of the following:
  - [nvm](https://github.com/nvm-sh/nvm/) using the version found in `.nvmrc` via running `nvm use`
  - [fnm](https://github.com/Schniz/fnm) (see above)
  - Node.js with its version matching the contents of `.nvmrc` _(not recommended)_
1. Install [yarn](https://yarnpkg.com/) with `npm i -g yarn`
1. Run `yarn install`


## Usage

Any usage of this package can be done via npm scripts found in `package.json`:

| Command | Description |
| --- | --- |
| `yarn start` | Starts a development server that automatically updates as source files are changed. View in browser at [http://localhost:8080/](http://localhost:8080/). |
| `yarn build` | Builds production ready assets into `./dist/`. |
| `yarn test` | Runs all test scripts: `tsc`, `lint`, `jest`. |
| `yarn tsc` | Typechecks all TypeScript assets with no output. |
| `yarn lint` | Checks code against [eslint](https://eslint.org). |
| `yarn jest` | Runs all automated tests (eg: unit tests). |
| `yarn jest:watch` | Runs all automated tests and reruns any automatically when files are modified. |
