const Proficionais = (sequelize, DataTypes) => {
    const proficionais = sequelize.define(
      'Proficionais',
      {
        nome: DataTypes.STRING,
        CRM: { 
          type: DataTypes.STRING,
          defaultValue: "a",
        },
        telefoneFixo:{ 
          type: DataTypes.BIGINT,
          defaultValue: 0,
        },
        telefoneCelular: { 
          type: DataTypes.BIGINT,
          defaultValue: 0,
        },
        CEP: DataTypes.STRING,
        especialidade: DataTypes.ARRAY(DataTypes.STRING),
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        timestamps: true,
        paranoid: true,
      },
    );
  
    return proficionais;
  };
  
  module.exports = Proficionais;
  