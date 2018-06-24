const mongoose = require('mongoose');

let passagemSchema = mongoose.Schema({
    
    valor: {
        type: Number
    },

    nome: {
        type: String
    },

    descricao: {
        type: String
    }


    
}); 

module.exports = mongoose.model('passagem', passagemSchema);

