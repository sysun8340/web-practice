import { v4 } from 'uuid'
import * as api from './api'

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

const receiveTodos = (response) => ({
  type: 'RECEIVE_TODOS',
  response
})

export const fetchTodos = (filter) => 
  api.fetchTodos(filter).then(response => 
    receiveTodos(response)
  )
