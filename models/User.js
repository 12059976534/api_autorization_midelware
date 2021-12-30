'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    rooluserid: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
  };

  User.associate = function(models) {
    User.belongsTo(models.Rooluser, {foreignKey: 'rooluserid', as: 'rollusers'})
  };

  return User;
};