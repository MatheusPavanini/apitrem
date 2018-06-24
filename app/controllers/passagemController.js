const mongoose = require('mongoose');
const  passagemM = require('../models/passagemModel');
const passagemModel = mongoose.model('passagem');




module.exports.buscarPassagem = (req, res) => {
  passagemM.find((err,trens)=>{
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

module.exports.salvarPassagem = (req, res) => {
  let passagem = new passagemM(req.body);
  passagem.save((err,cliente)=>{
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(cliente);
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
