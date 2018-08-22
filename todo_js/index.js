const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
let todos = []
let index = 0

const addTodo = (e) => {
  e.preventDefault()
  const todo = {
    id: index++,
    text: todoInput.value.trim(),
    isCompleted: false
  }
  if(todo.text.length > 0) {
    todos.push(todo)
  }
  else {
    retrun
  }
  showTodoList()
  todoInput.value = ''
  todoInput.focus()
}

const onTodoClick = (id) => {
  todos = todos.map(todo => id === todo.id ? 
    {...todo, isCompleted: !todo.isCompleted} : {...todo}
  )
  showTodoList()
}

const showTodoList = (filter) => {
  let newTodos = null
  switch (filter) {
    case 'all': 
      newTodos = todos
    case 'uncompleted': 
      newTodos = todos.filter(todo => !todo.isCompleted)
    case 'completed': 
      newTodos = todos.filter(todo => todo.isCompleted)
    default: 
      newTodos = todos
  }
  todoList.innerHTML = newTodos.map(todo => 
    `<li onclick='onTodoClick(${todo.id})'  
      style='text-decoration: ${todo.isCompleted ? 'line-through' : 'none'}'
    >
      ${todo.text}
    </li>`
  ).join('')
}

['all', 'uncompleted', 'completed'].forEach(filter => {
  document.getElementById(filter).addEventListener('click', (e) => {
    e.preventDefault()
    showTodoList(filter)
  })
})
document.getElementById('addTodo').addEventListener('click', addTodo)