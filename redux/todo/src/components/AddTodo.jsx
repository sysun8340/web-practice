import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => input = node} />
      <button
        onClick={() => {
          let text = input.value.trim();
          if(text.length !== 0) {
            dispatch(addTodo(text))
          }
          input.value = '';
          input.focus();
        }}
      >
        add todo
      </button>
    </div>
  )
}

export default connect()(AddTodo);