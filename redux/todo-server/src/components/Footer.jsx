import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => {
  return (
    <div>
      Show:{' '}
      <FilterLink filter='all'>all</FilterLink>{' '}
      <FilterLink filter='active'>active</FilterLink>{' '}
      <FilterLink filter='completed'>completed</FilterLink>
    </div>
  )
}

export default Footer