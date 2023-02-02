import {PureComponent} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

export default class DemoApp extends PureComponent {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => DemoApp);
