import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import createStoreWithMiddleware from '../store'

const store = createStoreWithMiddleware()

render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)
