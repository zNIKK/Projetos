const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {type: Number, required: true},
    nome: { type: String, required: true },
    descricao: String
});

const Model = mongoose.model('Model', Schema);

module.exports = Model;

