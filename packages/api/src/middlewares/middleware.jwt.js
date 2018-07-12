import Jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import config from '@/config'

export default () => {
  const secret = jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: config.get('auth0.jwks_uri'),
  })

  return Jwt({
    secret: secret,
    issuer: config.get('auth0.jwt_issuer'),
    algorithms: ['RS256'],
    credentialsRequired: false,
    requestProperty: 'userJwt',
    getToken: (request) => {
      if (request.headers.authorization) {
        const [bearer, token] = request.headers.authorization.split(' ')
        return (bearer === 'Bearer' && token) ? token : null
      }

      return null
    },
  })
}
