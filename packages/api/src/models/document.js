import mongoose, { Schema } from 'mongoose'

export default mongoose.model('Document',
  new Schema({
    owner: { type: String, required: true },
    title: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  }))
