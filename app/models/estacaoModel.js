const mongoose = require('mongoose');

let estacaoSchema = mongoose.Schema({
    
    nome: {
        type: String
    },

    horarioFuncionamento: {
        type: String
    }
    
    
    /*
    cartao: {
        type: String
    }
    */
}); 

module.exports = mongoose.model('estacao', estacaoSchema);

