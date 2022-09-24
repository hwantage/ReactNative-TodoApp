/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Import initialization
import {initialization} from 'react-native-international';

initialization(
  [require('./localization/en'), require('./localization/ko')],
  'en',
);

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
