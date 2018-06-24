module.exports = (application, req, res) => {
    //lista estacao
    application.get('/api/v1/estacao', (req, res) => {
      application.app.controllers.estacaoController.buscarEstacao(req, res);
    });
    
    //retorna estacao especifico
    application.get('/api/v1/estacao/:id', (req, res) => {
      application.app.controllers.estacaoController.buscarEstacaoPorId(req, res);
    });
  
    //insere estacao
    application.post('/api/v1/estacao', (req, res) => {
      application.app.controllers.estacaoController.salvarEstacao(req, res);
    });
  

  }
  