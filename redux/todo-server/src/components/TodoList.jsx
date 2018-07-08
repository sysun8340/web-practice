import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <Todo 
                {...todo}
                onItemClick={() => toggleTodo(todo.id)} 
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList