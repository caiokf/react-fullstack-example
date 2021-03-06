import Auth0 from 'auth0-js'
import decode from 'jwt-decode'
import { EventEmitter } from 'events'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import store from '../modules/store'
import { config } from '@caiokf/common'

const NEXT_PATH_KEY = 'next_path'
const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const PROFILE_KEY = 'profile'

const CALLBACK_ROUTE = '/auth0-callback'
const ROOT_ROUTE = '/'

const auth0 = new Auth0.WebAuth({
  domain: config.get('auth0.domain'),
  clientID: config.get('auth0.client_id'),
  audience: config.get('auth0.audience'),
  redirectUri: `${window.location.origin}${CALLBACK_ROUTE}`,
  responseType: 'token id_token',
  scope: 'openid profile email',
})

class Auth {
  constructor() {
    this.events = new EventEmitter()
    this.history = syncHistoryWithStore(createBrowserHistory(), store)

    this.lock = auth0
  }

  computeAuthed(done) {
    return auth0.parseHash({}, (err, authResult) => {
      if (err) {
        return console.log(err)
      }

      this.setIdToken(authResult.idToken)
      this.setAccessToken(authResult.accessToken)

      auth0.client.userInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return this.setProfile({ error })
        }
        return this.setProfile(profile)
      })

      return done()
    })
  }

  login(options) {
    this.lock.authorize(options)

    return {
      hide() {
        this.lock.hide()
      },
    }
  }

  logout() {
    localStorage.removeItem(ID_TOKEN_KEY)
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(PROFILE_KEY)
    localStorage.removeItem(NEXT_PATH_KEY)
  }

  getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY)
  }

  setIdToken(idToken) {
    localStorage.setItem(ID_TOKEN_KEY, idToken)
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  }

  setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  }

  getNextPath() {
    return localStorage.getItem(NEXT_PATH_KEY) || ROOT_ROUTE
  }

  setNextPath(nextPath) {
    localStorage.setItem(NEXT_PATH_KEY, nextPath)
  }

  isLoggedIn() {
    const idToken = this.getIdToken()
    return idToken && !this.isTokenExpired(idToken)
  }

  getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken)
    if (!token.exp) {
      return null
    }

    const date = new Date(0)
    date.setUTCSeconds(token.exp)

    return date
  }

  isTokenExpired(token) {
    const expirationDate = this.getTokenExpirationDate(token)
    return expirationDate < new Date()
  }

  setProfile(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
  }

  getProfile() {
    return JSON.parse(localStorage.getItem(PROFILE_KEY))
  }
}

export default new Auth()
