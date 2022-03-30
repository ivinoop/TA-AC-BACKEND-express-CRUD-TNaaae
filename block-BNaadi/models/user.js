const mongoose  = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, required: true},
  email: String,
  age: Number,
  bio: String
},{timestamps: true})

let User = mongoose.model('User', userSchema)
module.exports = User