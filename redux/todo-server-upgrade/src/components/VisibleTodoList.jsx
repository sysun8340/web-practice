import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoList from './TodoList'
import { withRouter } from 'react-router'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

class VisibleTodoList extends React.Component {
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if(prevProps.filter !== this.props.filter) {
      this.fetchData()
      
    }
  }

  fetchData = () => {
    const { filter, fetchTodos } = this.props
     // 返回一个action, 因为被connect函数用dispatch封装过了
    fetchTodos(filter).then(() => console.log('done!'))
  }

  render () {
    const { isFetching, todos, errorMessage, ...rest} = this.props
    if (isFetching && todos.length === 0) {
      return <p>loading...</p>
    }
    if (errorMessage) {
      return <FetchError 
        message={errorMessage}
        onRetry={this.fetchData}
      />
    }
    return (
      <TodoList todos={todos} {...rest} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps, actions
)(VisibleTodoList))