import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

const configureStore = () => {
  const middlewares = [promise, logger]
  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore