import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '~/auth'

export default class LandingRoute extends Route {
  render() {
    if (Auth.isLoggedIn()) {
      return <Redirect to={{
        pathname: this.props.loggedInPath,
        state: { from: this.props.location },
      }}/>
    }

    return <Route {...this.props} component={this.props.component} />
  }
}
