module.exports = (application, req, res) => {
    
    //lista estacao
    application.get('/api/v1/trem', (req, res) => {
      application.app.controllers.tremController.buscarTrem(req, res);
    });
    
    //retorna trem especifico
    application.get('/api/v1/trem/:id', (req, res) => {
      application.app.controllers.tremController.buscarTremPorId(req, res, parametro);
    });
  
    //insere trem
    application.post('/api/v1/trem', (req, res) => {
      application.app.controllers.tremController.cadastraTrem(req, res);
    });
  

  
 
  }
  