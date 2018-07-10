import { combineReducers } from 'redux'
import createList, * as fromList from './createList'
import byId, * as fromById from './byId'
import listByFilter from './createList'

const todos = combineReducers({listByFilter, byId})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => {
  return fromList.getIsFetching(state.listByFilter[filter])
}

export const getErrorMessage = (state, filter) => {
  return fromList.getErrorMessage(state.listByFilter[filter])
}