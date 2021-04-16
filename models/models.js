const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

class Tweet extends Model {}

Tweet.init(
  {
    content: {
      type: DataTypes.STRING,
    },
    authorName: {
      type: DataTypes.STRING,
    },
    timeCreated: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
  },
  {
    sequelize,
    modelName: "tweet",
  }
);

User.hasMany(Tweet);
Tweet.belongsTo(User);

(async () => {
  await sequelize.sync();
  console.info("\ndatabase connected...\n");
})();

console.log("\noutside sync...\n");

module.exports = User;
