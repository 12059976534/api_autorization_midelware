'use strict';
module.exports = (sequelize, DataTypes) => {
  const Userpermision = sequelize.define('Userpermision', {
    permisionName: DataTypes.INTEGER,
  }, {});
 
  Userpermision.associate = function(models) {
    Userpermision.hasMany(models.Rooluser, {as: 'roolusers'})
  };
  return Userpermision;
};