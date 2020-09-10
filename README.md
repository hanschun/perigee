# Perigee  
This project started as a simple clone of the [https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/react-apollo] (https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/react-apollo) tutorial with the intention of building a connection to Hasura for working with GraphQL queries.  
After several attempts to get Hasura tutorials to run, and many deep dives into the Hasura, Auth0 and ```@apollo/apollo-client```.  
The Hasura tutorial was written simply enough that replacing the implementation of ```@auth0/auth0-spa-js``` with ```@auth0/auth0-react``` was pretty painless. The original implementation from the tutorial retrieved an Auth0 id token instead of an auth token, which was possible with ```@auth0/auth0-react```.  
The ```@auth0/auth0-react``` implementation is also much simpler for a developer to follow and implement.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create React App Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
