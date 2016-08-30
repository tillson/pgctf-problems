module.exports = function(sequelize, DataTypes){
  var Message = sequelize.define('messages', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    sender: { type: String },
    reciever: { type: String },
    message: { type: String },
    date: { type: Date }
  }, {
    freezeTableName: true
  });
  Message.sync();
  return Message;
};
