import { createStore } from 'redux';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const previousState = loadState();
  const store = createStore(todoApp, previousState);
  store.subscribe(throttle(() => saveState({todos: store.getState().todos}), 1000))
  return store;
}

export default configureStore;