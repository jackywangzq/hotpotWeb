import App from '../App'
import Login from '../login/login'
import Error from '../login/error'
import Success from '../login/success'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter, HashRouter } from 'react-router-dom'
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
          <Route path="/login" component={Login
              }/>
          <Route path="/main" component={App} />
      </BrowserRouter>)
  }
}
export default Router