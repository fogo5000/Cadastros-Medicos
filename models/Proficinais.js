const Proficionais = (sequelize, DataTypes) => {
    const proficionais = sequelize.define(
      'Proficionais',
      {
        nome: DataTypes.STRING,
        CRM: DataTypes.STRING,
        telefoneFixo: DataTypes.INTEGER,
        telefoneCelular: DataTypes.INTEGER,
        CEP: DataTypes.STRING,
        especialidade: DataTypes.STRING,
        updated: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        timestamps: false,
      },
    );
  
    return proficionais;
  };
  
  module.exports = Proficionais;
  