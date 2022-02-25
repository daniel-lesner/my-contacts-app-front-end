# WARNING! BEFORE USING APP

Make sure you have the metamask browser extension installed and set on Binance Smart Chain - Testnet

`Network Name:` Smart Chain - Testnet\
`New RPC URL:` https://data-seed-prebsc-1-s1.binance.org:8545/ \
`ChainID:` 97\
`Symbol:` BNB\
`Block Explorer URL:` https://testnet.bscscan.com\


# App is deployed using gh-pages

https://daniel-lesner.github.io/my-contacts-app/

You can use a test wallet that has BNB testnet using the following private key:
`be22eff7e5724a5c05c4fd2880214af26df67314e729517df9e3af10bccf5788`


# Details about App

I have created a small contact manager application on which users must connect with their wallet address using Metamask in order to be able to store, access, edit and delete their contacts by interacting with an own-made smart contract (https://github.com/daniel-lesner/my-contacts-app-smart-contracts).

The app was done mainly using own-made components, with the exception of a third-party module for creating multiple tags in one input. I did not use any customizable component library (such as MUI) in order to showcase my skills of HTML and CSS skills, however, I have made use of several MUI icons.

I have used a CI/CD workflow using Github Actions which automatically builds and tests push and pull requests on my github repository, as well as automatically deploying the changes.

Obviously, the project is lacking many features and can be further improved; this subject is going to be discussed in the next section


# Room for improvements

## Frontend To Do List
- form validation (checks for empty fields, incorrect input format)
- possibility to add photo and not link as it is now
- save user connection and state of contacts in local storage

## Blockchain To Do List
- the smart contract can be further improved for example by creating a contractstorage factory that deploys a contract storage contract for each user address

## Web3 integration To Do List
- automatically detect if metamask is installed, check if user is connected on correct network, and in case it is not, switch to the correct network 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm i`

To install dependent modules

### `yarn start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
