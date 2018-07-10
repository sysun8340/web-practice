import React from 'react'

const Todo = ({ text, completed, onItemClick}) => {
  return (
    <div
    style={{textDecoration: completed ? 'line-through' : 'none'}}  
    onClick={onItemClick}
    >
      {text}
    </div>
  )
}

export default Todo