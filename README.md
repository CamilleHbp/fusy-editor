# Fusy-editor

The aim is to produce a text editor [PWA](https://developers.google.com/web/progressive-web-apps/) able to synchronise notes through a propriatery API, EverNote, or OneNote.

# TOC

- [Live application](#live-application)
- [Run the app](#run-the-app)
- [Testing](#testing)
- [Deployment](#deployment)
- [How to contribute](#how-to-contribute)
- [Tech stack](#tech-stack)

## Live application

You can find the most recent prototype at this address: [fusy-editor.netlify.com](https://fusy-editor.netlify.com/)

## Run the app

`npm start` runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Testing

`npm test` launches the test runner in the interactive watch mode.
The deployment process runs all tests automatically on each push/pull request for the **dev**, **staging** and **master** branches.

## Deployment

This project is deployed automatically through [netlify](https://www.netlify.com/).
The website is only published when a push/pull request deployment succeeds on master branch.

## How to contribute

### Pull requests

This project follows the [Fork/Pull Request workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962).

- Fork the project
- Checkout master (to start working from the master branch)
- Create and checkout a feature branch
- Work on your feature and get it working and passing the tests
- Clean the git history by rebasing
- Submit your pull request

### Linting and formatting

This project follows the [AirBnB React guidestyle](https://github.com/airbnb/javascript/tree/master/react) throught the use of [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

[lint-staged](https://www.npmjs.com/package/lint-staged) runs eslint and prettier automatically when trying to commit to the repository. If you are able to commit your changes, you should be fine!

## Tech stack

### CRA (Create React App)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Draft.Js

This project uses [Draft.Js](https://draftjs.org/) to build a simple, yet powerful, rich text editor.

### Service Worker

This project uses a Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) to allow an offline experience.

### IndexedDB

This project uses the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to manage its client-side storage.

### Netlify

This project is deployed and tested automatically through [netlify](https://www.netlify.com/).
