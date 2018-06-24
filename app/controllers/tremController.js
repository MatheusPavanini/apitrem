const mongoose = require('mongoose');
const tremM = require('../models/tremModel');
const tremModel = mongoose.model('trem');

module.exports.buscarTrem = (req, res) => {
  tremM.find((err,trens)=>{
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(trens);
    }
  })
 
}

module.exports.buscarTremPeloId = (req, res) => {
  let id = { _id: req.params.id };
  
}

module.exports.cadastraTrem = (req, res) => {
  let trem = new tremM(req.body);
  
  trem.save((err,cliente)=>{
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(cliente);
    } 
   
  });

}

module.exports.alterarTrem = (req, res) => {
    let tremAtualizados = req.body;
    let id = { _id: req.params.id };
 
}

module.exports.removerTrem = (req, res) => {
  let id = { _id: req.params.id };

}
