const convict = require('convict')

const config = convict({
  env: {
    format: ['local', 'testing', 'development', 'staging', 'production'],
    default: 'local',
    env: 'NODE_ENV',
  },

  api: {
    host: { format: String, default: '', env: 'API_HOST' },
    port: { format: 'port', default: 3001, env: 'API_PORT' },
  },

  webapp: {
    host: { format: String, default: '', env: 'API_HOST' },
    port: { format: 'port', default: 3000, env: 'API_PORT' },
  },

  auth0: {
    domain: { format: String, default: '', env: 'AUTH0_DOMAIN' },
    audience: { format: String, default: '', env: 'AUTH0_AUDIENCE' },
    jwks_uri: { format: String, default: '', env: 'AUTH0_JWKS_URI' },
    client_id: { format: String, default: '', env: 'AUTH0_CLIENT_ID' },
    jwt_issuer: { format: String, default: '', env: 'AUTH0_JWT_ISSUER' },
  },

  bugsnag: {
    api_key: {
      doc: 'Bugsnag API key.',
      format: String,
      default: '',
      env: 'BUGSNAG_API_KEY',
    },

    log_level: {
      doc: 'Bugsnag Log Level.',
      format: ['error', 'warn', 'info', 'null'],
      default: 'warn',
      env: 'BUGSNAG_LOG_LEVEL',
    },
  },

  database: {
    url: { format: String, default: '', env: 'MONGODB_URI' },
  },
})

const environment = config.get('env')
config.load(require(`./${environment}.json`))
config.validate({ allowed: 'strict' })

module.exports = config
