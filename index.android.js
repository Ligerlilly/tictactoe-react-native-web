import React, { Component, AppRegistry } from 'react-native';
import Root           from './app/native/containers/Root';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './app/reducers'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import rootSaga from './app/sagas'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

class ReactNativeelloWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeelloWorld);
