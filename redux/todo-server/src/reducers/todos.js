import todo from './todo'
import { combineReducers } from 'redux'

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

const byId = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state
  }
}

export default combineReducers({allIds, byId})

export const getVisibleTodos = (state, filter) => {
  const allTodos = state.allIds.map(id => state.byId[id])
  switch (filter) {
    case 'all':
      return allTodos
    case 'active':
      return allTodos.filter(todo => !todo.completed)
    case 'completed':
      return allTodos.filter(todo => todo.completed)
    default:
      return allTodos
  }
}