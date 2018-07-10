import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

 // const thunk = store => next => action => 
  //   typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)
const configureStore = () => {
  const middlewares = [thunk, logger]
  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore