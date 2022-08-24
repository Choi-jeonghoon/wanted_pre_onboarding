const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'post',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'company',
          key: 'id',
        },
      },
      employ_position: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      recruitment_compensation: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contents: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      technology_stack: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'post',
      timestamps: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'company_id',
          using: 'BTREE',
          fields: [{ name: 'company_id' }],
        },
      ],
    },
  );
};
