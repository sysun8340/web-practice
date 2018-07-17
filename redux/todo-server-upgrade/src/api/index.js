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
      completed: true
    },
    {
      id: v4(),
      text: 'read bible',
      completed: false
    }
  ]
}

const delay = ms => {
  return new Promise(resolve => 
    setTimeout(resolve, ms)
  )
}

export const addTodo = text => delay(500).then(() => {
  const todo = {
    id: v4(),
    text: text,
    completed: false
  }
  fakeDatabase.todos.push(todo)
  return todo
})

export const toggleTodo = id => delay(500).then(() => {
  const todo = fakeDatabase.todos.find(todo => todo.id === id)
  todo.completed = !todo.completed
  return todo
}) 

export const fetchTodos = (filter) => delay(500).then(() => {
  if (Math.random() > 1) throw new Error()
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