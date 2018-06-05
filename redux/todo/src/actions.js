import uuid from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid(),
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})