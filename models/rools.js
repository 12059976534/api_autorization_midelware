'use strict';
module.exports = (sequelize, DataTypes) => {
  const rolls = sequelize.define('rolls', {
    roolname: DataTypes.STRING,
    roolusersid: DataTypes.STRING,
  }, {});
  rolls.associate = function(models) {
    rolls.belongsTo(models.Rooluser, {foreignKey: 'roolusersid', as: 'roolusers'})
  };
  return rolls;
};