import express from 'express'
import cors from 'cors'
import use from '~/dispatcher'
import Documents from '~/controllers/documents.controller'
import jwt from '~/middlewares/middleware.jwt'
import notFound from '~/middlewares/middleware.not.found'
import errorHandling from '~/middlewares/middleware.error.handling'

export default class Api {
  static configure(app) {
    const router = express.Router()

    app.use('/', cors(), jwt(), router, notFound(), errorHandling())

    router.get('/', (req, res) => {
      res.render('index', { title: 'API Home' })
    })

    router.use('/documents', (x => {
      x.get('/', use(Documents.list))
      x.post('/create', use(Documents.create))
      x.get('/:id', use(Documents.item))
      x.put('/:id', use(Documents.update))
      x.delete('/:id', use(Documents.delete))
      return x
    })(express.Router()))
  }
}
