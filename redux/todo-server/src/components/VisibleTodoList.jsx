import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoList from './TodoList'
import { withRouter } from 'react-router'
import { getVisibleTodos } from '../reducers'

class VisibleTodoList extends React.Component {
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if(prevProps.filter !== this.props.filter) {
      this.fetchData()
    }
  }

  fetchData () {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render () {
    return (
      <TodoList {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'
  console.log(ownProps.match.params)
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps, actions
)(VisibleTodoList))