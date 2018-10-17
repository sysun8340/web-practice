import { createStore } from 'redux';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const previousState = loadState();
  const store = createStore(todoApp, previousState);
  // state改变时，每隔1秒保存一次，保存state到localStorage
  store.subscribe(throttle(() => saveState({todos: store.getState().todos}), 1000))
  return store;
}

export default configureStore;