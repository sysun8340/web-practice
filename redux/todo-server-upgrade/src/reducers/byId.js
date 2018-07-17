const byId = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      const nextState = {...state}
      action.response.forEach(todo => nextState[todo.id] = todo)
      return nextState
    case 'ADD_TODO_SUCCESS':
    case 'TOGGLE_TODO_SUCCESS':
      return {...state, [action.response.id]: action.response}
    default:
      return state
  }
}

export default byId

export const getTodo = (state, id) => state[id]