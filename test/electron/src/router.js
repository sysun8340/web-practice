import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import IndexPage from './page'

class MainRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact={'/'} component={IndexPage} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default MainRouter