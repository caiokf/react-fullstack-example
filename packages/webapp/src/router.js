import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '~/modules/store'

import PrivateRoute from '~/auth/route.private'
import AuthCallbackRoute from '~/auth/route.callback'
import LoginRoute from '~/auth/route.login'
import LogoutRoute from '~/auth/route.logout'
import LandingPageRoute from '~/auth/route.landing'

import LandingPage from '~/views/landing-page/landing.page'
import DashboardPage from '~/views/dashboard/dashboard.page'

const history = syncHistoryWithStore(createBrowserHistory(), store)

export default (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <LandingPageRoute
          exact path="/"
          component={LandingPage}
          loggedInPath="/dashboard"/>

        <LoginRoute exact path="/login" />
        <LogoutRoute path='/logout' redirect='/' />
        <AuthCallbackRoute path='/auth0-callback' />

        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
