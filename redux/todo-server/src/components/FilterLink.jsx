import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink 
      to={filter === 'all' ? '/' : `/${filter}`}
      activeStyle={{color: 'black', textDecoration: 'none'}}
      exact
    >
      {children}
    </NavLink>
  )
}

export default FilterLink