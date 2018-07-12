import _ from 'lodash'
import requireDir from 'require-dir'

describe('every controller method should have an action', () => {
  const controllers = requireDir('../src/controllers')

  _.each(controllers, (x, controllerName) => {
    const controller = x.default

    _.each(controller, (method, methodName) => {
      it(`${controllerName}.${methodName} should have an action`, () => {
        if (!method.action) {
          expect.fail(null, null,
            `Method '${methodName}' of controller '${controllerName}'
            doesn't have an 'action(req, res)' function`)
        }
      })
    })
  })
})
