const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
const allFilters = ['all', 'uncompleted', 'completed']
let todos = []
let index = 0
let currentFilter = 'all'

const addTodo = e => {
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
  renderTodoList(getFilteredTodos(currentFilter))
  todoInput.value = ''
  todoInput.focus()
}

const onTodoClick = id => {
  todos = todos.map(todo => id === todo.id ? 
    {...todo, isCompleted: !todo.isCompleted} : {...todo}
  )
  renderTodoList(getFilteredTodos(currentFilter))
}

const getFilteredTodos = filter => {
  switch (filter) {
    case 'all': 
      return todos
    case 'uncompleted': 
      return todos.filter(todo => !todo.isCompleted)
    case 'completed': 
      return todos.filter(todo => todo.isCompleted)
    default: 
      return todos
  }
}

const renderTodoList = filteredTodos => {
  todoList.innerHTML = filteredTodos.map(todo => 
    `<li onclick='onTodoClick(${todo.id})'  
      style='text-decoration: ${todo.isCompleted ? 'line-through' : 'none'}'
    >
      ${todo.text}
    </li>`
  ).join('')
}

const setFilter = (filter) => {
  currentFilter = filter
}

const renderFilter = () => {
  allFilters.forEach(filter => 
    document.getElementById(filter).style.textDecoration = 
      filter === currentFilter ? 'none' : 'underline'
  )
}

// 为所有filter绑定监听事件
allFilters.forEach(filter => {
  document.getElementById(filter).addEventListener('click', (e) => {
    e.preventDefault()
    setFilter(filter)
    renderFilter()
    renderTodoList(getFilteredTodos(filter))
  })
})

// 为“添加”按钮绑定监听事件
document.getElementById('addTodo').addEventListener('click', addTodo)