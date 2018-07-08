import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/:filter?' component={App} />
      </Router>
    </Provider>
  )
}

export default Root