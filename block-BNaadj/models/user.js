const mongoose  = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  age: Number,
  address: String,
  bio: String,
  hobbies: [String]
},{timestamps: true})

let User = mongoose.model('User', userSchema)
module.exports = User