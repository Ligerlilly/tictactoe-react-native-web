import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './App';
import Navigation from '../navigation'

// work around for getting network requests to show up in chrome network tab
const _XHR = GLOBAL.originalXMLHttpRequest ?  // eslint-disable-line
    GLOBAL.originalXMLHttpRequest :           // eslint-disable-line
    GLOBAL.XMLHttpRequest                     // eslint-disable-line

XMLHttpRequest = _XHR

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
