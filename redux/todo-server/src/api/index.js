import { v4 } from 'uuid'

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'clean house',
      completed: false
    },
    {
      id: v4(),
      text: 'do homework',
      completed: false
    },
    {
      id: v4(),
      text: 'read bible'
    }
  ]
}

const delay = ms => {
  return new Promise(resolve => 
    setTimeout(resolve, ms)
  )
}

export const fetchTodos = (filter) => delay(500).then(() => {
  switch (filter) {
    case 'all':
      return fakeDatabase.todos
    case 'active':
      return fakeDatabase.todos.filter(todo => !todo.completed)
    case 'completed':
      return fakeDatabase.todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unkown filter: ${filter}`)
  }
})