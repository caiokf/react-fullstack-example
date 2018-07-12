import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const history = createHistory()
const routingMiddleware = routerMiddleware(history)

const middleware = applyMiddleware(
  thunk,
  sagaMiddleware,
  routingMiddleware,
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = composeEnhancers(middleware)(createStore)(reducers)

sagaMiddleware.run(sagas)

export default store
