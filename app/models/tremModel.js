const mongoose = require('mongoose');

let tremSchema = mongoose.Schema({
   
    numeroVagoes: {
        type: Number
    },

    disponibilidadeVagao: {
        type: Number
    },

    tempoViagem: {
        type: String
    },

    horarioPrevistoChegada: {
        type: String
    },

    informacoesLinha: {
        type: String
    }
}); 

module.exports = mongoose.model('trem', tremSchema);

