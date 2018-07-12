import http from 'node-mocks-http'
import dispatcher from '~/dispatcher'

describe('dispatcher tests', () => {
  let req
  let res

  beforeEach(() => {
    req = http.createRequest()
    req.userJwt = { name: 'John Doe' }

    res = http.createResponse()
  })

  it('should return 403 Unauthorized when action is not authorized', () => {
    const method = {
      authorize: () => false,
      action: sinon.spy(),
    }

    dispatcher(method)(req, res)

    expect(res.statusCode).to.equal(403)
    expect(json(res).error).to.equal('Unauthorized')
    expect(method.action).not.to.have.been.called
  })

  it('should return 400 Bad Request when request validation fails', () => {
    const method = {
      validate: () => false,
      action: sinon.spy(),
    }

    dispatcher(method)(req, res)

    expect(res.statusCode).to.equal(400)
    expect(json(res).error).to.equal('Bad Request')
    expect(method.action).not.to.have.been.called
  })

  it('should return 401 Unauthorized when request has JWT user', () => {
    const method = {
      action: sinon.spy(),
    }

    delete req.userJwt

    dispatcher(method)(req, res)

    expect(res.statusCode).to.equal(401)
    expect(json(res).error).to.equal('Request not authenticated')
    expect(method.action).not.to.have.been.called
  })

  it('should call action when request validation and authorization succeed', () => {
    const method = {
      authorize: () => true,
      validate: () => true,
      action: sinon.spy(),
    }

    dispatcher(method)(req, res)

    expect(res.statusCode).to.equal(200)
    expect(method.action).to.have.been.calledWith(req, res)
  })

  it('should call action when there is no validation rules', () => {
    const method = {
      authorize: () => true,
      action: sinon.spy(),
    }

    dispatcher(method)(req, res)

    expect(method.action).to.have.been.calledWith(req, res)
  })

  it('should call action when there is no authorization rules', () => {
    const method = {
      validate: () => true,
      action: sinon.spy(),
    }

    dispatcher(method)(req, res)

    expect(method.action).to.have.been.calledWith(req, res)
  })
})
