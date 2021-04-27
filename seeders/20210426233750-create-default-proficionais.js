module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Proficionais',
      [
        {
          nome: 'Luiz Flavio Martins',
          CRM: '11.222.33',
          telefoneFixo: 1112123434,
          telefoneCelular: 11912123434,
          CEP: '12345-666',
          especialidade: 'BUCO MAXILO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Fernanda Reis Peixoto',
          CRM: '55.666.77',
          telefoneFixo: 4256567878,
          telefoneCelular: 42956567878,
          CEP: '98765-44',
          especialidade: 'CIRURIA DE CABEÇA E PESCOÇO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { timestamps: true, paranoid: true },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Proficionais', null, {});
  },
};
