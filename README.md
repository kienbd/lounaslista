An app to curate lunch menus from different restaurants. 

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Visit [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md) for full CRNA docs.


## Table of Contents

* [Available Scripts](#available-scripts)
  * [CRNA scripts](#crna-scripts)
  * [npm run expo](#npm-run-expo)
  * [npm run debug](#npm-run-debug)
* [Debug on real device with React Native Debugger](#debug-on-real-device-with-react-native-debugger)
* [Add more restaurants](#add-more-restaurants)


## Available Scripts

### Create React Native Scripts

Runs your app in development mode.

#### `npm start`

Runs your app in development mode with an interactive prompt

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal. 

This will launch Expo in Tunnel mode, which is working with [React Native Debugger](https://github.com/jhen0409/react-native-debugger) if you run the app on a real device.


#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. 


### `npm run expo`

Runs your app in development mode with Expo in LAN mode.

### `npm run debug`

Opens React Native Debugger app connecting to host `localhost`, port `19001`

## Debug on real device with React Native Debugger

Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

Install [Expo](https://docs.expo.io/versions/latest/introduction/installation.html)

Start the app in Expo LAN mode:

`npm run expo`

Start RND app:

`npm run debug`

Open it with Expo app on your phone. Shake the phone, select `Remote JS Debugging`


## Add more restaurants

To add a new restaurant, create driver for it in `/app/drivers`. Refer to this for [example](https://github.com/kienbd/lounaslista/blob/master/app/drivers/dipoli.js).








