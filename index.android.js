import React, { Component, AppRegistry } from 'react-native';
import Root from './app/native/containers/Root';
import createStoreWithMiddleware from './app/store'
const store = createStoreWithMiddleware()

class ReactNativeWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeWorld);
