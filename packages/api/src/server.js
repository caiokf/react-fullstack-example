import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'

import Database from '~/database'
import Routing from '~/routing'
import config from '@/config'

const app = express()
const port = config.get('api.port')

Routing.configure(app)
Database.configure()

app
  .use(logger('dev'))
  .use(cookieParser())
  .use(bodyParser.json({ limit: '50mb' }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')
  .listen(port, () => {
    console.log(`API listening on port ${port}!`)
  })

export default app
