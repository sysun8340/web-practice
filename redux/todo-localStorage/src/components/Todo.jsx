import React from 'react';

export default ({ text, completed, onTodoClick }) => {
  return (
    <li
      onClick={onTodoClick}
      style={{textDecoration: 
        completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}