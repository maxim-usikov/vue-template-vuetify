# vue-template-vuetify

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Structure

TODO:
  * [ ] add descriptions about structure

```
.
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── components
│   │   └── .gitkeep
│   ├── json
│   │   └── .gitkeep
│   ├── main.js
│   ├── plugins
│   │   ├── vue
│   │   │   └── index.js
│   │   ├── vue-router
│   │   │   ├── appRoutes.js
│   │   │   ├── index.js
│   │   │   └── modules
│   │   │       ├── 00_app.js
│   │   │       ├── 99_fallback.js
│   │   │       ├── README.md
│   │   │       └── loader.js
│   │   ├── vuetify
│   │   │   └── index.js
│   │   └── vuex
│   │       ├── index.js
│   │       └── modules
│   │           └── .gitkeep
│   ├── services
│   │   └── api
│   │       ├── BaseService.js
│   │       ├── feathers-client.js
│   │       ├── fetch.rest-provider.js
│   │       └── socket.io-provider.js
│   ├── utils
│   │   ├── logger.js
│   │   ├── logger.test.js
│   │   └── sleep.js
│   └── views
│       ├── App
│       │   └── AppHome.vue
│       ├── AppLayout.vue
│       ├── NotFound.vue
│       └── UnderConstruction.vue
├── .browserslistrc
├── .czrc
├── .editorconfig
├── .env
├── .eslintrc.js
├── .gitignore
├── .gitlab-ci.yml
├── .prettierrc
├── LICENSE
├── README.md
├── babel.config.js
├── jest.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── vue.config.js
└── yarn.lock
```
