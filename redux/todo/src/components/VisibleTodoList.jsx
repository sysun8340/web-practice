import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

const mapStateToProps = state => ({
  todos: getVisibileTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

