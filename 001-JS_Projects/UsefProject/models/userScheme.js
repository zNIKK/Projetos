const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true, minlenght: 3, maxlenght: 50},
    name: {type: String, required: true, minlenght: 3, maxlenght: 50},
    password: {type: String, required: true, minlenght: 6, maxlenght: 50},
    bday: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema);