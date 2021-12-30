'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rooluser = sequelize.define('Rooluser', {
    userpermisionid: DataTypes.INTEGER,
  }, {});
  Rooluser.associate = function(models) {
    Rooluser.hasOne(models.User, { as: 'user'})
  };
  Rooluser.associate = function(models) {
    Rooluser.hasOne(models.rools, {as: 'rools'})
  };
  Rooluser.associate = function(models) {
    Rooluser.belongsTo(models.Userpermision, {foreignKey: 'userpermisionid', as: 'userpermision'})
  };
  return Rooluser;
};