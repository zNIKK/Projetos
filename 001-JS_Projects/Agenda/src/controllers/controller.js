const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    console.log(contatos);
    res.render('index', { contatos });
}
