# react-redux-CRA-CSSModules-starter

<p>Simple, well-structured, modern boilerplate for React&Redux apps </p>

## Main features

1. [React 15.4.2](https://facebook.github.io/react/) - JS library for building UI
1. [Create React App](https://github.com/facebookincubator/create-react-app) - awesome React starter with only one dependency (among others, it uses  Webpack, Babel, ESLint)
2. [custom-react-scripts](https://github.com/kitze/custom-react-scripts) - fork of CRA (↑) that enables you to turn on Sass, Less, Stylus or CSS Modules support without running ```npm run eject```
3. [Autoprefixed CSS](https://github.com/postcss/autoprefixer) - it takes care of adding vendor prefixes for you
4. [react-router 3.0.2](https://github.com/ReactTraining/react-router)
5. [reselect 2.5.4](https://github.com/reactjs/reselect) - simple “selector” library for Redux
6. [Redux 3.6.0](http://redux.js.org/) - state container for JavaScript apps
7. [Jest](https://facebook.github.io/jest/) - test runner
8. [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - to enable redux debugging (please install also [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to use it)
<br/><br/>

## Getting started

### Installation

1. ```fork``` this repository
2. ```git clone``` your fork
3. Run ```npm  i``` in your project root

### Usage
1. ```npm start``` to start development server
2. Open your browser on ```http://localhost:3000```
3. ```npm run build``` to bundle files into ```./build``` directory
4. ```npm run test``` to run tests
<br/><br/>

In the root folder you'll find ```.env``` file which is responsible for custom-react-scripts configuration. Edit it to turn on or off Sass/Less/Stylus/CSS Modules support. Read more here: https://github.com/kitze/custom-react-scripts

## Project structure
```
.
├── src                                     # source files
│   ├── containers                          # smart components / containers
│   ├── components                          # dumb / presentational components
│   ├── reducers                            # reducers
│   ├── actions                             # action creators
│   ├── global_styles                       # global stylesheets used by app
│   ├── routes.js                           # router and routes
│   └── index.js                            # file for bootstrping the application
├── build                                   # compiled files
├── .env                                    # custom-react-scripts configuration
.
.
.
```

## License
MIT

## Author

* Dominik Broj
