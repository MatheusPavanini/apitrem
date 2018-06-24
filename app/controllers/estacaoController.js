const mongoose = require('mongoose');
const estacaoM = require('../models/estacaoModel');
const estacaoModel = mongoose.model('estacao');




module.exports.buscarEstacao = (req, res) => {
  estacaoM.find((err,trens)=>{
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(trens);
    }
  })
 
}

module.exports.buscarClientePeloId = (req, res) => {
  let id = { _id: req.params.id };
  
}

module.exports.salvarEstacao = (req, res) => {
  let estacao = new estacaoM(req.body);
  
  estacao.save((err,estacao)=>{
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(estacao);
    } 
   
  });

}

module.exports.alterarCliente = (req, res) => {
    let clienteAtualizados = req.body;
    let id = { _id: req.params.id };
 
}

module.exports.removerCliente = (req, res) => {
  let id = { _id: req.params.id };

}
