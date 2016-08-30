module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('users', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    username: { type: String },
    password: { type: String }
  }, {
    freezeTableName: true
  });
  User.sync();
  return User;
};
