const proficionaisController = require('./ProficionaisController');
const buscaController = require('./BuscaController');

module.exports = {
  cadastro: proficionaisController,
  busca: buscaController,
};