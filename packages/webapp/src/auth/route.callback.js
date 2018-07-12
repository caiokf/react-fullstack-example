import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '~/auth'

export default class AuthCallbackRoute extends Route {
  componentWillMount() {
    this.setState({ called: false })
    Auth.computeAuthed(() => this.setState({ called: true }))
  }

  render() {
    if (this.state.called) {
      return (
        <Redirect to={{
          pathname: Auth.getNextPath(),
          state: { from: this.props.location },
        }}/>
      )
    }

    return null
  }
}
