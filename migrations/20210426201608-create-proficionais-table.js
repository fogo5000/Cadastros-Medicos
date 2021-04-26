'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Proficionais', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
    },
    CRM: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    telefoneFixo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    telefoneCelular: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    CEP: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    especialidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Proficionais'),
};
