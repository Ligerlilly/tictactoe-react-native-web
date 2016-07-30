import rootSaga from './sagas'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
//import { INITIAL_STATE } from '../core'

function createStoreWithMiddleware() {
  const logger = createLogger()
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default createStoreWithMiddleware
