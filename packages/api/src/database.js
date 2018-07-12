import mongoose from 'mongoose'
import config from '@/config'

const mongoDbUrl = config.get('database.url')

export default class Database {
  static configure() {
    mongoose.Promise = global.Promise
    mongoose.connect(mongoDbUrl)

    mongoose.connection.on('error', () => {
      console.error('-- Mongodb connection error')
    })

    mongoose.connection.once('open', () => {
      console.log('-- Connected to mongodb')
    })
  }
}
