const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

//schéma des données user
const userSchema = mongoose.Schema({
    pseudo: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)


 

