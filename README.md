# React TS Okta MUI Starterkit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## About The App

This app shows how to create React based app using Okta as authentication provider. This app showcase the serverless deployment using github actions on AWS S3 bucket and Cloudfront Distributions.

This project contains source code and supporting files for single page application. It includes following folders:

- **assets**: Images and Logos for the application.
- **auth**: Roles Access and Permissions.
- **components**: React components code for the application.
- **config**: Okta configuration for the application.
- **pages**: Pages in the application
- **services**: To make API calls.

## Technologies

We have used `html`, `scss`, `js`, `typescript` to build the Single Page App

### Third party Libraries

We have used the following libraries.

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Okta Auth JS](https://www.npmjs.com/package/@okta/okta-auth-js)
- [Okta React](https://www.npmjs.com/package/@okta/okta-react)

## Setup

1. Download and install [Node.js](https://nodejs.org/en/download/).
2. Download and install [Git](https://git-scm.com/downloads).
3. Clone [this](https://github.com/rgaikar/react-ts-okta-mui-starterkit.git) repositry.

In the cloned project directory, you can run:

### `yarn install`

This will install all the project dependecies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
