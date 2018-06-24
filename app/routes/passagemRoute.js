module.exports = (application, req, res) => {
    //lista estacao
    application.get('/api/v1/passagem', (req, res) => {
      application.app.controllers.passagemController.buscarPassagem(req, res);
    });
    
    //retorna passagem especifico
    application.get('/api/v1/passagem/:id', (req, res) => {

      application.app.controllers.passagemController.buscarPassagemPorId(req, res);
    });
  
    //insere passagem
    application.post('/api/v1/passagem', (req, res) => {
      application.app.controllers.passagemController.salvarPassagem(req, res);
    });
  
    //atualiza passagem
    application.put('/api/v1/passagem/:id', (req, res) => {
    
      application.app.controllers.passagemController.alteraPassagem(req, res);
    });
  
    //remove passagem
    application.delete('/api/v1/passagem/:id', (req, res) => {
     
      application.app.controllers.passagemController.removerPassagem(req, res);
    });
  }
  