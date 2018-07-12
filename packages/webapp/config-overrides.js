const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(originalConfig) {
  let config = originalConfig

  config = injectBabelPlugin('emotion', config)

  config = injectBabelPlugin(['babel-plugin-root-import', {
    paths: [{
      rootPathPrefix: '~',
      rootPathSuffix: 'src/',
    }],
  }], config)

  return config
}
