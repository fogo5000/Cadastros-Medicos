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
    },
    CRM: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    telefoneFixo: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
    },
    telefoneCelular: {
      type: Sequelize.BIGINT,
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
      get() {
        return this.getDataValue('especialidade').split(';')
      },
      set(espec) {
        this.setDataValue('especialidade', espec.join(';'));
      }
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deletedAt:{
      type: Sequelize.DATE,
      allowNull: true,
    }
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Proficionais'),
};
