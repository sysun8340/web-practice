import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const AddTodo = ({ dispatch }) => {
  const textInput = React.createRef()
  return (
    <div>
      <input 
        ref={textInput}
      />{'  '}
      <button
        onClick={() => {
          const text = textInput.current.value.trim()
          if(text.length > 0) {
            dispatch(actions.addTodo(text))
          }
          textInput.current.value = ''
          textInput.current.focus()
        }}
      >
        add todo
      </button>
    </div>
  )
}

export default connect()(AddTodo)