import { compose, applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'

import logger from 'redux-logger'

import reducers from './reducers'

const middlewares = applyMiddleware(thunk, logger)

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers, composeWithDevTools(middlewares))



