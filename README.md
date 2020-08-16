This project is a coding challenge for an application at Bottle Rocket. The API endpoint provided for the challenge was having issues with CORS, so I made my own endpoint.

## Demo

You can also view the [demo application](https://bottle-rocket-challenge.netlify.app/)

## Setup

Add a `.env` file to the root directoy, mirroring `example.env`.

## Notes

The package `google-map-react` is throwing some error-level warnings in the browser for the development build. Everything is rendering correctly though. With more time, I would rework the map setup do either be built without a package, or explore alternative packages.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Run the linter to ensure consistency of code style.

### `yarn test`

Tests were not written for this application, as it is not going to be used in production.
